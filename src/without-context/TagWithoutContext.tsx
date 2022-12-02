import { FC, PropsWithChildren } from "react";

type Props = PropsWithChildren;

export const TagWithoutContext: FC<Props> = ({ children }) => {
  return (
    <span
      style={{
        padding: "4px",
        borderRadius: "4px",
        backgroundColor: "#F6AD55",
      }}
    >
      {children}
    </span>
  );
};
