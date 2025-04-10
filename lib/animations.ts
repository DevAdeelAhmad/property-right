import { Variants } from "framer-motion";

// Fade in animation with slight upward movement
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

// Fade in animation with slight leftward movement
export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

// Fade in animation with slight rightward movement
export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

// Staggered children animation
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

// Zoom in animation
export const zoomIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

// Bounce animation
export const bounceIn: Variants = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      type: "spring", 
      stiffness: 300, 
      damping: 20 
    }
  }
};

// Slide up animation with opacity
export const slideUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

// Pulse animation for drawing attention
export const pulse: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: [1, 1.05, 1],
    transition: { 
      duration: 1, 
      times: [0, 0.5, 1],
      ease: "easeInOut" 
    }
  }
};

// Rotate in animation
export const rotateIn: Variants = {
  hidden: { opacity: 0, rotate: -10, scale: 0.95 },
  visible: { 
    opacity: 1, 
    rotate: 0,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

// Stagger children with fade up
export const staggerFadeInUp: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    }
  }
}; 