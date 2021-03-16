import React, { useState, useEffect } from "react";

import GlobalStyle from "./styles/GlobalStyle";
import HeroSection from "./components/sections/HeroSection.component";
import AboutMeSection from "./components/sections/AboutMeSection.component";
import SkillsSection from "./components/sections/SkillsSection.component";
import ProjectSection from "./components/sections/ProjectSection.component";
import Footer from "./components/sections/Footer.component";
import OtherProjectSection from "./components/sections/OtherProjects.component";
import Navbar from "./components/Navbar.component";

import styled, { ThemeProvider } from "styled-components";

import theme from "./styles/theme";

import "./App.css";
import OtherProjects from "./components/sections/OtherProjects.component";

const StyledContent = styled.div`
	display: flex;
	width: 100vw;
	min-height: auto;
	flex-direction: column;
`;

const StyledMain = styled.main`
	${({ theme }) => theme.mixins.flexCenter};
	width: 100%;
	min-height: auto;
	flex-direction: column;
`;

const settings = {
	animationDuration: 0.8,
	animationDelay: 0.4,
	navAnimationTime: 2000,
};

function App() {
	return (
		<ThemeProvider theme={theme}>
			<>
				<GlobalStyle />

				<Navbar {...settings} />

				<StyledContent>
					<StyledMain>
						<HeroSection {...settings} />
						<AboutMeSection {...settings} />
						<SkillsSection />
						<ProjectSection />
						<OtherProjectSection />
					</StyledMain>
					<Footer />
				</StyledContent>
			</>
		</ThemeProvider>
	);
}

export default App;
