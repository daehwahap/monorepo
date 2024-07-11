/*
  Warnings:

  - A unique constraint covering the columns `[code]` on the table `InviteInfo` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `User` MODIFY `type` ENUM('USER_NOT_INVITED', 'USER', 'ADMIN') NOT NULL DEFAULT 'USER_NOT_INVITED';

-- CreateIndex
CREATE UNIQUE INDEX `InviteInfo_code_key` ON `InviteInfo`(`code`);
