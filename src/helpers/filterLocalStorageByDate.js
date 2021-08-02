import { getHistory } from '../utils/LocalStorageManagement';

export const filterLocalStorageByDate = (day) => {
  const history = getHistory();

  const NdaysAgo = new Date(Date.now() - (day * 24 * 60 * 60 * 1000)).getTime();

  const filterDate = history.filter((e) => e.date >= NdaysAgo);

  return filterDate;
};
