import { useEffect, useState } from 'react';
import { Heading,Stack, Text,FormControl,FormLabel,Input } from "@chakra-ui/react";
import FinancialActivityItems from "@/components/statistics/financial-activity/items";
import FinancialActivityGroups from '@/components/statistics/financial-activity/group';
import FilterStatisticsDate from '@/components/statistics/FilterDate';

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
    const [selectedYearTo, setSelectedYearTo] = useState<number>(new Date().getFullYear());
    const [selectedMonthTo, setSelectedMonthTo] = useState<number>(new Date().getMonth()); 

    const user_id = localStorage.getItem('user_id');

    const fetchData = () => {
        const url = `http://141.147.151.192:8080/get_transaction.php?year=${selectedYearTo}&month=${selectedMonthTo + 1}&user_id=${user_id}`;
        fetch(url)
            .then(response => response.json())
            .then((fetchedData: MotherData) => setData(fetchedData))
            .catch(error => console.error('There was an error fetching the data:', error));
    };

    const [totalIncome, setTotalIncome] = useState(0);
    const [totalExpenses, setTotalExpenses] = useState(0);

    useEffect(() => {
        let newTotalIncome = 0;
        let newTotalExpenses = 0;
        if (data) {
            data.days.forEach(day => {
                day.datas.forEach(item => {
                    if (item.type === 'in') {
                        newTotalIncome += item.amount;
                    }else{
                        newTotalExpenses += item.amount;
                    }
                });
            });
            setTotalIncome(newTotalIncome);
            setTotalExpenses(newTotalExpenses);
        }
    }, [data]);

    return (
        <Stack spacing={4}>
            <FilterStatisticsDate
              selectedYearTo={selectedYearTo}
              setSelectedYearTo={setSelectedYearTo}
              selectedMonthTo={selectedMonthTo}
              setSelectedMonthTo={setSelectedMonthTo}
              onApply={fetchData}
            />
            {data ? (
                data.days.length > 0 ? (
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
                    <Text>No data available.</Text>  // This is the new line added for when there are no entries in data.days
                )
            ) : (
                <Text>Loading data...</Text>
            )}
            <Stack spacing={1} py={5}>
                <Text color={"gray.500"}>Total Income</Text>
                <Heading fontSize={'2xl'} color={"green"}>Rp {totalIncome.toLocaleString()}</Heading>
                <Text color={"gray.500"}>Total Expenses</Text>
                <Heading fontSize={'2xl'} color={"red"}>Rp {totalExpenses.toLocaleString()}</Heading>
            </Stack>
        </Stack>
    );
};

export default StatisticsComponent;
