//check if the date has expired
export const handleDateCheckbox = (state, date) => {
  if (date === null) return state;
  if (state === true) return true;

  const dateTask = new Date(date);
  const dateToDay = new Date();

  return dateTask <= dateToDay;
};
