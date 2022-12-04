import ReactDOM from "react-dom/client";
import { FadeInAnimation } from "../FadeInAnimation";
import { Tag } from "../Tag";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <main>
    <Tag animation={FadeInAnimation}>Animated with animation props</Tag>
  </main>
);
