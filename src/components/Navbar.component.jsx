import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { motion, AnimatePresence, useViewportScroll } from "framer-motion";
import { Link } from "react-scroll";
import useScrollDirection from "../hooks/useScrollDirection";
import useIsTop from "../hooks/useIsTop";
import { Jameson } from "@styled-icons/simple-icons/Jameson";
import { Bars, Times } from "@styled-icons/fa-solid";

const StyledJay = styled(Jameson)``;

const StyledHeader = styled.header`
	position: fixed;
	top: 0;
	height: auto;
	width: 100%;
	${({ theme }) => theme.mixins.flexCenter};
	/* background: ${({ theme }) => theme.color.background}; */
	/* background: #555555; */
	backdrop-filter: blur(20px);
	filter: none;
	z-index: 21;
	transition: all 0.3s ease;
	${({ isTop }) =>
		!isTop
			? css`
					box-shadow: 0 10px 30px -10px #111111;
			  `
			: null}
	/* box-shadow: 0 10px 30px -10px #111111; */

	transform: translateY(
		${({ direction }) => (direction === "DOWN" ? -80 : 0)}px
	);
`;

const StyledNav = styled(motion.nav)`
	/* position: relative; */
	width: 92%;
	height: 80px;
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
			font-size: 1.5rem;
			counter-increment: item 1;
			display: flex;
			margin-left: 10px;
			cursor: pointer;

			a {
				padding: 10px;
				color: inherit;
				text-decoration: none;
				line-height: 1.3;
				font-weight: 600;

				&::before {
					content: "0" counter(item) ". ";
					margin-right: 5px;
					font-size: 1.3rem;
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

	@media screen and (max-width: 992px) {
		width: 92%;

		div.menu-icon {
			z-index: 10;
		}
		ul {
			display: flex;
			flex-flow: column nowrap;
			justify-content: center;
			align-items: center;
			height: 100vh;
			width: clamp(350px, 35vw, 450px);
			position: absolute;
			top: 0;
			right: 0;
			background: #2e3c48f2;

			li {
				font-size: 2.2rem;
				line-height: 1.5;
				margin: 1rem 0;

				a {
					&::before {
						font-size: 1.8rem;
					}
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

const breakPoint = 992;

const SidebarVariants = {
	expanded: () => ({
		x: 0,
		transition: {
			duration: 0.8,
			ease: "easeOut",
			staggerChildren: 0.07,
			delayChildren: 0.6,
		},
	}),
	collapsed: () => ({
		x: 1000,
		transition: {
			// type: "springs",
			duration: 0.8,
			ease: "easeIn",
			staggerChildren: 0.05,
			staggerDirection: -1,
			delay: 0.4,
		},
	}),
};

const ItemVariants = {
	expanded: {
		y: 0,
		opacity: 1,
		transition: {
			y: { stiffness: 1000, velocity: -100 },
			duration: 0.8,
		},
	},
	collapsed: {
		y: 50,
		opacity: 0,
		transition: {
			y: { stiffness: 1000 },
		},
	},
};

const Navbar = ({ animationDuration, animationDelay }) => {
	const [windowWidth, setWindowWidth] = useState(0);
	const [show, setShow] = useState(false);
	const isTop = useIsTop();

	const direction = useScrollDirection({
		initialScrollDirection: "UP",
		thresholdPixels: 50,
	});

	const toggleShow = () => {
		setShow((prevState) => !prevState);
	};

	useEffect(() => {
		const updateWindowWidth = () => {
			let wWidth = typeof window !== "undefined" ? window.innerWidth : 0;
			console.log("set window width ");
			setWindowWidth(wWidth);
		};

		window.addEventListener("resize", updateWindowWidth);
		updateWindowWidth();

		return () => window.removeEventListener("resize", updateWindowWidth);
	}, []);

	return (
		<AnimatePresence>
			<StyledHeader direction={direction} isTop={isTop}>
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
					{windowWidth <= breakPoint ? (
						<motion.ul
							animate={show ? "expanded" : "collapsed"}
							initial={show ? "expanded" : "collapsed"}
							variants={SidebarVariants}
						>
							{navLinks.map((item, id) => (
								<motion.li key={id} variants={ItemVariants}>
									{/* <a href={item.url}>{item.name}</a> */}
									<Link
										activeClass="active"
										to={item.url}
										spy={true}
										smooth={true}
										duration={1000}
									>
										{item.name}
									</Link>
								</motion.li>
							))}
						</motion.ul>
					) : (
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
					)}
					{windowWidth <= breakPoint && (
						<motion.div
							className="menu-icon"
							onClick={toggleShow}
							style={{
								position: "relative",
								display: "flex",
								height: "36px",
								width: "36px",
							}}
						>
							<AnimatePresence>
								{show ? (
									<motion.div
										key="times"
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										exit={{ opacity: 0 }}
										transition={{
											duration: animationDuration,
											delay: animationDelay,
										}}
										style={{
											position: "absolute",
											top: 0,
											left: 0,
										}}
									>
										<Times size="36" />
									</motion.div>
								) : (
									<motion.div
										key="bars"
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										exit={{ opacity: 0 }}
										transition={{
											duration: animationDuration,
											delay: animationDelay,
										}}
										style={{
											position: "absolute",
											top: 0,
											left: 0,
										}}
									>
										<Bars size="36" />
									</motion.div>
								)}
							</AnimatePresence>
						</motion.div>
					)}
				</StyledNav>
			</StyledHeader>
		</AnimatePresence>
	);
};

export default Navbar;
