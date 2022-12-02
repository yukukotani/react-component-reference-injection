import { FC, PropsWithChildren } from "react";
import ReactDOM from "react-dom/client";
import { TagWithoutContext } from "../TagWithoutContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <main>
    <TagWithoutContext>Non-animated without context</TagWithoutContext>
  </main>
);
