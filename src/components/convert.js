export function convertTime(arg) {
  const date = new Date(arg*1000);
  const hours = date.getHours();
  const minutes = `0${date.getMinutes()}`.slice(-2);
  return `${hours}:${minutes}`;
}

export function convertDate(arg) {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December ',]
  const date = new Date(arg*1000);
  const day = date.getDate();
  const month = months[date.getMonth()];
  return `${day} ${month}`;
}