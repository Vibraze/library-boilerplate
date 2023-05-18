// time
export function getKoreaTime(): Date {
  const now = new Date();
  const utcNow = now.getTime() + now.getTimezoneOffset() * 60 * 1000;
  const koreaTimeDiff = 9 * 60 * 60 * 1000;
  return new Date(utcNow + koreaTimeDiff);
}

export function dateToString(date: Date): string {
  return (
    `${date.getFullYear()}-` +
    `${date.getMonth() + 1}`.padStart(2, '0') +
    `-` +
    `${date.getDate()}`.padStart(2, '0')
  );
}

export function addMonth(date: Date, add: number): Date {
  date.setMonth(date.getMonth() + add);
  return date;
}

export function addDate(date: Date, add: number): Date {
  date.setDate(date.getDate() + add);
  return date;
}

export function diffDate(start: Date, end: Date): number {
  return (end.getTime() - start.getTime()) / 86400000;
}
