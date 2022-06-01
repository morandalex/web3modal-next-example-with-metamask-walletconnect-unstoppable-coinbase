import { Flex, Link, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex as="footer" width="full" align="center">
      <Text>
        {new Date().getFullYear()} -{" "}
        <Link href="" isExternal rel="noopener noreferrer">
          Decentralized electronic health record ( DEHR ) for encode hackaton
        </Link>
      </Text>
    </Flex>
  );
};

export default Footer;
