import {
  Box,
  Flex,
  MenuButton,
  IconButton,
  Menu,
  MenuList,
  MenuItem,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { DarkModeSwitch } from "./DarkModeSwitch";
import { HamburgerIcon } from "@chakra-ui/icons";
import { FaGithub, FaLinkedin} from "react-icons/fa6";
import { FaRegFileAlt } from "react-icons/fa";
// import { Link } from "@chakra-ui/next-js";
import Link from "next/link";
import { typeInfo } from "../pages";

interface NavbarProps {
  resumeLink: typeInfo["experienceSection"]["resumeLink"];
  socialLinks: typeInfo["contactAndFooterSection"]["socialLinks"];
}

export const Navbar: React.FC<NavbarProps> = ({ resumeLink, socialLinks }) => {
  const { colorMode } = useColorMode();
  return (
    <Box>
      <Flex direction={"row"} alignItems={"center"} justifyContent={"flex-end"}>
        <Box px={2}>
        </Box>
        <DarkModeSwitch />
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="solid"
            colorScheme="teal"
            size="lg"
          />
          <MenuList>
          <MenuItem>
            <Link href="/">Home</Link>
          </MenuItem>
          <MenuItem>
            <Link href="/about">About</Link>
          </MenuItem>
          <MenuItem>
            <Link href="/experience">Experience</Link>
          </MenuItem>
          <MenuItem>
            <Link href="/projects">Projects</Link>
          </MenuItem>
            <Link href={socialLinks.github}>
              <MenuItem icon={<FaGithub />}>GitHub</MenuItem>
            </Link>
            <Link href={socialLinks.linkedIn}>
              <MenuItem icon={<FaLinkedin />}>LinkedIn</MenuItem>
            </Link>
            <Link href={resumeLink}>
              <MenuItem icon={<FaRegFileAlt />}>Résumé</MenuItem>
            </Link>
          </MenuList>
        </Menu>
      </Flex>
    </Box>
  );
};
