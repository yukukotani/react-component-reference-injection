import ReactDOM from "react-dom/client";
import { TagWithoutContext } from "../TagWithoutContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <main>
    <TagWithoutContext fadeIn>Animated without context</TagWithoutContext>
  </main>
);
