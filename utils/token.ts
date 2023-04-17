export const checkExpiredToken = (expiredAt: string): boolean => {
  const expiredDate = new Date(expiredAt);
  const now = new Date();
  const check = now.getTime() > expiredDate.getTime();
  return check;
};
