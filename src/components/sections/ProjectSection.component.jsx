import React, { useEffect, Fragment } from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";

import Project from "./Project.component";
import { projectListInfo } from "../../utilities/utils";

import { useInView } from "react-intersection-observer";

const StyledSection = styled.section`
	position: relative;
	display: flex;
	/* height: auto; */
	width: 100%;
	flex-direction: column;

	& > h1 {
		font-size: 2.3rem;
		font-weight: 700;
		font-family: var(--font-mono);
		color: ${({ theme }) => theme.color.textSecondary};
		/* margin-bottom: 3rem; */
		margin: 3rem auto;
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

	div.project-container {
		width: 100%;
		position: relative;
		display: flex;
		flex-direction: column;
	}

	@media screen and (max-width: 600px) {
		div.project-container {
			padding: 2rem;
		}
	}
`;

const variants = {
	visible: (i) => ({
		opacity: 1,
		y: 0,
		transition: { duration: 0.8, delay: i * 0.4 },
	}),
	hidden: {
		opacity: 0,
		y: 20,
	},
};
const ProjectSection = () => {
	const { ref, inView } = useInView();
	const controls = useAnimation();

	useEffect(() => {
		if (inView) {
			controls.start("visible");
		}
	}, [controls, inView]);

	return (
		<StyledSection id="projects">
			<motion.h1
				ref={ref}
				animate={controls}
				variants={variants}
				initial="hidden"
				custom={0}
			>
				<span>03. </span>Things I've built.
			</motion.h1>
			<div className="project-container">
				{projectListInfo.map((projectItem, i) => (
					<Fragment key={i}>
						{projectItem.featuredShow && (
							<Project i={i} projectItem={projectItem} />
						)}
					</Fragment>
				))}
			</div>
		</StyledSection>
	);
};

export default ProjectSection;
