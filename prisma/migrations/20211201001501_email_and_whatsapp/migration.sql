/*
  Warnings:

  - You are about to drop the `Schedule` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Schedule" DROP CONSTRAINT "Schedule_userId_fkey";

-- DropTable
DROP TABLE "Schedule";

-- CreateTable
CREATE TABLE "EmailSchedule" (
    "id" SERIAL NOT NULL,
    "to" TEXT[],
    "message" TEXT,
    "sendDate" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "EmailSchedule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WhatsappSchedule" (
    "id" SERIAL NOT NULL,
    "to" TEXT[],
    "message" TEXT,
    "sendDate" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WhatsappSchedule_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "EmailSchedule" ADD CONSTRAINT "EmailSchedule_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WhatsappSchedule" ADD CONSTRAINT "WhatsappSchedule_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
