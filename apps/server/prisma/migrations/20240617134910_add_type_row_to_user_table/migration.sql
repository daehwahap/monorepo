-- AlterTable
ALTER TABLE `User` ADD COLUMN `type` ENUM('User', 'Admin') NOT NULL DEFAULT 'User';
