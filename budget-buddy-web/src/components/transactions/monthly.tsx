import { useEffect, useState } from 'react';
import { Badge, Container, Flex, Heading, Stack, Stat, StatLabel, StatNumber } from "@chakra-ui/react";

interface Transaction {
  month: string;
  income: number;
  expense: number;
}

export default function TransactionsMonthly() {
  const [monthlyTransactions, setMonthlyTransactions] = useState<Transaction[]>([]);

  const totals = monthlyTransactions.reduce(
    (acc, transaction) => {
      acc.totalIncome += transaction.income;
      acc.totalExpense += transaction.expense;
      return acc;
    },
    { totalIncome: 0, totalExpense: 0 }
  );

  const totalSavings = totals.totalIncome - totals.totalExpense;

  const IDR = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  });

  const user_id = localStorage.getItem('user_id');
  const year = new Date().getFullYear();

  useEffect(() => {
    const url = `http://141.147.151.192:8080/get-transaction-monthly.php?year=${year}&user_id=${user_id}`
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setMonthlyTransactions(data.monthlyTransactions);
      })
      .catch(error => console.error('Error fetching data: ', error));
  });

  return (
    <Container maxW={"6xl"}>
      <Stack spacing={6}>
        <Heading fontSize={"xl"}>{year} Monthly Report</Heading>
        <Flex align={"center"} gap={5}>
          <Stat border={"1px"} borderColor={"gray.200"} py={8} px={5} rounded={"lg"} w={'fit-content'}>
            <StatLabel>Total Income</StatLabel>
            <StatNumber>{IDR.format(totals.totalIncome)}</StatNumber>
          </Stat>
          <Stat border={"1px"} borderColor={"gray.200"} py={8} px={5} rounded={"lg"} w={'fit-content'}>
            <StatLabel>Total Expense</StatLabel>
            <StatNumber>{IDR.format(totals.totalExpense)}</StatNumber>
          </Stat>
          <Stat border={"1px"} borderColor={"gray.200"} py={8} px={5} rounded={"lg"} w={'fit-content'}>
            <StatLabel>Total Savings</StatLabel>
            <StatNumber style={{ color: totalSavings >= 0 ? 'green' : 'red' }}>
              {totalSavings >= 0 ? `+${IDR.format(totalSavings)}` : IDR.format(totalSavings)}
            </StatNumber>
          </Stat>
        </Flex>

        <Stack spacing={3}>
          {monthlyTransactions.map((transaction, index) => (
            <Flex key={index}
              justify={"space-between"}
              align={"center"}
              p={5}
              border={"1px"}
              borderColor={"gray.200"}
              rounded={"lg"}
              bg={"gray.50"}>
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
  );
}
