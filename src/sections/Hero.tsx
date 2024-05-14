import { Container, Flex, Show, useColorMode } from "@chakra-ui/react";
import { H3 } from "../components/Headings/H3";
import { H1 } from "../components/Headings/H1";
import dynamic from 'next/dynamic'; // Import dynamic
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";
import { typeInfo } from "../pages";
import Link from "next/link";

// Dynamically import Lottie with SSR disabled
const Lottie = dynamic(() => import('lottie-react'), {
  ssr: false,
});

interface HeroSectionProps {
  heroSection: typeInfo["heroSection"];
  socialLinks: typeInfo["contactAndFooterSection"]["socialLinks"];
}

const Hero: React.FC<HeroSectionProps> = ({ heroSection, socialLinks }) => {
  const { name, profession } = heroSection;
  const { colorMode } = useColorMode();
  const animationData = colorMode === 'dark' ? require('../assets/codedark_lottie.json') : require('../assets/code_lottie.json');

  return (
    <Container maxW="6xl" my={48} minHeight="100vh">
      <Flex alignItems={"center"} gap={200} justifyContent={"space-between"} height="100%">
        <Flex direction={"column"}>
          <H1 size={{ base: "3xl", md: "3xl" }}>{name}</H1>
          <H3 size={{ base: "lg", md: "xl" }}>{profession}</H3>
          <Flex direction={"row"} mt={8} gap={6}>
            <Link href={socialLinks.github}>
              <FaGithub
                size={30}
                color={colorMode === "dark" ? "#82e6d9" : "#309795"}
              />
            </Link>
            <Link href={socialLinks.linkedIn}>
              <FaLinkedin
                size={30}
                color={colorMode === "dark" ? "#82e6d9" : "#309795"}
              />
            </Link>
          </Flex>
        </Flex>
        <Show above="md">
          <Lottie
            animationData={animationData}
            autoPlay={true}
            loop={false}
            style={{ width: 450, height: 450 }}
          />
        </Show>
      </Flex>
    </Container>
  );
};

export default Hero;