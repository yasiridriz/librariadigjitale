export const titleVariants = {
    initial: { scale: 1.07, opacity: 0 },
    enter: { scale: 1, opacity: 1, transition: { duration: .3, ease: [0.48, 0.15, 0.25, 0.96], when: "beforeChildren", staggerChildren: .035 } },
    exit: {
      x: 0,
      y:60,
      opacity: 0,
      transition: { duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96], staggerChildren: .02 }
    }
  };
export const contentVariants = {
    initial: { scale: 1, y: 60, opacity: 0 },
    enter: { scale: 1, y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.48, 0.15, 0.25, 0.96] } }
}

export const bookVariants = {
  initial: { y: 0 },
  enter: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.48, 0.15, 0.25, 0.96] }
  }
}