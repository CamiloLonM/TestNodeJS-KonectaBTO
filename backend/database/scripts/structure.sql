DROP DATABASE IF EXISTS database_name;
CREATE DATABASE database_name;

CREATE TABLE IF NOT EXISTS employees (
    id SERIAL PRIMARY KEY,
    admission_date DATE NOT NULL,
    salary NUMERIC NOT NULL,
    name VARCHAR(50) NOT NULL
)

CREATE TABLE IF NOT EXISTS requests (
    id SERIAL PRIMARY KEY,
    code VARCHAR(50) NOT NULL,
    description VARCHAR(50),
    summary VARCHAR(50),
    employee_id SERIAL,
    CONSTRAINT fk_requests_employee_id
        FOREIGN KEY(employee_id)
            REFERENCES employees(id)
)