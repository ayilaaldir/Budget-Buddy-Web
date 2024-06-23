import { useState, useCallback } from 'react';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid';

interface DataItem {
  amount: number;
  note: string;
  category: string;
  type: 'in' | 'out';
}

interface DayData {
  date: string;
  datas: DataItem[];
}

interface CalendarData {
  months: string;
  year: number;
  days: DayData[];
}

interface Event {
  title: string;
  date: string;
  color: string;
}

const debounce = <F extends (...args: any[]) => any>(func: F, wait: number): ((...args: Parameters<F>) => void) => {
  let timeout: ReturnType<typeof setTimeout> | null = null;
  return (...args: Parameters<F>) => {
    const later = () => {
      timeout = null;
      func(...args);
    };
    if (timeout !== null) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(later, wait);
  };
};

export default function TransactionsCalendar() {
  const [events, setEvents] = useState<Event[]>([]);
  const user_id = localStorage.getItem('user_id');

  const handleDatesSet = ({ end }) => {
    fetchEvents(end.getFullYear(), end.getMonth());
  };

  const fetchEvents = useCallback(debounce((year: number, month: number) => {

    if (month == 0) {
      month = 12
      year -= 1
    }

    const url = `http://141.147.151.192:8080/get_transaction.php?year=${year}&month=${month}&user_id=${user_id}`;
    fetch(url)
      .then(response => response.json())
      .then((data: CalendarData) => {
        const formattedEvents = data.days.flatMap(day =>
          day.datas.map(event => {
            const eventDate = new Date(data.year, new Date(`${data.months} 1, ${data.year}`).getMonth(), Number(day.date));
            const dateString = `${eventDate.getFullYear()}-${(eventDate.getMonth() + 1).toString().padStart(2, '0')}-${eventDate.getDate().toString().padStart(2, '0')}`;
            return {
              title: `${event.note} - $${event.amount}`,
              date: dateString,
              color: event.type === 'in' ? 'green' : 'red'
            };
          })
        );
        setEvents(formattedEvents);
      })
      .catch(error => {
        console.error('Error fetching events:', error);
      });
  }, 250), []);

  return (
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={events}
        weekends={true}
        datesSet={handleDatesSet}
      />
  );
}
