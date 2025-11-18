import ClickSpark from "./components/ClickSpark";
import CustomScrollbar from "./components/CustomScrollbar";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Particles from "./components/Particles";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
      <Particles />
      <ClickSpark />
      <CustomScrollbar />
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </main>
  );
}
