/**
 * GQLESS AUTO-GENERATED CODE: PLEASE DO NOT MODIFY MANUALLY
 */

export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
}

export interface EnumUserKindFilter {
  equals?: Maybe<UserKind>;
  in?: Maybe<Array<UserKind>>;
  not?: Maybe<NestedEnumUserKindFilter>;
  notIn?: Maybe<Array<UserKind>>;
}

export interface JsonFilter {
  equals?: Maybe<Scalars["JSON"]>;
  not?: Maybe<Scalars["JSON"]>;
}

export interface NestedEnumUserKindFilter {
  equals?: Maybe<UserKind>;
  in?: Maybe<Array<UserKind>>;
  not?: Maybe<NestedEnumUserKindFilter>;
  notIn?: Maybe<Array<UserKind>>;
}

export interface NestedStringFilter {
  contains?: Maybe<Scalars["String"]>;
  endsWith?: Maybe<Scalars["String"]>;
  equals?: Maybe<Scalars["String"]>;
  gt?: Maybe<Scalars["String"]>;
  gte?: Maybe<Scalars["String"]>;
  in?: Maybe<Array<Scalars["String"]>>;
  lt?: Maybe<Scalars["String"]>;
  lte?: Maybe<Scalars["String"]>;
  not?: Maybe<NestedStringFilter>;
  notIn?: Maybe<Array<Scalars["String"]>>;
  startsWith?: Maybe<Scalars["String"]>;
}

export interface NestedStringNullableFilter {
  contains?: Maybe<Scalars["String"]>;
  endsWith?: Maybe<Scalars["String"]>;
  equals?: Maybe<Scalars["String"]>;
  gt?: Maybe<Scalars["String"]>;
  gte?: Maybe<Scalars["String"]>;
  in?: Maybe<Array<Scalars["String"]>>;
  lt?: Maybe<Scalars["String"]>;
  lte?: Maybe<Scalars["String"]>;
  not?: Maybe<NestedStringNullableFilter>;
  notIn?: Maybe<Array<Scalars["String"]>>;
  startsWith?: Maybe<Scalars["String"]>;
}

export interface PostCreateInput {
  author?: Maybe<UserCreateNestedOneWithoutPostsInput>;
  content: Scalars["JSON"];
  title: Scalars["String"];
}

export interface PostCreateManyAuthorInput {
  content: Scalars["JSON"];
  title: Scalars["String"];
}

export interface PostCreateManyAuthorInputEnvelope {
  data: Array<PostCreateManyAuthorInput>;
  skipDuplicates?: Maybe<Scalars["Boolean"]>;
}

export interface PostCreateNestedManyWithoutAuthorInput {
  connect?: Maybe<Array<PostWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<PostCreateOrConnectWithoutAuthorInput>>;
  create?: Maybe<Array<PostCreateWithoutAuthorInput>>;
  createMany?: Maybe<PostCreateManyAuthorInputEnvelope>;
}

export interface PostCreateOrConnectWithoutAuthorInput {
  create: PostCreateWithoutAuthorInput;
  where: PostWhereUniqueInput;
}

export interface PostCreateWithoutAuthorInput {
  content: Scalars["JSON"];
  title: Scalars["String"];
}

export interface PostListRelationFilter {
  every?: Maybe<PostWhereInput>;
  none?: Maybe<PostWhereInput>;
  some?: Maybe<PostWhereInput>;
}

export interface PostOrderByRelationAggregateInput {
  _count?: Maybe<SortOrder>;
}

export interface PostWhereInput {
  AND?: Maybe<Array<PostWhereInput>>;
  NOT?: Maybe<Array<PostWhereInput>>;
  OR?: Maybe<Array<PostWhereInput>>;
  author?: Maybe<UserRelationFilter>;
  authorId?: Maybe<StringNullableFilter>;
  content?: Maybe<JsonFilter>;
  title?: Maybe<StringFilter>;
}

export interface PostWhereUniqueInput {
  title?: Maybe<Scalars["String"]>;
}

export enum QueryMode {
  default = "default",
  insensitive = "insensitive",
}

export enum SortOrder {
  asc = "asc",
  desc = "desc",
}

export interface StringFilter {
  contains?: Maybe<Scalars["String"]>;
  endsWith?: Maybe<Scalars["String"]>;
  equals?: Maybe<Scalars["String"]>;
  gt?: Maybe<Scalars["String"]>;
  gte?: Maybe<Scalars["String"]>;
  in?: Maybe<Array<Scalars["String"]>>;
  lt?: Maybe<Scalars["String"]>;
  lte?: Maybe<Scalars["String"]>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringFilter>;
  notIn?: Maybe<Array<Scalars["String"]>>;
  startsWith?: Maybe<Scalars["String"]>;
}

