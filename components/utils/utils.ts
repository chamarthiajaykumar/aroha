export const visibleHiddenVariants = (
  duration: number,
  x: number,
  delay: number
) => {
  return {
    visible: {
      opacity: 1,
      transition: { duration: duration, delay: delay },
      x: 0,
    },
    hidden: { opacity: 0, x: x },
  };
};

export const visibleHiddenYVariants = (
  duration: number,
  yIntial: number,
  yAnimated: number,
  delay: number
) => {
  return {
    visible: {
      opacity: 1,
      transition: { duration: duration, delay: delay },
      y: yAnimated,
    },
    hidden: { opacity: 0, y: yIntial, x: 0 },
  };
};

export const visibleHiddenXVariants = (
  duration: number,
  xIntial: number,
  xAnimated: number,
  delay: number
) => {
  return {
    visible: {
      opacity: 1,
      transition: { duration: duration, delay: delay },
      x: xAnimated,
    },
    hidden: { opacity: 0, x: xIntial, y: 0 },
  };
};

// Open link in new tab
export const openInNewTab = (url: string) => {
  window.open(url, "_blank", "noreferrer");
};
