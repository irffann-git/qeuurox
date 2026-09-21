import HomeHero from "@/components/Home/HeroSection";
import CallToAction from "../components/Home/CallToAction";

import RecentProjects from "../components/Home/RecentProjects";
import ServicesSection from "../components/Home/ServicesSection";
import StatsSection from "../components/Home/StatsSection";
import TeamJourneySection from "../components/Home/TeamJourneySection";
import WhyChooseUs from "../components/Home/WhyChooseUs";


function Home() {
  return (
    <div>
      <HomeHero/>
   <StatsSection/>
   <ServicesSection/>
   <WhyChooseUs/>
   <TeamJourneySection/>
   <RecentProjects/>
   <CallToAction/>
    
    </div>
  );
}

export default Home;