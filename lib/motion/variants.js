export const container = {
  initial: { scale: 1.07, opacity: 0 },
  enter: { scale: 1, opacity: 1, transition: { duration: .5, staggerChildren: 0.2, when: "beforeChildren"} },
  exit: {
    scale: .93,
    opacity: 0,
    transition: { duration: 0.5 }
  }
};

export const content = {
  initial: { y: 30, opacity: 0 },
  enter: { y: 0, opacity: 1, transition: { duration: .5 } },
  exit: {
    opacity: 0,
    transition: { duration: 0.5 }
  }
};
