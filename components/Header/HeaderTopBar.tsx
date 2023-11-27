import { Container, Box, Button } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export default function HeaderTopBar() {
  return (
    <Container
      maxW="container.xl"
      py={4}
      px={0}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box as={Link} maxW={100} maxH={"auto"} href="/">
        <Image
          src="/logo.png"
          alt="G&S Home Solutions"
          width={245}
          height={319}
        />
      </Box>
      <Button
        variant={"outline"}
        color={"black"}
        bg={"white"}
        _hover={{
          bg: "whiteAlpha.900",
        }}
      >
        FAÇA UMA COTAÇÃO
      </Button>
    </Container>
  );
}
