import { useEffect, useRef } from "react";
import styled, { ThemeProvider } from "styled-components";
import { DarkTheme } from "./Themes";
import { motion } from "framer-motion";
import { device } from "../styles/Responsive";

import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";

import { Work } from "../data/WorkData";
import Card from "../subComponents/Card";
import { YinYang } from "./AllSvgs";
import BigTitlte from "../subComponents/BigTitlte";

const Box = styled(motion.div)`
  background-color: ${(props) => props.theme.body};
  min-height: 400dvh;
  position: relative;
  display: flex;
  align-items: center;

  @media ${device.mobile} {
    min-height: 100dvh; /* kills the vertical scroll space */
    overflow: hidden;
  }
`;

const Main = styled(motion.ul)`
  position: fixed;
  top: 12rem;
  left: calc(10rem + 15vw);
  min-height: 40dvh;
  display: flex;
  color: white;
  padding: 0;
  margin: 0;

  @media ${device.mobile} {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 100vw;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    padding: 0 1.5rem;
    min-height: auto;
    align-items: center;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const Rotate = styled.span`
  display: block;
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  width: 80px;
  height: 80px;
  z-index: 1;

  @media ${device.mobile} {
    width: 40px;
    height: 40px;
  }
`;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.5, duration: 0.5 },
  },
};

const WorkPage = () => {
  const ref = useRef(null);
  const yinyang = useRef(null);

  useEffect(() => {
    // Skip the JS horizontal-scroll trick on mobile — native touch scroll handles it
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (isMobile) return;

    let element = ref.current;

    const rotate = () => {
      element.style.transform = `translateX(${-window.pageYOffset}px)`;
      yinyang.current.style.transform =
        "rotate(" + -window.pageYOffset + "deg)";
    };

    window.addEventListener("scroll", rotate);
    return () => window.removeEventListener("scroll", rotate);
  }, []);

  return (
    <ThemeProvider theme={DarkTheme}>
      <Box
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <PowerButton />

        <Main ref={ref} variants={container} initial="hidden" animate="show">
          {Work.map((d) => (
            <Card key={d.id} data={d} />
          ))}
        </Main>

        <Rotate ref={yinyang}>
          <YinYang width={80} height={80} fill={DarkTheme.text} />
        </Rotate>

        <BigTitlte text="WORK" top="10%" right="20%" />
      </Box>
    </ThemeProvider>
  );
};

export default WorkPage;
