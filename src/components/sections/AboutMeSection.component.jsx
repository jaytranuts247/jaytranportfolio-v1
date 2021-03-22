import React, { useEffect } from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const StyledSection = styled.section`
	${({ theme }) => theme.mixins.flexBetween};
	position: relative;
	padding: 80px;
	height: auto;
	min-height: 550px;
	& > * {
		flex: 1 1 100%;
	}
	color: #fff;
	margin: 100px 0;

	@media screen and (max-width: 768px) {
		flex-flow: row wrap;
	}
`;

const StyledLeft = styled.div`
	display: flex;
	justify-content: center;
	align-items: flex-start;
	position: relative;
	height: auto;
	flex-direction: column;

	h2 {
		font-size: 2.3rem;
		font-weight: 700;
		color: ${({ theme }) => theme.color.textSecondary};
		margin-bottom: 2.5rem;
		font-family: var(--font-mono);
		display: flex;
		width: 100%;

		&::before {
			content: "01. ";
			font-size: 1.8rem;
			font-weight: 700;
			margin-right: 10px;
			display: flex;
			align-items: center;
		}

		&::after {
			content: " ";
			height: 1px;
			display: flex;
			flex: 1 1 50%;
			margin-left: 20px;
			top: 12px;
			position: relative;
			background: ${({ theme }) => theme.color.Secondary};
		}
	}

	p {
		font-size: 1.5rem;
		font-weight: 400;
		/* font-family: var(--font-mono); */
		line-height: 1.6;
		&:not(:first-child) {
			margin-top: 10px;
		}

		#react-developer {
			color: ${({ theme }) => theme.color.Secondary};
		}
		#base-location {
			color: ${({ theme }) => theme.color.Secondary};
		}
		#mern-stack {
			color: ${({ theme }) => theme.color.Secondary};
			letter-spacing: 1px;
		}
	}
`;

const StyledRight = styled.div`
	${({ theme }) => theme.mixins.flexCenter};
	position: relative;
	height: auto;
	min-height: 400px;

	div.underline {
		position: absolute;
		top: calc(20% + 20px);
		left: calc(10rem + 20px);
		transform: translateY(-50%);
		height: 300px;
		width: 300px;
		border-radius: 3px;
		border: 1px solid ${({ theme }) => theme.color.Secondary};

		transition: all 0.3s ease;
		z-index: -1;
	}

	div.profile {
		position: absolute;
		top: 20%;
		left: 10rem;
		transform: translateY(-50%);
		height: 300px;
		width: 300px;
		border-radius: 3px;
		border: 1px solid ${({ theme }) => theme.color.Secondary};
		box-shadow: 10px 10px 50px -15px ${({ theme }) => theme.color.Secondary};
		transition: all 0.4s ease;
		z-index: 3;

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}

		&::before {
			content: " ";
			position: absolute;
			top: 0;
			left: 0;
			height: 100%;
			width: 100%;
			/* background: rgba(241, 146, 49, 0.6);
			 */
			background: linear-gradient(
				to right,
				#f6d365b2 0%,
				#fda085b2 51%,
				#f6d365b2 100%
			);
			opacity: 1;
			transition: all 0.4s ease-out;
		}

		&:hover::before {
			opacity: 0.1;
		}

		&:hover {
			box-shadow: none;
			top: calc(20% + 12px);
			left: calc(10rem + 12px);
		}
	}
`;

const one = (
	<p>
		" Hello!! I am Jay Tran. I am a self-taught{" "}
		<span id="react-developer">React Developer</span> , based in{" "}
		<span id="base-location">Raleigh, North Carolina</span> area.
	</p>
);
const two = (
	<p>
		I graduated and worked several years as Electrical & Instrumentation
		Commissioning Engineer in Oil & Gas Field. I also worked as Embedded Test
		Engineer using C/C++, involve in UT/IT for automotive systems in Vietnam.
	</p>
);
const three = (
	<p>
		I found myself having interest and joy in programming and building things
		associate with computers. I decided to learn to build website and Web app,
		starting with <span id="mern-stack">MERN Stack</span>.
	</p>
);
const four = (
	<p>
		I am looking for developing my skills in both front-end and back-end to
		building beautiful, responsive, comprehehensive Websites and Webapps that
		deliver values to both end-users and businesses.
	</p>
);

const aboutMeIntro = [one, two, three, four];

const variants = {
	visible: (i) => ({
		opacity: 1,
		y: 0,
		transition: { duration: 0.8, delay: i * 2 },
	}),
	hidden: {
		opacity: 0,
		y: 20,
	},
};

const AboutMeSection = ({ animationDuration, animationDelay }) => {
	const { ref, inView } = useInView();
	const controls = useAnimation();

	useEffect(() => {
		console.log("inview");
		if (inView) {
			console.log("inview1");
			controls.start("visible");
		}
	}, [controls, inView, animationDelay]);

	return (
		<StyledSection>
			<StyledLeft>
				<motion.h2
					ref={ref}
					custom={0}
					animate={controls}
					variants={variants}
					initial="hidden"
				>
					About Me
				</motion.h2>
				{aboutMeIntro.map((item, id) => (
					<p key={id}>{item}</p>
				))}
			</StyledLeft>
			<StyledRight>
				<motion.div
					className="underline"
					custom={2}
					animate={controls}
					variants={variants}
					initial="hidden"
				></motion.div>
				<motion.div
					className="profile"
					custom={1}
					animate={controls}
					variants={variants}
					initial="hidden"
				>
					<img src="../../../images/profile.jpg" alt="profile" />
				</motion.div>
			</StyledRight>
		</StyledSection>
	);
};

export default AboutMeSection;
