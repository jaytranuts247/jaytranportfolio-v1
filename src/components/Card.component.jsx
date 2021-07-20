import React from "react";
import styled from "styled-components";
import _ from "lodash";

import { loadImage, techsMap } from "../utilities/utils";
import { LinkAlt } from "@styled-icons/boxicons-regular/LinkAlt";
import { Github } from "@styled-icons/fa-brands/Github";

const StyledGithub = styled(Github)`
  color: ${({ theme }) => theme.color.Quaternary};
`;
const StyledLink = styled(LinkAlt)`
  color: ${({ theme }) => theme.color.Secondary};
`;

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  /* justify-content: center;
	align-items: baseline; */
  flex-direction: column;
  margin: 15px;
  height: 420px;
  width: 300px;
  /* box-shadow: */
  border-radius: 3px;
  overflow: hidden;
  background: rgb(51 55 105 / 60%);
  /* width: 29%; */
  /* color: ${({ theme }) => theme.color.textPrimary + "b2"}; */
  color: #a8b2d1;
  line-height: 1.5;
  box-shadow: 0 10px 30px -15px #040404;
  transition: all 0.3s ease;
  @media screen and (max-width: 992px) {
    flex: 1 1 90%;
    width: auto !important;
  }
  @media screen and (max-width: 600px) {
    flex: 0 1 300px;
  }

  &:hover {
    transform: translateY(-5px);
  }

  &:hover .project-image .overlay {
    opacity: 1;
  }

  .project-image {
    position: relative;

    width: 100%;

    img {
      object-fit: cover;
      width: 100%;
    }

    .project-overlay {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: 4;
      background: ${({ theme }) => theme.color.Primary + "33"};
    }

    .overlay {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: 5;
      opacity: 0;
      display: flex;
      justify-content: center;
      align-items: center;

      background: ${({ theme }) => theme.color.Primary + "cc"};
      transition: all 0.3s ease;

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
  }

  .project-content {
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    /* justify-content: space-between; */
    flex: 1;
    overflow: auto;
    h2 {
      font-size: 1.5rem;
      color: #ccd6f6;
    }
    p.project-intro {
      font-size: 1.4rem;
      flex-grow: 1;
    }
    ul {
      list-style: none;
      font-size: 1.3rem;
      font-weight: 600;
      padding: 1rem 0 0 0;
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
    }
  }
`;

// const cardVariants = {
// 	show: {
// 		y: 0,
// 		opacity: 1,
// 		transition: {
// 			duration: 0.8,
// 			ease: "easeOut",
// 		},
// 	},
// 	hidden: {
// 		y: 50,
// 		opacity: 0,
// 		transition: {
// 			// y: { stiffness: 1000 },
// 			duration: 0.1,
// 		},
// 	},
// };

const Card = ({ image, name, intro, techs, links, forwardRef }) => {
  return (
    <StyledContainer ref={forwardRef}>
      <div className="project-image">
        <img src={`../../../images/${image}.png`} alt="Project" />
        <div className="project-overlay"></div>
        <div className="overlay">
          <div className="project-link">
            <a href={links.github}>
              <StyledGithub size="20" title="Github" />
              <span>Github</span>
            </a>
            <span> - </span>
            <a href={links.demo}>
              <StyledLink size="20" title="Link" />
              <span>Demo</span>
            </a>
          </div>
        </div>
      </div>
      <div className="project-content">
        <h2>{name}</h2>
        <p className="project-intro">{intro}</p>
        <ul>
          {techs.map((tech, id) => (
            <li key={id}>
              {/* <img src={`../../../svg/svg-${techsMap[tech]}.svg`} alt="" /> */}
              {loadImage(techsMap[tech])}
              {_.capitalize(tech)}
            </li>
          ))}
        </ul>
      </div>
    </StyledContainer>
  );
};

const wrappedCard = React.forwardRef((props, ref) => (
  <Card {...props} forwardRef={ref} />
));

// export default Card;
export default wrappedCard;
