import { motion } from "framer-motion";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { device } from "../styles/Responsive.js";
import LogoComponent from "../subComponents/LogoComponent";
import PowerButton from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/SocialIcons";
import { YinYang } from "./AllSvgs";
import Intro from "./Intro";

const MainContainer = styled.div`
  background: ${(props) => props.theme.body};
  width: 100vw;
  min-height: 100dvh;
  overflow-x: hidden;
  position: relative;
`;

const Container = styled.div`
  padding: 2rem;
`;

const Contact = styled.a`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 2;

  @media ${device.mobile} {
    top: 1rem;
    right: 1rem;
    font-size: 0.9rem;
  }
`;

const BLOG = styled(NavLink)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 50%;
  right: calc(1rem + 2vw);
  transform: rotate(90deg) translate(-50%, -50%);
  text-decoration: none;
  z-index: 2;

  @media ${device.mobile} {
    top: auto;
    bottom: 6.5rem;
    right: 1rem;
    transform: none;
    font-size: 0.95rem;
  }
`;

const WORK = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  position: absolute;
  top: 50%;
  left: calc(1rem + 2vw);
  transform: translate(-50%, -50%) rotate(-90deg);
  text-decoration: none;
  z-index: 2;

  @media ${device.mobile} {
    top: auto;
    bottom: 6.5rem;
    left: 1rem;
    transform: none;
    font-size: 0.95rem;
  }
`;

const BottomBar = styled.div`
  position: absolute;
  bottom: 1.5rem;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 3rem;
  z-index: 2;

  @media ${device.mobile} {
    bottom: 5rem; /* was 2.2rem — now clears the social icons pill */
    gap: 2rem;
  }
`;

const ABOUT = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  text-decoration: none;
`;

const SKILLS = styled(NavLink)`
  color: ${(props) => props.theme.text};
  text-decoration: none;
`;

const rotate = keyframes`
from { transform: rotate(0); }
to { transform: rotate(360deg); }
`;

const Center = styled.button`
  position: absolute;
  top: ${(props) => (props.click ? "80%" : "50%")};
  left: ${(props) => (props.click ? "90%" : "50%")};
  transform: translate(-50%, -50%);
  border: none;
  background: transparent;
  cursor: pointer;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.8s ease;

  @media ${device.mobile} {
    top: ${(props) => (props.click ? "90%" : "42%")};
    left: ${(props) => (props.click ? "82%" : "50%")};

    /* shrink yin yang on mobile when in clicked/moved state */
    & > :first-child {
      width: ${(props) => (props.click ? "55px" : "130px")} !important;
      height: ${(props) => (props.click ? "55px" : "130px")} !important;
    }
  }

  & > :first-child {
    animation: ${rotate} infinite 2s linear;
  }

  & > span {
    margin-top: 1rem;
    font-size: 0.9rem;
    display: ${(props) => (props.click ? "none" : "block")};
  }
`;

const DarkDiv = styled.div`
  position: absolute;
  top: 0;
  right: 50%;
  height: 100%;
  width: ${(props) => (props.click ? "50%" : "0%")};
  background: #000;
  z-index: 1;
  transition: width 0.8s ease;
`;

const Main = () => {
  const [click, setClick] = useState(false);

  return (
    <MainContainer>
      <DarkDiv click={click} />

      <Container>
        <PowerButton />
        <LogoComponent theme={click ? "dark" : "light"} />
        <SocialIcons theme={click ? "dark" : "light"} />

        <Center click={click} onClick={() => setClick(!click)}>
          <YinYang
            width={click ? 110 : 180}
            height={click ? 110 : 180}
            fill="currentColor"
          />
          <span>click here</span>
        </Center>

        <Contact href="mailto:manglamdubey11@gmail.com">
          <motion.h2 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            Say hi..
          </motion.h2>
        </Contact>

        <BLOG to="/blog">
          <motion.h2 whileHover={{ scale: 1.1 }}>Post</motion.h2>
        </BLOG>

        <WORK to="/work" click={+click}>
          <motion.h2 whileHover={{ scale: 1.1 }}>Work</motion.h2>
        </WORK>

        <BottomBar>
          <ABOUT to="/about" click={+click}>
            <motion.h2 whileHover={{ scale: 1.1 }}>About.</motion.h2>
          </ABOUT>

          <SKILLS to="/skills">
            <motion.h2 whileHover={{ scale: 1.1 }}>My Skills.</motion.h2>
          </SKILLS>
        </BottomBar>
      </Container>

      {click && <Intro click={click} />}
    </MainContainer>
  );
};

export default Main;
