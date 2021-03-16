import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Marker } from "@styled-icons/foundation/Marker";
import {
	Facebook,
	Twitter,
	Instagram,
	Github,
	LinkedinSquare,
} from "@styled-icons/boxicons-logos";
import { Email } from "@styled-icons/evaicons-solid/Email";
import { Phone } from "@styled-icons/entypo/Phone";

const StyledMarker = styled(Marker)`
	position: absolute;
	top: 21%;
	right: 18%;
	height: 30%;
	width: 25%;
	color: ${({ theme }) => theme.color.textSecondary};
	transition: all 0.3s ease;
	z-index: 3;

	&:hover {
		/* transform: translateY(-5px); */
	}
	&:hover ~ div.my-base {
		/* opacity: 1 !important;
		transform: translateY(-5px) !important; */
	}
`;
const StyledShadow = styled(Marker)`
	position: absolute;
	top: 33%;
	right: 24%;
	height: 17%;
	width: 15%;
	color: rgba(0, 0, 0, 0.2);
	transform: skewX(-50deg) rotateX(10deg);
	transform-origin: bottom center;
	z-index: 1;
	transition: all 0.3s ease;
`;

const StyledFooter = styled.footer`
	display: flex;
	flex-direction: column;
	margin: 0 auto;
	padding: 100px 0 0 0;
	max-width: 1000px;
	width: 100%;

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
`;
const Container = styled(motion.div)`
	display: flex;
	position: relative;
	padding: 50px;
	@media screen and (max-width: 768px) {
		flex-flow: row wrap;
	}
`;
const StyledLeft = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	flex: 1 1 100%;

	div.location {
		position: relative;
		display: flex;
		margin: 5rem auto 1.5rem auto;

		&:hover div.my-base {
			opacity: 1 !important;
			transform: translateY(-5px) !important;
		}
		&:hover div#location-marker svg:first-child {
			transform: translateY(-5px) !important;
		}
		&:hover div#location-marker svg:nth-child(2) {
			transform: skewX(-50deg) rotateX(10deg) translate(-5px, -10px) !important;
		}

		img {
			width: 300px;
			height: 150px;
		}

		div.my-base {
			position: absolute;
			display: flex;
			top: -30%;
			right: 9%;
			padding: 1rem 1.5rem;
			border: 1px solid ${({ theme }) => theme.color.Secondary};
			border-radius: 50px;
			background: #2e3c48b2;
			opacity: 0.1;
			transition: opacity 0.4s ease;

			&::after {
				content: " ";
				position: absolute;
				bottom: -75%;
				left: 50%;
				height: 25px;
				width: 2px;
				background: ${({ theme }) => theme.color.Secondary};
			}

			p {
				color: ${({ theme }) => theme.color.textPrimary + "b2"};
				font-size: 1.5rem;
				font-family: var(--font-mono);
				font-weight: 600;
				letter-spacing: 1px;
				line-height: 1.3;
			}
		}
	}

	div.social {
		position: relative;
		color: ${({ theme }) => theme.color.Secondary};

		ul {
			display: flex;
			justify-content: space-around;
			flex-direction: row;
			list-style: none;
			width: fit-content;

			li {
				border: 1px solid ${({ theme }) => theme.color.Secondary + "b2"};
				border-radius: 50%;
				margin: 10px;
				a {
					display: flex;
					color: inherit;
					padding: 0.5rem;
				}
				a#phone,
				a#email {
					position: relative;
					z-index: 3;
					&::after {
						content: " ";
						position: absolute;
						background: transparent;
						border-radius: 0 0 7px 0;
						border-right: 1px solid ${({ theme }) => theme.color.Secondary};
						border-bottom: 1px solid ${({ theme }) => theme.color.Secondary};
						z-index: 1;
					}
				}

				a#phone {
					&::after {
						bottom: 0%;
						right: 50%;
						transform: translate(25%, 100%);
						height: calc(10px + 10px + 19px);
						width: 30px;
					}
				}

				a#email {
					&::after {
						bottom: 0%;
						right: 50%;
						transform: translate(15%, 100%);
						height: calc(38px + 10px + 10px + 19px + 19px);
						width: 50px;
					}
				}
			}
		}
	}

	div.email,
	div.phone-number {
		position: relative;
		color: ${({ theme }) => theme.color.textPrimary + "b2"};
		font-weight: 600;
		font-size: 1.5rem;
		font-family: var(--font-mono);
		padding: 1rem 2rem;
		border: 1px solid ${({ theme }) => theme.color.textPrimary + "b2"};
		border-radius: 50px;
		margin: 1rem 0;
		z-index: 3;
		background: ${({ theme }) => theme.color.background};
	}
