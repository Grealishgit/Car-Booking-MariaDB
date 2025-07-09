import pool from '../config/db.js';
import bcrypt from 'bcrypt';

// POST /auth/signup - Secure User Registration
export const signup = async (req, res) => {
    const { userName, email, password } = req.body;

    // Basic validations
    if (!userName || !email || !password) {
        return res.status(400).json({ message: 'userName, email, and password are required' });
    }
    if (userName.length < 3 || userName.length > 20) {
        return res.status(400).json({ message: 'userName must be between 3 and 20 characters' });
    }
    if (password.length < 6 || password.length > 20) {
        return res.status(400).json({ message: 'password must be between 6 and 20 characters' });
    }
    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
        return res.status(400).json({ message: 'Invalid email format' });
    }

    try {
        const conn = await pool.getConnection();

        // Check for existing email
        const existing = await conn.query('SELECT * FROM users WHERE email = ?', [email]);
        if (existing.length > 0) {
            conn.release();
            return res.status(400).json({ message: 'User already registered' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        // Insert with timestamps explicitly (optional, since DB sets them automatically)
        const result = await conn.query(
            `INSERT INTO users (id, userName, email, password, createdAt, updatedAt) 
       VALUES (UUID(), ?, ?, ?, NOW(), NOW())`,
            [userName, email, hashedPassword]
        );

        conn.release();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
// POST /auth/login - Secure Login with Bcrypt
export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const conn = await pool.getConnection();
        const users = await conn.query('SELECT * FROM users WHERE email = ?', [email]);
        conn.release();

        if (users.length === 0) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const user = users[0];

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        res.json({
            message: 'Login successful',
            user: {
                id: user.id,
                userName: user.userName,
                email: user.email,
                createdAt: user.createdAt,
                updatedAt: user.updatedAt,
            }
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
