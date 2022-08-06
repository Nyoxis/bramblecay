/**
 * GQTY AUTO-GENERATED CODE: PLEASE DO NOT MODIFY MANUALLY
 */

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
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
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
}

export interface EnumUserKindFieldUpdateOperationsInput {
  set?: InputMaybe<UserKind>;
}

export interface EnumUserKindFilter {
  equals?: InputMaybe<UserKind>;
  in?: InputMaybe<Array<UserKind>>;
  not?: InputMaybe<NestedEnumUserKindFilter>;
  notIn?: InputMaybe<Array<UserKind>>;
}

export interface JsonFilter {
  equals?: InputMaybe<Scalars["JSON"]>;
  not?: InputMaybe<Scalars["JSON"]>;
}

export interface NestedEnumUserKindFilter {
  equals?: InputMaybe<UserKind>;
  in?: InputMaybe<Array<UserKind>>;
  not?: InputMaybe<NestedEnumUserKindFilter>;
  notIn?: InputMaybe<Array<UserKind>>;
}

export interface NestedStringFilter {
  contains?: InputMaybe<Scalars["String"]>;
  endsWith?: InputMaybe<Scalars["String"]>;
  equals?: InputMaybe<Scalars["String"]>;
  gt?: InputMaybe<Scalars["String"]>;
  gte?: InputMaybe<Scalars["String"]>;
  in?: InputMaybe<Array<Scalars["String"]>>;
  lt?: InputMaybe<Scalars["String"]>;
  lte?: InputMaybe<Scalars["String"]>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars["String"]>>;
  startsWith?: InputMaybe<Scalars["String"]>;
}

export interface NestedStringNullableFilter {
  contains?: InputMaybe<Scalars["String"]>;
  endsWith?: InputMaybe<Scalars["String"]>;
  equals?: InputMaybe<Scalars["String"]>;
  gt?: InputMaybe<Scalars["String"]>;
  gte?: InputMaybe<Scalars["String"]>;
  in?: InputMaybe<Array<Scalars["String"]>>;
  lt?: InputMaybe<Scalars["String"]>;
  lte?: InputMaybe<Scalars["String"]>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars["String"]>>;
  startsWith?: InputMaybe<Scalars["String"]>;
}

export interface PostCreateInput {
  author?: InputMaybe<UserCreateNestedOneWithoutPostsInput>;
  content: Scalars["JSON"];
  title: Scalars["String"];
}

export interface PostCreateManyAuthorInput {
  content: Scalars["JSON"];
  title: Scalars["String"];
}

export interface PostCreateManyAuthorInputEnvelope {
  data: Array<PostCreateManyAuthorInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
}

export interface PostCreateNestedManyWithoutAuthorInput {
  connect?: InputMaybe<Array<PostWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PostCreateOrConnectWithoutAuthorInput>>;
  create?: InputMaybe<Array<PostCreateWithoutAuthorInput>>;
  createMany?: InputMaybe<PostCreateManyAuthorInputEnvelope>;
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
  every?: InputMaybe<PostWhereInput>;
  none?: InputMaybe<PostWhereInput>;
  some?: InputMaybe<PostWhereInput>;
}

export interface PostOrderByRelationAggregateInput {
  _count?: InputMaybe<SortOrder>;
}

export interface PostOrderByWithRelationInput {
  author?: InputMaybe<UserOrderByWithRelationInput>;
  authorId?: InputMaybe<SortOrder>;
  content?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
}

export enum PostScalarFieldEnum {
  authorId = "authorId",
  content = "content",
  title = "title",
}

export interface PostUpdateInput {
  author?: InputMaybe<UserUpdateOneWithoutPostsInput>;
  content?: InputMaybe<Scalars["JSON"]>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
}

export interface PostWhereInput {
  AND?: InputMaybe<Array<PostWhereInput>>;
  NOT?: InputMaybe<Array<PostWhereInput>>;
  OR?: InputMaybe<Array<PostWhereInput>>;
  author?: InputMaybe<UserRelationFilter>;
  authorId?: InputMaybe<StringNullableFilter>;
  content?: InputMaybe<JsonFilter>;
  title?: InputMaybe<StringFilter>;
}

export interface PostWhereUniqueInput {
  title?: InputMaybe<Scalars["String"]>;
}

export enum QueryMode {
  default = "default",
  insensitive = "insensitive",
}

export enum SortOrder {
  asc = "asc",
  desc = "desc",
}

export interface StringFieldUpdateOperationsInput {
  set?: InputMaybe<Scalars["String"]>;
}

export interface StringFilter {
  contains?: InputMaybe<Scalars["String"]>;
  endsWith?: InputMaybe<Scalars["String"]>;
  equals?: InputMaybe<Scalars["String"]>;
  gt?: InputMaybe<Scalars["String"]>;
  gte?: InputMaybe<Scalars["String"]>;
  in?: InputMaybe<Array<Scalars["String"]>>;
  lt?: InputMaybe<Scalars["String"]>;
  lte?: InputMaybe<Scalars["String"]>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars["String"]>>;
  startsWith?: InputMaybe<Scalars["String"]>;
}

