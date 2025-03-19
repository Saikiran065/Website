CREATE DATABASE JobTrackerDB;
USE JobTrackerDB;
CREATE TABLE JobApplications (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    Company NVARCHAR(255) NOT NULL,
    Position NVARCHAR(255) NOT NULL,
    Status NVARCHAR(50) NOT NULL DEFAULT 'Pending',
    AppliedDate DATETIME DEFAULT GETDATE()
);
INSERT INTO JobApplications (Company, Position, Status)
VALUES 
('Wipro', 'Software Engineer', 'Applied'),
('Nomiso', 'Frontend Developer', 'Interview Scheduled'),
('Flipkart', 'Backend Developer', 'Rejected');
SELECT * FROM JobApplications;
SELECT name FROM sys.databases;
