const minutesToHours = (inMinutes) => {
  if (inMinutes >= 60) {
    const hours = Math.floor(inMinutes / 60);
    const minutes = inMinutes - hours * 60;
    const hourString = hours > 1 ? `${hours} hours` : `${hours} hour`;
    return minutes >= 2
      ? `${hourString}, ${minutes} minutes`
      : minutes === 1
      ? `${hourString}, ${minutes} minute`
      : hourString;
  }
  return inMinutes > 1 ? `${inMinutes} minutes` : `${inMinutes} minute`;
};

export default minutesToHours;
