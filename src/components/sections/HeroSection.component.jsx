import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const StyledSection = styled.section`
	${({ theme }) => theme.mixins.flexCenter};
	position: relative;
	/* padding: 0 100px; */
	width: 100%;
	height: 100vh;
`;

const HeroWrapper = styled.div`
	display: flex;
	align-items: flex-start;
	position: relative;
	width: 100%;
	/* padding: 0 100px; */
	min-height: auto;
	flex-direction: column;
	padding: 2rem;
	@media screen and (max-width: 992px) {
		width: 90%;
	}
	h4 {
		color: ${({ theme }) => theme.color.Secondary + "ff"};
		margin: 10px 0 30px 10px;
		font-size: clamp(15px, 1.3vw, 40px);
	}

	h1 {
		color: ${({ theme }) => theme.color.textSecondary + "e6"};
		margin: 5px 0 20px 0;
		span {
			color: ${({ theme }) => theme.color.Secondary};
		}
	}

	h2 {
		color: ${({ theme }) => theme.color.textSecondary + "cc"};
	}

	p {
		color: ${({ theme }) => theme.color.textPrimary + "b2"};
		line-height: 1.5;
		width: 50%;
		margin-top: 40px;
		font-size: clamp(12px, 1.3vw, 30px);
		font-family: var(--font-mono);
		font-weight: 600;
		@media screen and (max-width: 992px) {
			width: 100%;
		}
	}
`;

const HeroSection = ({
	animationDuration,
	animationDelay,
	navAnimationTime,
}) => {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		let timer = setTimeout(() => setIsMounted(true), navAnimationTime);
		return () => clearTimeout(timer);
	}, []);

	const sayHi = <h4>Hi, My name is</h4>;
	const name = (
		<h1 className="big-heading">
			<span>Jay Tran</span>
		</h1>
	);
	const introHead = (
		<h2 className="medium-heading">I am self-taught React Developer</h2>
	);
	const introParagraph = (
		<p>
			I am currently residing in Raleigh, NC area. I love to build things on
			internet that help communities, and help bussinesses grow.
		</p>
	);

	const introList = [sayHi, name, introHead, introParagraph];

	return (
		<StyledSection>
			<HeroWrapper>
				{isMounted &&
					introList.map((item, id) => (
						<motion.div
							key={id}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{
								duration: animationDuration,
								delay: id * animationDelay,
							}}
						>
							{item}
						</motion.div>
					))}
			</HeroWrapper>
		</StyledSection>
	);
};

export default HeroSection;
