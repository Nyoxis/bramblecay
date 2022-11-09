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
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: string;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
}

export interface DateTimeFieldUpdateOperationsInput {
  set?: InputMaybe<Scalars["DateTime"]>;
}

export interface DateTimeFilter {
  equals?: InputMaybe<Scalars["DateTime"]>;
  gt?: InputMaybe<Scalars["DateTime"]>;
  gte?: InputMaybe<Scalars["DateTime"]>;
  in?: InputMaybe<Array<Scalars["DateTime"]>>;
  lt?: InputMaybe<Scalars["DateTime"]>;
  lte?: InputMaybe<Scalars["DateTime"]>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars["DateTime"]>>;
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

export interface ImageCreateInput {
  description?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  post?: InputMaybe<PostCreateNestedManyWithoutImagesInput>;
  thumbnail: Scalars["String"];
  uploadTime?: InputMaybe<Scalars["DateTime"]>;
}

export interface ImageCreateNestedManyWithoutPostInput {
  connect?: InputMaybe<Array<ImageWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ImageCreateOrConnectWithoutPostInput>>;
  create?: InputMaybe<Array<ImageCreateWithoutPostInput>>;
}

export interface ImageCreateOrConnectWithoutPostInput {
  create: ImageCreateWithoutPostInput;
  where: ImageWhereUniqueInput;
}

export interface ImageCreateWithoutPostInput {
  description?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  thumbnail: Scalars["String"];
  uploadTime?: InputMaybe<Scalars["DateTime"]>;
}

export interface ImageListRelationFilter {
  every?: InputMaybe<ImageWhereInput>;
  none?: InputMaybe<ImageWhereInput>;
  some?: InputMaybe<ImageWhereInput>;
}

export interface ImageOrderByRelationAggregateInput {
  _count?: InputMaybe<SortOrder>;
}

export interface ImageOrderByWithRelationInput {
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  post?: InputMaybe<PostOrderByRelationAggregateInput>;
  thumbnail?: InputMaybe<SortOrder>;
  uploadTime?: InputMaybe<SortOrder>;
}

export enum ImageScalarFieldEnum {
  description = "description",
  id = "id",
  thumbnail = "thumbnail",
  uploadTime = "uploadTime",
}

export interface ImageScalarWhereInput {
  AND?: InputMaybe<Array<ImageScalarWhereInput>>;
  NOT?: InputMaybe<Array<ImageScalarWhereInput>>;
  OR?: InputMaybe<Array<ImageScalarWhereInput>>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  thumbnail?: InputMaybe<StringFilter>;
  uploadTime?: InputMaybe<DateTimeFilter>;
}

export interface ImageUpdateManyMutationInput {
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  thumbnail?: InputMaybe<StringFieldUpdateOperationsInput>;
  uploadTime?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
}

export interface ImageUpdateManyWithWhereWithoutPostInput {
  data: ImageUpdateManyMutationInput;
  where: ImageScalarWhereInput;
}

export interface ImageUpdateManyWithoutPostNestedInput {
  connect?: InputMaybe<Array<ImageWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ImageCreateOrConnectWithoutPostInput>>;
  create?: InputMaybe<Array<ImageCreateWithoutPostInput>>;
  delete?: InputMaybe<Array<ImageWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ImageScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ImageWhereUniqueInput>>;
  set?: InputMaybe<Array<ImageWhereUniqueInput>>;
  update?: InputMaybe<Array<ImageUpdateWithWhereUniqueWithoutPostInput>>;
  updateMany?: InputMaybe<Array<ImageUpdateManyWithWhereWithoutPostInput>>;
  upsert?: InputMaybe<Array<ImageUpsertWithWhereUniqueWithoutPostInput>>;
}

export interface ImageUpdateWithWhereUniqueWithoutPostInput {
  data: ImageUpdateWithoutPostInput;
  where: ImageWhereUniqueInput;
}

export interface ImageUpdateWithoutPostInput {
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  thumbnail?: InputMaybe<StringFieldUpdateOperationsInput>;
  uploadTime?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
}

export interface ImageUpsertWithWhereUniqueWithoutPostInput {
  create: ImageCreateWithoutPostInput;
  update: ImageUpdateWithoutPostInput;
  where: ImageWhereUniqueInput;
}

export interface ImageWhereInput {
  AND?: InputMaybe<Array<ImageWhereInput>>;
  NOT?: InputMaybe<Array<ImageWhereInput>>;
  OR?: InputMaybe<Array<ImageWhereInput>>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  post?: InputMaybe<PostListRelationFilter>;
  thumbnail?: InputMaybe<StringFilter>;
  uploadTime?: InputMaybe<DateTimeFilter>;
}

export interface ImageWhereUniqueInput {
  id?: InputMaybe<Scalars["String"]>;
}

export interface JsonFilter {
  array_contains?: InputMaybe<Scalars["JSON"]>;
  array_ends_with?: InputMaybe<Scalars["JSON"]>;
  array_starts_with?: InputMaybe<Scalars["JSON"]>;
  equals?: InputMaybe<Scalars["JSON"]>;
  gt?: InputMaybe<Scalars["JSON"]>;
  gte?: InputMaybe<Scalars["JSON"]>;
  lt?: InputMaybe<Scalars["JSON"]>;
  lte?: InputMaybe<Scalars["JSON"]>;
  not?: InputMaybe<Scalars["JSON"]>;
  path?: InputMaybe<Array<Scalars["String"]>>;
  string_contains?: InputMaybe<Scalars["String"]>;
  string_ends_with?: InputMaybe<Scalars["String"]>;
  string_starts_with?: InputMaybe<Scalars["String"]>;
}

export interface NestedDateTimeFilter {
  equals?: InputMaybe<Scalars["DateTime"]>;
  gt?: InputMaybe<Scalars["DateTime"]>;
  gte?: InputMaybe<Scalars["DateTime"]>;
  in?: InputMaybe<Array<Scalars["DateTime"]>>;
  lt?: InputMaybe<Scalars["DateTime"]>;
  lte?: InputMaybe<Scalars["DateTime"]>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars["DateTime"]>>;
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

export interface NullableStringFieldUpdateOperationsInput {
  set?: InputMaybe<Scalars["String"]>;
}

export interface PostCreateInput {
  author?: InputMaybe<UserCreateNestedOneWithoutPostsInput>;
  content: Scalars["JSON"];
  images?: InputMaybe<ImageCreateNestedManyWithoutPostInput>;
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

export interface PostCreateNestedManyWithoutImagesInput {
  connect?: InputMaybe<Array<PostWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PostCreateOrConnectWithoutImagesInput>>;
  create?: InputMaybe<Array<PostCreateWithoutImagesInput>>;
}

export interface PostCreateOrConnectWithoutAuthorInput {
  create: PostCreateWithoutAuthorInput;
  where: PostWhereUniqueInput;
}

export interface PostCreateOrConnectWithoutImagesInput {
  create: PostCreateWithoutImagesInput;
  where: PostWhereUniqueInput;
}

export interface PostCreateWithoutAuthorInput {
  content: Scalars["JSON"];
  images?: InputMaybe<ImageCreateNestedManyWithoutPostInput>;
  title: Scalars["String"];
}

export interface PostCreateWithoutImagesInput {
  author?: InputMaybe<UserCreateNestedOneWithoutPostsInput>;
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
  images?: InputMaybe<ImageOrderByRelationAggregateInput>;
  title?: InputMaybe<SortOrder>;
}

export enum PostScalarFieldEnum {
  authorId = "authorId",
  content = "content",
  title = "title",
}

export interface PostUpdateInput {
  author?: InputMaybe<UserUpdateOneWithoutPostsNestedInput>;
  content?: InputMaybe<Scalars["JSON"]>;
  images?: InputMaybe<ImageUpdateManyWithoutPostNestedInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
}

export interface PostWhereInput {
  AND?: InputMaybe<Array<PostWhereInput>>;
  NOT?: InputMaybe<Array<PostWhereInput>>;
  OR?: InputMaybe<Array<PostWhereInput>>;
  author?: InputMaybe<UserRelationFilter>;
  authorId?: InputMaybe<StringNullableFilter>;
  content?: InputMaybe<JsonFilter>;
  images?: InputMaybe<ImageListRelationFilter>;
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

export interface UserUpdateOneWithoutPostsNestedInput {
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
  DateTime: true,
  ImageScalarFieldEnum: true,
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
  DateTimeFieldUpdateOperationsInput: { set: { __type: "DateTime" } },
  DateTimeFilter: {
    equals: { __type: "DateTime" },
    gt: { __type: "DateTime" },
    gte: { __type: "DateTime" },
    in: { __type: "[DateTime!]" },
    lt: { __type: "DateTime" },
    lte: { __type: "DateTime" },
    not: { __type: "NestedDateTimeFilter" },
    notIn: { __type: "[DateTime!]" },
  },
  EnumUserKindFieldUpdateOperationsInput: { set: { __type: "UserKind" } },
  EnumUserKindFilter: {
    equals: { __type: "UserKind" },
    in: { __type: "[UserKind!]" },
    not: { __type: "NestedEnumUserKindFilter" },
    notIn: { __type: "[UserKind!]" },
  },
  Image: {
    __typename: { __type: "String!" },
    _count: { __type: "ImageCount" },
    description: { __type: "String" },
    id: { __type: "String!" },
    thumbnail: { __type: "String!" },
    uploadTime: { __type: "DateTime!" },
  },
  ImageCount: { __typename: { __type: "String!" }, post: { __type: "Int!" } },
  ImageCreateInput: {
    description: { __type: "String" },
    id: { __type: "String" },
    post: { __type: "PostCreateNestedManyWithoutImagesInput" },
    thumbnail: { __type: "String!" },
    uploadTime: { __type: "DateTime" },
  },
  ImageCreateNestedManyWithoutPostInput: {
    connect: { __type: "[ImageWhereUniqueInput!]" },
    connectOrCreate: { __type: "[ImageCreateOrConnectWithoutPostInput!]" },
    create: { __type: "[ImageCreateWithoutPostInput!]" },
  },
  ImageCreateOrConnectWithoutPostInput: {
    create: { __type: "ImageCreateWithoutPostInput!" },
    where: { __type: "ImageWhereUniqueInput!" },
  },
  ImageCreateWithoutPostInput: {
    description: { __type: "String" },
    id: { __type: "String" },
    thumbnail: { __type: "String!" },
    uploadTime: { __type: "DateTime" },
  },
  ImageListRelationFilter: {
    every: { __type: "ImageWhereInput" },
    none: { __type: "ImageWhereInput" },
    some: { __type: "ImageWhereInput" },
  },
  ImageOrderByRelationAggregateInput: { _count: { __type: "SortOrder" } },
  ImageOrderByWithRelationInput: {
    description: { __type: "SortOrder" },
    id: { __type: "SortOrder" },
    post: { __type: "PostOrderByRelationAggregateInput" },
    thumbnail: { __type: "SortOrder" },
    uploadTime: { __type: "SortOrder" },
  },
  ImageScalarWhereInput: {
    AND: { __type: "[ImageScalarWhereInput!]" },
    NOT: { __type: "[ImageScalarWhereInput!]" },
    OR: { __type: "[ImageScalarWhereInput!]" },
    description: { __type: "StringNullableFilter" },
    id: { __type: "StringFilter" },
    thumbnail: { __type: "StringFilter" },
    uploadTime: { __type: "DateTimeFilter" },
  },
  ImageUpdateManyMutationInput: {
    description: { __type: "NullableStringFieldUpdateOperationsInput" },
    id: { __type: "StringFieldUpdateOperationsInput" },
    thumbnail: { __type: "StringFieldUpdateOperationsInput" },
    uploadTime: { __type: "DateTimeFieldUpdateOperationsInput" },
  },
  ImageUpdateManyWithWhereWithoutPostInput: {
    data: { __type: "ImageUpdateManyMutationInput!" },
    where: { __type: "ImageScalarWhereInput!" },
  },
  ImageUpdateManyWithoutPostNestedInput: {
    connect: { __type: "[ImageWhereUniqueInput!]" },
    connectOrCreate: { __type: "[ImageCreateOrConnectWithoutPostInput!]" },
    create: { __type: "[ImageCreateWithoutPostInput!]" },
    delete: { __type: "[ImageWhereUniqueInput!]" },
    deleteMany: { __type: "[ImageScalarWhereInput!]" },
    disconnect: { __type: "[ImageWhereUniqueInput!]" },
    set: { __type: "[ImageWhereUniqueInput!]" },
    update: { __type: "[ImageUpdateWithWhereUniqueWithoutPostInput!]" },
    updateMany: { __type: "[ImageUpdateManyWithWhereWithoutPostInput!]" },
    upsert: { __type: "[ImageUpsertWithWhereUniqueWithoutPostInput!]" },
  },
  ImageUpdateWithWhereUniqueWithoutPostInput: {
    data: { __type: "ImageUpdateWithoutPostInput!" },
    where: { __type: "ImageWhereUniqueInput!" },
  },
  ImageUpdateWithoutPostInput: {
    description: { __type: "NullableStringFieldUpdateOperationsInput" },
    id: { __type: "StringFieldUpdateOperationsInput" },
    thumbnail: { __type: "StringFieldUpdateOperationsInput" },
    uploadTime: { __type: "DateTimeFieldUpdateOperationsInput" },
  },
  ImageUpsertWithWhereUniqueWithoutPostInput: {
    create: { __type: "ImageCreateWithoutPostInput!" },
    update: { __type: "ImageUpdateWithoutPostInput!" },
    where: { __type: "ImageWhereUniqueInput!" },
  },
  ImageWhereInput: {
    AND: { __type: "[ImageWhereInput!]" },
    NOT: { __type: "[ImageWhereInput!]" },
    OR: { __type: "[ImageWhereInput!]" },
    description: { __type: "StringNullableFilter" },
    id: { __type: "StringFilter" },
    post: { __type: "PostListRelationFilter" },
    thumbnail: { __type: "StringFilter" },
    uploadTime: { __type: "DateTimeFilter" },
  },
  ImageWhereUniqueInput: { id: { __type: "String" } },
  JsonFilter: {
    array_contains: { __type: "JSON" },
    array_ends_with: { __type: "JSON" },
    array_starts_with: { __type: "JSON" },
    equals: { __type: "JSON" },
    gt: { __type: "JSON" },
    gte: { __type: "JSON" },
    lt: { __type: "JSON" },
    lte: { __type: "JSON" },
    not: { __type: "JSON" },
    path: { __type: "[String!]" },
    string_contains: { __type: "String" },
    string_ends_with: { __type: "String" },
    string_starts_with: { __type: "String" },
  },
  NestedDateTimeFilter: {
    equals: { __type: "DateTime" },
    gt: { __type: "DateTime" },
    gte: { __type: "DateTime" },
    in: { __type: "[DateTime!]" },
    lt: { __type: "DateTime" },
    lte: { __type: "DateTime" },
    not: { __type: "NestedDateTimeFilter" },
    notIn: { __type: "[DateTime!]" },
  },
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
  NullableStringFieldUpdateOperationsInput: { set: { __type: "String" } },
  Post: {
    __typename: { __type: "String!" },
    _count: { __type: "PostCount" },
    authorId: { __type: "String" },
    content: { __type: "JSON!" },
    title: { __type: "String!" },
  },
  PostCount: { __typename: { __type: "String!" }, images: { __type: "Int!" } },
  PostCreateInput: {
    author: { __type: "UserCreateNestedOneWithoutPostsInput" },
    content: { __type: "JSON!" },
    images: { __type: "ImageCreateNestedManyWithoutPostInput" },
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
  PostCreateNestedManyWithoutImagesInput: {
    connect: { __type: "[PostWhereUniqueInput!]" },
    connectOrCreate: { __type: "[PostCreateOrConnectWithoutImagesInput!]" },
    create: { __type: "[PostCreateWithoutImagesInput!]" },
  },
  PostCreateOrConnectWithoutAuthorInput: {
    create: { __type: "PostCreateWithoutAuthorInput!" },
    where: { __type: "PostWhereUniqueInput!" },
  },
  PostCreateOrConnectWithoutImagesInput: {
    create: { __type: "PostCreateWithoutImagesInput!" },
    where: { __type: "PostWhereUniqueInput!" },
  },
  PostCreateWithoutAuthorInput: {
    content: { __type: "JSON!" },
    images: { __type: "ImageCreateNestedManyWithoutPostInput" },
    title: { __type: "String!" },
  },
  PostCreateWithoutImagesInput: {
    author: { __type: "UserCreateNestedOneWithoutPostsInput" },
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
    images: { __type: "ImageOrderByRelationAggregateInput" },
    title: { __type: "SortOrder" },
  },
  PostUpdateInput: {
    author: { __type: "UserUpdateOneWithoutPostsNestedInput" },
    content: { __type: "JSON" },
    images: { __type: "ImageUpdateManyWithoutPostNestedInput" },
    title: { __type: "StringFieldUpdateOperationsInput" },
  },
  PostWhereInput: {
    AND: { __type: "[PostWhereInput!]" },
    NOT: { __type: "[PostWhereInput!]" },
    OR: { __type: "[PostWhereInput!]" },
    author: { __type: "UserRelationFilter" },
    authorId: { __type: "StringNullableFilter" },
    content: { __type: "JsonFilter" },
    images: { __type: "ImageListRelationFilter" },
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
  UserUpdateOneWithoutPostsNestedInput: {
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
    createImage: {
      __type: "Image!",
      __args: { data: "ImageCreateInput!", image: "Upload!" },
    },
    createPost: { __type: "Post!", __args: { data: "PostCreateInput!" } },
    createUser: { __type: "User!", __args: { data: "UserCreateInput!" } },
    deletePost: { __type: "Post", __args: { where: "PostWhereUniqueInput!" } },
    deleteUser: { __type: "User", __args: { where: "UserWhereUniqueInput!" } },
    logout: { __type: "Boolean!" },
    updatePost: {
      __type: "Post",
      __args: { data: "PostUpdateInput!", where: "PostWhereUniqueInput!" },
    },
  },
  query: {
    __typename: { __type: "String!" },
    currentUser: { __type: "User" },
    images: {
      __type: "[Image!]!",
      __args: {
        cursor: "ImageWhereUniqueInput",
        distinct: "[ImageScalarFieldEnum!]",
        orderBy: "[ImageOrderByWithRelationInput!]",
        skip: "Int",
        take: "Int",
        where: "ImageWhereInput",
      },
    },
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

export interface Image {
  __typename?: "Image";
  _count?: Maybe<ImageCount>;
  description?: Maybe<ScalarsEnums["String"]>;
  id: ScalarsEnums["String"];
  thumbnail: ScalarsEnums["String"];
  uploadTime: ScalarsEnums["DateTime"];
}

export interface ImageCount {
  __typename?: "ImageCount";
  post: ScalarsEnums["Int"];
}

export interface Post {
  __typename?: "Post";
  _count?: Maybe<PostCount>;
  authorId?: Maybe<ScalarsEnums["String"]>;
  content: ScalarsEnums["JSON"];
  title: ScalarsEnums["String"];
}

export interface PostCount {
  __typename?: "PostCount";
  images: ScalarsEnums["Int"];
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
  createImage: (args: {
    data: ImageCreateInput;
    image: Scalars["Upload"];
  }) => Image;
  createPost: (args: { data: PostCreateInput }) => Post;
  createUser: (args: { data: UserCreateInput }) => User;
  deletePost: (args: { where: PostWhereUniqueInput }) => Maybe<Post>;
  deleteUser: (args: { where: UserWhereUniqueInput }) => Maybe<User>;
  logout: ScalarsEnums["Boolean"];
  updatePost: (args: {
    data: PostUpdateInput;
    where: PostWhereUniqueInput;
  }) => Maybe<Post>;
}

export interface Query {
  __typename?: "Query";
  currentUser?: Maybe<User>;
  images: (args?: {
    cursor?: Maybe<ImageWhereUniqueInput>;
    distinct?: Maybe<Array<ImageScalarFieldEnum>>;
    orderBy?: Maybe<Array<ImageOrderByWithRelationInput>>;
    skip?: Maybe<Scalars["Int"]>;
    take?: Maybe<Scalars["Int"]>;
    where?: Maybe<ImageWhereInput>;
  }) => Array<Image>;
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
  Image: Image;
  ImageCount: ImageCount;
  Mutation: Mutation;
  Post: Post;
  PostCount: PostCount;
  Query: Query;
  Subscription: Subscription;
  User: User;
  UserCount: UserCount;
}
export type SchemaObjectTypesNames =
  | "Image"
  | "ImageCount"
  | "Mutation"
  | "Post"
  | "PostCount"
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
  ImageScalarFieldEnum: ImageScalarFieldEnum | undefined;
  PostScalarFieldEnum: PostScalarFieldEnum | undefined;
  QueryMode: QueryMode | undefined;
  SortOrder: SortOrder | undefined;
  UserKind: UserKind | undefined;
  UserScalarFieldEnum: UserScalarFieldEnum | undefined;
}