`;

const StyledRight = styled.div`
	display: flex;
	flex: 1 1 100%;
	flex-direction: column;
	justify-content: center;
	color: ${({ theme }) => theme.color.textPrimary + "b2"};
	font-weight: 600;

	@media screen and (max-width: 768px) {
		margin: 20px 0;
	}

	& > h2 {
		margin: 1.8rem auto;
		color: ${({ theme }) => theme.color.textSecondary};
		font-size: 2rem;
		font-weight: 600;
		font-family: var(--font-mono);
	}

	form {
		display: flex;
		flex-direction: column;
		width: 92%;
		margin: 0 auto;

		label {
			font-size: 1.5rem;
			font-weight: 600;
			margin: 10px 0 5px 0;
		}

		input,
		input::placeholder,
		input:placeholder-shown,
		textarea {
			font-size: 1.5rem;
			letter-spacing: 1px;
			font-family: var(--font-mono);
			font-weight: 600;
			background: #2e3c48b2;
			border-radius: 5px;
			border: none;
			outline: none;
		}

		input:-webkit-autofill,
		input:-webkit-autofill:hover,
		input:-webkit-autofill:focus,
		input:-webkit-autofill:active {
			background-color: #2e3c48b2 !important;
			color: gba(46, 60, 72, 0.698) !important;
		}

		input[type="text"] {
			outline: none;
			border: none;
			padding: 10px;
			margin: 20px 0 5px 0;
			color: ${({ theme }) => theme.color.textPrimary + "b2"};
		}

		input::-webkit-input-placeholder {
			background-color: #2e3c48b2 !important;
			/* color: pink !important; */
		}
		input:-moz-placeholder {
			background: #2e3c48b2;
		}
		input::-moz-placeholder {
			background: #2e3c48b2;
		}
		input:-ms-input-placeholder {
			background: #2e3c48b2;
		}
		input::placeholder {
			background-color: #2e3c48b2 !important;
		}

		input[type="submit"] {
			height: 30px;
			overflow: auto;
		}

		textarea {
			resize: none;
			padding: 15px 10px;
			margin: 20px 0 5px 0;
			color: ${({ theme }) => theme.color.textPrimary + "b2"};
		}

		button {
			font-size: 1.8rem;
			font-weight: 600;
			line-height: 1.3;
			border: none;
			outline: none;
			border-radius: 3px;
			color: ${({ theme }) => theme.color.textPrimary + "b2"};
			display: inline-block;
			text-align: center;
			padding: 10px;
			margin: 15px 0 5px 0;
			transition: all 0.4s ease-in-out;
			cursor: pointer;
			box-shadow: 0 0 20px #000000a2;

			background-image: linear-gradient(
				to right,
				#f6d365 0%,
				#fda085 51%,
				#f6d365 100%
			);

			&:hover {
				background-position: right center !important;
			}
		}
	}
`;

const Drafted = styled.div`
	position: relative;
	width: 100%;
	height: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.1rem;
	line-height: 1.3;
	font-weight: 600;
	font-family: var(--font-mono);
	letter-spacing: 1px;
	color: ${({ theme }) => theme.color.textPrimary + "b2"};
	margin: 3rem 0 0 0;