export interface StringNullableFilter {
  contains?: Maybe<Scalars["String"]>;
  endsWith?: Maybe<Scalars["String"]>;
  equals?: Maybe<Scalars["String"]>;
  gt?: Maybe<Scalars["String"]>;
  gte?: Maybe<Scalars["String"]>;
  in?: Maybe<Array<Scalars["String"]>>;
  lt?: Maybe<Scalars["String"]>;
  lte?: Maybe<Scalars["String"]>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringNullableFilter>;
  notIn?: Maybe<Array<Scalars["String"]>>;
  startsWith?: Maybe<Scalars["String"]>;
}

export interface UserCreateInput {
  email: Scalars["String"];
  firstName: Scalars["String"];
  id?: Maybe<Scalars["String"]>;
  kind?: Maybe<UserKind>;
  lastName: Scalars["String"];
  password: Scalars["String"];
  posts?: Maybe<PostCreateNestedManyWithoutAuthorInput>;
}

export interface UserCreateNestedOneWithoutPostsInput {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutPostsInput>;
  create?: Maybe<UserCreateWithoutPostsInput>;
}

export interface UserCreateOrConnectWithoutPostsInput {
  create: UserCreateWithoutPostsInput;
  where: UserWhereUniqueInput;
}

export interface UserCreateWithoutPostsInput {
  email: Scalars["String"];
  firstName: Scalars["String"];
  id?: Maybe<Scalars["String"]>;
  kind?: Maybe<UserKind>;
  lastName: Scalars["String"];
  password: Scalars["String"];
}

export enum UserKind {
  ADMIN = "ADMIN",
  NORMAL = "NORMAL",
}

export interface UserOrderByWithRelationInput {
  email?: Maybe<SortOrder>;
  firstName?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  kind?: Maybe<SortOrder>;
  lastName?: Maybe<SortOrder>;
  password?: Maybe<SortOrder>;
  posts?: Maybe<PostOrderByRelationAggregateInput>;
}

export interface UserRelationFilter {
  is?: Maybe<UserWhereInput>;
  isNot?: Maybe<UserWhereInput>;
}

export enum UserScalarFieldEnum {
  email = "email",
  firstName = "firstName",
  id = "id",
  kind = "kind",
  lastName = "lastName",
  password = "password",
}

export interface UserWhereInput {
  AND?: Maybe<Array<UserWhereInput>>;
  NOT?: Maybe<Array<UserWhereInput>>;
  OR?: Maybe<Array<UserWhereInput>>;
  email?: Maybe<StringFilter>;
  firstName?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  kind?: Maybe<EnumUserKindFilter>;
  lastName?: Maybe<StringFilter>;
  password?: Maybe<StringFilter>;
  posts?: Maybe<PostListRelationFilter>;
}

export interface UserWhereUniqueInput {
  email?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
}

