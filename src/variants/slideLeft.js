const slideLeft = (duration) => {
  return {
    offScreen: {
      x: 50,
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

export default slideLeft;
