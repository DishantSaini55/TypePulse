# TypePulse
The all-in-one platform for project management, task tracking, and collaboration. Created by Dishant.

**TypePulse** is a robust task management application designed to bring your team together. It features drag-and-drop boards, organization workspaces, authentication, and secure databases.

### ? Features
- **Workspaces & Organizations:** Create teams and invite members effortlessly.
- **Interactive Boards:** Drag-and-drop lists and tasks for a visual workflow.
- **Authentication:** Secure login and registration powered by Clerk.
- **Database:** Fast PostgreSQL connection with Prisma and Supabase.
- **Tech Stack:** Built with Next.js 14, TailwindCSS, TypeScript, and modern React components.

## ?? Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) and \pnpm\ installed on your machine.

### Installation

1. Clone the repository locally:
   \\\ash
   git clone https://github.com/DishantSaini55/TypePulse.git
   cd TypePulse
   \\\

2. Install the dependencies:
   \\\ash
   pnpm install
   \\\

3. Set up your Environment Variables:
   Rename \.env.sample\ to \.env\ and add your API keys:
   - **Clerk** (Authentication)
   - **Unsplash** (Board background images)
   - **Supabase** (PostgreSQL Database connection with connection pooling \?pgbouncer=true\)
   - **Stripe** (Optional for Pro upgrades)

4. Initialize the Database:
   \\\ash
   pnpm prisma generate
   pnpm prisma db push
   \\\

5. Start the development server:
   \\\ash
   pnpm dev
   \\\

Navigate to [http://localhost:3000](http://localhost:3000) to see your app running locally!

### ?? Deployment
Easily deploy this project on [Vercel](https://vercel.com/) by connecting your GitHub repository and adding your environment variables.
