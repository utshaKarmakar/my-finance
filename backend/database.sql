-- User Table
CREATE TABLE tbluser (
	id SERIAL NOT NULL PRIMARY KEY,
	email VARCHAR(120) UNIQUE NOT NULL,
	firstName VARCHAR(50) NOT NULL,
	lastName VARCHAR(50),
	contact VARCHAR(15),
	accounts TEXT[],
	password TEXT,
	provider VARCHAR(10) NULL,
	country TEXT,
	currency VARCHAR(5) NOT NULL DEFAULT 'USD',
	createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Account Table
CREATE TABLE tblaccount (
	id SERIAL NOT NULL PRIMARY KEY,
	user_id INTEGER NOT NULL REFERENCES tbluser(id),
	account_name VARCHAR(50) NOT NULL,
	account_number VARCHAR(50) NOT NULL,
	account_balance NUMERIC(10, 2) NOT NULL,
	createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Transaction Table
CREATE TABLE tbltransaction(
	id SERIAL NOT NULL PRIMARY KEY,
	user_id INTEGER NOT NULL REFERENCES tbluser(id),
	description TEXT NOT NULL,
	status VARCHAR(10) NOT NULL DEFAULT 'Pending',
	source VARCHAR(100) NOT NULL,
	amount NUMERIC(10, 2) NOT NULL,
	type VARCHAR(10) NOT NULL DEFAULT 'income',
	createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Transaction Categories Table
CREATE TABLE transaction_categories (
    id SERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(50) UNIQUE NOT NULL,
    description TEXT
);

-- User Activity Log Table
CREATE TABLE user_activity_log (
    id SERIAL NOT NULL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES tbluser(id),
    activity_type VARCHAR(100) NOT NULL,
    activity_description TEXT,
    timestamp TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Payment Methods Table
CREATE TABLE payment_methods (
    id SERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(50) UNIQUE NOT NULL,
    description TEXT
);
