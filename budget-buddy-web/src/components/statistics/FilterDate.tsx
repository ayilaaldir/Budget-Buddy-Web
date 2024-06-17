import { Flex, Input, Stack, Text, Select } from "@chakra-ui/react";
import { useState } from "react";

export default function FilterStatisticsDate() {
  const currentYear = new Date().getFullYear();
  const years = Array.from(new Array(20), (val, index) => currentYear - index);
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const [selectedYearTo, setSelectedYearTo] = useState(currentYear);
  const [selectedMonthTo, setSelectedMonthTo] = useState(0);

  return (
    <Stack spacing={3} rounded={"lg"} py={6} bg={"white"} px={5}>
      <Text fontWeight={'bold'}>Filter Date</Text>
      <Flex gap={5} align={'center'}>
        <Stack w={'full'} spacing={1}>
          <Select
            placeholder="Select year"
            value={selectedYearTo}
            onChange={(e) => setSelectedYearTo(parseInt(e.target.value))}
          >
            {years.map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </Select>
          <Select
            placeholder="Select month"
            value={selectedMonthTo}
            onChange={(e) => setSelectedMonthTo(parseInt(e.target.value))}
          >
            {months.map((month, index) => (
              <option key={index} value={index}>{month}</option>
            ))}
          </Select>
        </Stack>
      </Flex>
      <Stack w={'full'} spacing={1}>
        <Text>User ID</Text>
        <Input type="text" placeholder="Enter user ID" />
      </Stack>
    </Stack>
  );
}
