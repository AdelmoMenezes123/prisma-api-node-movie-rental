/*
  Warnings:

  - You are about to drop the column `relase_date_At` on the `Movies` table. All the data in the column will be lost.
  - Added the required column `release_date` to the `Movies` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Movies" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "duration" INTEGER NOT NULL,
    "release_date" DATETIME NOT NULL
);
INSERT INTO "new_Movies" ("duration", "id", "title") SELECT "duration", "id", "title" FROM "Movies";
DROP TABLE "Movies";
ALTER TABLE "new_Movies" RENAME TO "Movies";
CREATE UNIQUE INDEX "Movies_title_key" ON "Movies"("title");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
