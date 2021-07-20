import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const StyledSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  position: relative;
  /* padding: 0 100px; */
  width: 100%;
  height: 100vh;

  .arrow-down {
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translate(-50%, -50%);

    span {
      display: block;
      width: 10px;
      height: 10px;
      border-bottom: 2px solid ${({ theme }) => theme.color.Secondary};
      border-right: 2px solid ${({ theme }) => theme.color.Secondary};
      transform: rotate(45deg);
      margin: -3px;
    }
  }
`;

const StyledArrow = styled(motion.ul)`
  position: absolute;
  bottom: 3%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StyledLi = styled(motion.li)`
  display: block;
  width: 10px;
  height: 10px;
  border-bottom: 2px solid ${({ theme }) => theme.color.Secondary};
  border-right: 2px solid ${({ theme }) => theme.color.Secondary};
  transform: rotate(45deg);
  margin: -3px;
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
    font-size: clamp(12px, 1.3vw, 24px);
    font-family: var(--font-mono);
    font-weight: 600;
    @media screen and (max-width: 992px) {
      width: 100%;
    }
  }
`;

// const arrowItem = {
// 	hidden: (y) => ({
// 		opacity: 0,
// 		rotate: 45,
// 		y: -10 - y,
// 	}),
// 	show: {
// 		opacity: 1,
// 		y: 0,
// 		transition: {
// 			repeat: Infinity,
// 			repeatDelay: 1,
// 			duration: 1,
// 			delay: 0.5,
// 		},
// 	},
// };

// const arrowVariants = {
// 	hidden: {
// 		transition: {
// 			staggerChildren: 0.5,
// 			delayChildren: 0.7,
// 			repeatDelay: 0.2,
// 		},
// 	},
// 	show: {
// 		transition: {
// 			staggerChildren: 1,
// 			delayChildren: 1,
// 			// repeat: Infinity,
// 			// repeatDelay: 0.5,
// 			delay: 0.2,
// 			when: "afterChildren",
// 		},
// 	},
// };

const HeroSection = ({
  animationDuration,
  animationDelay,
  navAnimationTime
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
                delay: id * animationDelay
              }}
            >
              {item}
            </motion.div>
          ))}
      </HeroWrapper>
      <StyledArrow>
        <StyledLi
          initial={{ y: -20, opacity: 0, rotate: 45 }}
          animate={{ y: [-20, -10, 0], opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
        ></StyledLi>
        <StyledLi
          initial={{ y: -20, opacity: 0, rotate: 45 }}
          animate={{ y: [-20, -10, 0], opacity: [0, 1, 0] }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "linear",
            delay: 2
          }}
        ></StyledLi>
        <StyledLi
          initial={{ y: -20, opacity: 0, rotate: 45 }}
          animate={{ y: [-20, -10, 0], opacity: [0, 1, 0] }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "linear",
            delay: 4
          }}
        ></StyledLi>
      </StyledArrow>
    </StyledSection>
  );
};

export default HeroSection;

/*
<StyledArrow variants={arrowVariants} initial="hidden" animate="show">
<StyledSpan key={0} variants={arrowItem} y={0}></StyledSpan>
<StyledSpan key={1} variants={arrowItem} y={5}></StyledSpan>
<StyledSpan key={2} variants={arrowItem} y={10}></StyledSpan>
</StyledArrow>
*/
