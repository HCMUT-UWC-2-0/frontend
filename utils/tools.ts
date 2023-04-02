import classNames from "classnames";

/**
 * Mapping hotkey into className package for better usage
 */
const cx = classNames;
const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

export { capitalize, cx };
