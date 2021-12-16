// convert time from 17:00:00 format to AM or PM format
export const timeConverter = time => {
  let hour = parseInt(time.substring(0, 2));
  let minute = time.substring(3, 5);
  if (hour === 0) {
    return `12:${minute} AM`;
  }
  if (hour > 0 && hour < 12) {
    return `${hour}:${minute} AM`;
  }
  if (hour === 12) {
    return `12:${minute} PM`;
  }
  if (hour > 12) {
    return `${hour - 12}:${minute} PM`;
  }
};
