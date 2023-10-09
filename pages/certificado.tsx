import MotionLayout from "@/components/MotionLayout"
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Container,
  Divider,
  Flex,
  Text,
  Box,
} from "@chakra-ui/react"
import Image from "next/image"

export default function Cartificado() {
  return (
    <MotionLayout title="Certificado e Homologação">
      <Container maxW={"container.xl"}>
        <Text
          as="h1"
          textAlign={"center"}
          py={8}
          fontSize={"2xl"}
          fontWeight={"bold"}
          textTransform={"uppercase"}
        >
          Certificados e Homologações
        </Text>
        <Text as="h2" py={4} fontWeight={"semibold"} fontSize={"lg"}>
          G&S Home Solutions juntos com a Eureciclo para um mundo melhor!
        </Text>
        <Flex gap={4} flexDirection={{ base: "column", md: "row" }}>
          <Image
            src="/eureciclo-logo.png"
            alt="Eu Reciclo"
            width={245}
            height={319}
          />
          <Flex flexDirection={"column"} p={4} gap={4}>
            <Text as="p">
              Você sabia que a G&S Home Solutions possui o selo eureciclo?
            </Text>
            <Text as="p">
              Isso significa que apoiamos e investimos em reciclagem no Brasil O
              selo eureciclo foi idealizado para solucionar dois grandes
              problemas: a destinação final de embalagens geradas por empresas e
              a marginalização dos agentes da cadeia de reciclagem. É daí que
              vem a ideia da compensação ambiental: as empresas pagam as
              cooperativas para retirarem do ambiente uma quantidade equivalente
              de material ao das embalagens de seus produtos. Em 2017, iniciamos
              as operações no Chile com o selo todos reciclamos e agora estamos
              em todo território nacional.
            </Text>
          </Flex>
        </Flex>
        <Divider borderColor={"blackAlpha.400"} />
        <Flex
          flexDirection={"column"}
          fontSize={"sm"}
          my={4}
          textAlign={"justify"}
        >
          <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    fontWeight={"semibold"}
                  >
                    Sistema de Gestão de Qualidade
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Flex>
                  <Box w={"30%"} display={"flex"} justifyContent={"center"}>
                    <Text>Teste</Text>
                  </Box>
                  <Text w={"70%"}>
                    O objetivo da norma, é trazer confiança ao cliente de que os
                    produtos e serviços da empresa serão criados de modo
                    repetitivo e consistente, afim de que adquira uma qualidade,
                    de acordo com aquilo que foi definido pela empresa
                  </Text>
                </Flex>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    fontWeight={"semibold"}
                  >
                    Autorização para produção de produtos controlados
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Flex>
                  <Box w={"30%"} display={"flex"} justifyContent={"center"}>
                    <Text>Teste</Text>
                  </Box>
                  <Text w={"70%"}>
                    Através da Divisão de Controle e Fiscalização de Produtos
                    Químicos (DCPQ) a Policia Federal realiza o controle e a
                    fiscalização da fabricação, produção, armazenamento,
                    transformação, embalagem, compra, venda, comercialização,
                    aquisição, posse, doação, empréstimo, permuta, remessa,
                    transporte, distribuição, importação, exportação,
                    reexportação, cessão, reaproveitamento, reciclagem,
                    transferência e utilização de produtos químicos
                  </Text>
                </Flex>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Flex>
      </Container>
    </MotionLayout>
  )
}
