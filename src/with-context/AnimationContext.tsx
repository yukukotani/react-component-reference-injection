import { createContext } from "react";
import type { motion } from "framer-motion";

export const AnimationContext = createContext<{ motion?: typeof motion }>({});
