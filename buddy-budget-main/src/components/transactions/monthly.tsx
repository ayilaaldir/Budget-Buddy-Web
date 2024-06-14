import { Badge, Container, Flex, Heading, Stack, Stat, StatLabel, StatNumber } from "@chakra-ui/react";

const dummySummary = [
  { name: "Total Income", value: 120000000 },
  { name: "Total Expense", value: 80000000 },
  { name: "Total Savings", value: 40000000 },
];

const dummyMonthlyTransactions = [
  { month: "January", income: 10000000, expense: 5000000 },
  { month: "February", income: 10000000, expense: 5000000 },
  { month: "March", income: 10000000, expense: 5000000 },
  { month: "April", income: 10000000, expense: 5000000 },
  { month: "May", income: 10000000, expense: 5000000 },
  { month: "June", income: 10000000, expense: 5000000 },
  { month: "July", income: 10000000, expense: 5000000 },
  { month: "August", income: 10000000, expense: 5000000 },
  { month: "September", income: 10000000, expense: 5000000 },
  { month: "October", income: 10000000, expense: 5000000 },
  { month: "November", income: 10000000, expense: 5000000 },
  { month: "December", income: 10000000, expense: 5000000 },
];

export default function TransactionsMonthly() {
  const IDR = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  });

  return (
    <Container maxW={"6xl"}>
      <Stack spacing={6}>
        <Heading fontSize={"xl"}>Monthly Report</Heading>

        <Flex align={"center"} gap={5}>
          {dummySummary.map((summary, index) => (
            <Stat key={index}
              border={"1px"}
              borderColor={"gray.200"}
              py={8} px={5}
              rounded={"lg"}
              w={'fit-content'}
            >
              <StatLabel>{summary.name}</StatLabel>
              <StatNumber>{summary.value}</StatNumber>
            </Stat>
          ))}
        </Flex>

        <Stack spacing={3}>
          {dummyMonthlyTransactions.map((transaction, index) => (
            <Flex key={index}
              justify={"space-between"}
              align={"center"}
              p={5}
              border={"1px"}
              borderColor={"gray.200"}
              rounded={"lg"}
              bg={"gray.50"}
            >
              <Heading fontSize={"lg"}>{transaction.month}</Heading>
              <Flex gap={8}>
                <Badge colorScheme="green" px={3} rounded="md" textTransform={"capitalize"} fontSize={"sm"}>
                  +{IDR.format(transaction.income)}
                </Badge>
                <Badge colorScheme="red" px={3} rounded="md" textTransform={"capitalize"} fontSize={"sm"}>
                  -{IDR.format(transaction.expense)}
                </Badge>
              </Flex>
            </Flex>
          ))}
        </Stack>
      </Stack>
    </Container>
  )
}