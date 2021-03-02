import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import useScrollDirection from "../hooks/useScrollDirection";
import { Jameson } from "@styled-icons/simple-icons/Jameson";

const StyledJay = styled(Jameson)``;

const StyledHeader = styled.header`
	position: fixed;
	top: 0;
	height: auto;
	width: 100%;
	${({ theme }) => theme.mixins.flexCenter};
	background: ${({ theme }) => theme.color.background};
	/* filter: blur(10px); */
	backdrop-filter: blur(10px);
	z-index: 21;
	transition: all 0.3s ease;

	transform: translateY(
		${({ direction }) => (direction === "DOWN" ? -100 : 0)}px
	);
`;

const StyledNav = styled.nav`
	position: relative;
	width: 92%;
	height: 100px;
	/* background: #011627ff; */
	display: flex;
	justify-content: center;
	align-items: center;
	font-family: "Cutive Mono", monospace;
	${({ theme }) => theme.mixins.flexBetween};
	/* backdrop-filter: blur(10px); */
	color: ${({ theme }) => theme.color.textPrimary + "b2"};
	z-index: 30;

	a#logo {
		color: ${({ theme }) => theme.color.textPrimary + "b2"};
		margin: 0 20px;
	}

	ul {
		margin-left: auto;
		${({ theme }) => theme.mixins.flexCenter};
		color: ${({ theme }) => theme.color.textPrimary + "b2"};
		list-style: none;

		li {
			padding: 0 5px;
			position: relative;
			font-size: 1.3rem;
			counter-increment: item 1;
			display: flex;
			margin-left: 10px;

			a {
				padding: 10px;
				color: inherit;
				text-decoration: none;
				line-height: 1.3;
				font-weight: 600;

				&::before {
					content: "0" counter(item) ". ";
					margin-right: 5px;
					font-size: 1.2rem;
					text-align: right;
					font-weight: 700;
					color: ${({ theme }) => theme.color.Secondary + "e5"} !important;
				}

				&::after {
					content: " ";
					bottom: 0px;
					display: block;
					height: 2px;
					left: 50%;
					position: absolute;
					background: ${({ theme }) => theme.color.Secondary};
					width: 0;
					transition: width 300ms ease 0s, left 300ms ease 0s;
				}

				&:hover::after {
					width: 100%;
					left: 0;
				}
				&:hover::before {
					color: ${({ theme }) => theme.color.Secondary};
					font-weight: 700;
				}
			}
		}
	}
`;

const navLinks = [
	{
		name: "About",
		url: "/#about",
	},
	{
		name: "Skills",
		url: "/#skills",
	},
	{
		name: "Projects",
		url: "/#projects",
	},
	{
		name: "Contact",
		url: "/#contact",
	},
];

const Navbar = ({ animationDuration, animationDelay }) => {
	const direction = useScrollDirection({
		initialScrollDirection: "UP",
		thresholdPixels: 50,
	});
	return (
		<AnimatePresence>
			<StyledHeader direction={direction}>
				<StyledNav>
					<motion.a
						id="logo"
						href="#home"
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{
							duration: animationDuration,
							delay: animationDelay,
						}}
					>
						<StyledJay size="40" title="Jay logo" />
					</motion.a>
					<ul>
						{navLinks.map((item, id) => (
							<motion.li
								key={id}
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{
									duration: animationDuration,
									delay: id * animationDelay,
								}}
							>
								<a href={item.url}>{item.name}</a>
							</motion.li>
						))}
					</ul>
				</StyledNav>
			</StyledHeader>
		</AnimatePresence>
	);
};

export default Navbar;
