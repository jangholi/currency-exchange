export const setHistory = (history) => {
  localStorage.setItem('history', history);
};

export const getHistory = () => {
  const history = localStorage.getItem('history');
  return history ? JSON.parse(history) : [];
};
