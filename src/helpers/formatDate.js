export const formatDate = (timestamp, haveHours) => {
  const fullDate = new Date(timestamp);

  const date = `${fullDate.getDate()}/${fullDate.getMonth()}/${fullDate.getFullYear()}`;
  const time = `${fullDate.getHours()}:${fullDate.getMinutes()}`;

  if (haveHours) {
    return `${date} @ ${time}`;
  }
  return date;
};
