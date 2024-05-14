import { Container, useColorMode } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import InfoData from "../../info.json";

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { colorMode } = useColorMode();
  const bgColor = {
    light: "#F8F9FA",
    dark: "#212529",
  };
  const color = {
    light: "#212529",
    dark: "#F8F9FA",
  };
  const transition = "background-color 1s, color 1s";
  return (
    <Container
      maxW="100%"
      // height="100vh"
      minHeight="100vh"
      alignItems="center"
      bg={bgColor[colorMode]}
      color={color[colorMode]}
      transition={transition}
      padding={4}
    >
      <Navbar
        resumeLink={InfoData.experienceSection.resumeLink}
        socialLinks={InfoData.contactAndFooterSection.socialLinks}
      />
      {children}
      
    </Container>
  );
};
