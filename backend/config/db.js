// backend/db.js
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();

const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    port: process.env.DB_PORT || 3306,
    database: process.env.DB_NAME || 'users',
    connectionLimit: 10,
    acquireTimeout: 60000,
    timeout: 60000,
    reconnect: true,
    charset: 'utf8mb4'
});

// Test database connection on startup
const testConnection = async () => {
    try {
        console.log('🔍 [DB] Testing database connection...');
        const connection = await pool.getConnection();
        console.log('✅ [DB] Database connection successful!');
        console.log('📊 [DB] Connection details:', {
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            database: process.env.DB_NAME,
            user: process.env.DB_USER
        });
        await connection.release();
    } catch (error) {
        console.error('❌ [DB] Database connection failed:', {
            error: error.message,
            code: error.code,
            errno: error.errno,
            sqlState: error.sqlState,
            timestamp: new Date().toISOString()
        });
        console.error('🔧 [DB] Connection troubleshooting:');
        console.error('   1. Make sure MySQL/MariaDB is running');
        console.error('   2. Check database credentials in .env file');
        console.error('   3. Verify database exists:', process.env.DB_NAME);
        console.error('   4. Check firewall and port accessibility');
        process.exit(1);
    }
};

// Test connection when module loads
testConnection();

console.log('📦 [DB] Database connection pool created');

export default pool;
