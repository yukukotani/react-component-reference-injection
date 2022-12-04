import { FC, PropsWithChildren, useContext } from "react";
import { tagStyle } from "../style";
import { AnimationContext } from "./AnimationContext";

type Props = PropsWithChildren;

export const Tag: FC<Props> = ({ children }) => {
  const context = useContext(AnimationContext);
  return context.motion ? (
    <context.motion.div
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 3 }}
    >
      <span style={tagStyle}>{children}</span>
    </context.motion.div>
  ) : (
    <span style={tagStyle}>{children}</span>
  );
};
