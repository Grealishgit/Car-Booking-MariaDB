import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.JWT_SECRET || 'your-secret-key';

// Generate JWT token for user
export const generateToken = (user) => {
    const payload = {
        id: user.id,
        userName: user.userName,
        email: user.email,
        phoneNumber: user.phoneNumber
    };

    return jwt.sign(payload, SECRET_KEY, { expiresIn: '24h' });
};

// Middleware to verify JWT token
export const verifyToken = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(403).json({ message: 'Invalid or expired token' });
    }
};

// Middleware function for generating token (for use in routes)
export const generateTokenMiddleware = (req, res, next) => {
    const user = req.user;
    if (!user) {
        return res.status(401).json({ message: 'User not authenticated' });
    }

    const token = generateToken(user);
    req.token = token;
    next();
};