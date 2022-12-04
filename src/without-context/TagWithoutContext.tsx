import { FC, PropsWithChildren } from "react";
import { motion } from "framer-motion";

const style = {
  padding: "4px",
  borderRadius: "4px",
  backgroundColor: "#F6AD55",
};

type Props = PropsWithChildren<{ fadeIn?: boolean }>;

export const TagWithoutContext: FC<Props> = ({ children, fadeIn = false }) => {
  return fadeIn ? (
    <motion.div animate={{ opacity: [0, 1] }} transition={{ duration: 3 }}>
      <span style={style}>{children}</span>
    </motion.div>
  ) : (
    <span style={style}>{children}</span>
  );
};
