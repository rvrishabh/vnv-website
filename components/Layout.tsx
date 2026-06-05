import { Header } from "./Header";
import { Footer } from "./Footer";
import { PageTransition } from "./PageTransition";

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-paper">
      <Header />
      <main id="main-content" className="flex-1">
        <PageTransition />
      </main>
      <Footer />
    </div>
  );
}
