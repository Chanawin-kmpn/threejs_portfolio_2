import React from "react";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import NavBar from "./components/NavBar";
import LogoSection from "./sections/LogoSection";
import FeatureCard from "./sections/FeatureCard";
import ExperienceSection from "./sections/ExperienceSection";

const App = () => {
	return (
		<>
			<NavBar />
			<Hero />
			<ShowcaseSection />
			<LogoSection />
			<FeatureCard />
			<ExperienceSection />
		</>
	);
};

export default App;
