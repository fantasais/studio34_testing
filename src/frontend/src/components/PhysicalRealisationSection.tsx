import { useEffect, useRef, useState } from "react";

const CAPABILITIES = ["Clay", "CNC", "Prototype", "Validation"];

export default function PhysicalRealisationSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.16 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id="physical-realisation"
      data-ocid="physical.realisation.section"
      className="relative overflow-hidden"
      style={{ background: "oklch(0.08 0.006 60)", scrollMarginTop: "80px" }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 18% 34%, oklch(0.65 0.201 36.9 / 0.13), transparent 32%), radial-gradient(circle at 82% 72%, oklch(0.97 0.006 80 / 0.06), transparent 30%)",
          pointerEvents: "none",
        }}
      />

      <div
        className="absolute top-0 left-0 right-0"
        style={{
          height: "1px",
          background:
            "linear-gradient(to right, transparent, oklch(0.65 0.201 36.9 / 0.28), transparent)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-16 lg:px-24 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] gap-12 lg:gap-16 items-center">
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.72s ease, transform 0.72s ease",
            }}
          >
            <p
              style={{
                fontFamily: "Barlow, sans-serif",
                fontWeight: 400,
                letterSpacing: "0.30em",
                fontSize: "clamp(0.68rem, 1vw, 0.78rem)",
                textTransform: "uppercase",
                color: "oklch(0.65 0.201 36.9)",
                marginBottom: "0.85rem",
              }}
            >
              भौतिकता — Realisation
            </p>

            <h2
              style={{
                fontFamily: "Barlow, sans-serif",
                fontWeight: 200,
                letterSpacing: "0.18em",
                fontSize: "clamp(1.8rem, 4.5vw, 3.2rem)",
                textTransform: "uppercase",
                color: "oklch(0.96 0.006 80)",
                lineHeight: 1.12,
                marginBottom: "1.3rem",
              }}
            >
              From Surface
              <br />
              <span style={{ color: "oklch(0.65 0.201 36.9)" }}>
                to Substance
              </span>
            </h2>

            <div
              style={{
                height: "1px",
                width: "min(240px, 62%)",
                background:
                  "linear-gradient(to right, oklch(0.65 0.201 36.9 / 0.55), transparent)",
                marginBottom: "1.8rem",
              }}
            />

            <p
              style={{
                fontFamily: "Barlow, sans-serif",
                fontWeight: 300,
                fontSize: "clamp(0.92rem, 1.25vw, 1rem)",
                lineHeight: 1.9,
                color: "oklch(0.84 0.006 78)",
                maxWidth: "38rem",
                marginBottom: "1.8rem",
              }}
            >
              Studio34 closes the distance between design intent and physical
              reality. Full-scale models, production-intent prototypes and
              validation assets are developed in-house through an advanced
              automotive prototyping environment.
            </p>

            <div className="flex flex-wrap gap-x-4 gap-y-3 items-center">
              {CAPABILITIES.map((item, index) => (
                <div key={item} className="flex items-center gap-4">
                  <span
                    style={{
                      fontFamily: "Barlow, sans-serif",
                      fontWeight: 300,
                      letterSpacing: "0.20em",
                      fontSize: "0.68rem",
                      textTransform: "uppercase",
                      color: "oklch(0.96 0.006 80)",
                    }}
                  >
                    {item}
                  </span>
                  {index !== CAPABILITIES.length - 1 && (
                    <span
                      aria-hidden="true"
                      style={{
                        width: "4px",
                        height: "4px",
                        borderRadius: "50%",
                        background: "oklch(0.65 0.201 36.9)",
                        display: "inline-block",
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(28px)",
              transition:
                "opacity 0.82s ease 0.12s, transform 0.82s ease 0.12s",
            }}
          >
            <div
              style={{
                position: "relative",
                overflow: "hidden",
                border: "1px solid oklch(0.65 0.201 36.9 / 0.18)",
                background: "oklch(0.12 0.006 60)",
                boxShadow:
                  "0 28px 70px oklch(0 0 0 / 0.34), 0 0 0 1px oklch(0.97 0.006 80 / 0.04) inset",
              }}
            >
              <img
                src="/assets/realisation/zimmermann-fzp27.webp"
                alt="Studio34 Zimmermann FZP27 full-scale CNC prototyping facility"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover block"
                style={{
                  aspectRatio: "3 / 2",
                  objectPosition: "center",
                  transform: visible ? "scale(1)" : "scale(1.035)",
                  transition: "transform 1.3s ease-out",
                  filter: "saturate(0.92) contrast(1.02)",
                }}
              />

              <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, oklch(0.08 0.006 60 / 0.52) 0%, transparent 36%), linear-gradient(to right, oklch(0.08 0.006 60 / 0.22) 0%, transparent 36%)",
                  pointerEvents: "none",
                }}
              />

              <div
                className="absolute left-0 right-0 bottom-0 flex flex-col md:flex-row md:items-end md:justify-between gap-3 px-5 md:px-7 pb-5 md:pb-6"
                style={{ pointerEvents: "none" }}
              >
                <div>
                  <p
                    style={{
                      fontFamily: "Barlow, sans-serif",
                      fontWeight: 300,
                      letterSpacing: "0.22em",
                      fontSize: "0.66rem",
                      textTransform: "uppercase",
                      color: "oklch(0.65 0.201 36.9)",
                      marginBottom: "0.35rem",
                    }}
                  >
                    Industrial Scale
                  </p>
                  <p
                    style={{
                      fontFamily: "Barlow, sans-serif",
                      fontWeight: 300,
                      letterSpacing: "0.16em",
                      fontSize: "0.72rem",
                      textTransform: "uppercase",
                      color: "oklch(0.96 0.006 80)",
                      margin: 0,
                    }}
                  >
                    Zimmermann FZP27 CNC
                  </p>
                </div>

                <p
                  style={{
                    fontFamily: "Barlow, sans-serif",
                    fontWeight: 300,
                    letterSpacing: "0.16em",
                    fontSize: "0.62rem",
                    textTransform: "uppercase",
                    color: "oklch(0.84 0.006 78)",
                    margin: 0,
                  }}
                >
                  Full-scale · In-house
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

