import { Badge, Flex, Stack, Text } from "@chakra-ui/react";

interface IncomeProps {
  amount: number;
  note: string;
  category: string;
}

export default function IncomeItems({ income }: { income: IncomeProps }) {
  const formatIDR = new Intl.NumberFormat(
    'id-ID', {
    style: 'currency',
    currency: 'IDR'
  }).format(income.amount);

  return (
    <Flex
      bg={'white'}
      px={5} py={3}
      justify={'space-between'}
      rounded={'lg'}
      transition='all 0.3s ease'
      border={'1px'}
      borderColor={'gray.200'}
      _hover={{
        bg: 'blue.100',
        transition: 'all 0.3s ease'
      }}
      alignItems="center"
      cursor="pointer"
    >
      <Flex gap={2}>
        <Text fontSize={'lg'}>
          +
        </Text>
        <Stack spacing={1}>
          <Text fontWeight={'bold'}>
            {formatIDR}
          </Text>
          <Text
            fontStyle={'italic'}
            color={'gray.500'}
          >
            {income.note || income.category}
          </Text>
        </Stack>
      </Flex>

      <Badge colorScheme="green" textTransform={"capitalize"} px={3} rounded={'md'}>
        {income.category}
      </Badge>

    </Flex>
  )
}