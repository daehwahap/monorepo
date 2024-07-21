/*
  Warnings:

  - You are about to drop the column `parentHobbyId` on the `Hobby` table. All the data in the column will be lost.
  - The primary key for the `ProfileImage` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `uid` on the `ProfileImage` table. All the data in the column will be lost.
  - You are about to drop the column `url` on the `ProfileImage` table. All the data in the column will be lost.
  - The primary key for the `UserProfile` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `uid` on the `UserProfile` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - The primary key for the `UserProfileHobby` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `uid` on the `UserProfileHobby` table. All the data in the column will be lost.
  - Added the required column `id` to the `ProfileImage` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageUrl` to the `ProfileImage` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userProfileId` to the `ProfileImage` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userProfileId` to the `UserProfileHobby` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `ProfileImage_uid_idx` ON `ProfileImage`;

-- DropIndex
DROP INDEX `UserProfileHobby_uid_idx` ON `UserProfileHobby`;

-- AlterTable
ALTER TABLE `Hobby` DROP COLUMN `parentHobbyId`,
    ADD COLUMN `parentHobbyName` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `ProfileImage` DROP PRIMARY KEY,
    DROP COLUMN `uid`,
    DROP COLUMN `url`,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `imageUrl` VARCHAR(191) NOT NULL,
    ADD COLUMN `userProfileId` INTEGER NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `UserProfile` DROP PRIMARY KEY,
    MODIFY `uid` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`uid`);

-- AlterTable
ALTER TABLE `UserProfileHobby` DROP PRIMARY KEY,
    DROP COLUMN `uid`,
    ADD COLUMN `userProfileId` INTEGER NOT NULL,
    ADD PRIMARY KEY (`userProfileId`, `hobbyId`);

-- CreateIndex
CREATE INDEX `ProfileImage_userProfileId_idx` ON `ProfileImage`(`userProfileId`);
