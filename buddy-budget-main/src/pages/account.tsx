import { Container, Divider, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import AccountStats from "@/components/account/stats";
import MainLayout from "@/layouts/MainLayout";

const dummyStats = [
  { name: "Total Assets", value: 5800000, status: "up" },
  { name: "Total Liabilities", value: 2000000, status: "down" },
  { name: "Total Net Worth", value: 3800000, status: "up" },
];

const dummyDetails = [
  { name: "Accounts", balance_payable: 2000000, outstanding_balance: 5800000 },
  { name: "Cash", balance_payable: 1000000, outstanding_balance: 2800000 },
  { name: "Cards", balance_payable: 1000000, outstanding_balance: 3000000 },
]

export default function AccountPage() {
  return (
    <MainLayout>
      <Container maxW={"4xl"} p={6}>
        <Stack spacing={5}>
          <Heading fontSize={'xl'}>
            My Account
          </Heading>

          <Flex align={'center'} gap={5}>
            {dummyStats.map((stat, index) => (
              <AccountStats key={index} {...stat} />
            ))}
          </Flex>

          <Divider />

          <Stack spacing={3}>
            {dummyDetails.map((detail, index) => (
              <Flex key={index}
                justify={'space-between'}
                align={'center'}
                p={5}
                bg={'white'}
                rounded={'lg'}
                border={'1px'}
                borderColor={'gray.200'}
              >
                <Heading fontSize={'xl'}>{detail.name}</Heading>
                <Flex gap={5}>
                  <Text color={'gray.500'}>
                    {detail.balance_payable}
                  </Text>
                  <Text color={'gray.500'}>
                    {detail.outstanding_balance}
                  </Text>
                </Flex>
              </Flex>
            ))}
          </Stack>
        </Stack>
      </Container>
    </MainLayout>
  )
}