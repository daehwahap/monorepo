import { z } from 'zod';
import type { Prisma } from '@prisma/client';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const TransactionIsolationLevelSchema = z.enum(['ReadUncommitted','ReadCommitted','RepeatableRead','Serializable']);

export const UserScalarFieldEnumSchema = z.enum(['name','createdAt','imageUrl','deletedAt','updatedAt','uid','type']);

export const GoogleProfileScalarFieldEnumSchema = z.enum(['uid','sub','name','given_name','family_name','picture','email','email_verified','locale']);

export const InviteTierScalarFieldEnumSchema = z.enum(['tier','availableAmount']);

export const InviteInfoScalarFieldEnumSchema = z.enum(['uid','code','tier','createdAt','updatedAt','availableInviteCount','inviteHistoryCount']);

export const InviteRecordScalarFieldEnumSchema = z.enum(['id','inviteeUid','inviterUid','createdAt']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const NullsOrderSchema = z.enum(['first','last']);

export const User_typeSchema = z.enum(['USER_NOT_INVITED','USER','ADMIN']);

export type User_typeType = `${z.infer<typeof User_typeSchema>}`

/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////

export const UserSchema = z.object({
  type: User_typeSchema,
  name: z.string(),
  createdAt: z.coerce.date(),
  imageUrl: z.string().nullable(),
  deletedAt: z.coerce.date().nullable(),
  updatedAt: z.coerce.date(),
  uid: z.string(),
})

export type User = z.infer<typeof UserSchema>

// USER RELATION SCHEMA
//------------------------------------------------------

export type UserRelations = {
  InviteInfo?: InviteInfoWithRelations | null;
};

export type UserWithRelations = z.infer<typeof UserSchema> & UserRelations

export const UserWithRelationsSchema: z.ZodType<UserWithRelations> = UserSchema.merge(z.object({
  InviteInfo: z.lazy(() => InviteInfoWithRelationsSchema).nullable(),
}))

/////////////////////////////////////////
// GOOGLE PROFILE SCHEMA
/////////////////////////////////////////

export const GoogleProfileSchema = z.object({
  uid: z.string(),
  sub: z.string(),
  name: z.string().nullable(),
  given_name: z.string().nullable(),
  family_name: z.string().nullable(),
  picture: z.string().nullable(),
  email: z.string().nullable(),
  email_verified: z.boolean().nullable(),
  locale: z.string().nullable(),
})

export type GoogleProfile = z.infer<typeof GoogleProfileSchema>

/////////////////////////////////////////
// INVITE TIER SCHEMA
/////////////////////////////////////////

export const InviteTierSchema = z.object({
  tier: z.string(),
  availableAmount: z.number().int(),
})

export type InviteTier = z.infer<typeof InviteTierSchema>

// INVITE TIER RELATION SCHEMA
//------------------------------------------------------

export type InviteTierRelations = {
  inviteInfo: InviteInfoWithRelations[];
};

export type InviteTierWithRelations = z.infer<typeof InviteTierSchema> & InviteTierRelations

export const InviteTierWithRelationsSchema: z.ZodType<InviteTierWithRelations> = InviteTierSchema.merge(z.object({
  inviteInfo: z.lazy(() => InviteInfoWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// INVITE INFO SCHEMA
/////////////////////////////////////////

export const InviteInfoSchema = z.object({
  uid: z.string(),
  code: z.string(),
  tier: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  availableInviteCount: z.number().int(),
  inviteHistoryCount: z.number().int(),
})

export type InviteInfo = z.infer<typeof InviteInfoSchema>

// INVITE INFO RELATION SCHEMA
//------------------------------------------------------

export type InviteInfoRelations = {
  user?: UserWithRelations | null;
  inviterTier?: InviteTierWithRelations | null;
};

export type InviteInfoWithRelations = z.infer<typeof InviteInfoSchema> & InviteInfoRelations

export const InviteInfoWithRelationsSchema: z.ZodType<InviteInfoWithRelations> = InviteInfoSchema.merge(z.object({
  user: z.lazy(() => UserWithRelationsSchema).nullable(),
  inviterTier: z.lazy(() => InviteTierWithRelationsSchema).nullable(),
}))

/////////////////////////////////////////
// INVITE RECORD SCHEMA
/////////////////////////////////////////

export const InviteRecordSchema = z.object({
  id: z.number().int(),
  inviteeUid: z.string(),
  inviterUid: z.string(),
  createdAt: z.coerce.date(),
})

export type InviteRecord = z.infer<typeof InviteRecordSchema>
