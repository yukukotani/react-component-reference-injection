import { motion } from "framer-motion";
import ReactDOM from "react-dom/client";
import { AnimationContext } from "../AnimationContext";
import { Tag } from "../Tag";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <AnimationContext.Provider value={{ motion: motion }}>
    <main>
      <Tag>Animated with animation props</Tag>
    </main>
  </AnimationContext.Provider>
);
