# Spaceship Game Platform

A web-based game platform featuring the Proxx game, built with Next.js and Prisma.

## Features

- Play Proxx game directly in browser
- User authentication
- Game ratings and comments
- Favorite games
- Play history tracking
- Responsive design

## Tech Stack

- Next.js 14
- TypeScript
- Prisma
- Tailwind CSS
- NextAuth.js

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/myloften/spaceship.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file with:
   ```
   DATABASE_URL="file:./dev.db"
   NEXTAUTH_SECRET="your-secret-key"
   NEXTAUTH_URL="http://localhost:3000"
   ```

4. Initialize the database:
   ```bash
   npx prisma db push
   npm run seed
   ```

5. Run the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## License

MIT
