import { Badge, Flex, Stack, Text } from "@chakra-ui/react";

interface IncomeItemProps {
    amount: number;
    note: string;
    category: string;
}

const IncomeItems: React.FC<IncomeItemProps> = ({ amount, note, category }) => {
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
              {amount}
            </Text>
            <Text
              fontStyle={'italic'}
              color={'gray.500'}
            >
              {note || category}
            </Text>
          </Stack>
        </Flex>
  
        <Badge colorScheme="green" textTransform={"capitalize"} px={3} rounded={'md'}>
          {category}
        </Badge>
  
      </Flex>
    )
};

export default IncomeItems;
