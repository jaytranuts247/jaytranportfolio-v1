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

const StyledContainer = styled.div`
	position: relative;
	/* ${({ theme }) => theme.mixins.flexCenter}; */
	display: flex;
	flex-flow: row nowrap;
	/* height: auto; */
	/* min-height: 550px; */
	width: 100%;
	margin: 7rem 0 5rem 0;

	@media screen and (max-width: 992px) {
		padding: 0 80px;
	}
	@media screen and (max-width: 768px) {
		flex-flow: row wrap;
		justify-content: center;
		align-items: center;
		padding: 0 50px;
	}
	@media screen and (max-width: 600px) {
		width: 92%;
		margin: 30px auto;
		align-items: flex-start;
		padding: 0 20px;
	}
`;

const StyledLeft = styled.div`
	display: flex;
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
			font-size: 1.5rem;
			font-weight: 400;
			width: 170%;
			z-index: 3;
			background: #2e3c48d9;
			line-height: 1.3;
			padding: 15px;
			border-radius: 5px;
		}

		& > div {
			ul {
				list-style: none;
				font-size: 1.5rem;
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
					outline: none;
					border: none;

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
			padding: 1.5rem 0px;
			a {
				padding: 10px;
				text-decoration: none;
				color: ${({ theme }) => theme.color.textPrimary + "b2"};
				border-radius: 50px;
				& span {
					margin-left: 10px;
					line-height: 1.3;
					font-size: 1.5rem;
					font-weight: 600;
					font-family: var(--font-mono);
					cursor: pointer;
				}
				&:hover {
					background: rgb(51 55 105 / 60%);
				}
			}
		}
	}

	@media screen and (max-width: 768px) {
		flex: 1 0 100%;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 7;
		/* background: ${({ theme }) => theme.color.Primary}; */

		& > div {
			padding: 30px 40px;
			& > p {
				width: 90%;
			}
		}
	}
	@media screen and (max-width: 600px) {
		position: absolute;
		flex: 1 0 92%;
		max-height: 100%;
		width: 100%;

		& > div {
			padding: 20px;
			justify-content: center;
			min-height: 0;
			height: 261px;
			/* max-height: 100% !important; */
			& > p {
				margin: 1rem 1rem 2rem 0;
				flex: 1;
			}
		}
	}
	@media screen and (max-width: 480px) {
		position: relative;
		margin: 20px 0;
	}
`;

const StyledRight = styled.div`
	display: flex;
	align-items: center;
	/* height: auto; */
	/* min-height: 400px; */
	flex: 1 0 60%;
	/* width: 100%; */
	justify-content: center;

	div.project-photo {
		height: 337.5px;
		width: 600px;
		position: relative;
		border-radius: 40px;
		transition: all 0.4s ease-out;
		overflow: hidden;

		img {
			position: relative;
			height: 100%;
			width: 100%;
			object-fit: cover;
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
			z-index:1;
		}

		&:hover::before {
			/* background: ${({ theme }) => theme.color.Secondary + "00"}; */
			opacity: 0;
			/* z-index: 10; */
		}
		&:hover > img {
			z-index: 20;
			transform: scale(0.99);
		}
	}
	@media screen and (max-width: 992px) {
		div.project-photo {
			width: 100%;
			height: auto;

			&::before {
				width: 100%;
				height: 100%;
			}
		}
	}
	@media screen and (max-width: 768px) {
		flex: 1 0 100%;

		div.project-photo {
			width: 100%;
			height: auto;

			&::before {
				width: 100%;
				height: 100%;
				z-index: 3;
				background: linear-gradient(90deg, #d53369cc 0%, #daae51cc 100%);
			}
			&::after {
				content: " ";
				position: absolute;
				top: 0;
				left: 0;
				height: 100%;
				width: 100%;
				border-radius: 40px;

				background: ${({ theme }) => theme.color.Primary};
				opacity: 0.6;
				transition: all 0.8s ease-out;
				z-index: 5;
			}
		}
	}
	@media screen and (max-width: 600px) {
		position: relative;
		min-height: none;
		max-height: 100%;
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
						{projectItem.intro.map(item => <li>{item}</li>)}
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
									key={i}
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
						<a href={projectItem.links.github}>
							<StyledGithub size="20" title="Github" />
							<span>Github</span>
						</a>
						<span> - </span>
						<a href={projectItem.links.demo}>
							<StyledLink size="20" title="Link" />
							<span>Demo</span>
						</a>
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
				{
					projectItem.isGif ? (<img
						src={`../../../images/${projectItem.image}.gif`}
						alt={projectItem.image}
					/>):(<img
						src={`../../../images/${projectItem.image}.png`}
						alt={projectItem.image}
					/>)
				}
				
				
				</motion.div>
			</StyledRight>
		</StyledContainer>
	);
};

export default Project;
