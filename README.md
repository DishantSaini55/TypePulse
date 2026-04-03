<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&height=250&section=header&text=TypePulse&fontSize=90&animation=fadeIn&fontAlignY=38&desc=The%20ultimate%20all-in-one%20platform%20for%20project%20management&descAlignY=51&descAlign=62" alt="TypePulse Header" />
</div>

<p align="center">
  <a href="https://github.com/DishantSaini55/TypePulse">
    <img src="https://img.shields.io/badge/Next.js-14.1-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
  </a>
  <a href="https://www.typescriptlang.org/">
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  </a>
  <a href="https://tailwindcss.com/">
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  </a>
  <a href="https://www.prisma.io/">
    <img src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white" alt="Prisma" />
  </a>
  <a href="https://stripe.com/">
    <img src="https://img.shields.io/badge/Stripe-626CD9?style=for-the-badge&logo=Stripe&logoColor=white" alt="Stripe" />
  </a>
</p>

---

## 🚀 Welcome to TypePulse

**TypePulse** is a robust and highly interactive task management application designed to bring your team together. Drawing inspiration from top-tier project management tools like Trello, it features seamless drag-and-drop boards, organizational workspaces, real-time board updates, secure authentication, and a lightning-fast PostgreSQL database backend.

---

## ✨ Features

- 🏢 **Workspaces & Organizations:** Create teams, manage roles, and invite members effortlessly using Clerk.
- 📋 **Interactive Boards:** Fully functional drag-and-drop lists and task cards for a smooth, visual workflow.
- 🎨 **Beautiful UI:** Styled with Tailwind CSS and Radix UI components, enhanced with smooth animations.
- 🔒 **Secure Authentication:** Rock-solid login and registration powered by Clerk.
- 🗄️ **Database & ORM:** Fast PostgreSQL connection with Supabase, managed gracefully via Prisma.
- 💳 **Stripe Integration:** Built-in subscription management and Pro-tier upgrades.
- 🖼️ **Unsplash Integration:** Customize your boards with stunning, dynamic cover images.
- ⚡ **Optimistic UI Updates:** Blazing fast interactions using React `useReducer` and `useAction` hooks.

---

## 🛠️ Tech Stack

| Category | Technologies |
| :--- | :--- |
| **Frontend** | Next.js 14 (App Router), React 18, Tailwind CSS, Radix UI, Zustand, Redux Toolkit |
| **Backend** | Next.js API Routes, Server Actions |
| **Database & ORM** | PostgreSQL (Supabase), Prisma ORM |
| **Authentication** | Clerk |
| **Payments** | Stripe |
| **Integrations**| Unsplash API |
| **Drag & Drop** | `@hello-pangea/dnd` |

---

## 📸 Sneak Peek

Here is a glimpse of the platform in action:

<div align="center">
  <h3>Organization Boards</h3>
  <img src="https://raw.githubusercontent.com/DishantSaini55/TypePulse/main/public/boards.png" alt="Organization Boards Dashboard" width="800" style="border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1); margin-bottom: 20px;" />

  <h3>Member Management</h3>
  <img src="https://raw.githubusercontent.com/DishantSaini55/TypePulse/main/public/members.png" alt="Organization Members Management" width="800" style="border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);" />
</div>

---

## 🚀 Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or higher)
- [pnpm](https://pnpm.io/) (Recommended package manager)
- A [Supabase](https://supabase.com/) account for the database
- A [Clerk](https://clerk.com/) account for authentication

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/DishantSaini55/TypePulse.git
   cd TypePulse
   ```

2. **Install the dependencies**
   ```bash
   pnpm install
   ```

3. **Set up Environment Variables**
   Create a `.env` file in the root directory and add the following keys. Refe to `.env.example` if available.
   
   ```env
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
   CLERK_SECRET_KEY=
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
   NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

   DATABASE_URL= # Your Supabase Postgres URL

   NEXT_PUBLIC_UNSPLASH_ACCESS_KEY=

   STRIPE_API_KEY=
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
   STRIPE_WEBHOOK_SECRET=
   ```

4. **Initialize the Database**
   Push the Prisma schema to your database.
   ```bash
   pnpm prisma generate
   pnpm prisma db push
   ```

5. **Start the development server**
   ```bash
   pnpm dev
   ```
   Navigate to [http://localhost:3000](http://localhost:3000) to see the app running!

---

## 📂 Project Structure

```text
TypePulse/
├── prisma/               # Database schema and migrations
├── src/
│   ├── action/           # Next.js Server Actions (CRUD for boards, lists, cards)
│   ├── app/              # App Router pages and API routes
│   ├── components/       # Reusable UI components (Modals, Forms, Layouts)
│   ├── config/           # Site configuration and meta details
│   ├── constants/        # Static assets and hardcoded values
│   ├── hooks/            # Custom React hooks (useAction, useMobileSidebar)
│   └── lib/              # Utility functions, Stripe, Prisma, Unsplash setup
├── public/               # Static assets
└── tailwind.config.ts    # Tailwind styling configuration
```

---

## 🤝 Contributing

Contributions are always welcome! Whether it's a bug report, feature request, or a pull request, your input is highly valued.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">
  <b>Built with ❤️ by <a href="https://github.com/DishantSaini55">Dishant</a></b>
</div>

