import React, { useEffect } from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import _ from "lodash";

import { LinkAlt } from "@styled-icons/boxicons-regular/LinkAlt";
import { Github } from "@styled-icons/fa-brands/Github";

import { techsMap } from "../../utilities/utils";
import { useInView } from "react-intersection-observer";

const StyledGithub = styled(Github)`
	color: ${({ theme }) => theme.color.Quaternary};
`;
const StyledLink = styled(LinkAlt)`
	color: ${({ theme }) => theme.color.Secondary};
`;

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

const StyledContainer = styled.div`
	position: relative;
	/* ${({ theme }) => theme.mixins.flexCenter}; */
	display: flex;
	flex-flow: row wrap;
	/* height: auto; */
	/* min-height: 550px; */
	width: 100%;
	margin: 7rem 0 5rem 0;
`;

const StyledLeft = styled.div`
	display: flex;
	/* height: auto; */
	flex: 1 0 40%;
	color: ${({ theme }) => theme.color.textPrimary + "b2"};

	& > div {
		width: 88%;
		/* height: auto; */
		min-height: 300px;
		margin: 0 auto;
		padding: 1.3rem 0;

		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		flex-direction: column;

		hr {
			width: 100%;
		}

		& > h1 {
			font-size: 2rem;
			font-weight: 700;
		}

		& > p {
			margin: 3rem 1rem 3rem 0;
			font-size: 1.3rem;
			font-weight: 500;
		}

		& > div {
			ul {
				list-style: none;
				font-size: 1.3rem;
				font-weight: 600;
				padding: 1rem 0;
				font-family: var(--font-mono);

				li {
					display: inline-flex;
					padding: 5px 10px 5px 10px;
					line-height: 1.3;
					align-items: center;
					border: 2px solid #011627b2;
					background: rgb(51 55 105 / 60%);
					border-radius: 50px;
					margin-right: 15px;
					margin: 7px 5px 0rem 0;

					img {
						height: 1.9rem;
						width: 1.9rem;
						margin-right: 10px;
					}
				}

				/* li:not(:first-child) {
					margin-left: 15px;
				} */
			}
		}

		.project-link {
			padding: 1.5rem 0;

			& > span {
				margin-left: 10px;
				line-height: 1.3;
				font-size: 1.5rem;
				font-weight: 600;
				font-family: var(--font-mono);
			}
		}
	}
`;

const StyledRight = styled.div`
	display: flex;
	align-items: center;
	/* height: auto; */
	/* min-height: 400px; */
	flex: 1 0 60%;
	/* width: 100%; */

	div.project-photo {
		height: 337.5px;
		width: 600px;
		position: relative;
		border-radius: 40px;
		transition: all 0.4s ease-out;
		overflow: hidden;

		img {
			height: 100%;
			width: 100%;
			object-fit: fil;
			transition: all 0.4s ease-out;
		}

		&::before {
			content: " ";
			position: absolute;
			top: 0;
			left: 0;
			height: 337.5px;
			width: 600px;
			border-radius: 40px;
			/* background: ${({ theme }) => theme.color.Secondary + "b2"}; */
			background: linear-gradient(90deg, #d53369b2 0%, #daae51b2 100%);
			opacity: 1;
			transition: all 0.8s ease-out;
		}

		&:hover::before {
			/* background: ${({ theme }) => theme.color.Secondary + "00"}; */
			opacity: 0;
		}
		&:hover > img {
			transform: scale(0.99);
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

const Project = ({ projectItem, i }) => {
	const { ref, inView } = useInView();
	const controls = useAnimation();

	useEffect(() => {
		if (inView) {
			controls.start("visible");
		}
	}, [controls, inView]);

	return (
		<>
			<StyledContainer ref={ref}>
				<StyledLeft>
					<div>
						<motion.h1
							animate={controls}
							variants={variants}
							initial="hidden"
							custom={2}
						>
							{projectItem.name}
						</motion.h1>
						<motion.p
							animate={controls}
							variants={variants}
							initial="hidden"
							custom={3}
						>
							{projectItem.intro}
						</motion.p>
						<motion.hr
							animate={controls}
							variants={variants}
							initial="hidden"
							custom={4}
						></motion.hr>
						<div>
							<ul>
								{projectItem.techs.map((item, i) => (
									<motion.li
										animate={controls}
										variants={variants}
										initial="hidden"
										custom={5 + i}
									>
										<img
											src={`../../../svg/svg-${techsMap[item]}.svg`}
											alt="html"
										/>
										{_.capitalize(item)}
									</motion.li>
								))}
							</ul>
						</div>
						<div className="project-link">
							<StyledGithub size="20" title="Github" />
							<span>Github - </span>
							<StyledLink size="20" title="Link" /> <span>Demo</span>
						</div>
					</div>
				</StyledLeft>
				<StyledRight>
					<motion.div
						className="project-photo"
						animate={controls}
						variants={variants}
						initial="hidden"
						custom={1}
					>
						<img
							src={`../../../images/${projectItem.image}.png`}
							alt={projectItem.image}
						/>
					</motion.div>
				</StyledRight>
			</StyledContainer>
		</>
	);
};

export default Project;
