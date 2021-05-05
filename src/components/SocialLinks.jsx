import React from "react";
import {
  FaFacebookSquare,
  FaLinkedin,
//   FaEnvelope,
  FaGithubSquare,
} from "react-icons/fa";
import { animated, Trail } from "react-spring";
import styled from "styled-components";
import { Link } from "gatsby";
import { bright } from '../style/colors'

const SocialLinks = () => {
  const socialData = [
    { title: "Github", link: "https://github.com/joshmclain45", icon: <FaGithubSquare color={'#fff'} /> },
    { title: "Linkedin", link: "https://linkedin.com/in/joshmclain45", icon: <FaLinkedin color={'#fff'} /> },
    { title: "Facebook", link: "https://facebook.com/josh.mclain.376", icon: <FaFacebookSquare color={'#fff'} /> },
    // { title: "Email", link: "", icon: <FaEnvelope /> },
  ];

  const socialElemLayout = socialData.map((elem, idx) => {
    return (
      <Link to={elem.link} key={idx}>
        {elem.icon}
      </Link>
    );
  });

  return (
    <SocialLinksContainer>
      <Trail
        items={socialElemLayout}
        keys={(x) => x.key}
        from={{ transform: "scale(0)" }}
        to={{ transform: "scale(1)" }}
        delay={1500}
        config={{duration: 500}}
      >
        {(item) => (props) => <LinkWrapper style={props}>{item}</LinkWrapper>}
      </Trail>
    </SocialLinksContainer>
  );
};

export default SocialLinks;

const SocialLinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 60%;
  justify-content: space-around;
`;

const LinkWrapper = styled(animated.span)`
  font-size: clamp(2rem, 6vw, 4rem);
  /* color: ${bright.secondaryLight} !important; */
  fill: #fff;
`;
