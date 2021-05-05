import * as React from "react";
import { Fragment } from "react";
import styled from "styled-components";
import { animated, useSpring } from "react-spring";
import SocialLinks from "../components/SocialLinks";

import GlobalStyle from "../style/globalStyle";
import backgroundImage from "../images/bg.jpg";
import { bright } from "../style/colors";

const IndexPage = () => {
  const headerAnim = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 500,
    config: { duration: 2000 },
  });

  const leadAnim = useSpring({
    from: { opacity: 0, transform: "scale(0)" },
    to: [
      { opacity: 0, transform: "scale(1.15)" },
      { opacity: 1, transform: "scale(1)" },
    ],
    delay: 750,
    config: { duration: 1000 },
  });

  return (
    <Fragment>
      <GlobalStyle />
      <title>Josh McLain | Full-Stack Developer</title>
      <Main>
        <SplashContainer>
          <NameHeader style={headerAnim}>Josh McLain</NameHeader>
        </SplashContainer>
        <Lead style={leadAnim}>
          Full-Stack Developer &lt;/&gt; C0D3R
        </Lead>
        <SocialLinks />
      </Main>
    </Fragment>
  );
};

export default IndexPage;

const Main = styled.main`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.99) 10%, transparent 100%),
    url(${backgroundImage}) center;
  background-size: cover;
`;

const SplashContainer = styled.div`
  z-index: 100;
  /* border: 1px dotted white; */
  /* width: 80%; */
  text-align: center;
`;

const NameHeader = styled(animated.h1)`
  color: ${bright.primaryDark};
  background: linear-gradient(
    to bottom,
    rgb(255, 255, 255),
    rgb(170, 170, 170)
  );
  margin: 0 20px;
  padding: 5px clamp(5px, 2vw, 20px);
  border-radius: 5px;
  margin: 0;
  font-weight: 700;
  font-size: clamp(2.25rem, 10vw, 7.5rem);
`;

const Lead = styled(animated.p)`
  color: #fff;
  font-size: clamp(0.85rem, 3vw, 2.5rem);
  font-weight: 300;
`;
