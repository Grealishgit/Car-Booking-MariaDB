import pool from '../config/db.js';
import bcrypt from 'bcrypt';
import { generateToken } from '../middleware/auth.js';

// POST /auth/signup - Secure User Registration
export const signup = async (req, res) => {
    const { userName, email, phoneNumber, password } = req.body;

    // Basic validations
    if (!userName || !email || !phoneNumber || !password) {
        return res.status(400).json({ message: 'userName, email, phoneNumber, and password are required' });
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
    if (!/^\d{10}$/.test(phoneNumber)) {
        return res.status(400).json({ message: 'phoneNumber must be a 10-digit number' });
    }

    try {
        const conn = await pool.getConnection();

        // Check for existing email or phone number
        const existingEmail = await conn.query('SELECT * FROM users WHERE email = ?', [email]);
        const existingPhone = await conn.query('SELECT * FROM users WHERE phoneNumber = ?', [phoneNumber]);
        const existingUsername = await conn.query('SELECT * FROM users WHERE userName = ?', [userName]);

        if (existingEmail.length > 0) {
            conn.release();
            return res.status(400).json({ message: 'Email already registered' });
        }

        if (existingPhone.length > 0) {
            conn.release();
            return res.status(400).json({ message: 'Phone number already registered' });
        }
        if (existingUsername.length > 0) {
            conn.release();
            return res.status(400).json({ message: 'Username already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        // Insert with timestamps explicitly (optional, since DB sets them automatically)
        const result = await conn.query(
            `INSERT INTO users (id, userName, email, phoneNumber, password, createdAt, updatedAt)
       VALUES (UUID(), ?, ?, ?, ?, NOW(), NOW())`,
            [userName, email, phoneNumber, hashedPassword]
        );

        // Get the newly created user for token generation
        const newUser = await conn.query('SELECT id, userName, email, phoneNumber, createdAt, updatedAt FROM users WHERE email = ? AND phoneNumber = ?', [email, phoneNumber]);

        conn.release();

        if (newUser.length > 0) {
            const user = newUser[0];
            const token = generateToken(user);

            res.status(201).json({
                message: 'User registered successfully',
                user: {
                    id: user.id,
                    userName: user.userName,
                    email: user.email,
                    phoneNumber: user.phoneNumber,
                    createdAt: user.createdAt,
                    updatedAt: user.updatedAt
                },
                token,
            });
        } else {
            res.status(500).json({ message: 'User registration failed' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
// POST /auth/login - Secure Login with Bcrypt (Email or Phone)
export const login = async (req, res) => {
    const { email, password, phoneNumber } = req.body;

    // Validate that either email or phoneNumber is provided
    if (!email && !phoneNumber) {
        return res.status(400).json({ message: 'Email or phone number is required' });
    }

    if (!password) {
        return res.status(400).json({ message: 'Password is required' });
    }

    try {
        const conn = await pool.getConnection();
        let user = null;

        // Login with email
        if (email) {
            const users = await conn.query('SELECT * FROM users WHERE email = ?', [email]);
            if (users.length === 0) {
                conn.release();
                return res.status(401).json({ message: 'Invalid email or password' });
            }
            user = users[0];
        }
        // Login with phone number
        else if (phoneNumber) {
            const users = await conn.query('SELECT * FROM users WHERE phoneNumber = ?', [phoneNumber]);
            if (users.length === 0) {
                conn.release();
                return res.status(401).json({ message: 'Invalid phone number or password' });
            }
            user = users[0];
        }

        conn.release();

        // Verify password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({
                message: email ? 'Invalid email or password' : 'Invalid phone number or password'
            });
        }

        // Generate JWT token
        const token = generateToken(user);

        res.json({
            message: 'Login successful',
            user: {
                id: user.id,
                userName: user.userName,
                email: user.email,
                phoneNumber: user.phoneNumber,
                createdAt: user.createdAt,
                updatedAt: user.updatedAt,
            },
            token,
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
