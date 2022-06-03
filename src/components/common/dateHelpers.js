// change all dates into ISO format and check if the target date is within this week
export const isDateInThisWeek = date => {
  const todayObj = new Date();
  const todayDate = todayObj.getDate();
  const todayDay = todayObj.getDay();

  const firstDayOfWeek = new Date(todayObj.setDate(todayDate - todayDay));
  const lastDayOfWeek = new Date(firstDayOfWeek);
  lastDayOfWeek.setDate(lastDayOfWeek.getDate() + 6);

  return firstDayOfWeek <= new Date(date) && new Date(date) <= lastDayOfWeek;
};

export const month = [
  ['01', 'Jan'],
  ['02', 'Feb'],
  ['03', 'Mar'],
  ['04', 'Apr'],
  ['05', 'May'],
  ['06', 'June'],
  ['07', 'July'],
  ['08', 'Aug'],
  ['09', 'Dec'],
  ['10', 'Oct'],
  ['11', 'Nov'],
  ['12', 'Dec'],
];

// convert date from ISO format to MM-dd--yyyy (eg. 12-20-2021)
export const dateConverter = date => {
  const y = date.substring(0, 4);
  const arr = month.find(item => item[0] === date.substring(5, 7));
  const m = arr[1];
  const d = date.substring(8, 10);

  return `${m}-${d}-${y}`;
};

// check if date is today and return a boolean value to determine the today tab
export const isDateToday = date => {
  let today = new Date();
  let todayDate =
    today.getFullYear() +
    '-' +
    parseInt(today.getMonth() + 1) +
    '-' +
    today.getDate();
  return todayDate === date.slice(0, 10);
};

// check if 1:1 session and return a boolean value to determine the 1:1 session tab
export const isOneToOneSession = size => {
  return size === 1;
};
