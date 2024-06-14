import { Stat, StatArrow, StatHelpText, StatLabel, StatNumber } from "@chakra-ui/react";

interface AccountStatsProps {
  name: string;
  value: number;
  status: string;
}
export default function AccountStats({ name, value, status
}: AccountStatsProps) {
  const formatIDR = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(value);

  return (
    <Stat
      bg={"white"}
      px={5} py={8}
      rounded={'xl'}
      border={"1px"}
      borderColor={"gray.200"}
    >
      <StatLabel color={'gray.500'}>{name}</StatLabel>
      <StatNumber>{formatIDR}</StatNumber>
      <StatHelpText>
        <StatArrow type={status === "up" ? "increase" : "decrease"} />
        {value > 0 ? `${Math.abs(value / 100)}%` : "0%"}
      </StatHelpText>

    </Stat>
  )
}