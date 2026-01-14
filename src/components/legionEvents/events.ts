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
    description: "St. Patrick's / St. Bonaventure Parish, Calgary",
    date: new Date("December 5, 2026"),
    range: {
      from: "10:30AM",
      until: "3:00PM",
    },
    allDay: false,
  },
  {
    eventName: "Outdoor Function",
    description: "Edworthy Park, Site #3, Calgary",
    date: new Date("July 18, 2026"),
    range: {
      from: "10:30AM",
      until: "3:00PM",
    },
    allDay: false,
  },
  {
    eventName: "The Retreat",
    description: "FCJ Centre, Calgary",
    date: new Date("February 28, 2026"),
    range: {
      from: "8:30AM",
      until: "3:30PM",
    },
    allDay: false,
  },
  {
    eventName: "The Praesidium Function",
    description: "Different for each Praesidium",
    date: new Date("December 31 2026"),
    range: {
      from: "",
      until: "",
    },
    allDay: true,
  },
  {
    eventName: "Frank Duff Mass",
    description: "St. Bonaventure Church, Calgary",
    date: new Date("November 5 2026"),
    range: {
      from: "7:00PM",
      until: "8:00AM",
    },
    allDay: false,
  },
  {
    eventName: "Edel Quinn Mass", 
    description: "St. Bonaventure Church, Calgary",
    date: new Date("May 14 2026"),
    range: {
      from: "7:00PM",
      until: "8:00PM",
    },
    allDay: false,
  },
  {
    eventName: "Rosary Rally",
    description:
      "St Mary’s Cathedral (in front of Parish Office)",
    date: new Date("October 10 2026"),
    range: {
      pending: false,
      from: "12:00 PM",
      until: "2:30 PM",
    },
    allDay: false,
  },
  {
    eventName: "Legion of Mary Workshop",
    description:
      "St. Anthony Parish, Calgary",
    date: new Date("October 24 2026"),
    range: {
      pending: false,
      from: "10:00 AM",
      until: "3:30 PM",
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
