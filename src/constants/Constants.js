const appId = "db988691faf182dfc3750cd1e57f3718";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const dateHandler = (date) => {
  const dt = new Date(date * 1000);
  return dt;
};
export { appId, months, days, dateHandler };
