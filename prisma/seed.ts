import { PrismaClient } from '@prisma/client';
import * as fs from 'fs';
import * as path from 'path';

const prisma = new PrismaClient();

async function main() {
  try {
    const sqlFile = path.join(__dirname, 'seed.sql');
    const sql = fs.readFileSync(sqlFile, 'utf8');
    
    // Execute the SQL statements
    await prisma.$executeRawUnsafe(sql);
    
    console.log('Database seeded successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

main(); 