import React, { useEffect } from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const StyledSection = styled.section`
	position: relative;
	${({ theme }) => theme.mixins.flexCenter};
	height: auto;
	min-height: 550px;
	width: 100%;
	flex-direction: column;

	color: ${({ theme }) => theme.color.textPrimary + "b2"};

	h1 {
		font-size: 2.3rem;
		font-weight: 700;
		font-family: var(--font-mono);
		color: ${({ theme }) => theme.color.textSecondary};
		margin-bottom: 5rem;
		display: flex;
		width: 50%;
		span {
			font-size: 1.8rem;
			margin-right: 10px;
			display: flex;
			align-items: center;
		}

		&::before {
			content: "";
			height: 1px;
			display: flex;
			align-items: center;
			flex: 1 1 50%;
			margin-right: 20px;
			top: 12px;
			position: relative;
			background: ${({ theme }) => theme.color.Secondary};
		}

		&::after {
			content: "";
			height: 1px;
			display: flex;
			flex: 1 1 50%;
			margin-left: 20px;
			top: 12px;
			position: relative;
			background: ${({ theme }) => theme.color.Secondary};
		}
	}
`;

const StyledContainer = styled.div`
	position: relative;
	display: flex;
	justify-content: space-evenly;
	align-items: baseline;
	height: auto;
	width: 100%;
	padding: 0 5rem;
	flex-flow: row wrap;
	div {
		/* min-height: 200px; */
		width: clamp(140px, 20vw, 200px);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		padding: 2rem;
		border-radius: 5px;

		img {
			object-fit: cover;
			height: 100%;
			width: 100%;
			border-radius: 5px;
		}

		p {
			font-size: 1.5rem;
			font-family: var(--font-mono);
			font-weight: 600;
			margin-top: 1.5rem;
		}
	}
`;

const skillList = [
	{
		id: 1,
		skill: "html",
		icon: "6",
	},
	{
		id: 2,
		skill: "css",
		icon: "7",
	},
	{
		id: 12,
		skill: "sass",
		icon: "18",
	},

	{
		id: 3,
		skill: "Javascript",
		icon: "8",
	},
	{
		id: 4,
		skill: "React",
		icon: "9",
	},
	{
		id: 5,
		skill: "Redux",
		icon: "10",
	},
	{
		id: 6,
		skill: "Redux-Saga",
		icon: "11",
	},
	{
		id: 7,
		skill: "Styled Components",
		icon: "12",
	},
	{
		id: 10,
		skill: "Nodejs",
		icon: "17",
	},
	{
		id: 11,
		skill: "MongoDB",
		icon: "16",
	},
	{
		id: 8,
		skill: "Git",
		icon: "14",
	},
	{
		id: 9,
		skill: "Visual Studio Code",
		icon: "15",
	},
];

const variants = {
	visible: (i) => ({
		opacity: 1,
		y: 0,
		transition: { duration: 0.8, delay: 0.2 + i * 0.2 },
	}),
	hidden: {
		opacity: 0,
		y: 20,
	},
};

const SkillsSection = () => {
	const controls = useAnimation();
	const { ref, inView } = useInView();

	useEffect(() => {
		if (inView) {
			controls.start("visible");
		}
	}, [controls, inView]);

	return (
		<StyledSection id="skills">
			<motion.h1
				animate={controls}
				initial="hidden"
				variants={variants}
				custom={0}
			>
				<span>02. </span> Skills
			</motion.h1>
			<StyledContainer ref={ref}>
				{skillList.map((skill, idx) => (
					<motion.div
						key={skill.id}
						animate={controls}
						initial="hidden"
						variants={variants}
						custom={idx + 1}
					>
						<img src={`../../../svg/svg-${skill.icon}.svg`} alt={skill.skill} />
						<p>{skill.skill}</p>
					</motion.div>
				))}
			</StyledContainer>
		</StyledSection>
	);
};

export default SkillsSection;
