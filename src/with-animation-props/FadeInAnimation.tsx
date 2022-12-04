import { ComponentType, FC, PropsWithChildren } from "react";
import { motion } from "framer-motion";

export const FadeInAnimation: FC<PropsWithChildren> = ({ children }) => {
  return (
    <motion.div animate={{ opacity: [0, 1] }} transition={{ duration: 3 }}>
      {children}
    </motion.div>
  );
};
