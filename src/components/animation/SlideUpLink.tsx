import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

interface SlideUpLinkProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
}

const SlideUpLink: React.FC<SlideUpLinkProps> = ({
  children,
  href,
  className,
}) => {
  const topRef = useRef<HTMLSpanElement>(null);
  const bottomRef = useRef<HTMLSpanElement>(null);

  const handleMouseEnter = () => {
    if (topRef.current && bottomRef.current) {
      gsap.to(topRef.current, {
        y: -topRef.current.offsetHeight,
        duration: 0.5,
        ease: "power3.inOut",
      });
      gsap.to(bottomRef.current, {
        y: 0,
        duration: 0.5,
        ease: "power3.inOut",
      });
    }
  };

  const handleMouseLeave = () => {
    if (topRef.current && bottomRef.current) {
      gsap.to(topRef.current, {
        y: 0,
        duration: 0.5,
        ease: "power3.inOut",
      });
      gsap.to(bottomRef.current, {
        y: bottomRef.current.offsetHeight,
        duration: 0.5,
        ease: "power3.inOut",
      });
    }
  };

  useEffect(() => {
    if (bottomRef.current) {
      gsap.set(bottomRef.current, { y: bottomRef.current.offsetHeight });
    }
  }, []);

  return (
    <a
      href={href}
      className={className}
      style={{
        display: "inline-block",
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span
        ref={topRef}
        style={{
          position: "relative",
          display: "block",
          width: "100%",
        }}
      >
        {children}
      </span>
      <span
        ref={bottomRef}
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          fontWeight: "inherit",
          fontSize: "inherit",
          color: "inherit",
          pointerEvents: "none",
        }}
      >
        {children}
      </span>
    </a>
  );
};

export default SlideUpLink;
