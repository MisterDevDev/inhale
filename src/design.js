//Animation inputs

export const content = {
  animate: {
    transition: { staggerChildren: 0.2 },
  },
};

export const inputs = {
  initial: { y: -20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

export const dropIn = {
  hidden: {
    y: "-100%",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100%",
    opacity: 0,
  },
}; 
