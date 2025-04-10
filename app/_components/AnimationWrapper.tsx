"use client";

import { ReactNode, useEffect, useState, useRef } from "react";
import { motion, useAnimation, Variants, useInView } from "framer-motion";

interface AnimationWrapperProps {
  children: ReactNode;
  variants: Variants;
  className?: string;
  delay?: number;
  duration?: number;
  threshold?: number;
  once?: boolean;
}

export function AnimationWrapper({
  children,
  variants,
  className = "",
  delay = 0,
  duration,
  threshold = 0.1,
  once = true,
}: AnimationWrapperProps) {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, {
    amount: threshold,
    once: once,
  });
  const [hasPlayed, setHasPlayed] = useState(false);

  // Apply custom duration to the variants if provided
  const variantsWithDuration = duration
    ? {
        ...variants,
        visible: {
          ...variants.visible,
          // Safely add duration to transition property
          ...(typeof variants.visible === "object"
            ? {
                transition: {
                  ...(typeof variants.visible === "object" &&
                  "transition" in variants.visible &&
                  typeof variants.visible.transition === "object"
                    ? variants.visible.transition
                    : {}),
                  duration,
                },
              }
            : {}),
        },
      }
    : variants;

  useEffect(() => {
    if (inView && !hasPlayed) {
      // Start the animation with the specified delay
      setTimeout(() => {
        controls.start("visible");
        if (once) {
          setHasPlayed(true);
        }
      }, delay * 1000);
    }

    if (!inView && !once && hasPlayed) {
      controls.start("hidden");
      setHasPlayed(false);
    }
  }, [controls, inView, delay, once, hasPlayed]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variantsWithDuration}
      className={className}
    >
      {children}
    </motion.div>
  );
}
