import { motion } from 'framer-motion';
import { ReactNode, ElementType, useMemo } from 'react';

export type FadeInItemProps = {
  component?: ElementType;
  children: ReactNode;
  duration?: number;
  enterDelay?: number;
  className?: string;
  exitDelay?: number;
  in?: boolean;
};
export function FadeInItem({
  children,
  component: Component = motion.div,
  duration = 0.25,
  enterDelay = 0,
  exitDelay = 0,
  in: transitionIn = true,
  ...props
}: FadeInItemProps): JSX.Element {
  const animate = useMemo(() => ({ opacity: 1, transition: { delay: enterDelay } }), [enterDelay]);
  const exit = useMemo(() => ({ opacity: 0, transition: { delay: exitDelay } }), [exitDelay]);
  const initial = useMemo(() => ({ opacity: 0 }), []);
  const transition = useMemo(() => ({ duration, easing: 'linear' }), [duration]);

  return (
    <Component
      animate={transitionIn ? animate : exit}
      exit={exit}
      initial={initial}
      transition={transition}
      {...props}
    >
      {children}
    </Component>
  );
}
