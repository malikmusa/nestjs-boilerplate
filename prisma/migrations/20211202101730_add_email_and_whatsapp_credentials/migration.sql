-- AlterTable
ALTER TABLE "User" ADD COLUMN     "isEmailAccess" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "isWhatsappAccess" BOOLEAN NOT NULL DEFAULT false;

-- CreateTable
CREATE TABLE "EmailCredentials" (
    "id" SERIAL NOT NULL,
    "host" TEXT NOT NULL,
    "port" INTEGER NOT NULL,
    "secure" BOOLEAN NOT NULL,
    "emailUser" TEXT NOT NULL,
    "emailPassword" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "EmailCredentials_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WhatsappCredentials" (
    "id" SERIAL NOT NULL,
    "primaryPhoneNumber" TEXT NOT NULL,
    "apiKey" TEXT,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WhatsappCredentials_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "EmailCredentials_userId_key" ON "EmailCredentials"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "WhatsappCredentials_userId_key" ON "WhatsappCredentials"("userId");

-- AddForeignKey
ALTER TABLE "EmailCredentials" ADD CONSTRAINT "EmailCredentials_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WhatsappCredentials" ADD CONSTRAINT "EmailCredentials_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
