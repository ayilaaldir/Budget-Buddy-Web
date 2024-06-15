import { Badge, Flex, Stack, Text } from "@chakra-ui/react";

interface FinancialActivityItemProps {
    amount: number;
    note: string;
    category: string;
    type: string;
}

const FinancialActivityItems: React.FC<FinancialActivityItemProps> = ({ amount, note, category, type }) => {
  const formatIDR = new Intl.NumberFormat(
    'id-ID', {
    style: 'currency',
    currency: 'IDR'
  }).format(amount);

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
        bg: type === 'in' ? 'green.100' : 'red.100',
        transition: 'all 0.3s ease'
      }}
      alignItems="center"
      cursor="pointer"
    >
      <Flex gap={2}>
        <Text fontSize={'lg'}>
          {type === 'in' ? '+' : '-'}
        </Text>
        <Stack spacing={1}>
          <Text fontWeight={'bold'}>
            {formatIDR}
          </Text>
          <Text
            fontStyle={'italic'}
            color={'gray.500'}
          >
            {note || category}
          </Text>
        </Stack>
      </Flex>

      <Badge colorScheme={type === 'in' ? 'green' : 'red'} textTransform={"capitalize"} px={3} rounded={'md'}>
        {category}
      </Badge>

    </Flex>
  )
};

export default FinancialActivityItems;