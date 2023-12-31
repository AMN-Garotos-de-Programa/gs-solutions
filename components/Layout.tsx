import {
  Box,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Header } from "./Header";
import { Navbar } from "./Navbar";
import { NAV_ITEMS } from "./Navbar/NAV_ITEMS";
import DrawerRoot from "./Drawer/DrawerRoot";
import React from "react";
import { Footer } from "./Footer";
import CookieBanner from "@/components/CookieBanner";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { bg } from "@/components/Header/HeaderBG";

interface LayoutProps {
  children: React.ReactNode;
  route: string;
}

export default function Layout({ children, route }: LayoutProps) {
  const { isOpen, onToggle } = useDisclosure({ defaultIsOpen: false });

  const {
    isOpen: isOpenDrawer,
    onOpen: onOpenDrawer,
    onClose: onCloseDrawer,
  } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement>(null);

  return (
    <>
      <Header.Root>
        <AnimatePresence>
          <Box
            as={motion.div}
            key={route}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: "0.5", ease: "easeInOut" }}
            exit={{ opacity: 0 }}
            bgImage={route in bg ? bg[route] : bg["/"]}
            bgPosition={{ base: "right", md: "center" }}
            bgRepeat={"no-repeat"}
            bgSize={"cover"}
            position={"absolute"}
            top={0}
            left={0}
            right={0}
            bottom={0}
            zIndex={-1}
          />
        </AnimatePresence>

        <Header.TopBar />
        <Navbar.Root>
          <Navbar.Hamburger isOpen={isOpen} onToggle={onToggle} />
          <Navbar.Desktop>
            {NAV_ITEMS.map((navItem) => (
              <Box key={navItem.label}>
                <Popover trigger={"hover"} placement={"bottom-start"}>
                  <PopoverTrigger>
                    <Box
                      as={Link}
                      p={2}
                      href={navItem.href ?? "#"}
                      fontSize={"sm"}
                      fontWeight={
                        navItem.href === route ? "semibold" : "normal"
                      }
                      color="black"
                      __css={{
                        textTransform: "uppercase",
                      }}
                    >
                      {navItem.label}
                      {navItem.children && <ChevronDownIcon marginLeft={2} />}
                    </Box>
                  </PopoverTrigger>

                  {navItem.children && (
                    <PopoverContent
                      border={0}
                      boxShadow={"xl"}
                      bg="white"
                      p={4}
                      rounded={"xl"}
                      minW={"sm"}
                    >
                      <Stack>
                        {navItem.children.map((child) => (
                          <Navbar.Sub key={child.label} {...child} />
                        ))}
                      </Stack>
                    </PopoverContent>
                  )}
                </Popover>
              </Box>
            ))}
            <Box
              as="button"
              ref={btnRef}
              aria-label="Open menu"
              onClick={onOpenDrawer}
              padding={0}
              bgColor={"none"}
              textTransform={"uppercase"}
              fontSize={"sm"}
              _hover={{
                textDecoration: "none",
                color: "#232c54",
                fontWeight: "semibold",
                transition: "all 0.3s ease-in-out",
              }}
            >
              Contato
            </Box>
          </Navbar.Desktop>

          <Navbar.Mobile isOpen={isOpen}>
            {NAV_ITEMS.map((navItem) => (
              <Navbar.MobileItems
                key={navItem.label}
                {...navItem}
                onChangeRoute={onToggle}
                route={route}
              />
            ))}
            <Box
              as="button"
              ref={btnRef}
              aria-label="Open menu"
              onClick={onOpenDrawer}
              padding={0}
              bgColor={"none"}
              fontSize={"md"}
              fontWeight={600}
              color={"gray.600"}
              py={2}
            >
              Contato
            </Box>
          </Navbar.Mobile>
        </Navbar.Root>
        <Header.Banner route={route} />
      </Header.Root>
      <DrawerRoot
        btnRef={btnRef}
        isOpen={isOpenDrawer}
        onClose={onCloseDrawer}
      />
      <main>{children}</main>
      <Footer.Root>
        <Footer.FooterNav openDrawer={onOpenDrawer} />
        <Footer.LowBar />
      </Footer.Root>
      <CookieBanner />
    </>
  );
}
