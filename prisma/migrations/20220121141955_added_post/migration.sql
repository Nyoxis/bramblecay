-- CreateTable
CREATE TABLE "Post" (
    "title" TEXT NOT NULL,
    "authorId" TEXT,
    "content" JSONB NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Post_title_key" ON "Post"("title");

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
