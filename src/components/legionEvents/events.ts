export const allEvents = [
  {
    eventName: "The Acies",
    description: "St. Thomas Moore parish basement",
    date: new Date("March 23 2024"),
    range: {
      from: "11:00AM",
      until: "3:00PM",
    },
    allDay: false,
  },
  {
    eventName: "The Annual General Reunion",
    description: "St. Anthony's Parish",
    date: new Date("December 7, 2024"),
    range: {
      from: "11:00AM",
      until: "3:00PM",
    },
    allDay: false,
  },
  {
    eventName: "Outdoor Function",
    description: "Edworthy Park, Site # pending",
    date: new Date("July 20 2024"),
    range: {
      from: "8:45AM",
      until: "2:45PM",
    },
    allDay: false,
  },
  {
    eventName: "The Retreat",
    description: "FCJ Center",
    date: new Date("February 17 2024"),
    range: {
      from: "8:30AM",
      until: "3:30PM",
    },
    allDay: false,
  },
  {
    eventName: "The Praesidium Function",
    description: "Different for each Praesidium",
    date: new Date("December 31 2024"),
    range: {
      from: "",
      until: "",
    },
    allDay: true,
  },
  {
    eventName: "Frank Duff Mass",
    description: "St Mary’s Cathedral, 219 - 18th Avenue SW, Calgary",
    date: new Date("November 14 2024"),
    range: {
      from: "7:00PM",
      until: "~8:00AM",
    },
    allDay: false,
  },
  {
    eventName: "Edel Quinn Mass",
    description: "Pending", // todo
    date: new Date("May 11 2024"),
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
      "St Mary’s Cathedral, 219 - 18th Avenue SW, Calgary. (Outside)",
    date: new Date("October 12 2024"),
    range: {
      pending: false,
      from: "12:00 PM",
      until: "1:30 PM",
    },
    allDay: false,
  },
];

const todaysDate = new Date();

export const futureEvents = allEvents
  .filter((e) => todaysDate.getTime() < e.date.getTime())
  .sort((a, b) => (a.date.getTime() > b.date.getTime() ? 1 : -1));

export const pastEvents = allEvents
  .filter((e) => todaysDate.getTime() > e.date.getTime())
  .sort((a, b) => (a.date.getTime() > b.date.getTime() ? 1 : -1));

export const formatDate = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    weekday: "short",
    day: "numeric",
  };

  if (date) return new Date(date).toLocaleDateString("en-CA", options);
  return "Pending";
};
