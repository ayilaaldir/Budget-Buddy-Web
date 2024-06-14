import { Box, Flex, Icon, Image, Link, Text } from "@chakra-ui/react";
import { PiBook } from "react-icons/pi";
import { MdInsertChartOutlined } from "react-icons/md";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { IconType } from 'react-icons/lib';
import LogoOnly from "@/assets/images/logo-only.png";
import { useLocation } from "react-router-dom";

interface NavLinkProps {
  icon: IconType;
  href: string;
  label: string;
  isOpen: boolean;
}

const links: Omit<NavLinkProps, "isOpen">[] = [
  { icon: PiBook, label: "Transactions", href: "/transactions" },
  { icon: MdInsertChartOutlined, label: "Statistics", href: "/statistics" },
  { icon: HiOutlineCurrencyDollar, label: "Account", href: "/account" },
];

const NavLink: React.FC<NavLinkProps> = ({ isOpen, icon, label, href }) => {
  const location = useLocation();

  const isActive =
    (href === "/transactions" && (
      location.pathname.includes("/transactions")
    )) ||
    (href === "/statistics" && (
      location.pathname.includes("/statistics")
    )) ||
    (href === "/account" && (
      location.pathname.includes("/account")
    ));

  return (
    <Link href={href} w={'full'} textDecoration={"none!important"}>
      <Flex
        gap={3}
        align={'center'}
        ml={(isActive && isOpen) ? 5 : 0}
        p={4}
        transition={'all .1s'}
        rounded={'xl'}
        bg={isActive ? 'blue.500' : 'transparent'}
        color={isActive ? 'white' : 'gray.500'}
        _hover={{ color: 'white', bg: 'blue.500', ml: isOpen ? 5 : 0 }}
      >
        <Icon as={icon} boxSize={6} />
        <Text display={isOpen ? "block" : "none"}>
          {label}
        </Text>
      </Flex>
    </Link>
  )
}

export default function Sidebar({ isOpen }: { isOpen: boolean }) {
  return (
    <Box
      pos={'sticky'}
      top={0}
      h={'100dvh'}
    >
      <Flex
        bg={'white'}
        direction={'column'}
        transition={'width .3s'}
        w={isOpen ? '17rem' : '5rem'}
        px={3} py={5}
        gap={8}
        borderRight={'1px'}
        borderColor={'gray.100'}
      >
        <Flex align={'center'} justify={'center'}>
          <Image src={LogoOnly} alt={'Logo'} boxSize={isOpen ? 14 : 10} />
        </Flex>

        <Flex direction={'column'} align={isOpen ? 'start' : 'center'} gap={2}>
          {links.map((link, index) => (
            <NavLink key={index} isOpen={isOpen} {...link} />
          ))}
        </Flex>
      </Flex>
    </Box>
  )
}