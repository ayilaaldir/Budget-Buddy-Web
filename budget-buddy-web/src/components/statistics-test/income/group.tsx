import React from 'react';
import { Stack, Text } from '@chakra-ui/react';

interface IncomeGroupsProps {
    date: string;
    month: string;
    year: number;
    children: React.ReactNode;
    index: number;
}

const IncomeGroups: React.FC<IncomeGroupsProps> = ({ date, month, year, children, index }) => {
    return (
        <Stack key={`${date}-${month}-${year}-${index}`} spacing={4}>
            <Text ps={2}>{`${date} ${month} ${year}`}</Text>
            <Stack>{children}</Stack>
        </Stack>
    );
};

export default IncomeGroups;

