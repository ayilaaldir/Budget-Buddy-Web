import { Flex, Input, Stack, Text } from "@chakra-ui/react";

export default function FilterStatisticsDate() {
  return (
    <Stack spacing={3} rounded={"lg"} py={6} bg={"white"} px={5}>
      <Text fontWeight={'bold'}>Filter Date</Text>
      <Flex gap={5} align={'center'}>
        <Stack w={'full'} spacing={1}>
          <Text>From</Text>
          <Input type="date" />
        </Stack>
        <Stack w={'full'} spacing={1}>
          <Text>To</Text>
          <Input type="date" />
        </Stack>
      </Flex>
    </Stack>
  )
}