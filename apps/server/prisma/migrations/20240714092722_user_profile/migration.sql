-- CreateTable
CREATE TABLE `UserProfile` (
    `uid` VARCHAR(191) NOT NULL,
    `nickname` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`uid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Hobby` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `hobbyName` VARCHAR(191) NOT NULL,
    `parentHobbyId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UserProfileHobby` (
    `uid` VARCHAR(191) NOT NULL,
    `hobbyId` INTEGER NOT NULL,

    INDEX `UserProfileHobby_uid_idx`(`uid`),
    INDEX `UserProfileHobby_hobbyId_idx`(`hobbyId`),
    PRIMARY KEY (`uid`, `hobbyId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ProfileImage` (
    `uid` VARCHAR(191) NOT NULL,
    `url` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,

    INDEX `ProfileImage_uid_idx`(`uid`),
    PRIMARY KEY (`uid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
