import dayjs from 'dayjs';

const humanizePointDate = (date, format) => date ? dayjs(date).format(format) : '';

const isPointExpired = (date) => date && dayjs().isAfter(date, 'D');

export { humanizePointDate, isPointExpired };
