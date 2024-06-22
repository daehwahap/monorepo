/*
  Warnings:

  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `User` table. All the data in the column will be lost.
  - Added the required column `uid` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `User` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD COLUMN `uid` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`uid`);

-- CreateTable
CREATE TABLE `InviteTier` (
    `tier` VARCHAR(191) NOT NULL,
    `availableAmount` INTEGER NOT NULL,

    UNIQUE INDEX `InviteTier_tier_key`(`tier`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
