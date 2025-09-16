import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();

const setupDatabase = async () => {
    console.log('🚀 [SETUP] Starting database setup...');

    // First try to connect without specifying a database
    const connectionConfig = {
        host: process.env.DB_HOST || 'localhost',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || '',
        port: process.env.DB_PORT || 3306
    };

    let connection;

    try {
        console.log('🔍 [SETUP] Testing MySQL connection...');
        connection = await mysql.createConnection(connectionConfig);
        console.log('✅ [SETUP] MySQL connection successful!');

        // Create database if it doesn't exist
        const dbName = process.env.DB_NAME || 'users';
        console.log(`📦 [SETUP] Creating database '${dbName}' if it doesn't exist...`);
        await connection.query(`CREATE DATABASE IF NOT EXISTS \`${dbName}\``);
        console.log(`✅ [SETUP] Database '${dbName}' ready!`);

        // Switch to the database
        await connection.query(`USE \`${dbName}\``);

        // Create users table if it doesn't exist
        console.log('📋 [SETUP] Creating users table if it doesn\'t exist...');
        const createTableQuery = `
            CREATE TABLE IF NOT EXISTS users (
                id VARCHAR(36) PRIMARY KEY,
                userName VARCHAR(20) NOT NULL UNIQUE,
                email VARCHAR(255) NOT NULL UNIQUE,
                phoneNumber VARCHAR(10) NOT NULL UNIQUE,
                password VARCHAR(255) NOT NULL,
                createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                INDEX idx_email (email),
                INDEX idx_phone (phoneNumber),
                INDEX idx_username (userName)
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
        `;

        await connection.query(createTableQuery);
        console.log('✅ [SETUP] Users table ready!');

        // Check if table has data
        const [rows] = await connection.query('SELECT COUNT(*) as count FROM users');
        console.log(`📊 [SETUP] Current users in database: ${rows[0].count}`);

        console.log('🎉 [SETUP] Database setup completed successfully!');
        console.log('📋 [SETUP] Database configuration:');
        console.log(`   Host: ${process.env.DB_HOST}`);
        console.log(`   Port: ${process.env.DB_PORT}`);
        console.log(`   Database: ${process.env.DB_NAME}`);
        console.log(`   User: ${process.env.DB_USER}`);

    } catch (error) {
        console.error('❌ [SETUP] Database setup failed:', {
            error: error.message,
            code: error.code,
            errno: error.errno,
            sqlState: error.sqlState
        });

        console.error('\n🔧 [SETUP] Troubleshooting steps:');
        console.error('1. Make sure MySQL/MariaDB is installed and running');
        console.error('2. Check if the service is started:');
        console.error('   - Windows: services.msc -> MySQL/MariaDB service');
        console.error('   - Or run: net start mysql');
        console.error('3. Verify your .env credentials are correct');
        console.error('4. Try connecting manually with:');
        console.error(`   mysql -h ${process.env.DB_HOST} -P ${process.env.DB_PORT} -u ${process.env.DB_USER} -p`);

        process.exit(1);
    } finally {
        if (connection) {
            await connection.end();
            console.log('🔒 [SETUP] Database connection closed');
        }
    }
};

setupDatabase();