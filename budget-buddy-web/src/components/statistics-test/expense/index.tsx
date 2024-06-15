import { Heading, Stack, Text } from "@chakra-ui/react";
import ExpenseGroups from "@/components/statistics-test/expense/group";
import ExpenseItems from "@/components/statistics-test/expense/items";
import FilterStatisticsDate from "../FilterDate";

const dummyDatas = [
  {
    months: "May",
    date: "13",
    year: "2024",
    datas: [
      {
        amount: 800000,
        note: "Buy skincare",
        category: "Beauty"
      },
      {
        amount: 1500000,
        note: "Pay household this months",
        category: "Household"
      }
    ]
  },
  {
    months: "May",
    date: "29",
    year: "2024",
    datas: [
      {
        amount: 900000,
        note: "Pay my education",
        category: "Salary"
      },
      {
        amount: 1000000,
        note: "Lost in poker game",
        category: "Other"
      }
    ]
  },
];

export default function StatisticsExpense() {
  const totalIncome = dummyDatas.reduce((acc, curr) => {
    return acc + curr.datas.reduce((acc, curr) => {
      return acc + curr.amount;
    }, 0);
  }, 0);

  return (
    <Stack spacing={5}>
      <FilterStatisticsDate />
      {dummyDatas.map((item, index) => (
        <ExpenseGroups key={index} date={item.date + " " + item.months + " " + item.year}>
          {item.datas.map((data, index) => (
            <ExpenseItems key={index} expense={data} />
          ))}
        </ExpenseGroups>
      ))}
      <Stack spacing={1} py={5}>
        <Text color={"gray.500"}>Total Expense</Text>
        <Heading fontSize={'2xl'} color={'red'}>Rp {totalIncome.toLocaleString()}</Heading>
      </Stack>
    </Stack>
  )
}