import { useEffect, useState } from 'react';
import { Heading,Stack, Text } from "@chakra-ui/react";
import FinancialActivityItems from "@/components/statistics-test/financial-activity/items";
import FinancialActivityGroups from '@/components/statistics-test/financial-activity/group';
import FilterStatisticsDate from '@/components/statistics-test/FilterDate';

interface GrandChildData {
    amount: number;
    note: string;
    category: string; 
    type: string; 
}

interface ChildData {
    date: string;
    datas: GrandChildData[];
}

interface MotherData {
    months: string;
    year: number;
    days: ChildData[];
}

const StatisticsComponent = () => {
    const [data, setData] = useState<MotherData | null>(null);
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
            .then((fetchedData: MotherData) => setData(fetchedData))
            .catch(error => console.error('There was an error fetching the data:', error));
    }, []);
    const [totalIncome, setTotalIncome] = useState(0);

    useEffect(() => {
        let newTotalIncome = 0;
        if (data) {
            data.days.forEach(day => {
                day.datas.forEach(item => {
                    if (item.type === 'in') {
                        newTotalIncome += item.amount;
                    }
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
                        <FinancialActivityGroups date={day.date} month={data.months} year={data.year} index={index} key={index}>
                            {day.datas.map((item, itemIndex) => (
                                <FinancialActivityItems key={itemIndex} amount={item.amount} note={item.note} category={item.category} type={item.type} />
                            ))}
                        </FinancialActivityGroups>
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
