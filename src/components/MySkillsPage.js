import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme } from "./Themes";
import { PythonIcon, Develope, DataScienceIcon } from "./AllSvgs";
import { motion } from "framer-motion";
import { device } from "../styles/Responsive";

import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import ParticleComponent from "../subComponents/ParticleComponent";
import BigTitle from "../subComponents/BigTitlte";

const Box = styled(motion.div)`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  min-height: 100dvh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media ${device.mobile} {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 6rem 0 8rem 0;
    gap: 2rem;
    overflow-y: auto;
  }
`;

const pageAnimation = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  exit: { opacity: 0, y: -50, transition: { duration: 0.4 } },
};

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 2rem;
  width: 25vw;
  min-height: 60dvh;
  z-index: 3;
  line-height: 1.5;
  cursor: pointer;
  font-family: "Ubuntu Mono", monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }

  @media ${device.tablet} {
    width: 38vw;
    min-height: 50dvh;
  }

  @media ${device.mobile} {
    width: 85vw;
    min-height: auto;
    padding: 1.5rem;
  }
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);

  ${Main}:hover & {
    & > * {
      fill: ${(props) => props.theme.body};
    }
  }

  & > *:first-child {
    margin-right: 1rem;
  }
`;

const Description = styled.div`
  color: ${(props) => props.theme.text};
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem 0;

  ${Main}:hover & {
    color: ${(props) => props.theme.body};
  }

  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
  ul,
  p {
    margin-left: 2rem;
  }

  @media ${device.mobile} {
    font-size: 0.95rem;
  }
`;

const MySkillsPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box variants={pageAnimation} initial="hidden" animate="show" exit="exit">
        <LogoComponent theme="light" />
        <SocialIcons theme="light" />
        <PowerButton />
        <ParticleComponent theme="light" />

        <Main>
          <Title>
            <PythonIcon width={40} height={40} /> Python Coder
          </Title>
          <Description>
            I enjoy building logical programs that demand structured thinking
            and clean code.
          </Description>
          <Description>
            <strong>I like to build</strong>
            <ul>
              <li>Automation Scripts</li>
              <li>Interactive Python Games</li>
              <li>Problem-Solving Projects</li>
            </ul>
          </Description>
          <Description>
            <strong>Tools</strong>
            <p>Python, OOP, Selenium, BeautifulSoup, PyCharm</p>
          </Description>
        </Main>

        <Main>
          <Title>
            <DataScienceIcon width={40} height={40} /> Data Scientist
          </Title>
          <Description>
            I love exploring data to find patterns, tell stories, and build
            insight-driven pipelines.
          </Description>
          <Description>
            <strong>I like to build</strong>
            <ul>
              <li>EDA Pipelines</li>
              <li>Data Visualizations</li>
              <li>Analytical Web Apps</li>
            </ul>
          </Description>
          <Description>
            <strong>Tools</strong>
            <p>Pandas, NumPy, Matplotlib, Seaborn, Streamlit</p>
          </Description>
        </Main>

        <Main>
          <Title>
            <Develope width={40} height={40} /> Web Developer
          </Title>
          <Description>
            I value the brand I'm building for — so I bring clean UI, solid
            logic, and fresh ideas.
          </Description>
          <Description>
            <strong>Skills</strong>
            <p>React, Tailwind, Node.js, MongoDB, Firebase</p>
          </Description>
          <Description>
            <strong>Tools</strong>
            <p>VSCode, GitHub, Postman, Vercel</p>
          </Description>
        </Main>

        <BigTitle text="SKILLS" top="80%" right="30%" />
      </Box>
    </ThemeProvider>
  );
};

export default MySkillsPage;
