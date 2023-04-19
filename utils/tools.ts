import classNames from "classnames";

/**
 * Mapping hotkey into className package for better usage
 */
const cx = classNames;
const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
export const parteDateTimeString = (timeString: string | number) => {
  const now = new Date(timeString);
  const date = now.toLocaleDateString();
  const time = now.toLocaleTimeString();
  return `${date} ${time}`;
};

export { capitalize, cx };
