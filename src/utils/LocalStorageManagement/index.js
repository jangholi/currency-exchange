export const setHistory = (history) => {
  localStorage.setItem('history', history);
};

export const getHistory = () => {
  const history = localStorage.getItem('history');
  const parseHistory = history ? JSON.parse(history) : [];
  parseHistory.sort((a, b) => a.date - b.date);
  return parseHistory;
};
