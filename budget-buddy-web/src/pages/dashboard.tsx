import { Flex, Image } from "@chakra-ui/react";
import MainLayout from "@/layouts/MainLayout";
import LogoWithText from "@/assets/images/logo-with-text.png";

export default function DashboardPage() {
  return (
    <MainLayout>
      <Flex justify={'center'} align={'center'} h={'80dvh'}>
        <Image src={LogoWithText} alt={'Logo'} />
      </Flex>
    </MainLayout>
  )
}