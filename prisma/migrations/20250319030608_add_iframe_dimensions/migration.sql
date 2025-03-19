-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Game" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "gameUrl" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "iframeWidth" INTEGER NOT NULL DEFAULT 800,
    "iframeHeight" INTEGER NOT NULL DEFAULT 600,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Game" ("category", "createdAt", "description", "gameUrl", "id", "imageUrl", "title", "updatedAt") SELECT "category", "createdAt", "description", "gameUrl", "id", "imageUrl", "title", "updatedAt" FROM "Game";
DROP TABLE "Game";
ALTER TABLE "new_Game" RENAME TO "Game";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
