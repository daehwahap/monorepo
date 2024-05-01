/*
  Warnings:

  - You are about to drop the column `email` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `User` table. All the data in the column will be lost.
  - Added the required column `image` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `User_email_key` ON `User`;

-- AlterTable
ALTER TABLE `User` DROP COLUMN `email`,
    DROP COLUMN `password`,
    ADD COLUMN `image` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `GoogleProfile` (
    `uid` VARCHAR(191) NOT NULL,
    `sub` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NULL,
    `given_name` VARCHAR(191) NULL,
    `family_name` VARCHAR(191) NULL,
    `picture` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `email_verified` BOOLEAN NULL,
    `locale` VARCHAR(191) NULL,

    UNIQUE INDEX `GoogleProfile_sub_key`(`sub`),
    PRIMARY KEY (`uid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