export const scalarsEnumsHash: import("gqless").ScalarsEnumsHash = {
  JSON: true,
  Boolean: true,
  String: true,
  Int: true,
  QueryMode: true,
  SortOrder: true,
  UserKind: true,
  UserScalarFieldEnum: true,
};
export const generatedSchema = {
  query: {
    __typename: { __type: "String!" },
    currentUser: { __type: "User!" },
    post: { __type: "Post!", __args: { where: "PostWhereUniqueInput!" } },
    users: {
      __type: "[User]",
      __args: {
        cursor: "UserWhereUniqueInput",
        distinct: "[UserScalarFieldEnum!]",
        orderBy: "[UserOrderByWithRelationInput!]",
        skip: "Int",
        take: "Int",
        where: "UserWhereInput",
      },
    },
  },
  mutation: {
    __typename: { __type: "String!" },
    createPost: { __type: "Post!", __args: { data: "PostCreateInput!" } },
    createUser: { __type: "User!", __args: { data: "UserCreateInput!" } },
    deletePost: { __type: "Post!", __args: { where: "PostWhereUniqueInput!" } },
    deleteUser: { __type: "User!", __args: { where: "UserWhereUniqueInput!" } },
    logout: { __type: "Boolean!" },
  },
  subscription: {},
  EnumUserKindFilter: {
    equals: { __type: "UserKind" },
    in: { __type: "[UserKind!]" },
    not: { __type: "NestedEnumUserKindFilter" },
    notIn: { __type: "[UserKind!]" },
  },
  JsonFilter: { equals: { __type: "JSON" }, not: { __type: "JSON" } },
  NestedEnumUserKindFilter: {
    equals: { __type: "UserKind" },
    in: { __type: "[UserKind!]" },
    not: { __type: "NestedEnumUserKindFilter" },
    notIn: { __type: "[UserKind!]" },
  },
  NestedStringFilter: {
    contains: { __type: "String" },
    endsWith: { __type: "String" },
    equals: { __type: "String" },
    gt: { __type: "String" },
    gte: { __type: "String" },
    in: { __type: "[String!]" },
    lt: { __type: "String" },
    lte: { __type: "String" },
    not: { __type: "NestedStringFilter" },
    notIn: { __type: "[String!]" },
    startsWith: { __type: "String" },
  },
  NestedStringNullableFilter: {
    contains: { __type: "String" },
    endsWith: { __type: "String" },
    equals: { __type: "String" },
    gt: { __type: "String" },
    gte: { __type: "String" },
    in: { __type: "[String!]" },
    lt: { __type: "String" },
    lte: { __type: "String" },
    not: { __type: "NestedStringNullableFilter" },
    notIn: { __type: "[String!]" },
    startsWith: { __type: "String" },
  },
  Post: {
    __typename: { __type: "String!" },
    authorId: { __type: "String" },
    content: { __type: "JSON!" },
    title: { __type: "String!" },
  },
  PostCreateInput: {
    author: { __type: "UserCreateNestedOneWithoutPostsInput" },
    content: { __type: "JSON!" },
    title: { __type: "String!" },
  },
  PostCreateManyAuthorInput: {
    content: { __type: "JSON!" },
    title: { __type: "String!" },
  },
  PostCreateManyAuthorInputEnvelope: {
    data: { __type: "[PostCreateManyAuthorInput!]!" },
    skipDuplicates: { __type: "Boolean" },
  },
  PostCreateNestedManyWithoutAuthorInput: {
    connect: { __type: "[PostWhereUniqueInput!]" },
    connectOrCreate: { __type: "[PostCreateOrConnectWithoutAuthorInput!]" },
    create: { __type: "[PostCreateWithoutAuthorInput!]" },
    createMany: { __type: "PostCreateManyAuthorInputEnvelope" },
  },
  PostCreateOrConnectWithoutAuthorInput: {
    create: { __type: "PostCreateWithoutAuthorInput!" },
    where: { __type: "PostWhereUniqueInput!" },
  },
  PostCreateWithoutAuthorInput: {
    content: { __type: "JSON!" },
    title: { __type: "String!" },
  },
  PostListRelationFilter: {
    every: { __type: "PostWhereInput" },
    none: { __type: "PostWhereInput" },
    some: { __type: "PostWhereInput" },
  },
  PostOrderByRelationAggregateInput: { _count: { __type: "SortOrder" } },
  PostWhereInput: {
    AND: { __type: "[PostWhereInput!]" },
    NOT: { __type: "[PostWhereInput!]" },
    OR: { __type: "[PostWhereInput!]" },
    author: { __type: "UserRelationFilter" },
    authorId: { __type: "StringNullableFilter" },
    content: { __type: "JsonFilter" },
    title: { __type: "StringFilter" },
  },
  PostWhereUniqueInput: { title: { __type: "String" } },
  StringFilter: {
    contains: { __type: "String" },
    endsWith: { __type: "String" },
    equals: { __type: "String" },
    gt: { __type: "String" },
    gte: { __type: "String" },
    in: { __type: "[String!]" },
    lt: { __type: "String" },
    lte: { __type: "String" },
    mode: { __type: "QueryMode" },
    not: { __type: "NestedStringFilter" },
    notIn: { __type: "[String!]" },
    startsWith: { __type: "String" },
  },
  StringNullableFilter: {
    contains: { __type: "String" },
    endsWith: { __type: "String" },
    equals: { __type: "String" },
    gt: { __type: "String" },
    gte: { __type: "String" },
    in: { __type: "[String!]" },
    lt: { __type: "String" },
    lte: { __type: "String" },
    mode: { __type: "QueryMode" },
    not: { __type: "NestedStringNullableFilter" },
    notIn: { __type: "[String!]" },
    startsWith: { __type: "String" },
  },
  User: {
    __typename: { __type: "String!" },
    _count: { __type: "UserCount" },
    email: { __type: "String!" },
    firstName: { __type: "String!" },
    id: { __type: "String!" },
    kind: { __type: "UserKind!" },
    lastName: { __type: "String!" },
    password: { __type: "String!" },
  },
  UserCount: { __typename: { __type: "String!" }, posts: { __type: "Int!" } },
  UserCreateInput: {
    email: { __type: "String!" },
    firstName: { __type: "String!" },
    id: { __type: "String" },
    kind: { __type: "UserKind" },
    lastName: { __type: "String!" },
    password: { __type: "String!" },
    posts: { __type: "PostCreateNestedManyWithoutAuthorInput" },
  },
  UserCreateNestedOneWithoutPostsInput: {
    connect: { __type: "UserWhereUniqueInput" },
    connectOrCreate: { __type: "UserCreateOrConnectWithoutPostsInput" },
    create: { __type: "UserCreateWithoutPostsInput" },
  },
  UserCreateOrConnectWithoutPostsInput: {
    create: { __type: "UserCreateWithoutPostsInput!" },
    where: { __type: "UserWhereUniqueInput!" },
  },
  UserCreateWithoutPostsInput: {
    email: { __type: "String!" },
    firstName: { __type: "String!" },
    id: { __type: "String" },
    kind: { __type: "UserKind" },
    lastName: { __type: "String!" },
    password: { __type: "String!" },
  },
  UserOrderByWithRelationInput: {
    email: { __type: "SortOrder" },
    firstName: { __type: "SortOrder" },
    id: { __type: "SortOrder" },
    kind: { __type: "SortOrder" },
    lastName: { __type: "SortOrder" },
    password: { __type: "SortOrder" },
    posts: { __type: "PostOrderByRelationAggregateInput" },
  },
  UserRelationFilter: {
    is: { __type: "UserWhereInput" },
    isNot: { __type: "UserWhereInput" },
  },
  UserWhereInput: {
    AND: { __type: "[UserWhereInput!]" },
    NOT: { __type: "[UserWhereInput!]" },
    OR: { __type: "[UserWhereInput!]" },
    email: { __type: "StringFilter" },
    firstName: { __type: "StringFilter" },
    id: { __type: "StringFilter" },
    kind: { __type: "EnumUserKindFilter" },
    lastName: { __type: "StringFilter" },
    password: { __type: "StringFilter" },
    posts: { __type: "PostListRelationFilter" },
  },
  UserWhereUniqueInput: {
    email: { __type: "String" },
    id: { __type: "String" },
  },
} as const;

