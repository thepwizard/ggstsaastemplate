-- CreateTable
CREATE TABLE "ProductLaunch" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "userReasons" TEXT NOT NULL,
    "productCode" TEXT NOT NULL,
    "createdDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedDate" TIMESTAMP(3) NOT NULL,
    "isActive" TEXT NOT NULL DEFAULT 'y',

    CONSTRAINT "ProductLaunch_pkey" PRIMARY KEY ("id")
);
