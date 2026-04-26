import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Me from "../assets/Images/profile-img.png";
import { device } from "../styles/Responsive";

const Box = styled(motion.div)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  width: 60vw;
  height: 55dvh;
  display: flex;

  /* NO overflow:hidden — image is designed to peek above the box */

  background:
    linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      bottom,
    linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      top;
  background-repeat: no-repeat;
  background-size: 100% 2px;
  border-left: 2px solid ${(props) => props.theme.body};
  border-right: 2px solid ${(props) => props.theme.text};
  z-index: 1;

  @media ${device.tablet} {
    width: 80vw;
  }

  @media ${device.mobile} {
    width: 92vw;
    height: 60dvh;
    /* keep side-by-side split — same as desktop intent */
  }
`;

const SubBox = styled.div`
  width: 50%;
  position: relative;
  display: flex;

  .pic {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(
      -50%
    ); /* removed the 14% Y push — that was forcing head out of frame */
    width: 80%;
    height: auto;
  }

  @media ${device.mobile} {
    .pic {
      width: 95%;
    }
  }
`;

const Text = styled.div`
  font-size: calc(1em + 1.5vw);
  color: ${(props) => props.theme.body};
  padding: 2rem;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  & > *:last-child {
    color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};
    font-size: calc(0.5rem + 1.5vw);
    font-weight: 300;
  }

  @media ${device.mobile} {
    padding: 1.2rem;
    font-size: calc(0.8em + 2vw);

    & > *:last-child {
      font-size: calc(0.4rem + 2vw);
    }
  }
`;

const Intro = () => {
  return (
    <Box
      initial={{ height: 0 }}
      animate={{ height: "55dvh" }}
      transition={{ type: "spring", duration: 2, delay: 1 }}
    >
      <SubBox>
        <Text>
          <h1>Hi,</h1>
          <h3>I'm Manglam.</h3>
          <h6>Dedicated to software craftsmanship.</h6>
        </Text>
      </SubBox>
      <SubBox>
        <motion.div
          style={{ width: "100%", position: "relative", height: "100%" }}
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <img className="pic" src={Me} alt="Profile Pic" />
        </motion.div>
      </SubBox>
    </Box>
  );
};

export default Intro;
