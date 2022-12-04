import { lazy } from "react";

export const MotionDiv = lazy(async () => {
  return {
    default: (await import("framer-motion")).motion.div,
  };
});
