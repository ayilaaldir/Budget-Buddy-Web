// StatisticsComponent.tsx
import { useEffect, useState } from 'react';
import { Heading,Stack, Text } from "@chakra-ui/react";
import IncomeItems from "@/components/statistics-test/income/items";  // Adjust import path as necessary.
import IncomeGroups from '@/components/statistics-test/income/group';
import FilterStatisticsDate from '@/components/statistics-test/FilterDate';

interface IData {
    amount: number;
    note: string;
    category: string;  
}

interface IDay {
    date: string;
    datas: IData[];
}

interface IStatisticsData {
    months: string;
    year: number;
    days: IDay[];
}

const StatisticsComponent = () => {
    const [data, setData] = useState<IStatisticsData | null>(null);
    //const [year, setYear] = useState<number>(new Date().getFullYear());
    //const [month, setMonth] = useState<number>(new Date().getMonth() + 1); 
    //const [userId, setUserId] = useState<number>(1);

    const year = 2024;
    const month = 6;
    const userId = 1;

    useEffect(() => {
        const url = `http://141.147.151.192:8080/get_transaction.php?year=${year}&month=${month}&user_id=${userId}`;
        fetch(url)
            .then(response => response.json())
            .then((fetchedData: IStatisticsData) => setData(fetchedData))
            .catch(error => console.error('There was an error fetching the data:', error));
    }, []);
    const [totalIncome, setTotalIncome] = useState(0);
    
    useEffect(() => {
        let newTotalIncome = 0;
        if (data) {
            data.days.forEach(day => {
                day.datas.forEach(item => {
                    newTotalIncome += item.amount;
                });
            });
            setTotalIncome(newTotalIncome);
        }
    }, [data]);

    return (
        <Stack spacing={4}>
            <FilterStatisticsDate/>
            {data ? (
                <>
                    {data.days.map((day, index) => (
                        <IncomeGroups date={day.date} month={data.months} year={data.year} index={index} key={index}>
                            {day.datas.map((item, itemIndex) => (
                                <IncomeItems key={itemIndex} amount={item.amount} note={item.note} category={item.category} />
                            ))}
                        </IncomeGroups>
                    ))}
                </>
            ) : (
                <Text>Loading data...</Text>
            )}
            <Stack spacing={1} py={5}>
                <Text color={"gray.500"}>Total Income</Text>
                <Heading fontSize={'2xl'} color={"green"}>Rp {totalIncome.toLocaleString()}</Heading>
            </Stack>
        </Stack>
    );
};

export default StatisticsComponent;
