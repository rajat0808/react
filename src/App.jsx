import Header from "./components/Header.jsx";
import HeroSection from "./components/HeroSection.jsx";
import CategorySection from "./components/CategorySection.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <CategorySection />
      </main>
      <Footer />
    </>
  );
}
