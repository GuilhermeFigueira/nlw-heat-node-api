-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "github_id" TEXT NOT NULL,
    "name" INTEGER NOT NULL,
    "avatar_url" TEXT NOT NULL,
    "login" TEXT NOT NULL
);
