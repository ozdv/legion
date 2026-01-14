export const allEvents = [
  {
    eventName: "The Acies",
    description: "St. Mary's Cathedral, Calgary",
    date: new Date("March 21, 2026"),
    range: {
      from: "10:30AM",
      until: "3:00PM",
    },
    allDay: false,
  },
  {
    eventName: "The Annual General Reunion",
    description: "Our Lady of Fatima Parish, 4747 30 St SE, Calgary, AB T2B 3K5",
    date: new Date("December 6, 2025"),
    range: {
      from: "11:00AM",
      until: "3:00PM",
    },
    allDay: false,
  },
  {
    eventName: "Outdoor Function",
    description: "Edworthy Park, Site #3, 5050 Spruce Dr SW, Calgary, AB T3C 3B2",
    date: new Date("July 19 2025"),
    range: {
      from: "8:45AM",
      until: "2:45PM",
    },
    allDay: false,
  },
  {
    eventName: "The Retreat",
    description: "FCJ Center",
    date: new Date("February 15 2025"),
    range: {
      from: "8:30AM",
      until: "3:30PM",
    },
    allDay: false,
  },
  {
    eventName: "The Praesidium Function",
    description: "Different for each Praesidium",
    date: new Date("December 31 2025"),
    range: {
      from: "",
      until: "",
    },
    allDay: true,
  },
  {
    eventName: "Frank Duff Mass",
    description: "Holy Spirit Church, 10827 24 St SW",
    date: new Date("November 6 2025"),
    range: {
      from: "7:00PM",
      until: "8:00AM",
    },
    allDay: false,
  },
  {
    eventName: "Edel Quinn Mass", // unfinished
    description: "St. Cecilia's Parish, 321 90 Ave SE, Calgary, AB",
    date: new Date("May 8 2025"),
    range: {
      pending: true,
      from: "",
      until: "",
    },
    allDay: false,
  },
  {
    eventName: "May Rosary Rally",
    description: "Pending", // todo
    date: new Date("May 2024"),
    range: {
      pending: true,
      from: "Pending",
      until: "Pending",
    },
    allDay: false,
  },
  {
    eventName: "October Rosary Rally",
    description:
      "St Mary’s Cathedral, 219 - 18th Avenue SW, Calgary, AB",
    date: new Date("October 11 2025"),
    range: {
      pending: false,
      from: "12:00 PM",
      until: "2:00 PM",
    },
    allDay: false,
  },
];

const todaysDate = new Date();

export const futureEvents = allEvents
  .filter((e) => todaysDate.getTime() < e.date.getTime())
  .sort((a, b) => (a.date.getTime() > b.date.getTime() ? 1 : -1));

//  To display the most recent previous event first
export const pastEvents = allEvents
  .filter((e) => todaysDate.getTime() > e.date.getTime())
  .sort((a, b) => (a.date.getTime() < b.date.getTime() ? 1 : -1));

export const formatDate = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    weekday: "short",
    day: "numeric",
  };

  if (date) return new Date(date).toLocaleDateString("en-CA", options);
  return "Pending";
};
