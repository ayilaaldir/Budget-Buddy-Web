import { Heading, Stack, Text } from "@chakra-ui/react";
import IncomeGroups from "@/components/statistics/income/group";
import IncomeItems from "@/components/statistics/income/items";
import FilterStatisticsDate from "../FilterDate";

const dummyDatas = [
  {
    months: "May",
    date: "07",
    year: "2024",
    datas: [
      {
        amount: 200000,
        note: "Salary from last months",
        category: "Salary"
      },
      {
        amount: 1500000,
        note: "Income from project",
        category: "Other"
      }
    ]
  },

  {
    months: "May",
    date: "07",
    year: "2024",
    datas: [
      {
        amount: 20000000,
        note: "Gacha",
        category: "Waste"
      },
      {
        amount: 10000,
        note: "Kang baso lewat",
        category: "Mamam"
      }
    ]
  },

  {
    months: "May",
    date: "12",
    year: "2024",
    datas: [
      {
        amount: 500000,
        note: "Salary from other company",
        category: "Salary"
      },
      {
        amount: 2000000,
        note: "Income from selling product",
        category: "Other"
      }
    ]
  },
];

export default function StatisticsIncome() {
  const totalIncome = dummyDatas.reduce((acc, curr) => {
    return acc + curr.datas.reduce((acc, curr) => {
      return acc + curr.amount;
    }, 0);
  }, 0);

  return (
    <Stack spacing={5}>
      <FilterStatisticsDate />
      {dummyDatas.map((item, index) => (
        <IncomeGroups key={index} date={item.date + " " + item.months + " " + item.year}>
          {item.datas.map((data, index) => (
            <IncomeItems key={index} income={data} />
          ))}
        </IncomeGroups>
      ))}
      <Stack spacing={1} py={5}>
        <Text color={"gray.500"}>Total Income</Text>
        <Heading fontSize={'2xl'} color={"green"}>Rp {totalIncome.toLocaleString()}</Heading>
      </Stack>
    </Stack>
  )
}