export interface Query {
  __typename: "Query" | undefined;
  currentUser: User;
  post: (args: { where: PostWhereUniqueInput }) => Post;
  users: (args?: {
    cursor?: Maybe<UserWhereUniqueInput>;
    distinct?: Maybe<Array<UserScalarFieldEnum>>;
    orderBy?: Maybe<Array<UserOrderByWithRelationInput>>;
    skip?: Maybe<Scalars["Int"]>;
    take?: Maybe<Scalars["Int"]>;
    where?: Maybe<UserWhereInput>;
  }) => Maybe<Array<Maybe<User>>>;
}

export interface Mutation {
  __typename: "Mutation" | undefined;
  createPost: (args: { data: PostCreateInput }) => Post;
  createUser: (args: { data: UserCreateInput }) => User;
  deletePost: (args: { where: PostWhereUniqueInput }) => Post;
  deleteUser: (args: { where: UserWhereUniqueInput }) => User;
  logout: ScalarsEnums["Boolean"];
}

export interface Subscription {
  __typename: "Subscription" | undefined;
}

export interface Post {
  __typename: "Post" | undefined;
  authorId?: Maybe<ScalarsEnums["String"]>;
  content: ScalarsEnums["JSON"];
  title: ScalarsEnums["String"];
}

export interface User {
  __typename: "User" | undefined;
  _count?: Maybe<UserCount>;
  email: ScalarsEnums["String"];
  firstName: ScalarsEnums["String"];
  id: ScalarsEnums["String"];
  kind: ScalarsEnums["UserKind"];
  lastName: ScalarsEnums["String"];
  password: ScalarsEnums["String"];
}

export interface UserCount {
  __typename: "UserCount" | undefined;
  posts: ScalarsEnums["Int"];
}

export interface SchemaObjectTypes {
  Query: Query;
  Mutation: Mutation;
  Subscription: Subscription;
  Post: Post;
  User: User;
  UserCount: UserCount;
}
export type SchemaObjectTypesNames =
  | "Query"
  | "Mutation"
  | "Subscription"
  | "Post"
  | "User"
  | "UserCount";

export interface GeneratedSchema {
  query: Query;
  mutation: Mutation;
  subscription: Subscription;
}

export type MakeNullable<T> = {
  [K in keyof T]: T[K] | undefined;
};

export interface ScalarsEnums extends MakeNullable<Scalars> {
  QueryMode: QueryMode | undefined;
  SortOrder: SortOrder | undefined;
  UserKind: UserKind | undefined;
  UserScalarFieldEnum: UserScalarFieldEnum | undefined;
}
