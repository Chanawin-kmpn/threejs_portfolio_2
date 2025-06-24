import React from "react";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import NavBar from "./components/NavBar";
import LogoSection from "./sections/LogoSection";
import FeatureCard from "./sections/FeatureCard";
import ExperienceSection from "./sections/ExperienceSection";
import TechStack from "./sections/TechStack";
import Testimonials from "./sections/Testimonials";

const App = () => {
	return (
		<>
			<NavBar />
			<Hero />
			<ShowcaseSection />
			<LogoSection />
			<FeatureCard />
			<ExperienceSection />
			<TechStack />
			<Testimonials />
		</>
	);
};

export default App;
