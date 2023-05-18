const slideLeft = (duration) => {
  return {
    offScreen: {
      x: 50,
    },
    onScreen: {
      x: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: duration,
      },
    },
  };
};

export default slideLeft;
