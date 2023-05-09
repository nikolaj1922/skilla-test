export const getFullDate = (
  differentDay: number,
  changerValue: number
): string => {
  let date = new Date();
  if (differentDay) {
    date = new Date(date.setDate(date.getDate() - differentDay));
  }
  if (changerValue) {
    date = new Date(date.setDate(date.getDate() - changerValue));
  }
  const day = date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`;
  const month =
    date.getMonth() > 9 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`;
  const year = date.getFullYear();
  return `${year}-${month}-${day}`;
};

export const getCallTime = (data: string): string =>
  data.split(" ")[1].slice(0, 5);

export const getCallDuration = (duration: number) => {
  const truncMinutes = Math.trunc(duration / 60);
  const minutes = truncMinutes > 9 ? truncMinutes : `0${truncMinutes}`;
  const seconds = duration % 60 > 9 ? duration % 60 : `0${duration % 60}`;
  return `${minutes}:${seconds}`;
};

export const getRandomGrade = () => {
  const min = Math.ceil(0);
  const max = Math.floor(3);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const getDateToAppbar = () => {
  const formatter = new Intl.DateTimeFormat("ru", {
    weekday: "long",
    month: "short",
    day: "numeric",
  });
  return formatter
    .format(new Date())
    .split(" ")
    .map((item, i) => (i === 0 ? item[0].toUpperCase() + item.slice(1) : item))
    .join(" ");
};