`;

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
	hiddenMarker: {
		opacity: 0,
		y: -30,
	},
	visibleMarker: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.8,
			type: "spring",
			stiffness: 400,
			damping: 40,
		},
	},
};

const markerVariants = {
	hidden: {
		opacity: 0,
		y: 30,
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.8,
			// type: "spring",
			// stiffness: 400,
			// damping: 40,
		},
	},
};

const Footer = () => {
	const [status, setStatus] = useState("");
	const [isMounted, setIsMounted] = useState(false);
	const { ref, inView } = useInView();
	const controls = useAnimation();
	const controlsMarker = useAnimation();

	useEffect(() => {
		// const sequence = async () => {
		// 	if (inView) {
		// 		console.log("sequence animation");
		// 		await controls.start("visible");
		// 		await controlsMarker.start("visible");
		// 	}
		// };
		// sequence();
		if (inView) controls.start("visible");

		// const timeout = setTimeout(() => {
		// 	setIsMounted(true);
		// }, 2000 + 800 + 200);
		// return () => clearTimeout(timeout);
	}, [controls, controlsMarker, inView]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const form = e.target;
		const data = new FormData(form);
		console.log(e, data);

		try {
			const res = await fetch("https://formspree.io/f/xwkwzjbp", {
				headers: {
					Accept: "application/json",
				},
				method: "POST",
				body: data,
			});
			const jsonRes = await res.json();
			console.log(jsonRes);
			if (jsonRes.ok === true) {
				setStatus("SUCCESS");
			} else {
				setStatus("FAILED");
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<StyledFooter>
			<motion.h1
				custom={0}
				animate={controls}
				variants={variants}
				initial="hidden"
			>
				<span>05. </span> Connect With Me !!
			</motion.h1>

			<Container
				ref={ref}
				custom={1}
				animate={controls}
				variants={variants}
				initial="hidden"
			>
				<StyledLeft>
					<div className="location">
						<motion.div
							custom={2}
							animate={controls}
							initial="hidden"
							variants={variants}
							key="marker"
							style={{
								display: "flex",
							}}
							id="location-marker"
						>
							<StyledMarker />
							<StyledShadow />
						</motion.div>
						<img
							src="../../../svg/Flag-map_of_North_Carolina.svg"
							alt="location"
						/>
						<div className="my-base">
							<p>Jay's Base</p>
						</div>
					</div>
					<div className="social">
						<ul>
							<li>
								<a href="#">
									<Facebook size="24" title="facebook" />
								</a>
							</li>
							<li>
								<a href="#">
									<Twitter size="24" title="twitter" />
								</a>
							</li>
							<li>
								<a href="#">
									<Instagram size="24" title="Instagrambook" />
								</a>
							</li>
							<li>
								<a href="https://github.com/jaytranuts247">
									<Github size="24" title="Github" />
								</a>
							</li>
							<li>
								<a href="#">
									<LinkedinSquare size="24" title="LinkedinSquare" />
								</a>
							</li>
							<li>
								<a href="#" id="phone">
									<Phone size="24" title="Phone" />
								</a>
							</li>
							<li>
								<a href="#" id="email">
									<Email size="24" title="Email" />
								</a>
							</li>
						</ul>
					</div>
					<div className="phone-number">
						<p>+1 919-721-9892</p>
					</div>
					<div className="email">
						<p>tranquang2407@gmail.com</p>
					</div>
				</StyledLeft>
				<StyledRight>
					<h2>Send me a message</h2>
					<div>
						<form
							onSubmit={handleSubmit}
							action="https://formspree.io/f/xwkwzjbp"
							method="POST"
						>
							{/* <label htmlFor="name">Name: </label> */}
							<input type="text" id="name" name="name" placeholder="Name" />
							{/* <label htmlFor="email">Email: </label> */}
							<input type="text" id="email" name="email" placeholder="Email" />
							{/* <label htmlFor="message">Message: </label> */}
							<textarea
								type="text"
								id="message"
								name="message"
								placeholder="Enter your message ..."
								rows="7"
							/>
							{status === "ERROR" && <p>Ooops! There was an error.</p>}
							{status === "SUCCESS" ? (
								<p>Thanks!</p>
							) : (
								<button type="submit">Send</button>
							)}
						</form>
					</div>
				</StyledRight>
			</Container>
			<Drafted>
				<p>Drafted By Jay Tran &#169; Twenty Twenty First</p>
			</Drafted>
		</StyledFooter>
	);
};

export default Footer;
