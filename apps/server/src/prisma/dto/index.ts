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

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// USER
//------------------------------------------------------

export const UserIncludeSchema: z.ZodType<Prisma.UserInclude> = z.object({
  InviteInfo: z.union([z.boolean(),z.lazy(() => InviteInfoArgsSchema)]).optional(),
}).strict()

export const UserArgsSchema: z.ZodType<Prisma.UserDefaultArgs> = z.object({
  select: z.lazy(() => UserSelectSchema).optional(),
  include: z.lazy(() => UserIncludeSchema).optional(),
}).strict();

export const UserSelectSchema: z.ZodType<Prisma.UserSelect> = z.object({
  name: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  imageUrl: z.boolean().optional(),
  deletedAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  uid: z.boolean().optional(),
  type: z.boolean().optional(),
  InviteInfo: z.union([z.boolean(),z.lazy(() => InviteInfoArgsSchema)]).optional(),
}).strict()

// GOOGLE PROFILE
//------------------------------------------------------

export const GoogleProfileSelectSchema: z.ZodType<Prisma.GoogleProfileSelect> = z.object({
  uid: z.boolean().optional(),
  sub: z.boolean().optional(),
  name: z.boolean().optional(),
  given_name: z.boolean().optional(),
  family_name: z.boolean().optional(),
  picture: z.boolean().optional(),
  email: z.boolean().optional(),
  email_verified: z.boolean().optional(),
  locale: z.boolean().optional(),
}).strict()

// INVITE TIER
//------------------------------------------------------

export const InviteTierIncludeSchema: z.ZodType<Prisma.InviteTierInclude> = z.object({
  inviteInfo: z.union([z.boolean(),z.lazy(() => InviteInfoFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => InviteTierCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const InviteTierArgsSchema: z.ZodType<Prisma.InviteTierDefaultArgs> = z.object({
  select: z.lazy(() => InviteTierSelectSchema).optional(),
  include: z.lazy(() => InviteTierIncludeSchema).optional(),
}).strict();

export const InviteTierCountOutputTypeArgsSchema: z.ZodType<Prisma.InviteTierCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => InviteTierCountOutputTypeSelectSchema).nullish(),
}).strict();

export const InviteTierCountOutputTypeSelectSchema: z.ZodType<Prisma.InviteTierCountOutputTypeSelect> = z.object({
  inviteInfo: z.boolean().optional(),
}).strict();

export const InviteTierSelectSchema: z.ZodType<Prisma.InviteTierSelect> = z.object({
  tier: z.boolean().optional(),
  availableAmount: z.boolean().optional(),
  inviteInfo: z.union([z.boolean(),z.lazy(() => InviteInfoFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => InviteTierCountOutputTypeArgsSchema)]).optional(),
}).strict()

// INVITE INFO
//------------------------------------------------------

export const InviteInfoIncludeSchema: z.ZodType<Prisma.InviteInfoInclude> = z.object({
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  inviterTier: z.union([z.boolean(),z.lazy(() => InviteTierArgsSchema)]).optional(),
}).strict()

export const InviteInfoArgsSchema: z.ZodType<Prisma.InviteInfoDefaultArgs> = z.object({
  select: z.lazy(() => InviteInfoSelectSchema).optional(),
  include: z.lazy(() => InviteInfoIncludeSchema).optional(),
}).strict();

export const InviteInfoSelectSchema: z.ZodType<Prisma.InviteInfoSelect> = z.object({
  uid: z.boolean().optional(),
  code: z.boolean().optional(),
  tier: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  availableInviteCount: z.boolean().optional(),
  inviteHistoryCount: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  inviterTier: z.union([z.boolean(),z.lazy(() => InviteTierArgsSchema)]).optional(),
}).strict()

// INVITE RECORD
//------------------------------------------------------

export const InviteRecordSelectSchema: z.ZodType<Prisma.InviteRecordSelect> = z.object({
  id: z.boolean().optional(),
  inviteeUid: z.boolean().optional(),
  inviterUid: z.boolean().optional(),
  createdAt: z.boolean().optional(),
}).strict()


/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const UserWhereInputSchema: z.ZodType<Prisma.UserWhereInput> = z.object({
  AND: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  imageUrl: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  deletedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  uid: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  type: z.union([ z.lazy(() => EnumUser_typeFilterSchema),z.lazy(() => User_typeSchema) ]).optional(),
  InviteInfo: z.union([ z.lazy(() => InviteInfoNullableRelationFilterSchema),z.lazy(() => InviteInfoWhereInputSchema) ]).optional().nullable(),
}).strict();

export const UserOrderByWithRelationInputSchema: z.ZodType<Prisma.UserOrderByWithRelationInput> = z.object({
  name: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  imageUrl: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  deletedAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  uid: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  InviteInfo: z.lazy(() => InviteInfoOrderByWithRelationInputSchema).optional()
}).strict();

export const UserWhereUniqueInputSchema: z.ZodType<Prisma.UserWhereUniqueInput> = z.object({
  uid: z.string()
})
.and(z.object({
  uid: z.string().optional(),
  AND: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  imageUrl: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  deletedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  type: z.union([ z.lazy(() => EnumUser_typeFilterSchema),z.lazy(() => User_typeSchema) ]).optional(),
  InviteInfo: z.union([ z.lazy(() => InviteInfoNullableRelationFilterSchema),z.lazy(() => InviteInfoWhereInputSchema) ]).optional().nullable(),
}).strict());

export const UserOrderByWithAggregationInputSchema: z.ZodType<Prisma.UserOrderByWithAggregationInput> = z.object({
  name: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  imageUrl: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  deletedAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  uid: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => UserCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => UserMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => UserMinOrderByAggregateInputSchema).optional()
}).strict();

export const UserScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.UserScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => UserScalarWhereWithAggregatesInputSchema),z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserScalarWhereWithAggregatesInputSchema),z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  imageUrl: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  deletedAt: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  uid: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  type: z.union([ z.lazy(() => EnumUser_typeWithAggregatesFilterSchema),z.lazy(() => User_typeSchema) ]).optional(),
}).strict();

