import { useEffect } from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import LatestPost from "./components/sections/LatestPost";
import Apps from "./components/sections/Apps";
import Cta from "./components/sections/Cta";

export default function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div className="cs">
      <Header />
      <Hero />
      <LatestPost />
      <Apps />
      <Cta />
      <Footer />
    </div>
  );
}
