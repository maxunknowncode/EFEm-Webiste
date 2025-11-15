import CTASection from "../components/CTASection";
import FeatureGrid from "../components/FeatureGrid";
import Hero from "../components/Hero";
import LocationSection from "../components/LocationSection";
import ReviewSection from "../components/ReviewSection";

const HomePage = () => {
  return (
    <main className="flex-1">
      <div className="mx-auto max-w-6xl px-4 py-10 md:py-16 lg:px-6">
        <div className="space-y-16">
          <Hero />
          <FeatureGrid />
          <LocationSection />
          <ReviewSection />
          <CTASection />
        </div>
      </div>
    </main>
  );
};

export default HomePage;