export const GoogleProfileWhereInputSchema: z.ZodType<Prisma.GoogleProfileWhereInput> = z.object({
  AND: z.union([ z.lazy(() => GoogleProfileWhereInputSchema),z.lazy(() => GoogleProfileWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => GoogleProfileWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => GoogleProfileWhereInputSchema),z.lazy(() => GoogleProfileWhereInputSchema).array() ]).optional(),
  uid: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  sub: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  given_name: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  family_name: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  picture: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  email: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  email_verified: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  locale: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const GoogleProfileOrderByWithRelationInputSchema: z.ZodType<Prisma.GoogleProfileOrderByWithRelationInput> = z.object({
  uid: z.lazy(() => SortOrderSchema).optional(),
  sub: z.lazy(() => SortOrderSchema).optional(),
  name: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  given_name: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  family_name: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  picture: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  email: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  email_verified: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  locale: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
}).strict();

export const GoogleProfileWhereUniqueInputSchema: z.ZodType<Prisma.GoogleProfileWhereUniqueInput> = z.union([
  z.object({
    uid: z.string(),
    sub: z.string()
  }),
  z.object({
    uid: z.string(),
  }),
  z.object({
    sub: z.string(),
  }),
])
.and(z.object({
  uid: z.string().optional(),
  sub: z.string().optional(),
  AND: z.union([ z.lazy(() => GoogleProfileWhereInputSchema),z.lazy(() => GoogleProfileWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => GoogleProfileWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => GoogleProfileWhereInputSchema),z.lazy(() => GoogleProfileWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  given_name: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  family_name: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  picture: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  email: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  email_verified: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  locale: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict());

export const GoogleProfileOrderByWithAggregationInputSchema: z.ZodType<Prisma.GoogleProfileOrderByWithAggregationInput> = z.object({
  uid: z.lazy(() => SortOrderSchema).optional(),
  sub: z.lazy(() => SortOrderSchema).optional(),
  name: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  given_name: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  family_name: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  picture: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  email: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  email_verified: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  locale: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => GoogleProfileCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => GoogleProfileMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => GoogleProfileMinOrderByAggregateInputSchema).optional()
}).strict();

export const GoogleProfileScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.GoogleProfileScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => GoogleProfileScalarWhereWithAggregatesInputSchema),z.lazy(() => GoogleProfileScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => GoogleProfileScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => GoogleProfileScalarWhereWithAggregatesInputSchema),z.lazy(() => GoogleProfileScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  uid: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  sub: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  given_name: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  family_name: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  picture: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  email: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  email_verified: z.union([ z.lazy(() => BoolNullableWithAggregatesFilterSchema),z.boolean() ]).optional().nullable(),
  locale: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const InviteTierWhereInputSchema: z.ZodType<Prisma.InviteTierWhereInput> = z.object({
  AND: z.union([ z.lazy(() => InviteTierWhereInputSchema),z.lazy(() => InviteTierWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => InviteTierWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => InviteTierWhereInputSchema),z.lazy(() => InviteTierWhereInputSchema).array() ]).optional(),
  tier: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  availableAmount: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  inviteInfo: z.lazy(() => InviteInfoListRelationFilterSchema).optional()
}).strict();

export const InviteTierOrderByWithRelationInputSchema: z.ZodType<Prisma.InviteTierOrderByWithRelationInput> = z.object({
  tier: z.lazy(() => SortOrderSchema).optional(),
  availableAmount: z.lazy(() => SortOrderSchema).optional(),
  inviteInfo: z.lazy(() => InviteInfoOrderByRelationAggregateInputSchema).optional()
}).strict();

export const InviteTierWhereUniqueInputSchema: z.ZodType<Prisma.InviteTierWhereUniqueInput> = z.object({
  tier: z.string()
})
.and(z.object({
  tier: z.string().optional(),
  AND: z.union([ z.lazy(() => InviteTierWhereInputSchema),z.lazy(() => InviteTierWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => InviteTierWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => InviteTierWhereInputSchema),z.lazy(() => InviteTierWhereInputSchema).array() ]).optional(),
  availableAmount: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  inviteInfo: z.lazy(() => InviteInfoListRelationFilterSchema).optional()
}).strict());

export const InviteTierOrderByWithAggregationInputSchema: z.ZodType<Prisma.InviteTierOrderByWithAggregationInput> = z.object({
  tier: z.lazy(() => SortOrderSchema).optional(),
  availableAmount: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => InviteTierCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => InviteTierAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => InviteTierMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => InviteTierMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => InviteTierSumOrderByAggregateInputSchema).optional()
}).strict();

export const InviteTierScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.InviteTierScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => InviteTierScalarWhereWithAggregatesInputSchema),z.lazy(() => InviteTierScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => InviteTierScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => InviteTierScalarWhereWithAggregatesInputSchema),z.lazy(() => InviteTierScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  tier: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  availableAmount: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export const InviteInfoWhereInputSchema: z.ZodType<Prisma.InviteInfoWhereInput> = z.object({
  AND: z.union([ z.lazy(() => InviteInfoWhereInputSchema),z.lazy(() => InviteInfoWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => InviteInfoWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => InviteInfoWhereInputSchema),z.lazy(() => InviteInfoWhereInputSchema).array() ]).optional(),
  uid: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  code: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  tier: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  availableInviteCount: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  inviteHistoryCount: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  user: z.union([ z.lazy(() => UserNullableRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional().nullable(),
  inviterTier: z.union([ z.lazy(() => InviteTierNullableRelationFilterSchema),z.lazy(() => InviteTierWhereInputSchema) ]).optional().nullable(),
}).strict();

export const InviteInfoOrderByWithRelationInputSchema: z.ZodType<Prisma.InviteInfoOrderByWithRelationInput> = z.object({
  uid: z.lazy(() => SortOrderSchema).optional(),
  code: z.lazy(() => SortOrderSchema).optional(),
  tier: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  availableInviteCount: z.lazy(() => SortOrderSchema).optional(),
  inviteHistoryCount: z.lazy(() => SortOrderSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
  inviterTier: z.lazy(() => InviteTierOrderByWithRelationInputSchema).optional()
}).strict();

export const InviteInfoWhereUniqueInputSchema: z.ZodType<Prisma.InviteInfoWhereUniqueInput> = z.union([
  z.object({
    uid: z.string(),
    code: z.string()
  }),
  z.object({
    uid: z.string(),
  }),
  z.object({
    code: z.string(),
  }),
])
.and(z.object({
  uid: z.string().optional(),
  code: z.string().optional(),
  AND: z.union([ z.lazy(() => InviteInfoWhereInputSchema),z.lazy(() => InviteInfoWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => InviteInfoWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => InviteInfoWhereInputSchema),z.lazy(() => InviteInfoWhereInputSchema).array() ]).optional(),
  tier: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  availableInviteCount: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  inviteHistoryCount: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  user: z.union([ z.lazy(() => UserNullableRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional().nullable(),
  inviterTier: z.union([ z.lazy(() => InviteTierNullableRelationFilterSchema),z.lazy(() => InviteTierWhereInputSchema) ]).optional().nullable(),
}).strict());

export const InviteInfoOrderByWithAggregationInputSchema: z.ZodType<Prisma.InviteInfoOrderByWithAggregationInput> = z.object({
  uid: z.lazy(() => SortOrderSchema).optional(),
  code: z.lazy(() => SortOrderSchema).optional(),
  tier: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  availableInviteCount: z.lazy(() => SortOrderSchema).optional(),
  inviteHistoryCount: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => InviteInfoCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => InviteInfoAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => InviteInfoMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => InviteInfoMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => InviteInfoSumOrderByAggregateInputSchema).optional()
}).strict();

export const InviteInfoScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.InviteInfoScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => InviteInfoScalarWhereWithAggregatesInputSchema),z.lazy(() => InviteInfoScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => InviteInfoScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => InviteInfoScalarWhereWithAggregatesInputSchema),z.lazy(() => InviteInfoScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  uid: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  code: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  tier: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  availableInviteCount: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  inviteHistoryCount: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export const InviteRecordWhereInputSchema: z.ZodType<Prisma.InviteRecordWhereInput> = z.object({
  AND: z.union([ z.lazy(() => InviteRecordWhereInputSchema),z.lazy(() => InviteRecordWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => InviteRecordWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => InviteRecordWhereInputSchema),z.lazy(() => InviteRecordWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  inviteeUid: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  inviterUid: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const InviteRecordOrderByWithRelationInputSchema: z.ZodType<Prisma.InviteRecordOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  inviteeUid: z.lazy(() => SortOrderSchema).optional(),
  inviterUid: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const InviteRecordWhereUniqueInputSchema: z.ZodType<Prisma.InviteRecordWhereUniqueInput> = z.object({
  id: z.number().int()
})
.and(z.object({
  id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => InviteRecordWhereInputSchema),z.lazy(() => InviteRecordWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => InviteRecordWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => InviteRecordWhereInputSchema),z.lazy(() => InviteRecordWhereInputSchema).array() ]).optional(),
  inviteeUid: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  inviterUid: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict());

export const InviteRecordOrderByWithAggregationInputSchema: z.ZodType<Prisma.InviteRecordOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  inviteeUid: z.lazy(() => SortOrderSchema).optional(),
  inviterUid: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => InviteRecordCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => InviteRecordAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => InviteRecordMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => InviteRecordMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => InviteRecordSumOrderByAggregateInputSchema).optional()
}).strict();

export const InviteRecordScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.InviteRecordScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => InviteRecordScalarWhereWithAggregatesInputSchema),z.lazy(() => InviteRecordScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => InviteRecordScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => InviteRecordScalarWhereWithAggregatesInputSchema),z.lazy(() => InviteRecordScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  inviteeUid: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  inviterUid: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const UserCreateInputSchema: z.ZodType<Prisma.UserCreateInput> = z.object({
  name: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  imageUrl: z.string().optional().nullable(),
  deletedAt: z.coerce.date().optional().nullable(),
  updatedAt: z.coerce.date().optional(),
  uid: z.string(),
  type: z.lazy(() => User_typeSchema).optional(),
  InviteInfo: z.lazy(() => InviteInfoCreateNestedOneWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateInputSchema: z.ZodType<Prisma.UserUncheckedCreateInput> = z.object({
  name: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  imageUrl: z.string().optional().nullable(),
  deletedAt: z.coerce.date().optional().nullable(),
  updatedAt: z.coerce.date().optional(),
  uid: z.string(),
  type: z.lazy(() => User_typeSchema).optional(),
  InviteInfo: z.lazy(() => InviteInfoUncheckedCreateNestedOneWithoutUserInputSchema).optional()
}).strict();

export const UserUpdateInputSchema: z.ZodType<Prisma.UserUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  imageUrl: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  uid: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => User_typeSchema),z.lazy(() => EnumUser_typeFieldUpdateOperationsInputSchema) ]).optional(),
  InviteInfo: z.lazy(() => InviteInfoUpdateOneWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateInputSchema: z.ZodType<Prisma.UserUncheckedUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  imageUrl: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  uid: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => User_typeSchema),z.lazy(() => EnumUser_typeFieldUpdateOperationsInputSchema) ]).optional(),
  InviteInfo: z.lazy(() => InviteInfoUncheckedUpdateOneWithoutUserNestedInputSchema).optional()
}).strict();

export const UserCreateManyInputSchema: z.ZodType<Prisma.UserCreateManyInput> = z.object({
  name: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  imageUrl: z.string().optional().nullable(),
  deletedAt: z.coerce.date().optional().nullable(),
  updatedAt: z.coerce.date().optional(),
  uid: z.string(),
  type: z.lazy(() => User_typeSchema).optional()
}).strict();

export const UserUpdateManyMutationInputSchema: z.ZodType<Prisma.UserUpdateManyMutationInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  imageUrl: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  uid: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => User_typeSchema),z.lazy(() => EnumUser_typeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserUncheckedUpdateManyInputSchema: z.ZodType<Prisma.UserUncheckedUpdateManyInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  imageUrl: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  uid: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => User_typeSchema),z.lazy(() => EnumUser_typeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const GoogleProfileCreateInputSchema: z.ZodType<Prisma.GoogleProfileCreateInput> = z.object({
  uid: z.string(),
  sub: z.string(),
  name: z.string().optional().nullable(),
  given_name: z.string().optional().nullable(),
  family_name: z.string().optional().nullable(),
  picture: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  email_verified: z.boolean().optional().nullable(),
  locale: z.string().optional().nullable()
}).strict();

export const GoogleProfileUncheckedCreateInputSchema: z.ZodType<Prisma.GoogleProfileUncheckedCreateInput> = z.object({
  uid: z.string(),
  sub: z.string(),
  name: z.string().optional().nullable(),
  given_name: z.string().optional().nullable(),
  family_name: z.string().optional().nullable(),
  picture: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  email_verified: z.boolean().optional().nullable(),
  locale: z.string().optional().nullable()
}).strict();

export const GoogleProfileUpdateInputSchema: z.ZodType<Prisma.GoogleProfileUpdateInput> = z.object({
  uid: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sub: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  given_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  family_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  picture: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email_verified: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  locale: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const GoogleProfileUncheckedUpdateInputSchema: z.ZodType<Prisma.GoogleProfileUncheckedUpdateInput> = z.object({
  uid: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sub: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  given_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  family_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  picture: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email_verified: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  locale: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const GoogleProfileCreateManyInputSchema: z.ZodType<Prisma.GoogleProfileCreateManyInput> = z.object({
  uid: z.string(),
  sub: z.string(),
  name: z.string().optional().nullable(),
  given_name: z.string().optional().nullable(),
  family_name: z.string().optional().nullable(),
  picture: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  email_verified: z.boolean().optional().nullable(),
  locale: z.string().optional().nullable()
}).strict();

export const GoogleProfileUpdateManyMutationInputSchema: z.ZodType<Prisma.GoogleProfileUpdateManyMutationInput> = z.object({
  uid: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sub: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  given_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  family_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  picture: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email_verified: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  locale: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const GoogleProfileUncheckedUpdateManyInputSchema: z.ZodType<Prisma.GoogleProfileUncheckedUpdateManyInput> = z.object({
  uid: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sub: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  given_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  family_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  picture: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email_verified: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  locale: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const InviteTierCreateInputSchema: z.ZodType<Prisma.InviteTierCreateInput> = z.object({
  tier: z.string(),
  availableAmount: z.number().int(),
  inviteInfo: z.lazy(() => InviteInfoCreateNestedManyWithoutInviterTierInputSchema).optional()
}).strict();

export const InviteTierUncheckedCreateInputSchema: z.ZodType<Prisma.InviteTierUncheckedCreateInput> = z.object({
  tier: z.string(),
  availableAmount: z.number().int(),
  inviteInfo: z.lazy(() => InviteInfoUncheckedCreateNestedManyWithoutInviterTierInputSchema).optional()
}).strict();

export const InviteTierUpdateInputSchema: z.ZodType<Prisma.InviteTierUpdateInput> = z.object({
  tier: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  availableAmount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  inviteInfo: z.lazy(() => InviteInfoUpdateManyWithoutInviterTierNestedInputSchema).optional()
}).strict();

export const InviteTierUncheckedUpdateInputSchema: z.ZodType<Prisma.InviteTierUncheckedUpdateInput> = z.object({
  tier: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  availableAmount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  inviteInfo: z.lazy(() => InviteInfoUncheckedUpdateManyWithoutInviterTierNestedInputSchema).optional()
}).strict();

export const InviteTierCreateManyInputSchema: z.ZodType<Prisma.InviteTierCreateManyInput> = z.object({
  tier: z.string(),
  availableAmount: z.number().int()
}).strict();

export const InviteTierUpdateManyMutationInputSchema: z.ZodType<Prisma.InviteTierUpdateManyMutationInput> = z.object({
  tier: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  availableAmount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const InviteTierUncheckedUpdateManyInputSchema: z.ZodType<Prisma.InviteTierUncheckedUpdateManyInput> = z.object({
  tier: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  availableAmount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const InviteInfoCreateInputSchema: z.ZodType<Prisma.InviteInfoCreateInput> = z.object({
  code: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  availableInviteCount: z.number().int(),
  inviteHistoryCount: z.number().int().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutInviteInfoInputSchema).optional(),
  inviterTier: z.lazy(() => InviteTierCreateNestedOneWithoutInviteInfoInputSchema).optional()
}).strict();

export const InviteInfoUncheckedCreateInputSchema: z.ZodType<Prisma.InviteInfoUncheckedCreateInput> = z.object({
  uid: z.string(),
  code: z.string(),
  tier: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  availableInviteCount: z.number().int(),
  inviteHistoryCount: z.number().int().optional()
}).strict();

export const InviteInfoUpdateInputSchema: z.ZodType<Prisma.InviteInfoUpdateInput> = z.object({
  code: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  availableInviteCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  inviteHistoryCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneWithoutInviteInfoNestedInputSchema).optional(),
  inviterTier: z.lazy(() => InviteTierUpdateOneWithoutInviteInfoNestedInputSchema).optional()
}).strict();

export const InviteInfoUncheckedUpdateInputSchema: z.ZodType<Prisma.InviteInfoUncheckedUpdateInput> = z.object({
  uid: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  code: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tier: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  availableInviteCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  inviteHistoryCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const InviteInfoCreateManyInputSchema: z.ZodType<Prisma.InviteInfoCreateManyInput> = z.object({
  uid: z.string(),
  code: z.string(),
  tier: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  availableInviteCount: z.number().int(),
  inviteHistoryCount: z.number().int().optional()
}).strict();

export const InviteInfoUpdateManyMutationInputSchema: z.ZodType<Prisma.InviteInfoUpdateManyMutationInput> = z.object({
  code: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  availableInviteCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  inviteHistoryCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const InviteInfoUncheckedUpdateManyInputSchema: z.ZodType<Prisma.InviteInfoUncheckedUpdateManyInput> = z.object({
  uid: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  code: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tier: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  availableInviteCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  inviteHistoryCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const InviteRecordCreateInputSchema: z.ZodType<Prisma.InviteRecordCreateInput> = z.object({
  inviteeUid: z.string(),
  inviterUid: z.string(),
  createdAt: z.coerce.date().optional()
}).strict();

export const InviteRecordUncheckedCreateInputSchema: z.ZodType<Prisma.InviteRecordUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  inviteeUid: z.string(),
  inviterUid: z.string(),
  createdAt: z.coerce.date().optional()
}).strict();

export const InviteRecordUpdateInputSchema: z.ZodType<Prisma.InviteRecordUpdateInput> = z.object({
  inviteeUid: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  inviterUid: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const InviteRecordUncheckedUpdateInputSchema: z.ZodType<Prisma.InviteRecordUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  inviteeUid: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  inviterUid: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const InviteRecordCreateManyInputSchema: z.ZodType<Prisma.InviteRecordCreateManyInput> = z.object({
  id: z.number().int().optional(),
  inviteeUid: z.string(),
  inviterUid: z.string(),
  createdAt: z.coerce.date().optional()
}).strict();

export const InviteRecordUpdateManyMutationInputSchema: z.ZodType<Prisma.InviteRecordUpdateManyMutationInput> = z.object({
  inviteeUid: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  inviterUid: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const InviteRecordUncheckedUpdateManyInputSchema: z.ZodType<Prisma.InviteRecordUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  inviteeUid: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  inviterUid: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const DateTimeFilterSchema: z.ZodType<Prisma.DateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const StringNullableFilterSchema: z.ZodType<Prisma.StringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const DateTimeNullableFilterSchema: z.ZodType<Prisma.DateTimeNullableFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const EnumUser_typeFilterSchema: z.ZodType<Prisma.EnumUser_typeFilter> = z.object({
  equals: z.lazy(() => User_typeSchema).optional(),
  in: z.lazy(() => User_typeSchema).array().optional(),
  notIn: z.lazy(() => User_typeSchema).array().optional(),
  not: z.union([ z.lazy(() => User_typeSchema),z.lazy(() => NestedEnumUser_typeFilterSchema) ]).optional(),
}).strict();

export const InviteInfoNullableRelationFilterSchema: z.ZodType<Prisma.InviteInfoNullableRelationFilter> = z.object({
  is: z.lazy(() => InviteInfoWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => InviteInfoWhereInputSchema).optional().nullable()
}).strict();

export const SortOrderInputSchema: z.ZodType<Prisma.SortOrderInput> = z.object({
  sort: z.lazy(() => SortOrderSchema),
  nulls: z.lazy(() => NullsOrderSchema).optional()
}).strict();

export const UserCountOrderByAggregateInputSchema: z.ZodType<Prisma.UserCountOrderByAggregateInput> = z.object({
  name: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  imageUrl: z.lazy(() => SortOrderSchema).optional(),
  deletedAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  uid: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserMaxOrderByAggregateInputSchema: z.ZodType<Prisma.UserMaxOrderByAggregateInput> = z.object({
  name: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  imageUrl: z.lazy(() => SortOrderSchema).optional(),
  deletedAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  uid: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserMinOrderByAggregateInputSchema: z.ZodType<Prisma.UserMinOrderByAggregateInput> = z.object({
  name: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  imageUrl: z.lazy(() => SortOrderSchema).optional(),
  deletedAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  uid: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const DateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const StringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.StringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();

export const DateTimeNullableWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeNullableWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeNullableFilterSchema).optional()
}).strict();

export const EnumUser_typeWithAggregatesFilterSchema: z.ZodType<Prisma.EnumUser_typeWithAggregatesFilter> = z.object({
  equals: z.lazy(() => User_typeSchema).optional(),
  in: z.lazy(() => User_typeSchema).array().optional(),
  notIn: z.lazy(() => User_typeSchema).array().optional(),
  not: z.union([ z.lazy(() => User_typeSchema),z.lazy(() => NestedEnumUser_typeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumUser_typeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumUser_typeFilterSchema).optional()
}).strict();

export const BoolNullableFilterSchema: z.ZodType<Prisma.BoolNullableFilter> = z.object({
  equals: z.boolean().optional().nullable(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const GoogleProfileCountOrderByAggregateInputSchema: z.ZodType<Prisma.GoogleProfileCountOrderByAggregateInput> = z.object({
  uid: z.lazy(() => SortOrderSchema).optional(),
  sub: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  given_name: z.lazy(() => SortOrderSchema).optional(),
  family_name: z.lazy(() => SortOrderSchema).optional(),
  picture: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  email_verified: z.lazy(() => SortOrderSchema).optional(),
  locale: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const GoogleProfileMaxOrderByAggregateInputSchema: z.ZodType<Prisma.GoogleProfileMaxOrderByAggregateInput> = z.object({
  uid: z.lazy(() => SortOrderSchema).optional(),
  sub: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  given_name: z.lazy(() => SortOrderSchema).optional(),
  family_name: z.lazy(() => SortOrderSchema).optional(),
  picture: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  email_verified: z.lazy(() => SortOrderSchema).optional(),
  locale: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const GoogleProfileMinOrderByAggregateInputSchema: z.ZodType<Prisma.GoogleProfileMinOrderByAggregateInput> = z.object({
  uid: z.lazy(() => SortOrderSchema).optional(),
  sub: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  given_name: z.lazy(() => SortOrderSchema).optional(),
  family_name: z.lazy(() => SortOrderSchema).optional(),
  picture: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  email_verified: z.lazy(() => SortOrderSchema).optional(),
  locale: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BoolNullableWithAggregatesFilterSchema: z.ZodType<Prisma.BoolNullableWithAggregatesFilter> = z.object({
  equals: z.boolean().optional().nullable(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedBoolNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedBoolNullableFilterSchema).optional()
}).strict();

export const IntFilterSchema: z.ZodType<Prisma.IntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const InviteInfoListRelationFilterSchema: z.ZodType<Prisma.InviteInfoListRelationFilter> = z.object({
  every: z.lazy(() => InviteInfoWhereInputSchema).optional(),
  some: z.lazy(() => InviteInfoWhereInputSchema).optional(),
  none: z.lazy(() => InviteInfoWhereInputSchema).optional()
}).strict();

export const InviteInfoOrderByRelationAggregateInputSchema: z.ZodType<Prisma.InviteInfoOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const InviteTierCountOrderByAggregateInputSchema: z.ZodType<Prisma.InviteTierCountOrderByAggregateInput> = z.object({
  tier: z.lazy(() => SortOrderSchema).optional(),
  availableAmount: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const InviteTierAvgOrderByAggregateInputSchema: z.ZodType<Prisma.InviteTierAvgOrderByAggregateInput> = z.object({
  availableAmount: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const InviteTierMaxOrderByAggregateInputSchema: z.ZodType<Prisma.InviteTierMaxOrderByAggregateInput> = z.object({
  tier: z.lazy(() => SortOrderSchema).optional(),
  availableAmount: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const InviteTierMinOrderByAggregateInputSchema: z.ZodType<Prisma.InviteTierMinOrderByAggregateInput> = z.object({
  tier: z.lazy(() => SortOrderSchema).optional(),
  availableAmount: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const InviteTierSumOrderByAggregateInputSchema: z.ZodType<Prisma.InviteTierSumOrderByAggregateInput> = z.object({
  availableAmount: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const IntWithAggregatesFilterSchema: z.ZodType<Prisma.IntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const UserNullableRelationFilterSchema: z.ZodType<Prisma.UserNullableRelationFilter> = z.object({
  is: z.lazy(() => UserWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => UserWhereInputSchema).optional().nullable()
}).strict();

export const InviteTierNullableRelationFilterSchema: z.ZodType<Prisma.InviteTierNullableRelationFilter> = z.object({
  is: z.lazy(() => InviteTierWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => InviteTierWhereInputSchema).optional().nullable()
}).strict();

export const InviteInfoCountOrderByAggregateInputSchema: z.ZodType<Prisma.InviteInfoCountOrderByAggregateInput> = z.object({
  uid: z.lazy(() => SortOrderSchema).optional(),
  code: z.lazy(() => SortOrderSchema).optional(),
  tier: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  availableInviteCount: z.lazy(() => SortOrderSchema).optional(),
  inviteHistoryCount: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const InviteInfoAvgOrderByAggregateInputSchema: z.ZodType<Prisma.InviteInfoAvgOrderByAggregateInput> = z.object({
  availableInviteCount: z.lazy(() => SortOrderSchema).optional(),
  inviteHistoryCount: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const InviteInfoMaxOrderByAggregateInputSchema: z.ZodType<Prisma.InviteInfoMaxOrderByAggregateInput> = z.object({
  uid: z.lazy(() => SortOrderSchema).optional(),
  code: z.lazy(() => SortOrderSchema).optional(),
  tier: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  availableInviteCount: z.lazy(() => SortOrderSchema).optional(),
  inviteHistoryCount: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const InviteInfoMinOrderByAggregateInputSchema: z.ZodType<Prisma.InviteInfoMinOrderByAggregateInput> = z.object({
  uid: z.lazy(() => SortOrderSchema).optional(),
  code: z.lazy(() => SortOrderSchema).optional(),
  tier: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  availableInviteCount: z.lazy(() => SortOrderSchema).optional(),
  inviteHistoryCount: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const InviteInfoSumOrderByAggregateInputSchema: z.ZodType<Prisma.InviteInfoSumOrderByAggregateInput> = z.object({
  availableInviteCount: z.lazy(() => SortOrderSchema).optional(),
  inviteHistoryCount: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const InviteRecordCountOrderByAggregateInputSchema: z.ZodType<Prisma.InviteRecordCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  inviteeUid: z.lazy(() => SortOrderSchema).optional(),
  inviterUid: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const InviteRecordAvgOrderByAggregateInputSchema: z.ZodType<Prisma.InviteRecordAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const InviteRecordMaxOrderByAggregateInputSchema: z.ZodType<Prisma.InviteRecordMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  inviteeUid: z.lazy(() => SortOrderSchema).optional(),
  inviterUid: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const InviteRecordMinOrderByAggregateInputSchema: z.ZodType<Prisma.InviteRecordMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  inviteeUid: z.lazy(() => SortOrderSchema).optional(),
  inviterUid: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const InviteRecordSumOrderByAggregateInputSchema: z.ZodType<Prisma.InviteRecordSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const InviteInfoCreateNestedOneWithoutUserInputSchema: z.ZodType<Prisma.InviteInfoCreateNestedOneWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => InviteInfoCreateWithoutUserInputSchema),z.lazy(() => InviteInfoUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => InviteInfoCreateOrConnectWithoutUserInputSchema).optional(),
  connect: z.lazy(() => InviteInfoWhereUniqueInputSchema).optional()
}).strict();

export const InviteInfoUncheckedCreateNestedOneWithoutUserInputSchema: z.ZodType<Prisma.InviteInfoUncheckedCreateNestedOneWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => InviteInfoCreateWithoutUserInputSchema),z.lazy(() => InviteInfoUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => InviteInfoCreateOrConnectWithoutUserInputSchema).optional(),
  connect: z.lazy(() => InviteInfoWhereUniqueInputSchema).optional()
}).strict();

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional()
}).strict();

export const DateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional()
}).strict();

export const NullableStringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional().nullable()
}).strict();

export const NullableDateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableDateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional().nullable()
}).strict();

export const EnumUser_typeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumUser_typeFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => User_typeSchema).optional()
}).strict();

export const InviteInfoUpdateOneWithoutUserNestedInputSchema: z.ZodType<Prisma.InviteInfoUpdateOneWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => InviteInfoCreateWithoutUserInputSchema),z.lazy(() => InviteInfoUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => InviteInfoCreateOrConnectWithoutUserInputSchema).optional(),
  upsert: z.lazy(() => InviteInfoUpsertWithoutUserInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => InviteInfoWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => InviteInfoWhereInputSchema) ]).optional(),
  connect: z.lazy(() => InviteInfoWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => InviteInfoUpdateToOneWithWhereWithoutUserInputSchema),z.lazy(() => InviteInfoUpdateWithoutUserInputSchema),z.lazy(() => InviteInfoUncheckedUpdateWithoutUserInputSchema) ]).optional(),
}).strict();

export const InviteInfoUncheckedUpdateOneWithoutUserNestedInputSchema: z.ZodType<Prisma.InviteInfoUncheckedUpdateOneWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => InviteInfoCreateWithoutUserInputSchema),z.lazy(() => InviteInfoUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => InviteInfoCreateOrConnectWithoutUserInputSchema).optional(),
  upsert: z.lazy(() => InviteInfoUpsertWithoutUserInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => InviteInfoWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => InviteInfoWhereInputSchema) ]).optional(),
  connect: z.lazy(() => InviteInfoWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => InviteInfoUpdateToOneWithWhereWithoutUserInputSchema),z.lazy(() => InviteInfoUpdateWithoutUserInputSchema),z.lazy(() => InviteInfoUncheckedUpdateWithoutUserInputSchema) ]).optional(),
}).strict();

export const NullableBoolFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableBoolFieldUpdateOperationsInput> = z.object({
  set: z.boolean().optional().nullable()
}).strict();

export const InviteInfoCreateNestedManyWithoutInviterTierInputSchema: z.ZodType<Prisma.InviteInfoCreateNestedManyWithoutInviterTierInput> = z.object({
  create: z.union([ z.lazy(() => InviteInfoCreateWithoutInviterTierInputSchema),z.lazy(() => InviteInfoCreateWithoutInviterTierInputSchema).array(),z.lazy(() => InviteInfoUncheckedCreateWithoutInviterTierInputSchema),z.lazy(() => InviteInfoUncheckedCreateWithoutInviterTierInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => InviteInfoCreateOrConnectWithoutInviterTierInputSchema),z.lazy(() => InviteInfoCreateOrConnectWithoutInviterTierInputSchema).array() ]).optional(),
  createMany: z.lazy(() => InviteInfoCreateManyInviterTierInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => InviteInfoWhereUniqueInputSchema),z.lazy(() => InviteInfoWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const InviteInfoUncheckedCreateNestedManyWithoutInviterTierInputSchema: z.ZodType<Prisma.InviteInfoUncheckedCreateNestedManyWithoutInviterTierInput> = z.object({
  create: z.union([ z.lazy(() => InviteInfoCreateWithoutInviterTierInputSchema),z.lazy(() => InviteInfoCreateWithoutInviterTierInputSchema).array(),z.lazy(() => InviteInfoUncheckedCreateWithoutInviterTierInputSchema),z.lazy(() => InviteInfoUncheckedCreateWithoutInviterTierInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => InviteInfoCreateOrConnectWithoutInviterTierInputSchema),z.lazy(() => InviteInfoCreateOrConnectWithoutInviterTierInputSchema).array() ]).optional(),
  createMany: z.lazy(() => InviteInfoCreateManyInviterTierInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => InviteInfoWhereUniqueInputSchema),z.lazy(() => InviteInfoWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const IntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.IntFieldUpdateOperationsInput> = z.object({
  set: z.number().optional(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export const InviteInfoUpdateManyWithoutInviterTierNestedInputSchema: z.ZodType<Prisma.InviteInfoUpdateManyWithoutInviterTierNestedInput> = z.object({
  create: z.union([ z.lazy(() => InviteInfoCreateWithoutInviterTierInputSchema),z.lazy(() => InviteInfoCreateWithoutInviterTierInputSchema).array(),z.lazy(() => InviteInfoUncheckedCreateWithoutInviterTierInputSchema),z.lazy(() => InviteInfoUncheckedCreateWithoutInviterTierInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => InviteInfoCreateOrConnectWithoutInviterTierInputSchema),z.lazy(() => InviteInfoCreateOrConnectWithoutInviterTierInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => InviteInfoUpsertWithWhereUniqueWithoutInviterTierInputSchema),z.lazy(() => InviteInfoUpsertWithWhereUniqueWithoutInviterTierInputSchema).array() ]).optional(),
  createMany: z.lazy(() => InviteInfoCreateManyInviterTierInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => InviteInfoWhereUniqueInputSchema),z.lazy(() => InviteInfoWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => InviteInfoWhereUniqueInputSchema),z.lazy(() => InviteInfoWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => InviteInfoWhereUniqueInputSchema),z.lazy(() => InviteInfoWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => InviteInfoWhereUniqueInputSchema),z.lazy(() => InviteInfoWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => InviteInfoUpdateWithWhereUniqueWithoutInviterTierInputSchema),z.lazy(() => InviteInfoUpdateWithWhereUniqueWithoutInviterTierInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => InviteInfoUpdateManyWithWhereWithoutInviterTierInputSchema),z.lazy(() => InviteInfoUpdateManyWithWhereWithoutInviterTierInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => InviteInfoScalarWhereInputSchema),z.lazy(() => InviteInfoScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const InviteInfoUncheckedUpdateManyWithoutInviterTierNestedInputSchema: z.ZodType<Prisma.InviteInfoUncheckedUpdateManyWithoutInviterTierNestedInput> = z.object({
  create: z.union([ z.lazy(() => InviteInfoCreateWithoutInviterTierInputSchema),z.lazy(() => InviteInfoCreateWithoutInviterTierInputSchema).array(),z.lazy(() => InviteInfoUncheckedCreateWithoutInviterTierInputSchema),z.lazy(() => InviteInfoUncheckedCreateWithoutInviterTierInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => InviteInfoCreateOrConnectWithoutInviterTierInputSchema),z.lazy(() => InviteInfoCreateOrConnectWithoutInviterTierInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => InviteInfoUpsertWithWhereUniqueWithoutInviterTierInputSchema),z.lazy(() => InviteInfoUpsertWithWhereUniqueWithoutInviterTierInputSchema).array() ]).optional(),
  createMany: z.lazy(() => InviteInfoCreateManyInviterTierInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => InviteInfoWhereUniqueInputSchema),z.lazy(() => InviteInfoWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => InviteInfoWhereUniqueInputSchema),z.lazy(() => InviteInfoWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => InviteInfoWhereUniqueInputSchema),z.lazy(() => InviteInfoWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => InviteInfoWhereUniqueInputSchema),z.lazy(() => InviteInfoWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => InviteInfoUpdateWithWhereUniqueWithoutInviterTierInputSchema),z.lazy(() => InviteInfoUpdateWithWhereUniqueWithoutInviterTierInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => InviteInfoUpdateManyWithWhereWithoutInviterTierInputSchema),z.lazy(() => InviteInfoUpdateManyWithWhereWithoutInviterTierInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => InviteInfoScalarWhereInputSchema),z.lazy(() => InviteInfoScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const UserCreateNestedOneWithoutInviteInfoInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutInviteInfoInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutInviteInfoInputSchema),z.lazy(() => UserUncheckedCreateWithoutInviteInfoInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutInviteInfoInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const InviteTierCreateNestedOneWithoutInviteInfoInputSchema: z.ZodType<Prisma.InviteTierCreateNestedOneWithoutInviteInfoInput> = z.object({
  create: z.union([ z.lazy(() => InviteTierCreateWithoutInviteInfoInputSchema),z.lazy(() => InviteTierUncheckedCreateWithoutInviteInfoInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => InviteTierCreateOrConnectWithoutInviteInfoInputSchema).optional(),
  connect: z.lazy(() => InviteTierWhereUniqueInputSchema).optional()
}).strict();

export const UserUpdateOneWithoutInviteInfoNestedInputSchema: z.ZodType<Prisma.UserUpdateOneWithoutInviteInfoNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutInviteInfoInputSchema),z.lazy(() => UserUncheckedCreateWithoutInviteInfoInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutInviteInfoInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutInviteInfoInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => UserWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => UserWhereInputSchema) ]).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutInviteInfoInputSchema),z.lazy(() => UserUpdateWithoutInviteInfoInputSchema),z.lazy(() => UserUncheckedUpdateWithoutInviteInfoInputSchema) ]).optional(),
}).strict();

export const InviteTierUpdateOneWithoutInviteInfoNestedInputSchema: z.ZodType<Prisma.InviteTierUpdateOneWithoutInviteInfoNestedInput> = z.object({
  create: z.union([ z.lazy(() => InviteTierCreateWithoutInviteInfoInputSchema),z.lazy(() => InviteTierUncheckedCreateWithoutInviteInfoInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => InviteTierCreateOrConnectWithoutInviteInfoInputSchema).optional(),
  upsert: z.lazy(() => InviteTierUpsertWithoutInviteInfoInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => InviteTierWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => InviteTierWhereInputSchema) ]).optional(),
  connect: z.lazy(() => InviteTierWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => InviteTierUpdateToOneWithWhereWithoutInviteInfoInputSchema),z.lazy(() => InviteTierUpdateWithoutInviteInfoInputSchema),z.lazy(() => InviteTierUncheckedUpdateWithoutInviteInfoInputSchema) ]).optional(),
}).strict();

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const NestedDateTimeFilterSchema: z.ZodType<Prisma.NestedDateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const NestedStringNullableFilterSchema: z.ZodType<Prisma.NestedStringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedDateTimeNullableFilterSchema: z.ZodType<Prisma.NestedDateTimeNullableFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedEnumUser_typeFilterSchema: z.ZodType<Prisma.NestedEnumUser_typeFilter> = z.object({
  equals: z.lazy(() => User_typeSchema).optional(),
  in: z.lazy(() => User_typeSchema).array().optional(),
  notIn: z.lazy(() => User_typeSchema).array().optional(),
  not: z.union([ z.lazy(() => User_typeSchema),z.lazy(() => NestedEnumUser_typeFilterSchema) ]).optional(),
}).strict();

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const NestedDateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const NestedStringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();

export const NestedIntNullableFilterSchema: z.ZodType<Prisma.NestedIntNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedDateTimeNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeNullableWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeNullableFilterSchema).optional()
}).strict();

export const NestedEnumUser_typeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumUser_typeWithAggregatesFilter> = z.object({
  equals: z.lazy(() => User_typeSchema).optional(),
  in: z.lazy(() => User_typeSchema).array().optional(),
  notIn: z.lazy(() => User_typeSchema).array().optional(),
  not: z.union([ z.lazy(() => User_typeSchema),z.lazy(() => NestedEnumUser_typeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumUser_typeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumUser_typeFilterSchema).optional()
}).strict();

export const NestedBoolNullableFilterSchema: z.ZodType<Prisma.NestedBoolNullableFilter> = z.object({
  equals: z.boolean().optional().nullable(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedBoolNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedBoolNullableWithAggregatesFilter> = z.object({
  equals: z.boolean().optional().nullable(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedBoolNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedBoolNullableFilterSchema).optional()
}).strict();

export const NestedIntWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const NestedFloatFilterSchema: z.ZodType<Prisma.NestedFloatFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatFilterSchema) ]).optional(),
}).strict();

export const InviteInfoCreateWithoutUserInputSchema: z.ZodType<Prisma.InviteInfoCreateWithoutUserInput> = z.object({
  code: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  availableInviteCount: z.number().int(),
  inviteHistoryCount: z.number().int().optional(),
  inviterTier: z.lazy(() => InviteTierCreateNestedOneWithoutInviteInfoInputSchema).optional()
}).strict();

export const InviteInfoUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.InviteInfoUncheckedCreateWithoutUserInput> = z.object({
  code: z.string(),
  tier: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  availableInviteCount: z.number().int(),
  inviteHistoryCount: z.number().int().optional()
}).strict();

export const InviteInfoCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.InviteInfoCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => InviteInfoWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => InviteInfoCreateWithoutUserInputSchema),z.lazy(() => InviteInfoUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const InviteInfoUpsertWithoutUserInputSchema: z.ZodType<Prisma.InviteInfoUpsertWithoutUserInput> = z.object({
  update: z.union([ z.lazy(() => InviteInfoUpdateWithoutUserInputSchema),z.lazy(() => InviteInfoUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => InviteInfoCreateWithoutUserInputSchema),z.lazy(() => InviteInfoUncheckedCreateWithoutUserInputSchema) ]),
  where: z.lazy(() => InviteInfoWhereInputSchema).optional()
}).strict();

export const InviteInfoUpdateToOneWithWhereWithoutUserInputSchema: z.ZodType<Prisma.InviteInfoUpdateToOneWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => InviteInfoWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => InviteInfoUpdateWithoutUserInputSchema),z.lazy(() => InviteInfoUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export const InviteInfoUpdateWithoutUserInputSchema: z.ZodType<Prisma.InviteInfoUpdateWithoutUserInput> = z.object({
  code: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  availableInviteCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  inviteHistoryCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  inviterTier: z.lazy(() => InviteTierUpdateOneWithoutInviteInfoNestedInputSchema).optional()
}).strict();

export const InviteInfoUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.InviteInfoUncheckedUpdateWithoutUserInput> = z.object({
  code: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tier: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  availableInviteCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  inviteHistoryCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const InviteInfoCreateWithoutInviterTierInputSchema: z.ZodType<Prisma.InviteInfoCreateWithoutInviterTierInput> = z.object({
  code: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  availableInviteCount: z.number().int(),
  inviteHistoryCount: z.number().int().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutInviteInfoInputSchema).optional()
}).strict();

export const InviteInfoUncheckedCreateWithoutInviterTierInputSchema: z.ZodType<Prisma.InviteInfoUncheckedCreateWithoutInviterTierInput> = z.object({
  uid: z.string(),
  code: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  availableInviteCount: z.number().int(),
  inviteHistoryCount: z.number().int().optional()
}).strict();

export const InviteInfoCreateOrConnectWithoutInviterTierInputSchema: z.ZodType<Prisma.InviteInfoCreateOrConnectWithoutInviterTierInput> = z.object({
  where: z.lazy(() => InviteInfoWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => InviteInfoCreateWithoutInviterTierInputSchema),z.lazy(() => InviteInfoUncheckedCreateWithoutInviterTierInputSchema) ]),
}).strict();

export const InviteInfoCreateManyInviterTierInputEnvelopeSchema: z.ZodType<Prisma.InviteInfoCreateManyInviterTierInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => InviteInfoCreateManyInviterTierInputSchema),z.lazy(() => InviteInfoCreateManyInviterTierInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const InviteInfoUpsertWithWhereUniqueWithoutInviterTierInputSchema: z.ZodType<Prisma.InviteInfoUpsertWithWhereUniqueWithoutInviterTierInput> = z.object({
  where: z.lazy(() => InviteInfoWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => InviteInfoUpdateWithoutInviterTierInputSchema),z.lazy(() => InviteInfoUncheckedUpdateWithoutInviterTierInputSchema) ]),
  create: z.union([ z.lazy(() => InviteInfoCreateWithoutInviterTierInputSchema),z.lazy(() => InviteInfoUncheckedCreateWithoutInviterTierInputSchema) ]),
}).strict();

export const InviteInfoUpdateWithWhereUniqueWithoutInviterTierInputSchema: z.ZodType<Prisma.InviteInfoUpdateWithWhereUniqueWithoutInviterTierInput> = z.object({
  where: z.lazy(() => InviteInfoWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => InviteInfoUpdateWithoutInviterTierInputSchema),z.lazy(() => InviteInfoUncheckedUpdateWithoutInviterTierInputSchema) ]),
}).strict();

export const InviteInfoUpdateManyWithWhereWithoutInviterTierInputSchema: z.ZodType<Prisma.InviteInfoUpdateManyWithWhereWithoutInviterTierInput> = z.object({
  where: z.lazy(() => InviteInfoScalarWhereInputSchema),
  data: z.union([ z.lazy(() => InviteInfoUpdateManyMutationInputSchema),z.lazy(() => InviteInfoUncheckedUpdateManyWithoutInviterTierInputSchema) ]),
}).strict();

export const InviteInfoScalarWhereInputSchema: z.ZodType<Prisma.InviteInfoScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => InviteInfoScalarWhereInputSchema),z.lazy(() => InviteInfoScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => InviteInfoScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => InviteInfoScalarWhereInputSchema),z.lazy(() => InviteInfoScalarWhereInputSchema).array() ]).optional(),
  uid: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  code: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  tier: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  availableInviteCount: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  inviteHistoryCount: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export const UserCreateWithoutInviteInfoInputSchema: z.ZodType<Prisma.UserCreateWithoutInviteInfoInput> = z.object({
  name: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  imageUrl: z.string().optional().nullable(),
  deletedAt: z.coerce.date().optional().nullable(),
  updatedAt: z.coerce.date().optional(),
  uid: z.string(),
  type: z.lazy(() => User_typeSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutInviteInfoInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutInviteInfoInput> = z.object({
  name: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  imageUrl: z.string().optional().nullable(),
  deletedAt: z.coerce.date().optional().nullable(),
  updatedAt: z.coerce.date().optional(),
  uid: z.string(),
  type: z.lazy(() => User_typeSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutInviteInfoInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutInviteInfoInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutInviteInfoInputSchema),z.lazy(() => UserUncheckedCreateWithoutInviteInfoInputSchema) ]),
}).strict();

export const InviteTierCreateWithoutInviteInfoInputSchema: z.ZodType<Prisma.InviteTierCreateWithoutInviteInfoInput> = z.object({
  tier: z.string(),
  availableAmount: z.number().int()
}).strict();

export const InviteTierUncheckedCreateWithoutInviteInfoInputSchema: z.ZodType<Prisma.InviteTierUncheckedCreateWithoutInviteInfoInput> = z.object({
  tier: z.string(),
  availableAmount: z.number().int()
}).strict();

export const InviteTierCreateOrConnectWithoutInviteInfoInputSchema: z.ZodType<Prisma.InviteTierCreateOrConnectWithoutInviteInfoInput> = z.object({
  where: z.lazy(() => InviteTierWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => InviteTierCreateWithoutInviteInfoInputSchema),z.lazy(() => InviteTierUncheckedCreateWithoutInviteInfoInputSchema) ]),
}).strict();

export const UserUpsertWithoutInviteInfoInputSchema: z.ZodType<Prisma.UserUpsertWithoutInviteInfoInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutInviteInfoInputSchema),z.lazy(() => UserUncheckedUpdateWithoutInviteInfoInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutInviteInfoInputSchema),z.lazy(() => UserUncheckedCreateWithoutInviteInfoInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const UserUpdateToOneWithWhereWithoutInviteInfoInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutInviteInfoInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutInviteInfoInputSchema),z.lazy(() => UserUncheckedUpdateWithoutInviteInfoInputSchema) ]),
}).strict();

export const UserUpdateWithoutInviteInfoInputSchema: z.ZodType<Prisma.UserUpdateWithoutInviteInfoInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  imageUrl: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  uid: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => User_typeSchema),z.lazy(() => EnumUser_typeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserUncheckedUpdateWithoutInviteInfoInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutInviteInfoInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  imageUrl: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  uid: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => User_typeSchema),z.lazy(() => EnumUser_typeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const InviteTierUpsertWithoutInviteInfoInputSchema: z.ZodType<Prisma.InviteTierUpsertWithoutInviteInfoInput> = z.object({
  update: z.union([ z.lazy(() => InviteTierUpdateWithoutInviteInfoInputSchema),z.lazy(() => InviteTierUncheckedUpdateWithoutInviteInfoInputSchema) ]),
  create: z.union([ z.lazy(() => InviteTierCreateWithoutInviteInfoInputSchema),z.lazy(() => InviteTierUncheckedCreateWithoutInviteInfoInputSchema) ]),
  where: z.lazy(() => InviteTierWhereInputSchema).optional()
}).strict();

export const InviteTierUpdateToOneWithWhereWithoutInviteInfoInputSchema: z.ZodType<Prisma.InviteTierUpdateToOneWithWhereWithoutInviteInfoInput> = z.object({
  where: z.lazy(() => InviteTierWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => InviteTierUpdateWithoutInviteInfoInputSchema),z.lazy(() => InviteTierUncheckedUpdateWithoutInviteInfoInputSchema) ]),
}).strict();

export const InviteTierUpdateWithoutInviteInfoInputSchema: z.ZodType<Prisma.InviteTierUpdateWithoutInviteInfoInput> = z.object({
  tier: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  availableAmount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const InviteTierUncheckedUpdateWithoutInviteInfoInputSchema: z.ZodType<Prisma.InviteTierUncheckedUpdateWithoutInviteInfoInput> = z.object({
  tier: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  availableAmount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const InviteInfoCreateManyInviterTierInputSchema: z.ZodType<Prisma.InviteInfoCreateManyInviterTierInput> = z.object({
  uid: z.string(),
  code: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  availableInviteCount: z.number().int(),
  inviteHistoryCount: z.number().int().optional()
}).strict();

export const InviteInfoUpdateWithoutInviterTierInputSchema: z.ZodType<Prisma.InviteInfoUpdateWithoutInviterTierInput> = z.object({
  code: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  availableInviteCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  inviteHistoryCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneWithoutInviteInfoNestedInputSchema).optional()
}).strict();

export const InviteInfoUncheckedUpdateWithoutInviterTierInputSchema: z.ZodType<Prisma.InviteInfoUncheckedUpdateWithoutInviterTierInput> = z.object({
  uid: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  code: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  availableInviteCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  inviteHistoryCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const InviteInfoUncheckedUpdateManyWithoutInviterTierInputSchema: z.ZodType<Prisma.InviteInfoUncheckedUpdateManyWithoutInviterTierInput> = z.object({
  uid: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  code: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  availableInviteCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  inviteHistoryCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const UserFindFirstArgsSchema: z.ZodType<Prisma.UserFindFirstArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema,UserScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UserFindFirstOrThrowArgsSchema: z.ZodType<Prisma.UserFindFirstOrThrowArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema,UserScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UserFindManyArgsSchema: z.ZodType<Prisma.UserFindManyArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema,UserScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UserAggregateArgsSchema: z.ZodType<Prisma.UserAggregateArgs> = z.object({
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const UserGroupByArgsSchema: z.ZodType<Prisma.UserGroupByArgs> = z.object({
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithAggregationInputSchema.array(),UserOrderByWithAggregationInputSchema ]).optional(),
  by: UserScalarFieldEnumSchema.array(),
  having: UserScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const UserFindUniqueArgsSchema: z.ZodType<Prisma.UserFindUniqueArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const UserFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.UserFindUniqueOrThrowArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const GoogleProfileFindFirstArgsSchema: z.ZodType<Prisma.GoogleProfileFindFirstArgs> = z.object({
  select: GoogleProfileSelectSchema.optional(),
  where: GoogleProfileWhereInputSchema.optional(),
  orderBy: z.union([ GoogleProfileOrderByWithRelationInputSchema.array(),GoogleProfileOrderByWithRelationInputSchema ]).optional(),
  cursor: GoogleProfileWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ GoogleProfileScalarFieldEnumSchema,GoogleProfileScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const GoogleProfileFindFirstOrThrowArgsSchema: z.ZodType<Prisma.GoogleProfileFindFirstOrThrowArgs> = z.object({
  select: GoogleProfileSelectSchema.optional(),
  where: GoogleProfileWhereInputSchema.optional(),
  orderBy: z.union([ GoogleProfileOrderByWithRelationInputSchema.array(),GoogleProfileOrderByWithRelationInputSchema ]).optional(),
  cursor: GoogleProfileWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ GoogleProfileScalarFieldEnumSchema,GoogleProfileScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const GoogleProfileFindManyArgsSchema: z.ZodType<Prisma.GoogleProfileFindManyArgs> = z.object({
  select: GoogleProfileSelectSchema.optional(),
  where: GoogleProfileWhereInputSchema.optional(),
  orderBy: z.union([ GoogleProfileOrderByWithRelationInputSchema.array(),GoogleProfileOrderByWithRelationInputSchema ]).optional(),
  cursor: GoogleProfileWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ GoogleProfileScalarFieldEnumSchema,GoogleProfileScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const GoogleProfileAggregateArgsSchema: z.ZodType<Prisma.GoogleProfileAggregateArgs> = z.object({
  where: GoogleProfileWhereInputSchema.optional(),
  orderBy: z.union([ GoogleProfileOrderByWithRelationInputSchema.array(),GoogleProfileOrderByWithRelationInputSchema ]).optional(),
  cursor: GoogleProfileWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const GoogleProfileGroupByArgsSchema: z.ZodType<Prisma.GoogleProfileGroupByArgs> = z.object({
  where: GoogleProfileWhereInputSchema.optional(),
  orderBy: z.union([ GoogleProfileOrderByWithAggregationInputSchema.array(),GoogleProfileOrderByWithAggregationInputSchema ]).optional(),
  by: GoogleProfileScalarFieldEnumSchema.array(),
  having: GoogleProfileScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const GoogleProfileFindUniqueArgsSchema: z.ZodType<Prisma.GoogleProfileFindUniqueArgs> = z.object({
  select: GoogleProfileSelectSchema.optional(),
  where: GoogleProfileWhereUniqueInputSchema,
}).strict() ;

export const GoogleProfileFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.GoogleProfileFindUniqueOrThrowArgs> = z.object({
  select: GoogleProfileSelectSchema.optional(),
  where: GoogleProfileWhereUniqueInputSchema,
}).strict() ;

export const InviteTierFindFirstArgsSchema: z.ZodType<Prisma.InviteTierFindFirstArgs> = z.object({
  select: InviteTierSelectSchema.optional(),
  include: InviteTierIncludeSchema.optional(),
  where: InviteTierWhereInputSchema.optional(),
  orderBy: z.union([ InviteTierOrderByWithRelationInputSchema.array(),InviteTierOrderByWithRelationInputSchema ]).optional(),
  cursor: InviteTierWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ InviteTierScalarFieldEnumSchema,InviteTierScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const InviteTierFindFirstOrThrowArgsSchema: z.ZodType<Prisma.InviteTierFindFirstOrThrowArgs> = z.object({
  select: InviteTierSelectSchema.optional(),
  include: InviteTierIncludeSchema.optional(),
  where: InviteTierWhereInputSchema.optional(),
  orderBy: z.union([ InviteTierOrderByWithRelationInputSchema.array(),InviteTierOrderByWithRelationInputSchema ]).optional(),
  cursor: InviteTierWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ InviteTierScalarFieldEnumSchema,InviteTierScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const InviteTierFindManyArgsSchema: z.ZodType<Prisma.InviteTierFindManyArgs> = z.object({
  select: InviteTierSelectSchema.optional(),
  include: InviteTierIncludeSchema.optional(),
  where: InviteTierWhereInputSchema.optional(),
  orderBy: z.union([ InviteTierOrderByWithRelationInputSchema.array(),InviteTierOrderByWithRelationInputSchema ]).optional(),
  cursor: InviteTierWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ InviteTierScalarFieldEnumSchema,InviteTierScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const InviteTierAggregateArgsSchema: z.ZodType<Prisma.InviteTierAggregateArgs> = z.object({
  where: InviteTierWhereInputSchema.optional(),
  orderBy: z.union([ InviteTierOrderByWithRelationInputSchema.array(),InviteTierOrderByWithRelationInputSchema ]).optional(),
  cursor: InviteTierWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const InviteTierGroupByArgsSchema: z.ZodType<Prisma.InviteTierGroupByArgs> = z.object({
  where: InviteTierWhereInputSchema.optional(),
  orderBy: z.union([ InviteTierOrderByWithAggregationInputSchema.array(),InviteTierOrderByWithAggregationInputSchema ]).optional(),
  by: InviteTierScalarFieldEnumSchema.array(),
  having: InviteTierScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const InviteTierFindUniqueArgsSchema: z.ZodType<Prisma.InviteTierFindUniqueArgs> = z.object({
  select: InviteTierSelectSchema.optional(),
  include: InviteTierIncludeSchema.optional(),
  where: InviteTierWhereUniqueInputSchema,
}).strict() ;

export const InviteTierFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.InviteTierFindUniqueOrThrowArgs> = z.object({
  select: InviteTierSelectSchema.optional(),
  include: InviteTierIncludeSchema.optional(),
  where: InviteTierWhereUniqueInputSchema,
}).strict() ;

export const InviteInfoFindFirstArgsSchema: z.ZodType<Prisma.InviteInfoFindFirstArgs> = z.object({
  select: InviteInfoSelectSchema.optional(),
  include: InviteInfoIncludeSchema.optional(),
  where: InviteInfoWhereInputSchema.optional(),
  orderBy: z.union([ InviteInfoOrderByWithRelationInputSchema.array(),InviteInfoOrderByWithRelationInputSchema ]).optional(),
  cursor: InviteInfoWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ InviteInfoScalarFieldEnumSchema,InviteInfoScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const InviteInfoFindFirstOrThrowArgsSchema: z.ZodType<Prisma.InviteInfoFindFirstOrThrowArgs> = z.object({
  select: InviteInfoSelectSchema.optional(),
  include: InviteInfoIncludeSchema.optional(),
  where: InviteInfoWhereInputSchema.optional(),
  orderBy: z.union([ InviteInfoOrderByWithRelationInputSchema.array(),InviteInfoOrderByWithRelationInputSchema ]).optional(),
  cursor: InviteInfoWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ InviteInfoScalarFieldEnumSchema,InviteInfoScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const InviteInfoFindManyArgsSchema: z.ZodType<Prisma.InviteInfoFindManyArgs> = z.object({
  select: InviteInfoSelectSchema.optional(),
  include: InviteInfoIncludeSchema.optional(),
  where: InviteInfoWhereInputSchema.optional(),
  orderBy: z.union([ InviteInfoOrderByWithRelationInputSchema.array(),InviteInfoOrderByWithRelationInputSchema ]).optional(),
  cursor: InviteInfoWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ InviteInfoScalarFieldEnumSchema,InviteInfoScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const InviteInfoAggregateArgsSchema: z.ZodType<Prisma.InviteInfoAggregateArgs> = z.object({
  where: InviteInfoWhereInputSchema.optional(),
  orderBy: z.union([ InviteInfoOrderByWithRelationInputSchema.array(),InviteInfoOrderByWithRelationInputSchema ]).optional(),
  cursor: InviteInfoWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const InviteInfoGroupByArgsSchema: z.ZodType<Prisma.InviteInfoGroupByArgs> = z.object({
  where: InviteInfoWhereInputSchema.optional(),
  orderBy: z.union([ InviteInfoOrderByWithAggregationInputSchema.array(),InviteInfoOrderByWithAggregationInputSchema ]).optional(),
  by: InviteInfoScalarFieldEnumSchema.array(),
  having: InviteInfoScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const InviteInfoFindUniqueArgsSchema: z.ZodType<Prisma.InviteInfoFindUniqueArgs> = z.object({
  select: InviteInfoSelectSchema.optional(),
  include: InviteInfoIncludeSchema.optional(),
  where: InviteInfoWhereUniqueInputSchema,
}).strict() ;

export const InviteInfoFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.InviteInfoFindUniqueOrThrowArgs> = z.object({
  select: InviteInfoSelectSchema.optional(),
  include: InviteInfoIncludeSchema.optional(),
  where: InviteInfoWhereUniqueInputSchema,
}).strict() ;

export const InviteRecordFindFirstArgsSchema: z.ZodType<Prisma.InviteRecordFindFirstArgs> = z.object({
  select: InviteRecordSelectSchema.optional(),
  where: InviteRecordWhereInputSchema.optional(),
  orderBy: z.union([ InviteRecordOrderByWithRelationInputSchema.array(),InviteRecordOrderByWithRelationInputSchema ]).optional(),
  cursor: InviteRecordWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ InviteRecordScalarFieldEnumSchema,InviteRecordScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const InviteRecordFindFirstOrThrowArgsSchema: z.ZodType<Prisma.InviteRecordFindFirstOrThrowArgs> = z.object({
  select: InviteRecordSelectSchema.optional(),
  where: InviteRecordWhereInputSchema.optional(),
  orderBy: z.union([ InviteRecordOrderByWithRelationInputSchema.array(),InviteRecordOrderByWithRelationInputSchema ]).optional(),
  cursor: InviteRecordWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ InviteRecordScalarFieldEnumSchema,InviteRecordScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const InviteRecordFindManyArgsSchema: z.ZodType<Prisma.InviteRecordFindManyArgs> = z.object({
  select: InviteRecordSelectSchema.optional(),
  where: InviteRecordWhereInputSchema.optional(),
  orderBy: z.union([ InviteRecordOrderByWithRelationInputSchema.array(),InviteRecordOrderByWithRelationInputSchema ]).optional(),
  cursor: InviteRecordWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ InviteRecordScalarFieldEnumSchema,InviteRecordScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const InviteRecordAggregateArgsSchema: z.ZodType<Prisma.InviteRecordAggregateArgs> = z.object({
  where: InviteRecordWhereInputSchema.optional(),
  orderBy: z.union([ InviteRecordOrderByWithRelationInputSchema.array(),InviteRecordOrderByWithRelationInputSchema ]).optional(),
  cursor: InviteRecordWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const InviteRecordGroupByArgsSchema: z.ZodType<Prisma.InviteRecordGroupByArgs> = z.object({
  where: InviteRecordWhereInputSchema.optional(),
  orderBy: z.union([ InviteRecordOrderByWithAggregationInputSchema.array(),InviteRecordOrderByWithAggregationInputSchema ]).optional(),
  by: InviteRecordScalarFieldEnumSchema.array(),
  having: InviteRecordScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const InviteRecordFindUniqueArgsSchema: z.ZodType<Prisma.InviteRecordFindUniqueArgs> = z.object({
  select: InviteRecordSelectSchema.optional(),
  where: InviteRecordWhereUniqueInputSchema,
}).strict() ;

export const InviteRecordFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.InviteRecordFindUniqueOrThrowArgs> = z.object({
  select: InviteRecordSelectSchema.optional(),
  where: InviteRecordWhereUniqueInputSchema,
}).strict() ;

export const UserCreateArgsSchema: z.ZodType<Prisma.UserCreateArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  data: z.union([ UserCreateInputSchema,UserUncheckedCreateInputSchema ]),
}).strict() ;

export const UserUpsertArgsSchema: z.ZodType<Prisma.UserUpsertArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
  create: z.union([ UserCreateInputSchema,UserUncheckedCreateInputSchema ]),
  update: z.union([ UserUpdateInputSchema,UserUncheckedUpdateInputSchema ]),
}).strict() ;

export const UserCreateManyArgsSchema: z.ZodType<Prisma.UserCreateManyArgs> = z.object({
  data: z.union([ UserCreateManyInputSchema,UserCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const UserDeleteArgsSchema: z.ZodType<Prisma.UserDeleteArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const UserUpdateArgsSchema: z.ZodType<Prisma.UserUpdateArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  data: z.union([ UserUpdateInputSchema,UserUncheckedUpdateInputSchema ]),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const UserUpdateManyArgsSchema: z.ZodType<Prisma.UserUpdateManyArgs> = z.object({
  data: z.union([ UserUpdateManyMutationInputSchema,UserUncheckedUpdateManyInputSchema ]),
  where: UserWhereInputSchema.optional(),
}).strict() ;

export const UserDeleteManyArgsSchema: z.ZodType<Prisma.UserDeleteManyArgs> = z.object({
  where: UserWhereInputSchema.optional(),
}).strict() ;

export const GoogleProfileCreateArgsSchema: z.ZodType<Prisma.GoogleProfileCreateArgs> = z.object({
  select: GoogleProfileSelectSchema.optional(),
  data: z.union([ GoogleProfileCreateInputSchema,GoogleProfileUncheckedCreateInputSchema ]),
}).strict() ;

export const GoogleProfileUpsertArgsSchema: z.ZodType<Prisma.GoogleProfileUpsertArgs> = z.object({
  select: GoogleProfileSelectSchema.optional(),
  where: GoogleProfileWhereUniqueInputSchema,
  create: z.union([ GoogleProfileCreateInputSchema,GoogleProfileUncheckedCreateInputSchema ]),
  update: z.union([ GoogleProfileUpdateInputSchema,GoogleProfileUncheckedUpdateInputSchema ]),
}).strict() ;

export const GoogleProfileCreateManyArgsSchema: z.ZodType<Prisma.GoogleProfileCreateManyArgs> = z.object({
  data: z.union([ GoogleProfileCreateManyInputSchema,GoogleProfileCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const GoogleProfileDeleteArgsSchema: z.ZodType<Prisma.GoogleProfileDeleteArgs> = z.object({
  select: GoogleProfileSelectSchema.optional(),
  where: GoogleProfileWhereUniqueInputSchema,
}).strict() ;

export const GoogleProfileUpdateArgsSchema: z.ZodType<Prisma.GoogleProfileUpdateArgs> = z.object({
  select: GoogleProfileSelectSchema.optional(),
  data: z.union([ GoogleProfileUpdateInputSchema,GoogleProfileUncheckedUpdateInputSchema ]),
  where: GoogleProfileWhereUniqueInputSchema,
}).strict() ;

export const GoogleProfileUpdateManyArgsSchema: z.ZodType<Prisma.GoogleProfileUpdateManyArgs> = z.object({
  data: z.union([ GoogleProfileUpdateManyMutationInputSchema,GoogleProfileUncheckedUpdateManyInputSchema ]),
  where: GoogleProfileWhereInputSchema.optional(),
}).strict() ;

export const GoogleProfileDeleteManyArgsSchema: z.ZodType<Prisma.GoogleProfileDeleteManyArgs> = z.object({
  where: GoogleProfileWhereInputSchema.optional(),
}).strict() ;

export const InviteTierCreateArgsSchema: z.ZodType<Prisma.InviteTierCreateArgs> = z.object({
  select: InviteTierSelectSchema.optional(),
  include: InviteTierIncludeSchema.optional(),
  data: z.union([ InviteTierCreateInputSchema,InviteTierUncheckedCreateInputSchema ]),
}).strict() ;

export const InviteTierUpsertArgsSchema: z.ZodType<Prisma.InviteTierUpsertArgs> = z.object({
  select: InviteTierSelectSchema.optional(),
  include: InviteTierIncludeSchema.optional(),
  where: InviteTierWhereUniqueInputSchema,
  create: z.union([ InviteTierCreateInputSchema,InviteTierUncheckedCreateInputSchema ]),
  update: z.union([ InviteTierUpdateInputSchema,InviteTierUncheckedUpdateInputSchema ]),
}).strict() ;

export const InviteTierCreateManyArgsSchema: z.ZodType<Prisma.InviteTierCreateManyArgs> = z.object({
  data: z.union([ InviteTierCreateManyInputSchema,InviteTierCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const InviteTierDeleteArgsSchema: z.ZodType<Prisma.InviteTierDeleteArgs> = z.object({
  select: InviteTierSelectSchema.optional(),
  include: InviteTierIncludeSchema.optional(),
  where: InviteTierWhereUniqueInputSchema,
}).strict() ;

export const InviteTierUpdateArgsSchema: z.ZodType<Prisma.InviteTierUpdateArgs> = z.object({
  select: InviteTierSelectSchema.optional(),
  include: InviteTierIncludeSchema.optional(),
  data: z.union([ InviteTierUpdateInputSchema,InviteTierUncheckedUpdateInputSchema ]),
  where: InviteTierWhereUniqueInputSchema,
}).strict() ;

export const InviteTierUpdateManyArgsSchema: z.ZodType<Prisma.InviteTierUpdateManyArgs> = z.object({
  data: z.union([ InviteTierUpdateManyMutationInputSchema,InviteTierUncheckedUpdateManyInputSchema ]),
  where: InviteTierWhereInputSchema.optional(),
}).strict() ;

export const InviteTierDeleteManyArgsSchema: z.ZodType<Prisma.InviteTierDeleteManyArgs> = z.object({
  where: InviteTierWhereInputSchema.optional(),
}).strict() ;

export const InviteInfoCreateArgsSchema: z.ZodType<Prisma.InviteInfoCreateArgs> = z.object({
  select: InviteInfoSelectSchema.optional(),
  include: InviteInfoIncludeSchema.optional(),
  data: z.union([ InviteInfoCreateInputSchema,InviteInfoUncheckedCreateInputSchema ]),
}).strict() ;

export const InviteInfoUpsertArgsSchema: z.ZodType<Prisma.InviteInfoUpsertArgs> = z.object({
  select: InviteInfoSelectSchema.optional(),
  include: InviteInfoIncludeSchema.optional(),
  where: InviteInfoWhereUniqueInputSchema,
  create: z.union([ InviteInfoCreateInputSchema,InviteInfoUncheckedCreateInputSchema ]),
  update: z.union([ InviteInfoUpdateInputSchema,InviteInfoUncheckedUpdateInputSchema ]),
}).strict() ;

export const InviteInfoCreateManyArgsSchema: z.ZodType<Prisma.InviteInfoCreateManyArgs> = z.object({
  data: z.union([ InviteInfoCreateManyInputSchema,InviteInfoCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const InviteInfoDeleteArgsSchema: z.ZodType<Prisma.InviteInfoDeleteArgs> = z.object({
  select: InviteInfoSelectSchema.optional(),
  include: InviteInfoIncludeSchema.optional(),
  where: InviteInfoWhereUniqueInputSchema,
}).strict() ;

export const InviteInfoUpdateArgsSchema: z.ZodType<Prisma.InviteInfoUpdateArgs> = z.object({
  select: InviteInfoSelectSchema.optional(),
  include: InviteInfoIncludeSchema.optional(),
  data: z.union([ InviteInfoUpdateInputSchema,InviteInfoUncheckedUpdateInputSchema ]),
  where: InviteInfoWhereUniqueInputSchema,
}).strict() ;

export const InviteInfoUpdateManyArgsSchema: z.ZodType<Prisma.InviteInfoUpdateManyArgs> = z.object({
  data: z.union([ InviteInfoUpdateManyMutationInputSchema,InviteInfoUncheckedUpdateManyInputSchema ]),
  where: InviteInfoWhereInputSchema.optional(),
}).strict() ;

export const InviteInfoDeleteManyArgsSchema: z.ZodType<Prisma.InviteInfoDeleteManyArgs> = z.object({
  where: InviteInfoWhereInputSchema.optional(),
}).strict() ;

export const InviteRecordCreateArgsSchema: z.ZodType<Prisma.InviteRecordCreateArgs> = z.object({
  select: InviteRecordSelectSchema.optional(),
  data: z.union([ InviteRecordCreateInputSchema,InviteRecordUncheckedCreateInputSchema ]),
}).strict() ;

export const InviteRecordUpsertArgsSchema: z.ZodType<Prisma.InviteRecordUpsertArgs> = z.object({
  select: InviteRecordSelectSchema.optional(),
  where: InviteRecordWhereUniqueInputSchema,
  create: z.union([ InviteRecordCreateInputSchema,InviteRecordUncheckedCreateInputSchema ]),
  update: z.union([ InviteRecordUpdateInputSchema,InviteRecordUncheckedUpdateInputSchema ]),
}).strict() ;

export const InviteRecordCreateManyArgsSchema: z.ZodType<Prisma.InviteRecordCreateManyArgs> = z.object({
  data: z.union([ InviteRecordCreateManyInputSchema,InviteRecordCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const InviteRecordDeleteArgsSchema: z.ZodType<Prisma.InviteRecordDeleteArgs> = z.object({
  select: InviteRecordSelectSchema.optional(),
  where: InviteRecordWhereUniqueInputSchema,
}).strict() ;

export const InviteRecordUpdateArgsSchema: z.ZodType<Prisma.InviteRecordUpdateArgs> = z.object({
  select: InviteRecordSelectSchema.optional(),
  data: z.union([ InviteRecordUpdateInputSchema,InviteRecordUncheckedUpdateInputSchema ]),
  where: InviteRecordWhereUniqueInputSchema,
}).strict() ;

export const InviteRecordUpdateManyArgsSchema: z.ZodType<Prisma.InviteRecordUpdateManyArgs> = z.object({
  data: z.union([ InviteRecordUpdateManyMutationInputSchema,InviteRecordUncheckedUpdateManyInputSchema ]),
  where: InviteRecordWhereInputSchema.optional(),
}).strict() ;

export const InviteRecordDeleteManyArgsSchema: z.ZodType<Prisma.InviteRecordDeleteManyArgs> = z.object({
  where: InviteRecordWhereInputSchema.optional(),
}).strict() ;