import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { Instagram, Github, LinkedIn } from "../components/AllSvgs";
import { DarkTheme } from "../components/Themes";

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 2rem;
  z-index: 3;

  & > *:not(:last-child) {
    margin: 0.6rem 0;
  }

  @media (max-width: 1024px) {
    left: 1rem;
  }

  @media (max-width: 768px) {
    flex-direction: row;
    align-items: center;
    bottom: 1rem;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, 0.55);
    backdrop-filter: blur(8px);
    padding: 0.5rem 1.2rem;
    border-radius: 30px;
    gap: 1rem;

    & > *:not(:last-child) {
      margin: 0;
    }
  }
`;

const Line = styled(motion.span)`
  width: 2px;
  height: 8rem;
  background-color: ${(props) =>
    props.color === "dark" ? DarkTheme.text : DarkTheme.body};

  @media (max-width: 768px) {
    display: none !important;
    height: 0 !important;
    width: 0 !important;
    overflow: hidden;
  }
`;

const SocialIcons = (props) => {
  const iconColor = props.theme === "dark" ? DarkTheme.text : DarkTheme.body;

  return (
    <Icons>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <a href="https://github.com/Manglam11" target="_blank" rel="noreferrer">
          <Github width={24} height={24} fill={iconColor} />
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.45 }}
      >
        <a
          href="https://www.linkedin.com/in/manglam-dubey/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedIn width={24} height={24} fill={iconColor} />
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.6 }}
      >
        <a
          href="https://www.instagram.com/manglam_11/"
          target="_blank"
          rel="noreferrer"
        >
          <Instagram width={24} height={24} fill={iconColor} />
        </a>
      </motion.div>

      <Line
        color={props.theme}
        initial={{ height: 0 }}
        animate={{ height: "8rem" }}
        transition={{ type: "spring", duration: 1, delay: 0.8 }}
      />
    </Icons>
  );
};

export default SocialIcons;
