import { ComponentType, FC, PropsWithChildren } from "react";
import { tagStyle } from "../style";

type Props = PropsWithChildren<{
  animation?: ComponentType<PropsWithChildren>;
}>;

export const Tag: FC<Props> = ({ children, animation: Animation }) => {
  return Animation ? (
    <Animation>
      <span style={tagStyle}>{children}</span>
    </Animation>
  ) : (
    <span style={tagStyle}>{children}</span>
  );
};
