import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid';

export default function TransactionsCalendar() {
  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      events={[
        { title: 'transactions#1', date: '2024-06-10' },
        { title: 'event 2', date: '2024-06-08' }
      ]}
    />
  )
}