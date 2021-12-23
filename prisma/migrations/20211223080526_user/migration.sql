/*
  Warnings:

  - You are about to drop the column `isEmailAccess` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `isWhatsappAccess` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `EmailCredentials` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `EmailSchedule` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `WhatsappCredentials` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `WhatsappSchedule` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "EmailCredentials" DROP CONSTRAINT "EmailCredentials_userId_fkey";

-- DropForeignKey
ALTER TABLE "EmailSchedule" DROP CONSTRAINT "EmailSchedule_userId_fkey";

-- DropForeignKey
ALTER TABLE "WhatsappCredentials" DROP CONSTRAINT "EmailCredentials_userId_fkey";

-- DropForeignKey
ALTER TABLE "WhatsappSchedule" DROP CONSTRAINT "WhatsappSchedule_userId_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "isEmailAccess",
DROP COLUMN "isWhatsappAccess";

-- DropTable
DROP TABLE "EmailCredentials";

-- DropTable
DROP TABLE "EmailSchedule";

-- DropTable
DROP TABLE "WhatsappCredentials";

-- DropTable
DROP TABLE "WhatsappSchedule";
