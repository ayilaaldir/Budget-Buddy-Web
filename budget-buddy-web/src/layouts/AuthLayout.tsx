import { Container, Flex, Image } from "@chakra-ui/react"
import LogoWithText from "@/assets/images/logo-with-text.png"

export default function AuthLayout({
  children
}: {
  children: Readonly<React.ReactNode>
}) {
  return (
    <Flex
      w={'full'}
      h={'100dvh'}
      align={{ base: 'start', md: 'center' }}
      justify={{ base: 'start', md: 'center' }}
    >
      <Flex
        w={'50%'}
        align={'center'}
        justify={'center'}
        borderRight={'1px'}
        borderColor={'gray.200'}
        h={"60dvh"}
        display={{ base: 'none', md: 'flex' }}
      >
        <Image src={LogoWithText} />
      </Flex>

      <Flex
        w={{ base: 'full', md: '50%' }}
        align={{ base: 'start', md: 'center' }}
        justify={{ base: 'start', md: 'center' }}
        py={8}
      >
        <Container w={'md'}>
          {children}
        </Container>
      </Flex>
    </Flex>
  )
}