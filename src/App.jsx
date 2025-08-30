import Hero from "./components/Hero";
import Steps from "./components/steps";
import CTAButtons from "./components/CTAButtons";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">
      <Hero />
      <Steps />
       <Testimonials />
      <CTAButtons />
      <Footer />
    </div>
  );
}



