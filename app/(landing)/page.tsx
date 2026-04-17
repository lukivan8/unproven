import Header from "./_components/Header";
import HeroSection from "./_components/HeroSection";
import EmotionalCore from "./_components/EmotionalCore";
import Pivot from "./_components/Pivot";
import TheSolution from "./_components/TheSolution";
import HowItWorks from "./_components/HowItWorks";
import JoinSection from "./_components/JoinSection";
import About from "./_components/About";
import Footer from "./_components/Footer";

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <HeroSection />
            <EmotionalCore />
            <Pivot />
            <TheSolution />
            <HowItWorks />
            <JoinSection />
            <About />
            <Footer />
        </div>
    );
}
