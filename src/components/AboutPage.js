import React from "react";
import styled, { keyframes, ThemeProvider } from "styled-components";
import { DarkTheme } from "./Themes";
import { motion } from "framer-motion";
import { device } from "../styles/Responsive";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import ParticleComponent from "../subComponents/ParticleComponent";
import BigTitle from "../subComponents/BigTitlte";
import astronaut from "../assets/Images/spaceman.png";

// ─── CSS float loop (only handles Y/X drift AFTER entry) ───────────────────
const float = keyframes`
  0%   { transform: translateY(-10px) }
  50%  { transform: translateY(15px) translateX(15px) }
  100% { transform: translateY(-10px) }
`;

// ─── Page wrapper — unchanged ───────────────────────────────────────────────
const Box = styled(motion.div)`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  min-height: 100dvh;
  position: relative;
  overflow-x: hidden;

  @media ${device.mobile} {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5rem 0 7rem 0;
    overflow-y: auto;
  }
`;

/*
 * CHANGE 1 — Spaceman split into two layers:
 *   SpacemanWrapper  → motion.div  → handles ENTRY (spring from bottom-right)
 *   SpacemanInner    → plain div   → handles CSS float AFTER entry
 *
 * Why split? Framer Motion and CSS `animation` both touch `transform`.
 * If they're on the same element they fight each other. Outer handles motion,
 * inner handles the loop — clean separation.
 */
const SpacemanWrapper = styled(motion.div)`
  position: absolute;
  top: 10%;
  right: 5%;
  width: 20vw;

  @media (max-width: 1024px) {
    width: 30vw;
    top: 5%;
  }

  @media (max-width: 768px) {
    position: relative;
    width: 42vw;
    top: 0;
    right: 0;
    align-self: flex-end;
    margin-right: 1rem;
  }
`;

const SpacemanInner = styled.div`
  animation: ${float} 5s ease infinite;

  img {
    width: 100%;
    height: auto;
  }
`;

/*
 * CHANGE 2 — Main split into two layers:
 *   MainWrapper → plain div   → owns positioning (absolute, left, transform on tablet)
 *   Main        → motion.div  → handles slide-in from left
 *
 * Why split? Main has `transform: translateX(-50%)` on tablet for centering.
 * Framer Motion also sets transform (for x animation). Same element = conflict.
 * Wrapper handles CSS layout, Main handles the animation — no clash.
 */
const MainWrapper = styled.div`
  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;

  @media (max-width: 1024px) {
    left: 50%;
    transform: translateX(-50%);
  }

  @media (max-width: 768px) {
    position: relative;
    left: 0;
    top: 0;
    transform: none;
    margin: 2rem auto;
    width: 85vw;
  }
`;

const Main = styled(motion.div)`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  min-height: 60dvh;
  z-index: 3;
  line-height: 1.6;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);
  font-family: "Ubuntu Mono", monospace;
  font-style: italic;

  @media (max-width: 768px) {
    width: 85vw;
    min-height: auto;
    font-size: 0.95rem;
    padding: 1.5rem;
  }
`;

// ─── Animation variants ─────────────────────────────────────────────────────

// Whole page fade (unchanged behaviour)
const pageAnimation = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.4 },
  },
  exit: {
    opacity: 0,
    y: -50,
    transition: { duration: 0.4 },
  },
};

/*
 * CHANGE 3 — Individual element variants with stagger:
 *   mainVariants    → slides in from left
 *   spacemanVariants → springs in from bottom-right
 *   titleVariants   → fades in last
 *
 * Sequence: Main (0.2s) → Spaceman (0.5s) → BigTitle (0.9s)
 * Spring type gives that bouncy, alive feel matching the reference.
 */
const mainVariants = {
  hidden: { opacity: 0, x: -300 },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 60, damping: 12, delay: 0.2 },
  },
};

const spacemanVariants = {
  hidden: { opacity: 0, x: 200, y: 200 },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { type: "spring", stiffness: 20, damping: 10, delay: 0.2 },
  },
};

const titleVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.6, delay: 0.9 },
  },
};

// ─── Component ──────────────────────────────────────────────────────────────

const AboutPage = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Box variants={pageAnimation} initial="hidden" animate="show" exit="exit">
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <PowerButton />
        <ParticleComponent theme="dark" />

        {/* Spaceman: entry via wrapper, float loop via inner */}
        <SpacemanWrapper
          variants={spacemanVariants}
          initial="hidden"
          animate="show"
        >
          <SpacemanInner>
            <img src={astronaut} alt="spaceman" />
          </SpacemanInner>
        </SpacemanWrapper>

        {/* Main: layout via wrapper, slide-in via Main */}
        <MainWrapper>
          <Main variants={mainVariants} initial="hidden" animate="show">
            I'm a Computer Science graduate from India who loves turning ideas
            into real, working things — whether that's a web app, an automation
            script, or a data story. I started with web development, fell in
            love with building things that actually work, and never stopped. Now
            I'm going deep into Python and Data Science — because I want to not
            just build products, but understand the data behind them.
            <br /> <br />
            My stack includes the data science trio — Pandas, NumPy, and
            Matplotlib, Ollama, React etc. I'm actively looking for internship
            opportunities where I can contribute, learn fast, and grow through
            hands-on development.
            <br /> <br />I believe everything is an Art when you put your
            consciousness in it. You can connect with me via social links.
          </Main>
        </MainWrapper>

        <motion.div variants={titleVariants} initial="hidden" animate="show">
          <BigTitle text="ABOUT" top="10%" left="5%" />
        </motion.div>
      </Box>
    </ThemeProvider>
  );
};

export default AboutPage;
