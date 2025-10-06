import Customize from "./components/sections/Customize";
import Download from "./components/sections/Download";
import Extension from "./components/sections/Extension";
import Footer from "./components/sections/Footer";
import Header from "./components/sections/Header";
import HeroSection from "./components/sections/HeroSection";
import Plans from "./components/sections/Plans";
import ProjectManagement from "./components/sections/ProjectManagement";
import Sponsors from "./components/sections/Sponsors";

function App() {
  return (
    <div className="min-h-screen flex flex-col font-primary">
      <Header />

      <main>
        <HeroSection />
        <ProjectManagement />
        <Extension />
        <Customize />
        <Plans />
        <Sponsors />
        <Download />
        <Footer />
      </main>
    </div>
  );
}

export default App;