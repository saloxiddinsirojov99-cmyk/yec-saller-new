const { PrismaClient } = require('@prisma/client');

// Prisma 7: datasourceUrl konstruktorda qabul qilinmaydi.
// URL prisma.config.ts orqali o'qiladi (process.env.DATABASE_URL).
const prisma = global.prisma || new PrismaClient({
  log: ['error'],
});

// Vercel cold start'larda bitta instance qayta ishlatilsin
if (!global.prisma) {
  global.prisma = prisma;
}

module.exports = prisma;