export interface StringNullableFilter {
  contains?: InputMaybe<Scalars["String"]>;
  endsWith?: InputMaybe<Scalars["String"]>;
  equals?: InputMaybe<Scalars["String"]>;
  gt?: InputMaybe<Scalars["String"]>;
  gte?: InputMaybe<Scalars["String"]>;
  in?: InputMaybe<Array<Scalars["String"]>>;
  lt?: InputMaybe<Scalars["String"]>;
  lte?: InputMaybe<Scalars["String"]>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars["String"]>>;
  startsWith?: InputMaybe<Scalars["String"]>;
}

export interface UserCreateInput {
  email: Scalars["String"];
  firstName: Scalars["String"];
  id?: InputMaybe<Scalars["String"]>;
  kind?: InputMaybe<UserKind>;
  lastName: Scalars["String"];
  password: Scalars["String"];
  posts?: InputMaybe<PostCreateNestedManyWithoutAuthorInput>;
}

export interface UserCreateNestedOneWithoutPostsInput {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutPostsInput>;
  create?: InputMaybe<UserCreateWithoutPostsInput>;
}

export interface UserCreateOrConnectWithoutPostsInput {
  create: UserCreateWithoutPostsInput;
  where: UserWhereUniqueInput;
}

export interface UserCreateWithoutPostsInput {
  email: Scalars["String"];
  firstName: Scalars["String"];
  id?: InputMaybe<Scalars["String"]>;
  kind?: InputMaybe<UserKind>;
  lastName: Scalars["String"];
  password: Scalars["String"];
}

export enum UserKind {
  ADMIN = "ADMIN",
  NORMAL = "NORMAL",
}

export interface UserOrderByWithRelationInput {
  email?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  kind?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  posts?: InputMaybe<PostOrderByRelationAggregateInput>;
}

export interface UserRelationFilter {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
}

export enum UserScalarFieldEnum {
  email = "email",
  firstName = "firstName",
  id = "id",
  kind = "kind",
  lastName = "lastName",
  password = "password",
}

export interface UserUpdateOneWithoutPostsInput {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutPostsInput>;
  create?: InputMaybe<UserCreateWithoutPostsInput>;
  delete?: InputMaybe<Scalars["Boolean"]>;
  disconnect?: InputMaybe<Scalars["Boolean"]>;
  update?: InputMaybe<UserUpdateWithoutPostsInput>;
  upsert?: InputMaybe<UserUpsertWithoutPostsInput>;
}

export interface UserUpdateWithoutPostsInput {
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  firstName?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  kind?: InputMaybe<EnumUserKindFieldUpdateOperationsInput>;
  lastName?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
}

export interface UserUpsertWithoutPostsInput {
  create: UserCreateWithoutPostsInput;
  update: UserUpdateWithoutPostsInput;
}

export interface UserWhereInput {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  email?: InputMaybe<StringFilter>;
  firstName?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  kind?: InputMaybe<EnumUserKindFilter>;
  lastName?: InputMaybe<StringFilter>;
  password?: InputMaybe<StringFilter>;
  posts?: InputMaybe<PostListRelationFilter>;
}

export interface UserWhereUniqueInput {
  email?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
}

