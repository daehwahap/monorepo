-- DropIndex
DROP INDEX `InviteTier_tier_key` ON `InviteTier`;

-- AlterTable
ALTER TABLE `InviteTier` ADD PRIMARY KEY (`tier`);

-- CreateIndex
CREATE INDEX `InviteInfo_tier_idx` ON `InviteInfo`(`tier`);

-- CreateIndex
CREATE INDEX `InviteInfo_code_idx` ON `InviteInfo`(`code`);

-- CreateIndex
CREATE INDEX `InviteInfo_uid_idx` ON `InviteInfo`(`uid`);

-- CreateIndex
CREATE INDEX `InviteTier_tier_idx` ON `InviteTier`(`tier`);
