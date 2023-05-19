const slideRight = (duration) => {
  return {
    offScreen: {
      x: -100,
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

export default slideRight;
