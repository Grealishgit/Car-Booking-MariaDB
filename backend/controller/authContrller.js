import pool from '../config/db.js';
import bcrypt from 'bcrypt';
import { generateToken } from '../middleware/auth.js';

// POST /auth/signup - Secure User Registration
export const signup = async (req, res) => {
    const { userName, email, phoneNumber, password } = req.body;

    console.log('📝 [SIGNUP] New user registration attempt:', {
        userName,
        email,
        phoneNumber: phoneNumber ? phoneNumber.substring(0, 3) + '****' + phoneNumber.substring(7) : null,
        timestamp: new Date().toISOString(),
        ip: req.ip || req.connection.remoteAddress
    });

    // Basic validations
    if (!userName || !email || !phoneNumber || !password) {
        console.log('❌ [SIGNUP] Validation failed - Missing required fields:', {
            userName: !!userName,
            email: !!email,
            phoneNumber: !!phoneNumber,
            password: !!password
        });
        return res.status(400).json({ message: 'userName, email, phoneNumber, and password are required' });
    }
    if (userName.length < 3 || userName.length > 20) {
        console.log('❌ [SIGNUP] Username validation failed:', { userName, length: userName.length });
        return res.status(400).json({ message: 'userName must be between 3 and 20 characters' });
    }
    if (password.length < 6 || password.length > 20) {
        console.log('❌ [SIGNUP] Password validation failed:', { passwordLength: password.length });
        return res.status(400).json({ message: 'password must be between 6 and 20 characters' });
    }
    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
        console.log('❌ [SIGNUP] Email format validation failed:', { email });
        return res.status(400).json({ message: 'Invalid email format' });
    }
    if (!/^\d{10}$/.test(phoneNumber)) {
        console.log('❌ [SIGNUP] Phone number validation failed:', {
            phoneNumber: phoneNumber.substring(0, 3) + '****' + phoneNumber.substring(7),
            length: phoneNumber.length
        });
        return res.status(400).json({ message: 'phoneNumber must be a 10-digit number' });
    }

    try {
        console.log('🔍 [SIGNUP] Starting database operations for user:', { userName, email });

        const conn = await pool.getConnection();
        console.log('✅ [SIGNUP] Database connection established');

        // Check for existing email or phone number
        console.log('🔍 [SIGNUP] Checking for existing user data...');
        const existingEmail = await conn.query('SELECT * FROM users WHERE email = ?', [email]);
        const existingPhone = await conn.query('SELECT * FROM users WHERE phoneNumber = ?', [phoneNumber]);
        const existingUsername = await conn.query('SELECT * FROM users WHERE userName = ?', [userName]);

        if (existingEmail.length > 0) {
            console.log('❌ [SIGNUP] Email already exists:', { email });
            conn.release();
            return res.status(400).json({ message: 'Email already registered' });
        }

        if (existingPhone.length > 0) {
            console.log('❌ [SIGNUP] Phone number already exists:', {
                phoneNumber: phoneNumber.substring(0, 3) + '****' + phoneNumber.substring(7)
            });
            conn.release();
            return res.status(400).json({ message: 'Phone number already registered' });
        }
        if (existingUsername.length > 0) {
            console.log('❌ [SIGNUP] Username already exists:', { userName });
            conn.release();
            return res.status(400).json({ message: 'Username already exists' });
        }

        console.log('✅ [SIGNUP] No existing user conflicts found');
        console.log('🔐 [SIGNUP] Hashing password...');
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log('✅ [SIGNUP] Password hashed successfully');

        // Insert with timestamps explicitly (optional, since DB sets them automatically)
        console.log('💾 [SIGNUP] Inserting new user into database...');
        const result = await conn.query(
            `INSERT INTO users (id, userName, email, phoneNumber, password, createdAt, updatedAt)
       VALUES (UUID(), ?, ?, ?, ?, NOW(), NOW())`,
            [userName, email, phoneNumber, hashedPassword]
        );
        console.log('✅ [SIGNUP] User inserted successfully, affectedRows:', result.affectedRows);

        // Get the newly created user for token generation
        console.log('🔍 [SIGNUP] Retrieving newly created user data...');
        const newUser = await conn.query('SELECT id, userName, email, phoneNumber, createdAt, updatedAt FROM users WHERE email = ? AND phoneNumber = ?', [email, phoneNumber]);

        conn.release();
        console.log('✅ [SIGNUP] Database connection released');

        if (newUser.length > 0) {
            const user = newUser[0];
            console.log('✅ [SIGNUP] User data retrieved:', {
                id: user.id,
                userName: user.userName,
                email: user.email,
                createdAt: user.createdAt
            });

            console.log('🔑 [SIGNUP] Generating JWT token...');
            const token = generateToken(user);
            console.log('✅ [SIGNUP] JWT token generated successfully');

            console.log('🎉 [SIGNUP] User registration completed successfully:', {
                userId: user.id,
                userName: user.userName,
                email: user.email,
                timestamp: new Date().toISOString()
            });

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
            console.log('❌ [SIGNUP] Failed to retrieve newly created user');
            res.status(500).json({ message: 'User registration failed' });
        }
    } catch (err) {
        console.error('💥 [SIGNUP] Registration error:', {
            error: err.message,
            code: err.code,
            errno: err.errno,
            sqlState: err.sqlState,
            stack: err.stack,
            timestamp: new Date().toISOString(),
            requestData: { userName, email }
        });

        // Handle specific database errors
        if (err.code === 'ECONNREFUSED') {
            return res.status(500).json({ error: 'Database connection refused. Please check if the database server is running.' });
        } else if (err.code === 'ER_ACCESS_DENIED_ERROR') {
            return res.status(500).json({ error: 'Database access denied. Please check your credentials.' });
        } else if (err.code === 'ER_BAD_DB_ERROR') {
            return res.status(500).json({ error: 'Database does not exist. Please check your database name.' });
        }

        res.status(500).json({ error: 'Internal server error. Please try again later.' });
    }
};
// POST /auth/login - Secure Login with Bcrypt (Email or Phone)
export const login = async (req, res) => {
    const { email, password, phoneNumber } = req.body;

    console.log('🔐 [LOGIN] Login attempt:', {
        loginMethod: email ? 'email' : 'phone',
        identifier: email || (phoneNumber ? phoneNumber.substring(0, 3) + '****' + phoneNumber.substring(7) : null),
        timestamp: new Date().toISOString(),
        ip: req.ip || req.connection.remoteAddress
    });

    // Validate that either email or phoneNumber is provided
    if (!email && !phoneNumber) {
        console.log('❌ [LOGIN] Missing login identifier');
        return res.status(400).json({ message: 'Email or phone number is required' });
    }

    if (!password) {
        console.log('❌ [LOGIN] Missing password');
        return res.status(400).json({ message: 'Password is required' });
    }

    try {
        console.log('🔍 [LOGIN] Starting database lookup...');
        const conn = await pool.getConnection();
        console.log('✅ [LOGIN] Database connection established');

        let user = null;

        // Login with email
        if (email) {
            console.log('📧 [LOGIN] Attempting email login for:', email);
            const users = await conn.query('SELECT * FROM users WHERE email = ?', [email]);
            if (users.length === 0) {
                console.log('❌ [LOGIN] Email not found:', email);
                conn.release();
                return res.status(401).json({ message: 'Invalid email or password' });
            }
            user = users[0];
            console.log('✅ [LOGIN] User found by email:', {
                id: user.id,
                userName: user.userName,
                email: user.email
            });
        }
        // Login with phone number
        else if (phoneNumber) {
            console.log('📱 [LOGIN] Attempting phone login for:', phoneNumber.substring(0, 3) + '****' + phoneNumber.substring(7));
            const users = await conn.query('SELECT * FROM users WHERE phoneNumber = ?', [phoneNumber]);
            if (users.length === 0) {
                console.log('❌ [LOGIN] Phone number not found:', phoneNumber.substring(0, 3) + '****' + phoneNumber.substring(7));
                conn.release();
                return res.status(401).json({ message: 'Invalid phone number or password' });
            }
            user = users[0];
            console.log('✅ [LOGIN] User found by phone:', {
                id: user.id,
                userName: user.userName,
                phoneNumber: user.phoneNumber.substring(0, 3) + '****' + user.phoneNumber.substring(7)
            });
        }

        conn.release();
        console.log('✅ [LOGIN] Database connection released');

        // Verify password
        console.log('🔐 [LOGIN] Verifying password...');
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            console.log('❌ [LOGIN] Password verification failed for user:', {
                id: user.id,
                userName: user.userName,
                loginMethod: email ? 'email' : 'phone'
            });
            return res.status(401).json({
                message: email ? 'Invalid email or password' : 'Invalid phone number or password'
            });
        }
        console.log('✅ [LOGIN] Password verified successfully');

        // Generate JWT token
        console.log('🔑 [LOGIN] Generating JWT token...');
        const token = generateToken(user);
        console.log('✅ [LOGIN] JWT token generated successfully');

        console.log('🎉 [LOGIN] Login successful:', {
            userId: user.id,
            userName: user.userName,
            email: user.email,
            loginMethod: email ? 'email' : 'phone',
            timestamp: new Date().toISOString()
        });

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
        console.error('💥 [LOGIN] Login error:', {
            error: err.message,
            code: err.code,
            errno: err.errno,
            sqlState: err.sqlState,
            stack: err.stack,
            timestamp: new Date().toISOString(),
            loginAttempt: { email, phoneNumber: phoneNumber ? phoneNumber.substring(0, 3) + '****' + phoneNumber.substring(7) : null }
        });

        // Handle specific database errors
        if (err.code === 'ECONNREFUSED') {
            return res.status(500).json({ error: 'Database connection refused. Please check if the database server is running.' });
        } else if (err.code === 'ER_ACCESS_DENIED_ERROR') {
            return res.status(500).json({ error: 'Database access denied. Please check your credentials.' });
        } else if (err.code === 'ER_BAD_DB_ERROR') {
            return res.status(500).json({ error: 'Database does not exist. Please check your database name.' });
        }

        res.status(500).json({ error: 'Internal server error. Please try again later.' });
    }
};


