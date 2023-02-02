-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_carmodel" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "version" TEXT NOT NULL,
    "plate" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_carmodel" ("color", "createdAt", "id", "name", "plate", "version") SELECT "color", "createdAt", "id", "name", "plate", "version" FROM "carmodel";
DROP TABLE "carmodel";
ALTER TABLE "new_carmodel" RENAME TO "carmodel";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
