import { Flex, Card, Text, Icon } from "@chakra-ui/react"
import Link from "next/link"
import { Product } from "@/hooks/useProducts"
import { RefObject } from "react"
import { BiExpandAlt } from "react-icons/bi"

interface CatalogItemProps extends Partial<Product> {
  lastProductRef: RefObject<HTMLDivElement> | null
  type: "higi" | "veg" | "imper" | "max"
  href: string
}

export default function CatalogItem({
  thumbnail,
  hover_color,
  title,
  slogan,
  lastProductRef,
  id,
  type,
  href,
  chamada,
}: CatalogItemProps) {
  return (
    <Flex flexDirection={"column"} gap={2}>
      <Flex
        alignItems={"center"}
        as={Link}
        href={href}
        scroll={false}
        justifyContent={"center"}
        p={4}
        flexDirection={"column"}
        _hover={{
          textDecor: "underline",
        }}
      >
        <Text textAlign={"center"} fontSize={"sm"} fontWeight={"semibold"}>
          {title}
          <Icon as={BiExpandAlt} ml={4} />
        </Text>
        <Text fontSize={"x-small"} textAlign={"center"}>
          {chamada}
        </Text>
        <Text fontSize={"x-small"}>saiba mais</Text>
      </Flex>
      <Card
        rounded={"md"}
        overflow={"hidden"}
        color={"white"}
        bgImage={thumbnail}
        bgSize={"contain"}
        bgRepeat={"no-repeat"}
        bgPosition={"center"}
        textColor={"transparent"}
        maxH={"290px"}
        p={4}
        _hover={{
          transition: "all 0.8s ease-in-out",
          bgImage: `linear-gradient(0deg, rgba(${hover_color}) 10%, rgba(255,255,255,1) 10%, rgba(255,255,255,1) 51%, rgba(255,255,255,1) 90%, rgba(${hover_color}) 90%)`,
          color: "black",
          cursor: "pointer",
        }}
        ref={lastProductRef}
        as={Link}
        scroll={false}
        href={href}
        id={`${type}-${id}`}
      >
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
          textAlign={"center"}
          boxSize={"full"}
          fontWeight={"bold"}
          gap={2}
          py={{ base: 10, md: 24 }}
          fontSize={{ base: "xx-small", md: "smaller" }}
          textTransform={"uppercase"}
        >
          <Text>{title}</Text>
          <Text textAlign={"center"} px={4}>
            {slogan}
          </Text>
        </Flex>
      </Card>
    </Flex>
  )
}
