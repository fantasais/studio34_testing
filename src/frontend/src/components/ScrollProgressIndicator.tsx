import { useEffect, useState } from "react";

export default function ScrollProgressIndicator() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? scrollTop / docHeight : 0);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Track */}
      <div
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: "2px",
          height: "100%",
          background: "oklch(0.65 0.201 36.9 / 0.12)",
          zIndex: 9998,
          pointerEvents: "none",
        }}
      />
      {/* Fill */}
      <div
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: "2px",
          height: `${progress * 100}%`,
          background: "oklch(0.65 0.201 36.9)",
          zIndex: 9999,
          pointerEvents: "none",
          transition: "height 0.05s linear",
        }}
      />
    </>
  );
}
