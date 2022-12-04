import { FC, PropsWithChildren, Suspense } from "react";
import { tagStyle } from "../style";
import { MotionDiv } from "./MotionDiv";

type Props = PropsWithChildren<{ fadeIn?: boolean }>;

export const Tag: FC<Props> = ({ children, fadeIn = false }) => {
  return fadeIn ? (
    <Suspense fallback={null}>
      <MotionDiv animate={{ opacity: [0, 1] }} transition={{ duration: 3 }}>
        <span style={tagStyle}>{children}</span>
      </MotionDiv>
    </Suspense>
  ) : (
    <span style={tagStyle}>{children}</span>
  );
};
