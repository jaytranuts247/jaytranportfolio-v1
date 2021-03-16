import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ScrollReveal from "scrollreveal";

import { srConfig } from "../../config.js";
import { projectListInfo } from "../../utilities/utils";
import { default as Card } from "../Card.component";

const StyledSection = styled.section`
	display: flex;
	justify-content: center;
	flex-flow: column nowrap;
	width: 100%;
	& > h1 {
		font-size: 2.3rem;
		font-weight: 700;
		font-family: var(--font-mono);
		color: ${({ theme }) => theme.color.textSecondary};
		/* margin-bottom: 3rem; */
		margin: 3rem auto 5rem auto;
		display: flex;
		align-items: center;
		max-width: 100%;
		width: 90%;
		flex: 1 0 100%;
		white-space: nowrap;

		span {
			font-size: 1.8rem;
			margin-right: 10px;
		}

		&::before {
			content: " ";
			height: 1px;
			display: flex;
			flex: 1 1 30%;
			margin-right: 20px;
			top: 4px;
			position: relative;
			background: ${({ theme }) => theme.color.Secondary};
		}

		&::after {
			content: " ";
			height: 1px;
			display: flex;
			flex: 1 1 30%;
			margin-left: 20px;
			top: 4px;
			position: relative;
			background: ${({ theme }) => theme.color.Secondary};
		}
	}
`;

const StyledContainer = styled(motion.div)`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	position: relative;
	width: 100%;
	flex-flow: row wrap;

	/* & > * {
		flex: 1 1 33.33333%;
	} */
`;

const containerVariants = {
	hidden: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
			delayChildren: 0.2,
			// duration: 0.4,
		},
	},
};

const headerVariants = {
	hidden: {
		opacity: 0,
	},
	show: {
		opacity: 1,
		transition: {
			delay: 0.5,
			duration: 0.5,
		},
	},
};

const OtherProjectSection = () => {
	const [isShow, setIsShow] = useState(false);
	const { ref, inView } = useInView();

	const revealProjects = useRef([]);

	useEffect(() => {
		if (inView) {
			setIsShow(true);
		} else {
			setIsShow(false);
		}
	}, [inView]);

	useEffect(() => {
		revealProjects.current.forEach((cardRef, i) =>
			ScrollReveal().reveal(cardRef, srConfig(i * 200, 0.3, 800))
		);
	}, []);

	return (
		<StyledSection>
			<motion.h1
				variants={headerVariants}
				animate={isShow ? "show" : "hidden"}
				initial="hidden"
			>
				<span>04. </span>Other Projects.
			</motion.h1>
			<StyledContainer
				// variants={containerVariants}
				// animate={isShow ? "show" : "hidden"}
				// initial="hidden"
				ref={ref}
			>
				{projectListInfo.map(
					(project, id) =>
						!project.featuredShow && (
							<Card
								key={id}
								{...project}
								ref={(el) => (revealProjects.current[id] = el)}
							/>
						)
				)}
			</StyledContainer>
		</StyledSection>
	);
};

export default OtherProjectSection;
