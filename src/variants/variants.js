export const slideLeft = (duration) => {
  return {
    offScreen: {
      x: 150,
      opacity: 0,
    },
    onScreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: duration,
      },
    },
  };
};

export const slideRight = (duration) => {
  return {
    offScreen: {
      x: -150,
      opacity: 0,
    },
    onScreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.2,
        duration: duration,
      },
    },
  };
};

export const slideUp = (duration) => {
  return {
    offScreen: {
      y: 100,
      opacity: 0,
    },
    onScreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: duration,
      },
    },
  };
};
