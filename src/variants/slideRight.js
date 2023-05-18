const slideRight = (duration) => {
  return {
    offScreen: {
      x: -100,
    },
    onScreen: {
      x: 0,
      transition: {
        type: "spring",
        bounce: 0.2,
        duration: duration,
      },
    },
  };
};

export default slideRight;
