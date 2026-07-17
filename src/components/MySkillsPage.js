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
  padding: 4rem 5rem; /* keep cards clear of the fixed logo / social / power controls */

  /* stack into one column before three wide cards get squished into the corners */
  @media (max-width: 1100px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 6rem 1.5rem 8rem 1.5rem;
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
            <DataScienceIcon width={40} height={40} /> Data Science &amp; ML
          </Title>
          <Description>
            I turn messy, real-world data into forecasts and clear insight —
            from feature engineering to deployed models.
          </Description>
          <Description>
            <strong>I like to build</strong>
            <ul>
              <li>ML Forecasting Pipelines</li>
              <li>LLM-Powered Data Apps</li>
              <li>EDA &amp; Visualization Reports</li>
            </ul>
          </Description>
          <Description>
            <strong>Tools</strong>
            <p>
              Python, Pandas, NumPy, scikit-learn, XGBoost, LightGBM, Streamlit
            </p>
          </Description>
        </Main>

        <Main>
          <Title>
            <PythonIcon width={40} height={40} /> Automation &amp; Scraping
          </Title>
          <Description>
            I build Python pipelines that collect, clean, and move data with
            zero manual steps.
          </Description>
          <Description>
            <strong>I like to build</strong>
            <ul>
              <li>Web Scraping Pipelines</li>
              <li>API Integrations</li>
              <li>Scheduled Automation</li>
            </ul>
          </Description>
          <Description>
            <strong>Tools</strong>
            <p>
              Python, Selenium, BeautifulSoup, Requests, Pandas, GitHub Actions
            </p>
          </Description>
        </Main>

        <Main>
          <Title>
            <Develope width={40} height={40} /> Backend &amp; Full-Stack
          </Title>
          <Description>
            I ship full-stack apps with clean architecture — real-time backends
            and responsive UIs.
          </Description>
          <Description>
            <strong>Skills</strong>
            <p>
              Flask, REST APIs, PostgreSQL, MySQL, SQLAlchemy, WebSockets, React
            </p>
          </Description>
          <Description>
            <strong>Tools</strong>
            <p>Git, GitHub, Postman, Docker, Vercel, Render</p>
          </Description>
        </Main>

        <BigTitle text="SKILLS" top="80%" right="30%" />
      </Box>
    </ThemeProvider>
  );
};

export default MySkillsPage;
