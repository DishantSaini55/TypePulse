import Header from "./_components/Header/Header";
import { ClerkProvider } from "@clerk/nextjs";
const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider>
      {/* Header */}
      <Header />
      {children}

      {/* Footer */}
      <footer className="w-full py-4 text-center text-sm text-gray-500 border-t mt-8">
        &copy; {new Date().getFullYear()} TypePulse. Created by Dishant.
      </footer>
    </ClerkProvider>
  );
};

export default MarketingLayout;
