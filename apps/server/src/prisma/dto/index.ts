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

export const InviteInfoScalarFieldEnumSchema = z.enum(['uid','code','createdAt','updatedAt','availableInviteCount','inviteHistoryCount','tier']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const NullsOrderSchema = z.enum(['first','last']);

export const TypeSchema = z.enum(['USER','ADMIN']);

export type TypeType = `${z.infer<typeof TypeSchema>}`

/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////

export const UserSchema = z.object({
  type: TypeSchema,
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
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  availableInviteCount: z.number().int(),
  inviteHistoryCount: z.number().int(),
  tier: z.string(),
})

export type InviteInfo = z.infer<typeof InviteInfoSchema>

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// USER
//------------------------------------------------------

export const UserSelectSchema: z.ZodType<Prisma.UserSelect> = z.object({
  name: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  imageUrl: z.boolean().optional(),
  deletedAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  uid: z.boolean().optional(),
  type: z.boolean().optional(),
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

export const InviteTierSelectSchema: z.ZodType<Prisma.InviteTierSelect> = z.object({
  tier: z.boolean().optional(),
  availableAmount: z.boolean().optional(),
}).strict()

// INVITE INFO
//------------------------------------------------------

export const InviteInfoSelectSchema: z.ZodType<Prisma.InviteInfoSelect> = z.object({
  uid: z.boolean().optional(),
  code: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  availableInviteCount: z.boolean().optional(),
  inviteHistoryCount: z.boolean().optional(),
  tier: z.boolean().optional(),
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
  type: z.union([ z.lazy(() => EnumTypeFilterSchema),z.lazy(() => TypeSchema) ]).optional(),
}).strict();

export const UserOrderByWithRelationInputSchema: z.ZodType<Prisma.UserOrderByWithRelationInput> = z.object({
  name: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  imageUrl: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  deletedAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  uid: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional()
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
  type: z.union([ z.lazy(() => EnumTypeFilterSchema),z.lazy(() => TypeSchema) ]).optional(),
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
  type: z.union([ z.lazy(() => EnumTypeWithAggregatesFilterSchema),z.lazy(() => TypeSchema) ]).optional(),
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
}).strict();

export const InviteTierOrderByWithRelationInputSchema: z.ZodType<Prisma.InviteTierOrderByWithRelationInput> = z.object({
  tier: z.lazy(() => SortOrderSchema).optional(),
  availableAmount: z.lazy(() => SortOrderSchema).optional()
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
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  availableInviteCount: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  inviteHistoryCount: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  tier: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export const InviteInfoOrderByWithRelationInputSchema: z.ZodType<Prisma.InviteInfoOrderByWithRelationInput> = z.object({
  uid: z.lazy(() => SortOrderSchema).optional(),
  code: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  availableInviteCount: z.lazy(() => SortOrderSchema).optional(),
  inviteHistoryCount: z.lazy(() => SortOrderSchema).optional(),
  tier: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const InviteInfoWhereUniqueInputSchema: z.ZodType<Prisma.InviteInfoWhereUniqueInput> = z.object({
  uid: z.string()
})
.and(z.object({
  uid: z.string().optional(),
  AND: z.union([ z.lazy(() => InviteInfoWhereInputSchema),z.lazy(() => InviteInfoWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => InviteInfoWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => InviteInfoWhereInputSchema),z.lazy(() => InviteInfoWhereInputSchema).array() ]).optional(),
  code: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  availableInviteCount: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  inviteHistoryCount: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  tier: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict());

export const InviteInfoOrderByWithAggregationInputSchema: z.ZodType<Prisma.InviteInfoOrderByWithAggregationInput> = z.object({
  uid: z.lazy(() => SortOrderSchema).optional(),
  code: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  availableInviteCount: z.lazy(() => SortOrderSchema).optional(),
  inviteHistoryCount: z.lazy(() => SortOrderSchema).optional(),
  tier: z.lazy(() => SortOrderSchema).optional(),
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
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  availableInviteCount: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  inviteHistoryCount: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  tier: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const UserCreateInputSchema: z.ZodType<Prisma.UserCreateInput> = z.object({
  name: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  imageUrl: z.string().optional().nullable(),
  deletedAt: z.coerce.date().optional().nullable(),
  updatedAt: z.coerce.date().optional(),
  uid: z.string(),
  type: z.lazy(() => TypeSchema).optional()
}).strict();

export const UserUncheckedCreateInputSchema: z.ZodType<Prisma.UserUncheckedCreateInput> = z.object({
  name: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  imageUrl: z.string().optional().nullable(),
  deletedAt: z.coerce.date().optional().nullable(),
  updatedAt: z.coerce.date().optional(),
  uid: z.string(),
  type: z.lazy(() => TypeSchema).optional()
}).strict();

export const UserUpdateInputSchema: z.ZodType<Prisma.UserUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  imageUrl: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  uid: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => TypeSchema),z.lazy(() => EnumTypeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserUncheckedUpdateInputSchema: z.ZodType<Prisma.UserUncheckedUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  imageUrl: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  uid: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => TypeSchema),z.lazy(() => EnumTypeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserCreateManyInputSchema: z.ZodType<Prisma.UserCreateManyInput> = z.object({
  name: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  imageUrl: z.string().optional().nullable(),
  deletedAt: z.coerce.date().optional().nullable(),
  updatedAt: z.coerce.date().optional(),
  uid: z.string(),
  type: z.lazy(() => TypeSchema).optional()
}).strict();

export const UserUpdateManyMutationInputSchema: z.ZodType<Prisma.UserUpdateManyMutationInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  imageUrl: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  uid: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => TypeSchema),z.lazy(() => EnumTypeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserUncheckedUpdateManyInputSchema: z.ZodType<Prisma.UserUncheckedUpdateManyInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  imageUrl: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  uid: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => TypeSchema),z.lazy(() => EnumTypeFieldUpdateOperationsInputSchema) ]).optional(),
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
  availableAmount: z.number().int()
}).strict();

export const InviteTierUncheckedCreateInputSchema: z.ZodType<Prisma.InviteTierUncheckedCreateInput> = z.object({
  tier: z.string(),
  availableAmount: z.number().int()
}).strict();

export const InviteTierUpdateInputSchema: z.ZodType<Prisma.InviteTierUpdateInput> = z.object({
  tier: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  availableAmount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const InviteTierUncheckedUpdateInputSchema: z.ZodType<Prisma.InviteTierUncheckedUpdateInput> = z.object({
  tier: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  availableAmount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
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
  uid: z.string(),
  code: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  availableInviteCount: z.number().int(),
  inviteHistoryCount: z.number().int().optional(),
  tier: z.string()
}).strict();

export const InviteInfoUncheckedCreateInputSchema: z.ZodType<Prisma.InviteInfoUncheckedCreateInput> = z.object({
  uid: z.string(),
  code: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  availableInviteCount: z.number().int(),
  inviteHistoryCount: z.number().int().optional(),
  tier: z.string()
}).strict();

export const InviteInfoUpdateInputSchema: z.ZodType<Prisma.InviteInfoUpdateInput> = z.object({
  uid: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  code: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  availableInviteCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  inviteHistoryCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  tier: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const InviteInfoUncheckedUpdateInputSchema: z.ZodType<Prisma.InviteInfoUncheckedUpdateInput> = z.object({
  uid: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  code: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  availableInviteCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  inviteHistoryCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  tier: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const InviteInfoCreateManyInputSchema: z.ZodType<Prisma.InviteInfoCreateManyInput> = z.object({
  uid: z.string(),
  code: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  availableInviteCount: z.number().int(),
  inviteHistoryCount: z.number().int().optional(),
  tier: z.string()
}).strict();

export const InviteInfoUpdateManyMutationInputSchema: z.ZodType<Prisma.InviteInfoUpdateManyMutationInput> = z.object({
  uid: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  code: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  availableInviteCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  inviteHistoryCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  tier: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const InviteInfoUncheckedUpdateManyInputSchema: z.ZodType<Prisma.InviteInfoUncheckedUpdateManyInput> = z.object({
  uid: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  code: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  availableInviteCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  inviteHistoryCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  tier: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
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

export const EnumTypeFilterSchema: z.ZodType<Prisma.EnumTypeFilter> = z.object({
  equals: z.lazy(() => TypeSchema).optional(),
  in: z.lazy(() => TypeSchema).array().optional(),
  notIn: z.lazy(() => TypeSchema).array().optional(),
  not: z.union([ z.lazy(() => TypeSchema),z.lazy(() => NestedEnumTypeFilterSchema) ]).optional(),
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

export const EnumTypeWithAggregatesFilterSchema: z.ZodType<Prisma.EnumTypeWithAggregatesFilter> = z.object({
  equals: z.lazy(() => TypeSchema).optional(),
  in: z.lazy(() => TypeSchema).array().optional(),
  notIn: z.lazy(() => TypeSchema).array().optional(),
  not: z.union([ z.lazy(() => TypeSchema),z.lazy(() => NestedEnumTypeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumTypeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumTypeFilterSchema).optional()
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

export const InviteInfoCountOrderByAggregateInputSchema: z.ZodType<Prisma.InviteInfoCountOrderByAggregateInput> = z.object({
  uid: z.lazy(() => SortOrderSchema).optional(),
  code: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  availableInviteCount: z.lazy(() => SortOrderSchema).optional(),
  inviteHistoryCount: z.lazy(() => SortOrderSchema).optional(),
  tier: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const InviteInfoAvgOrderByAggregateInputSchema: z.ZodType<Prisma.InviteInfoAvgOrderByAggregateInput> = z.object({
  availableInviteCount: z.lazy(() => SortOrderSchema).optional(),
  inviteHistoryCount: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const InviteInfoMaxOrderByAggregateInputSchema: z.ZodType<Prisma.InviteInfoMaxOrderByAggregateInput> = z.object({
  uid: z.lazy(() => SortOrderSchema).optional(),
  code: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  availableInviteCount: z.lazy(() => SortOrderSchema).optional(),
  inviteHistoryCount: z.lazy(() => SortOrderSchema).optional(),
  tier: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const InviteInfoMinOrderByAggregateInputSchema: z.ZodType<Prisma.InviteInfoMinOrderByAggregateInput> = z.object({
  uid: z.lazy(() => SortOrderSchema).optional(),
  code: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  availableInviteCount: z.lazy(() => SortOrderSchema).optional(),
  inviteHistoryCount: z.lazy(() => SortOrderSchema).optional(),
  tier: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const InviteInfoSumOrderByAggregateInputSchema: z.ZodType<Prisma.InviteInfoSumOrderByAggregateInput> = z.object({
  availableInviteCount: z.lazy(() => SortOrderSchema).optional(),
  inviteHistoryCount: z.lazy(() => SortOrderSchema).optional()
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

export const EnumTypeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumTypeFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => TypeSchema).optional()
}).strict();

export const NullableBoolFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableBoolFieldUpdateOperationsInput> = z.object({
  set: z.boolean().optional().nullable()
}).strict();

export const IntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.IntFieldUpdateOperationsInput> = z.object({
  set: z.number().optional(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
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

export const NestedEnumTypeFilterSchema: z.ZodType<Prisma.NestedEnumTypeFilter> = z.object({
  equals: z.lazy(() => TypeSchema).optional(),
  in: z.lazy(() => TypeSchema).array().optional(),
  notIn: z.lazy(() => TypeSchema).array().optional(),
  not: z.union([ z.lazy(() => TypeSchema),z.lazy(() => NestedEnumTypeFilterSchema) ]).optional(),
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

export const NestedEnumTypeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumTypeWithAggregatesFilter> = z.object({
  equals: z.lazy(() => TypeSchema).optional(),
  in: z.lazy(() => TypeSchema).array().optional(),
  notIn: z.lazy(() => TypeSchema).array().optional(),
  not: z.union([ z.lazy(() => TypeSchema),z.lazy(() => NestedEnumTypeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumTypeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumTypeFilterSchema).optional()
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

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const UserFindFirstArgsSchema: z.ZodType<Prisma.UserFindFirstArgs> = z.object({
  select: UserSelectSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema,UserScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UserFindFirstOrThrowArgsSchema: z.ZodType<Prisma.UserFindFirstOrThrowArgs> = z.object({
  select: UserSelectSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema,UserScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UserFindManyArgsSchema: z.ZodType<Prisma.UserFindManyArgs> = z.object({
  select: UserSelectSchema.optional(),
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
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const UserFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.UserFindUniqueOrThrowArgs> = z.object({
  select: UserSelectSchema.optional(),
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
  where: InviteTierWhereInputSchema.optional(),
  orderBy: z.union([ InviteTierOrderByWithRelationInputSchema.array(),InviteTierOrderByWithRelationInputSchema ]).optional(),
  cursor: InviteTierWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ InviteTierScalarFieldEnumSchema,InviteTierScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const InviteTierFindFirstOrThrowArgsSchema: z.ZodType<Prisma.InviteTierFindFirstOrThrowArgs> = z.object({
  select: InviteTierSelectSchema.optional(),
  where: InviteTierWhereInputSchema.optional(),
  orderBy: z.union([ InviteTierOrderByWithRelationInputSchema.array(),InviteTierOrderByWithRelationInputSchema ]).optional(),
  cursor: InviteTierWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ InviteTierScalarFieldEnumSchema,InviteTierScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const InviteTierFindManyArgsSchema: z.ZodType<Prisma.InviteTierFindManyArgs> = z.object({
  select: InviteTierSelectSchema.optional(),
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
  where: InviteTierWhereUniqueInputSchema,
}).strict() ;

export const InviteTierFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.InviteTierFindUniqueOrThrowArgs> = z.object({
  select: InviteTierSelectSchema.optional(),
  where: InviteTierWhereUniqueInputSchema,
}).strict() ;

export const InviteInfoFindFirstArgsSchema: z.ZodType<Prisma.InviteInfoFindFirstArgs> = z.object({
  select: InviteInfoSelectSchema.optional(),
  where: InviteInfoWhereInputSchema.optional(),
  orderBy: z.union([ InviteInfoOrderByWithRelationInputSchema.array(),InviteInfoOrderByWithRelationInputSchema ]).optional(),
  cursor: InviteInfoWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ InviteInfoScalarFieldEnumSchema,InviteInfoScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const InviteInfoFindFirstOrThrowArgsSchema: z.ZodType<Prisma.InviteInfoFindFirstOrThrowArgs> = z.object({
  select: InviteInfoSelectSchema.optional(),
  where: InviteInfoWhereInputSchema.optional(),
  orderBy: z.union([ InviteInfoOrderByWithRelationInputSchema.array(),InviteInfoOrderByWithRelationInputSchema ]).optional(),
  cursor: InviteInfoWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ InviteInfoScalarFieldEnumSchema,InviteInfoScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const InviteInfoFindManyArgsSchema: z.ZodType<Prisma.InviteInfoFindManyArgs> = z.object({
  select: InviteInfoSelectSchema.optional(),
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
  where: InviteInfoWhereUniqueInputSchema,
}).strict() ;

export const InviteInfoFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.InviteInfoFindUniqueOrThrowArgs> = z.object({
  select: InviteInfoSelectSchema.optional(),
  where: InviteInfoWhereUniqueInputSchema,
}).strict() ;

export const UserCreateArgsSchema: z.ZodType<Prisma.UserCreateArgs> = z.object({
  select: UserSelectSchema.optional(),
  data: z.union([ UserCreateInputSchema,UserUncheckedCreateInputSchema ]),
}).strict() ;

export const UserUpsertArgsSchema: z.ZodType<Prisma.UserUpsertArgs> = z.object({
  select: UserSelectSchema.optional(),
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
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const UserUpdateArgsSchema: z.ZodType<Prisma.UserUpdateArgs> = z.object({
  select: UserSelectSchema.optional(),
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
  data: z.union([ InviteTierCreateInputSchema,InviteTierUncheckedCreateInputSchema ]),
}).strict() ;

export const InviteTierUpsertArgsSchema: z.ZodType<Prisma.InviteTierUpsertArgs> = z.object({
  select: InviteTierSelectSchema.optional(),
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
  where: InviteTierWhereUniqueInputSchema,
}).strict() ;

export const InviteTierUpdateArgsSchema: z.ZodType<Prisma.InviteTierUpdateArgs> = z.object({
  select: InviteTierSelectSchema.optional(),
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
  data: z.union([ InviteInfoCreateInputSchema,InviteInfoUncheckedCreateInputSchema ]),
}).strict() ;

export const InviteInfoUpsertArgsSchema: z.ZodType<Prisma.InviteInfoUpsertArgs> = z.object({
  select: InviteInfoSelectSchema.optional(),
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
  where: InviteInfoWhereUniqueInputSchema,
}).strict() ;

export const InviteInfoUpdateArgsSchema: z.ZodType<Prisma.InviteInfoUpdateArgs> = z.object({
  select: InviteInfoSelectSchema.optional(),
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