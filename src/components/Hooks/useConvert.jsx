export function useConvert() {
  const convertSeconds = (seconds) => {
    return new Date(seconds * 1000).toISOString().substr(11, 8);
  };
  const convertDate = (unix) => {
    return new Date(unix * 1000).toLocaleDateString("ru-RU");
  };
  const convertTime = (unix) => {
    return new Date(unix * 1000).toLocaleTimeString("ru-RU");
  };
  return { convertSeconds, convertTime, convertDate };
}
