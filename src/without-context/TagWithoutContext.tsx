import { FC, PropsWithChildren } from "react";
import { motion } from "framer-motion";
import { tagStyle } from "../style";

type Props = PropsWithChildren<{ fadeIn?: boolean }>;

export const TagWithoutContext: FC<Props> = ({ children, fadeIn = false }) => {
  return fadeIn ? (
    <motion.div animate={{ opacity: [0, 1] }} transition={{ duration: 3 }}>
      <span style={tagStyle}>{children}</span>
    </motion.div>
  ) : (
    <span style={tagStyle}>{children}</span>
  );
};