export const scalarsEnumsHash: import("gqty").ScalarsEnumsHash = {
  Boolean: true,
  Int: true,
  JSON: true,
  PostScalarFieldEnum: true,
  QueryMode: true,
  SortOrder: true,
  String: true,
  Upload: true,
  UserKind: true,
  UserScalarFieldEnum: true,
};
export const generatedSchema = {
  EnumUserKindFieldUpdateOperationsInput: { set: { __type: "UserKind" } },
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
  PostOrderByWithRelationInput: {
    author: { __type: "UserOrderByWithRelationInput" },
    authorId: { __type: "SortOrder" },
    content: { __type: "SortOrder" },
    title: { __type: "SortOrder" },
  },
  PostUpdateInput: {
    author: { __type: "UserUpdateOneWithoutPostsInput" },
    content: { __type: "JSON" },
    title: { __type: "StringFieldUpdateOperationsInput" },
  },
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
  StringFieldUpdateOperationsInput: { set: { __type: "String" } },
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
  UserUpdateOneWithoutPostsInput: {
    connect: { __type: "UserWhereUniqueInput" },
    connectOrCreate: { __type: "UserCreateOrConnectWithoutPostsInput" },
    create: { __type: "UserCreateWithoutPostsInput" },
    delete: { __type: "Boolean" },
    disconnect: { __type: "Boolean" },
    update: { __type: "UserUpdateWithoutPostsInput" },
    upsert: { __type: "UserUpsertWithoutPostsInput" },
  },
  UserUpdateWithoutPostsInput: {
    email: { __type: "StringFieldUpdateOperationsInput" },
    firstName: { __type: "StringFieldUpdateOperationsInput" },
    id: { __type: "StringFieldUpdateOperationsInput" },
    kind: { __type: "EnumUserKindFieldUpdateOperationsInput" },
    lastName: { __type: "StringFieldUpdateOperationsInput" },
    password: { __type: "StringFieldUpdateOperationsInput" },
  },
  UserUpsertWithoutPostsInput: {
    create: { __type: "UserCreateWithoutPostsInput!" },
    update: { __type: "UserUpdateWithoutPostsInput!" },
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
  mutation: {
    __typename: { __type: "String!" },
    createPost: { __type: "Post!", __args: { data: "PostCreateInput!" } },
    createUser: { __type: "User!", __args: { data: "UserCreateInput!" } },
    deletePost: { __type: "Post", __args: { where: "PostWhereUniqueInput!" } },
    deleteUser: { __type: "User", __args: { where: "UserWhereUniqueInput!" } },
    logout: { __type: "Boolean!" },
    updatePost: {
      __type: "Post",
      __args: {
        data: "PostUpdateInput!",
        file: "Upload!",
        where: "PostWhereUniqueInput!",
      },
    },
  },
  query: {
    __typename: { __type: "String!" },
    currentUser: { __type: "User" },
    post: { __type: "Post", __args: { where: "PostWhereUniqueInput!" } },
    posts: {
      __type: "[Post!]!",
      __args: {
        cursor: "PostWhereUniqueInput",
        distinct: "[PostScalarFieldEnum!]",
        orderBy: "[PostOrderByWithRelationInput!]",
        skip: "Int",
        take: "Int",
        where: "PostWhereInput",
      },
    },
    users: {
      __type: "[User!]!",
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
  subscription: {},
} as const;

export interface Post {
  __typename?: "Post";
  authorId?: Maybe<ScalarsEnums["String"]>;
  content: ScalarsEnums["JSON"];
  title: ScalarsEnums["String"];
}

export interface User {
  __typename?: "User";
  _count?: Maybe<UserCount>;
  email: ScalarsEnums["String"];
  firstName: ScalarsEnums["String"];
  id: ScalarsEnums["String"];
  kind: ScalarsEnums["UserKind"];
  lastName: ScalarsEnums["String"];
  password: ScalarsEnums["String"];
}

export interface UserCount {
  __typename?: "UserCount";
  posts: ScalarsEnums["Int"];
}

export interface Mutation {
  __typename?: "Mutation";
  createPost: (args: { data: PostCreateInput }) => Post;
  createUser: (args: { data: UserCreateInput }) => User;
  deletePost: (args: { where: PostWhereUniqueInput }) => Maybe<Post>;
  deleteUser: (args: { where: UserWhereUniqueInput }) => Maybe<User>;
  logout: ScalarsEnums["Boolean"];
  updatePost: (args: {
    data: PostUpdateInput;
    file: Scalars["Upload"];
    where: PostWhereUniqueInput;
  }) => Maybe<Post>;
}

export interface Query {
  __typename?: "Query";
  currentUser?: Maybe<User>;
  post: (args: { where: PostWhereUniqueInput }) => Maybe<Post>;
  posts: (args?: {
    cursor?: Maybe<PostWhereUniqueInput>;
    distinct?: Maybe<Array<PostScalarFieldEnum>>;
    orderBy?: Maybe<Array<PostOrderByWithRelationInput>>;
    skip?: Maybe<Scalars["Int"]>;
    take?: Maybe<Scalars["Int"]>;
    where?: Maybe<PostWhereInput>;
  }) => Array<Post>;
  users: (args?: {
    cursor?: Maybe<UserWhereUniqueInput>;
    distinct?: Maybe<Array<UserScalarFieldEnum>>;
    orderBy?: Maybe<Array<UserOrderByWithRelationInput>>;
    skip?: Maybe<Scalars["Int"]>;
    take?: Maybe<Scalars["Int"]>;
    where?: Maybe<UserWhereInput>;
  }) => Array<User>;
}

export interface Subscription {
  __typename?: "Subscription";
}

export interface SchemaObjectTypes {
  Mutation: Mutation;
  Post: Post;
  Query: Query;
  Subscription: Subscription;
  User: User;
  UserCount: UserCount;
}
export type SchemaObjectTypesNames =
  | "Mutation"
  | "Post"
  | "Query"
  | "Subscription"
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
  PostScalarFieldEnum: PostScalarFieldEnum | undefined;
  QueryMode: QueryMode | undefined;
  SortOrder: SortOrder | undefined;
  UserKind: UserKind | undefined;
  UserScalarFieldEnum: UserScalarFieldEnum | undefined;
}
