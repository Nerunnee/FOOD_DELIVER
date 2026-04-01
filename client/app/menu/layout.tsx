import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <div className="ml-6 mt-6 mr-8 mb-12">
        <Header />
        {children}
        <Footer />
      </div>
    </main>
  );
}