//api to get user data
export const getUserData = async (req, res) => {
    const userId = req.user.id;

    console.log('👤 [GET_USER_DATA] User data request:', {
        userId,
        requestedBy: req.user.userName || 'Unknown',
        timestamp: new Date().toISOString(),
        ip: req.ip || req.connection.remoteAddress
    });

    try {
        console.log('🔍 [GET_USER_DATA] Fetching user data from database...');
        const conn = await pool.getConnection();
        console.log('✅ [GET_USER_DATA] Database connection established');

        const users = await conn.query('SELECT id, userName, email, phoneNumber, createdAt, updatedAt FROM users WHERE id = ?', [userId]);

        conn.release();
        console.log('✅ [GET_USER_DATA] Database connection released');

        if (users.length === 0) {
            console.log('❌ [GET_USER_DATA] User not found:', { userId });
            return res.status(404).json({ message: 'User not found' });
        }

        const user = users[0];
        console.log('✅ [GET_USER_DATA] User data retrieved successfully:', {
            userId: user.id,
            userName: user.userName,
            email: user.email,
            phoneNumber: user.phoneNumber.substring(0, 3) + '****' + user.phoneNumber.substring(7),
            timestamp: new Date().toISOString()
        });

        res.json({ user });
    } catch (err) {
        console.error('💥 [GET_USER_DATA] Error fetching user data:', {
            error: err.message,
            code: err.code,
            errno: err.errno,
            sqlState: err.sqlState,
            stack: err.stack,
            userId,
            timestamp: new Date().toISOString()
        });

        // Handle specific database errors
        if (err.code === 'ECONNREFUSED') {
            return res.status(500).json({ error: 'Database connection refused. Please check if the database server is running.' });
        } else if (err.code === 'ER_ACCESS_DENIED_ERROR') {
            return res.status(500).json({ error: 'Database access denied. Please check your credentials.' });
        } else if (err.code === 'ER_BAD_DB_ERROR') {
            return res.status(500).json({ error: 'Database does not exist. Please check your database name.' });
        }

        res.status(500).json({ error: 'Internal server error. Please try again later.' });
    }
}