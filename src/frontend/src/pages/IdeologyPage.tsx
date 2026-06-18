import { useEffect, useRef, useState } from "react";

function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

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
      { threshold },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}

function SectionHeader({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="mb-10 md:mb-14">
      <p
        style={{
          fontFamily: "Barlow, sans-serif",
          fontWeight: 400,
          letterSpacing: "0.28em",
          fontSize: "0.72rem",
          textTransform: "uppercase",
          color: "oklch(0.65 0.201 36.9)",
          marginBottom: "0.75rem",
        }}
      >
        {eyebrow}
      </p>
      <h2
        style={{
          fontFamily: "Barlow, sans-serif",
          fontWeight: 200,
          letterSpacing: "0.22em",
          fontSize: "clamp(1.4rem, 3.5vw, 2.24rem)",
          textTransform: "uppercase",
          color: "oklch(0.12 0.006 60)",
          lineHeight: "1.1",
        }}
      >
        {title}
      </h2>
      <div
        style={{
          marginTop: "1.25rem",
          height: "1px",
          background:
            "linear-gradient(to right, oklch(0.65 0.201 36.9 / 0.35), transparent)",
          width: "min(320px, 60%)",
        }}
      />
    </div>
  );
}

function HeroSection() {
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="ideology-hero"
      data-ocid="ideology.hero.section"
      className="relative overflow-hidden min-h-[55vh] md:min-h-[78vh]"
      style={{ scrollMarginTop: "80px", background: "oklch(0.08 0.006 60)" }}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 72% 38%, oklch(0.65 0.201 36.9 / 0.10), transparent 40%), radial-gradient(circle at 18% 82%, oklch(0.65 0.201 36.9 / 0.06), transparent 30%)",
          pointerEvents: "none",
        }}
      />

      <div
        className="absolute bottom-0 left-0 right-0"
        style={{
          height: "40%",
          background:
            "linear-gradient(to top, oklch(0.08 0.006 60 / 0.60), transparent)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: "clamp(6rem, 14vh, 10rem)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "0 clamp(1.5rem, 6vw, 4rem)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: "0.4em",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              fontFamily: "Barlow, sans-serif",
              fontWeight: 100,
              fontSize: "clamp(1.5rem, 5.5vw, 4.5rem)",
              letterSpacing: "0.06em",
              lineHeight: 1.15,
              color: "oklch(0.94 0.006 80)",
              opacity: heroVisible ? 1 : 0,
              transition: "opacity 1050ms ease-out 120ms",
            }}
          >
            Design is not
          </span>
          <span
            style={{
              fontFamily: "Barlow, sans-serif",
              fontWeight: 600,
              fontSize: "clamp(1.5rem, 5.5vw, 4.5rem)",
              letterSpacing: "0.06em",
              lineHeight: 1.15,
              color: "oklch(0.65 0.201 36.9)",
              whiteSpace: "nowrap",
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? "translateY(0)" : "translateY(12px)",
              transition:
                "opacity 1050ms ease-out 720ms, transform 1050ms ease-out 720ms",
            }}
          >
            DECORATION
          </span>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: "0.4em",
            flexWrap: "wrap",
            justifyContent: "center",
            marginTop: "0.3em",
          }}
        >
          <span
            style={{
              fontFamily: "Barlow, sans-serif",
              fontWeight: 100,
              fontSize: "clamp(1.5rem, 5.5vw, 4.5rem)",
              letterSpacing: "0.06em",
              lineHeight: 1.15,
              color: "oklch(0.94 0.006 80)",
              opacity: heroVisible ? 1 : 0,
              transition: "opacity 1050ms ease-out 120ms",
            }}
          >
            Design is
          </span>
          <span
            style={{
              fontFamily: "Barlow, sans-serif",
              fontWeight: 600,
              fontSize: "clamp(1.5rem, 5.5vw, 4.5rem)",
              letterSpacing: "0.06em",
              lineHeight: 1.15,
              color: "oklch(0.65 0.201 36.9)",
              whiteSpace: "nowrap",
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? "translateY(0)" : "translateY(12px)",
              transition:
                "opacity 1050ms ease-out 1250ms, transform 1050ms ease-out 1250ms",
            }}
          >
            DECISION
          </span>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "2.5rem",
          left: "clamp(1.5rem, 6vw, 4rem)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.4rem",
            marginBottom: "1.5rem",
          }}
        >
          <h1
            style={{
              fontFamily: "Barlow, sans-serif",
              fontWeight: 200,
              letterSpacing: "0.12em",
              fontSize: "clamp(0.9rem, 2.2vw, 2.2rem)",
              textTransform: "uppercase",
              color: "oklch(0.95 0.006 78)",
              lineHeight: 1,
              margin: 0,
            }}
          >
            OUR IDEOLOGY
          </h1>
          <div className="flex items-center gap-4">
            <span
              style={{
                fontFamily: "Noto Sans Devanagari, sans-serif",
                fontWeight: 200,
                fontSize: "clamp(0.82rem, 1.5vw, 1.4rem)",
                color: "oklch(0.65 0.201 36.9)",
                lineHeight: 1.2,
                paddingLeft: "0.1em",
              }}
            >
              विचार
            </span>
            <div
              style={{
                height: "1px",
                width: "clamp(40px, 8vw, 100px)",
                background: "oklch(0.65 0.201 36.9 / 0.45)",
                flexShrink: 0,
              }}
            />
          </div>
        </div>
        <p
          style={{
            fontFamily: "Barlow, sans-serif",
            fontWeight: 200,
            letterSpacing: "0.25em",
            fontSize: "clamp(0.72rem, 1vw, 0.8rem)",
            textTransform: "uppercase",
            color: "oklch(0.52 0.008 65)",
            margin: 0,
          }}
        >
          IDENTITY · CULTURE · PROCESS
        </p>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0"
        style={{
          height: "1px",
          background:
            "linear-gradient(to right, transparent, oklch(0.65 0.201 36.9 / 0.25), transparent)",
        }}
      />
    </section>
  );
}

function Meaning34Section() {
  const { ref, visible } = useReveal(0.12);

  return (
    <section
      id="meaning-34"
      data-ocid="ideology.meaning34.section"
      style={{ scrollMarginTop: "80px", background: "oklch(0.97 0.006 80)" }}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-16 lg:px-24 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-10 lg:gap-14 items-center">
          <div className="flex flex-col gap-6">
            <SectionHeader
              eyebrow="पहचान — Identity"
              title="The Meaning of 34"
            />

            <p
              style={{
                fontFamily: "Barlow, sans-serif",
                fontWeight: 300,
                fontSize: "clamp(1.0rem, 1.8vw, 1.16rem)",
                lineHeight: 1.9,
                color: "oklch(0.12 0.006 60)",
                margin: 0,
              }}
            >
              34 is not just a number. It is a coded identity
            </p>
            <p
              style={{
                fontFamily: "Barlow, sans-serif",
                fontWeight: 300,
                fontSize: "clamp(0.86rem, 1.3vw, 0.96rem)",
                lineHeight: 1.9,
                color: "oklch(0.12 0.006 60)",
                margin: 0,
              }}
            >
              34 represents the address where automotive design began for us.
              34, Via San Quintino, Torino — lives inside this name. The meaning
              runs even deeper though. Through the integration of{" "}
              <span
                style={{
                  fontFamily: "Noto Sans Devanagari, sans-serif",
                  color: "oklch(0.65 0.201 36.9)",
                  fontWeight: 500,
                  fontSize: "1.15em",
                }}
              >
                अ
              </span>{" "}
              — the first sound, origin of all language — this mark becomes a
              declaration. Origin. Foundation. First Principles.
            </p>
          </div>

          <div
            ref={ref}
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.6s ease, transform 0.6s ease",
            }}
          >
            <div
              style={{
                position: "relative",
                overflow: "hidden",
                border: "1px solid oklch(0.65 0.201 36.9 / 0.18)",
                minHeight: "clamp(340px, 52vw, 520px)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "clamp(1.5rem, 3vw, 2.25rem)",
              }}
            >
              <img
                src="/assets/Studio34.webp"
                alt=""
                aria-hidden="true"
                loading="lazy"
                decoding="async"
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                  opacity: 0.9,
                  pointerEvents: "none",
                  zIndex: 0,
                }}
              />

              <div style={{ position: "relative", zIndex: 1 }}>
                <p
                  style={{
                    fontFamily: "Barlow, sans-serif",
                    fontWeight: 300,
                    letterSpacing: "0.22em",
                    fontSize: "0.66rem",
                    textTransform: "uppercase",
                    color: "oklch(0.97 0.006 80)",
                    marginBottom: "0",
                  }}
                >
                  Identity Unveiled
                </p>
              </div>

              <div style={{ position: "relative", zIndex: 1 }}>
                <p
                  style={{
                    fontFamily: "Barlow, sans-serif",
                    fontWeight: 300,
                    fontSize: "clamp(0.86rem, 1.3vw, 0.96rem)",
                    lineHeight: 1.85,
                    color: "oklch(0.38 0.006 62)",
                    maxWidth: "28rem",
                    marginBottom: "1.25rem",
                  }}
                >
                  The reveal film reflects our roots and our thought process.
                </p>

                <a
                  href="https://www.youtube.com/watch?v=izv8bPabbPY"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "inline-block",
                    fontFamily: "Barlow, sans-serif",
                    fontWeight: 300,
                    letterSpacing: "0.22em",
                    fontSize: "0.68rem",
                    textTransform: "uppercase",
                    color: "oklch(0.12 0.006 60)",
                    border: "1px solid oklch(0.12 0.006 60 / 0.3)",
                    padding: "0.95rem 1.35rem",
                    textDecoration: "none",
                    transition: "border-color 0.25s ease, color 0.25s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor =
                      "oklch(0.65 0.201 36.9)";
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      "oklch(0.65 0.201 36.9)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor =
                      "oklch(0.12 0.006 60 / 0.3)";
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      "oklch(0.12 0.006 60)";
                  }}
                >
                  Watch the unveil
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function IndiaLensSection() {
  const { ref, visible } = useReveal(0.12);

  const principles = [
    {
      label: "Context before styling",
      copy: "Roads, payloads, climate, maintenance: design inputs from day one.",
    },
    {
      label: "Aspiration without imitation",
      copy: "Progressive and globally legible without being visually borrowed.",
    },
    {
      label: "Precision inside constraints",
      copy: "Real constraints make the result relevant, buildable, credible.",
    },
  ];

  return (
    <section
      id="india-lens"
      data-ocid="ideology.lens.section"
      className="relative"
      style={{ scrollMarginTop: "80px", background: "oklch(0.97 0.006 80)" }}
    >
      <div
        className="absolute top-0 left-0 right-0"
        style={{
          height: "1px",
          background:
            "linear-gradient(to right, transparent, oklch(0.65 0.201 36.9 / 0.18), transparent)",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 md:px-16 lg:px-24 py-24 md:py-32">
        <SectionHeader
          eyebrow="दृष्टिकोण — Perspective"
          title="The India Design Lens"
        />

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(280px,0.85fr)_minmax(0,1fr)] gap-10 lg:gap-14 items-stretch">
          <div
            style={{
              position: "relative",
              overflow: "hidden",
              background: "oklch(0.10 0.006 60)",
              height: "100%",
              minHeight: "280px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.75rem",
              padding: "clamp(2rem, 4vw, 3rem)",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(circle at 50% 45%, oklch(0.65 0.201 36.9 / 0.12), transparent 55%)",
                pointerEvents: "none",
              }}
            />
            <p
              style={{
                fontFamily: "Noto Sans Devanagari, sans-serif",
                fontWeight: 100,
                fontSize: "clamp(3rem, 8vw, 6rem)",
                color: "oklch(0.65 0.201 36.9)",
                lineHeight: 1,
                margin: 0,
                position: "relative",
                zIndex: 1,
              }}
            >
              भारत
            </p>
            <p
              style={{
                fontFamily: "Barlow, sans-serif",
                fontWeight: 300,
                letterSpacing: "0.3em",
                fontSize: "0.70rem",
                textTransform: "uppercase",
                color: "oklch(0.55 0.008 65)",
                margin: 0,
                position: "relative",
                zIndex: 1,
              }}
            >
              India · Design Context
            </p>
          </div>

          <div
            ref={ref}
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.6s ease, transform 0.6s ease",
            }}
          >
            <p
              style={{
                fontFamily: "Barlow, sans-serif",
                fontWeight: 300,
                fontSize: "clamp(1.3rem, 2.6vw, 2rem)",
                lineHeight: 1.3,
                color: "oklch(0.12 0.006 60)",
                marginBottom: "1.2rem",
              }}
            >
              India is not a borrowed moodboard. It is a living design context.
            </p>

            <p
              style={{
                fontFamily: "Barlow, sans-serif",
                fontWeight: 300,
                fontSize: "clamp(0.86rem, 1.3vw, 0.96rem)",
                lineHeight: 1.9,
                color: "oklch(0.38 0.006 62)",
                maxWidth: "36rem",
                marginBottom: "1.8rem",
              }}
            >
              Studio34 reads India as behavior, aspiration, repair logic, value
              sensitivity, and daily use — not as an aesthetic surface to apply
              at the end.
            </p>

            <div>
              {principles.map((p, i) => (
                <div
                  key={p.label}
                  style={{
                    paddingTop: i === 0 ? 0 : "1rem",
                    paddingBottom: "1rem",
                    borderTop:
                      i === 0
                        ? "none"
                        : "1px solid oklch(0.12 0.006 60 / 0.08)",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "Barlow, sans-serif",
                      fontWeight: 300,
                      letterSpacing: "0.18em",
                      fontSize: "0.68rem",
                      textTransform: "uppercase",
                      color: "oklch(0.65 0.201 36.9)",
                      marginBottom: "0.4rem",
                    }}
                  >
                    {p.label}
                  </p>
                  <p
                    style={{
                      fontFamily: "Barlow, sans-serif",
                      fontWeight: 300,
                      fontSize: "0.88rem",
                      lineHeight: 1.8,
                      color: "oklch(0.38 0.006 62)",
                      margin: 0,
                    }}
                  >
                    {p.copy}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DualitySection() {
  const { ref, visible } = useReveal(0.12);

  return (
    <section
      id="duality"
      data-ocid="ideology.duality.section"
      className="relative pb-20 md:pb-28"
      style={{ scrollMarginTop: "80px", background: "oklch(0.97 0.006 80)" }}
    >
      <div
        className="absolute top-0 left-0 right-0"
        style={{
          height: "1px",
          background:
            "linear-gradient(to right, transparent, oklch(0.65 0.201 36.9 / 0.18), transparent)",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 md:px-16 lg:px-24 pt-20 md:pt-28 pb-10 md:pb-12">
        <p
          style={{
            fontFamily: "Barlow, sans-serif",
            fontWeight: 200,
            letterSpacing: "0.08em",
            fontSize: "clamp(0.82rem, 1.4vw, 1.05rem)",
            lineHeight: 1.5,
            color: "oklch(0.45 0.008 62)",
            marginBottom: "0.6rem",
            textTransform: "uppercase",
          }}
        >
          Craft brings emotion{" "}
          <span style={{ color: "oklch(0.65 0.201 36.9)", margin: "0 0.4em" }}>
            |
          </span>{" "}
          Digital brings precision
        </p>
        <p
          style={{
            fontFamily: "Noto Sans Devanagari, sans-serif",
            fontWeight: 300,
            letterSpacing: "0.02em",
            fontSize: "clamp(0.96rem, 1.8vw, 1.28rem)",
            lineHeight: 1.55,
            color: "oklch(0.65 0.201 36.9)",
            margin: 0,
          }}
        >
          यही संतुलन है —{" "}
          <span
            style={{
              fontFamily: "Barlow, sans-serif",
              fontWeight: 300,
              letterSpacing: "0.04em",
              color: "oklch(0.38 0.006 62)",
            }}
          >
            This is the balance.
          </span>
        </p>
      </div>

      <div
        ref={ref}
        className="flex flex-col lg:grid lg:grid-cols-[minmax(0,1fr)_7px_minmax(0,1fr)]"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 0.72s ease, transform 0.72s ease",
          minHeight: "clamp(340px, 48vw, 560px)",
        }}
      >
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            isolation: "isolate",
            background: "oklch(0.10 0.006 60)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            padding: "clamp(2rem, 4vw, 3.5rem)",
            minHeight: "280px",
          }}
        >
          <img
            src="/assets/ideologybalance/Ideology_Craft.webp"
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              zIndex: 0,
              filter: "saturate(0.92) brightness(0.88)",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to top, oklch(0.08 0.006 60 / 0.42) 0%, oklch(0.08 0.006 60 / 0.10) 46%, transparent 72%)",
              pointerEvents: "none",
              zIndex: 1,
            }}
          />
          <div style={{ position: "relative", zIndex: 2 }}>
            <p
              style={{
                fontFamily: "Barlow, sans-serif",
                fontWeight: 300,
                letterSpacing: "0.22em",
                fontSize: "0.72rem",
                textTransform: "uppercase",
                color: "oklch(0.97 0.006 80)",
                marginBottom: "0.85rem",
              }}
            >
              Craft · Intuition
            </p>
          </div>
        </div>

        <div
          className="lg:hidden"
          style={{ height: "10px", background: "oklch(0.65 0.201 36.9)" }}
        />

        <div
          className="hidden lg:block"
          style={{
            background: "oklch(0.65 0.201 36.9)",
            boxShadow:
              "0 0 28px oklch(0.65 0.201 36.9 / 0.45), 0 0 6px oklch(0.65 0.201 36.9 / 0.6)",
          }}
        />

        <div
          style={{
            position: "relative",
            overflow: "hidden",
            isolation: "isolate",
            background: "oklch(0.985 0.004 82)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            padding: "clamp(2rem, 4vw, 3.5rem)",
            minHeight: "280px",
          }}
        >
          <img
            src="/assets/ideologybalance/Ideology_Precision.webp"
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              zIndex: 0,
              filter: "saturate(0.92) brightness(0.88)",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to top, oklch(0.08 0.006 60 / 0.42) 0%, oklch(0.08 0.006 60 / 0.10) 46%, transparent 72%)",
              pointerEvents: "none",
              zIndex: 1,
            }}
          />
          <div style={{ position: "relative", zIndex: 2 }}>
            <p
              style={{
                fontFamily: "Barlow, sans-serif",
                fontWeight: 300,
                letterSpacing: "0.22em",
                fontSize: "0.72rem",
                textTransform: "uppercase",
                color: "oklch(0.97 0.006 80)",
                marginBottom: "0.85rem",
              }}
            >
              Precision · Control
            </p>
          </div>
        </div>
      </div>

      <div style={{ height: "clamp(3rem, 6vw, 5rem)" }} />
    </section>
  );
}


function ResearchRealisationSection() {
  const { ref, visible } = useReveal(0.12);

  const credentials = [
    {
      image: "/assets/credentials/studio34-dsir-rnd.webp",
      alt: "Studio34 DSIR recognised R&D facility emblem",
      label: "DSIR Recognised R&D Facility",
      meta: "Department of Scientific & Industrial Research, Govt. of India",
      copy: "A recognised industrial design R&D environment where ideas move beyond styling into development, validation and physical realisation.",
    },
    {
      image: "/assets/credentials/studio34-iso27001.webp",
      alt: "Studio34 ISO 27001 certified emblem",
      label: "ISO/IEC 27001 Certified",
      meta: "Information Security Management System",
      copy: "Structured information security practices for confidential design, engineering and development programmes.",
    },
  ];

  return (
    <section
      id="research-realisation"
      data-ocid="ideology.research-realisation.section"
      className="relative"
      style={{ scrollMarginTop: "80px", background: "oklch(0.97 0.006 80)" }}
    >
      <div
        className="absolute top-0 left-0 right-0"
        style={{
          height: "1px",
          background:
            "linear-gradient(to right, transparent, oklch(0.65 0.201 36.9 / 0.18), transparent)",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 md:px-16 lg:px-24 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] gap-12 lg:gap-16 items-center">
          <div>
            <SectionHeader
              eyebrow="अनुसंधान — Capability"
              title="Research & Realisation"
            />

            <p
              style={{
                fontFamily: "Barlow, sans-serif",
                fontWeight: 300,
                fontSize: "clamp(1.25rem, 2.4vw, 1.8rem)",
                lineHeight: 1.35,
                color: "oklch(0.12 0.006 60)",
                marginBottom: "1.2rem",
                maxWidth: "36rem",
              }}
            >
              Design is only valuable when it can be developed, protected and
              realised.
            </p>

            <p
              style={{
                fontFamily: "Barlow, sans-serif",
                fontWeight: 300,
                fontSize: "clamp(0.86rem, 1.3vw, 0.96rem)",
                lineHeight: 1.9,
                color: "oklch(0.38 0.006 62)",
                maxWidth: "38rem",
                margin: 0,
              }}
            >
              Studio34 operates at the intersection of automotive design,
              industrial research, secure development workflows and physical
              prototyping. The studio is structured to move ideas from first
              intent to build-ready outcomes.
            </p>
          </div>

          <div
            ref={ref}
            className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.72s ease, transform 0.72s ease",
            }}
          >
            {credentials.map((credential, index) => (
              <div
                key={credential.label}
                data-ocid={`ideology.credential.${index + 1}`}
                style={{
                  position: "relative",
                  overflow: "hidden",
                  minHeight: "420px",
                  border: "1px solid oklch(0.12 0.006 60 / 0.08)",
                  background:
                    "linear-gradient(180deg, oklch(0.985 0.004 82) 0%, oklch(0.965 0.006 80) 100%)",
                  padding: "clamp(1.4rem, 2.6vw, 2rem)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  gap: "1.5rem",
                }}
              >
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      index === 0
                        ? "radial-gradient(circle at 50% 28%, oklch(0.65 0.201 36.9 / 0.08), transparent 46%)"
                        : "radial-gradient(circle at 50% 28%, oklch(0.12 0.006 60 / 0.045), transparent 46%)",
                    pointerEvents: "none",
                  }}
                />

                <div
                  style={{
                    position: "relative",
                    zIndex: 1,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    minHeight: "210px",
                  }}
                >
                  <img
                    src={credential.image}
                    alt={credential.alt}
                    loading="lazy"
                    decoding="async"
                    style={{
                      width: "min(220px, 64vw)",
                      height: "auto",
                      display: "block",
                      filter:
                        "drop-shadow(0 18px 32px oklch(0.12 0.006 60 / 0.08))",
                    }}
                  />
                </div>

                <div style={{ position: "relative", zIndex: 1 }}>
                  <div
                    style={{
                      height: "1px",
                      width: "100%",
                      background:
                        "linear-gradient(to right, transparent, oklch(0.12 0.006 60 / 0.12), transparent)",
                      marginBottom: "1.35rem",
                    }}
                  />

                  <p
                    style={{
                      fontFamily: "Barlow, sans-serif",
                      fontWeight: 300,
                      letterSpacing: "0.18em",
                      fontSize: "0.72rem",
                      textTransform: "uppercase",
                      color: "oklch(0.65 0.201 36.9)",
                      marginBottom: "0.55rem",
                    }}
                  >
                    {credential.label}
                  </p>

                  <p
                    style={{
                      fontFamily: "Barlow, sans-serif",
                      fontWeight: 300,
                      letterSpacing: "0.08em",
                      fontSize: "0.68rem",
                      textTransform: "uppercase",
                      color: "oklch(0.52 0.008 65)",
                      lineHeight: 1.65,
                      marginBottom: "0.95rem",
                    }}
                  >
                    {credential.meta}
                  </p>

                  <p
                    style={{
                      fontFamily: "Barlow, sans-serif",
                      fontWeight: 300,
                      fontSize: "0.86rem",
                      lineHeight: 1.85,
                      color: "oklch(0.38 0.006 62)",
                      margin: 0,
                    }}
                  >
                    {credential.copy}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Read the context, not just the brief.",
    copy: "Brand, market, user, package, and commercial reality are understood together.",
    meta: "Brand · Market · User · Constraints",
  },
  {
    number: "02",
    title: "Define what the product must stand for.",
    copy: "Meaning and positioning are clarified before the work chases visual novelty.",
    meta: "Intent · Positioning · Character",
  },
  {
    number: "03",
    title: "Develop form through physical and digital loops.",
    copy: "Sketch, clay, CAD, and surface studies work until the answer resolves right.",
    meta: "Sketch · Clay · CAD · Surface",
  },
  {
    number: "04",
    title: "Resolve toward build, not just presentation.",
    copy: "The result carries enough precision to move into prototyping and production logic.",
    meta: "Prototype · Validation · Production Logic",
  },
];

const PROCESS_STICKY_HEIGHT_CAP = 700;

function ProcessSection() {
  const outerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 768 : false,
  );

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const el = outerRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const scrolled = -rect.top;
      const stickyPanelHeight = Math.min(
        window.innerHeight,
        PROCESS_STICKY_HEIGHT_CAP,
      );
      const totalScrollable = el.offsetHeight - stickyPanelHeight;

      if (scrolled <= 0) {
        setActiveStep(0);
        return;
      }

      if (scrolled >= totalScrollable) {
        setActiveStep(PROCESS_STEPS.length - 1);
        return;
      }

      const progress = scrolled / totalScrollable;
      const step = Math.min(
        Math.floor(progress * PROCESS_STEPS.length),
        PROCESS_STEPS.length - 1,
      );
      setActiveStep(step);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sectionHeightVh = PROCESS_STEPS.length * 22 + 80;

  return (
    <div
      ref={outerRef}
      id="process"
      data-ocid="ideology.process.outer"
      style={{
        scrollMarginTop: "80px",
        height: isMobile
          ? `${PROCESS_STEPS.length * 28 + 72}svh`
          : `${sectionHeightVh}vh`,
        position: "relative",
        background: "oklch(0.97 0.006 80)",
      }}
    >
      <div
        className="absolute top-0 left-0 right-0"
        style={{
          height: "1px",
          background:
            "linear-gradient(to right, transparent, oklch(0.65 0.201 36.9 / 0.18), transparent)",
        }}
      />

      <div
        style={{
          position: "sticky",
          top: 0,
          height: isMobile
            ? "72svh"
            : `min(100vh, ${PROCESS_STICKY_HEIGHT_CAP}px)`,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingTop: "clamp(4rem, 8vh, 6rem)",
          paddingBottom: "clamp(1.5rem, 3vh, 3rem)",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 82% 50%, oklch(0.65 0.201 36.9 / 0.06), transparent 32%)",
            pointerEvents: "none",
          }}
        />

        <div
          className="mx-auto max-w-7xl px-6 md:px-16 lg:px-24 w-full"
          style={{ position: "relative", zIndex: 1 }}
        >
          <div className="mb-6 md:mb-8">
            <SectionHeader
              eyebrow="विचारधारा — Discipline"
              title="The Process"
            />
            <p
              style={{
                fontFamily: "Barlow, sans-serif",
                fontWeight: 300,
                fontSize: "clamp(0.84rem, 1.15vw, 0.92rem)",
                lineHeight: 1.9,
                color: "oklch(0.38 0.006 62)",
                maxWidth: "30rem",
                margin: 0,
              }}
            >
              A disciplined progression from context to form to validation. Four
              steps. No shortcuts.
            </p>
          </div>

          <div
            style={{
              position: "relative",
              minHeight: "clamp(10rem, 22vh, 16rem)",
            }}
          >
            {PROCESS_STEPS.map((step, idx) => (
              <div
                key={step.number}
                data-ocid={`ideology.process.item.${idx + 1}`}
                style={{
                  position: idx === 0 ? "relative" : "absolute",
                  top: idx === 0 ? undefined : 0,
                  left: 0,
                  right: 0,
                  opacity: activeStep === idx ? 1 : 0,
                  transform:
                    activeStep === idx
                      ? "translateY(0)"
                      : activeStep > idx
                        ? `translateY(${isMobile ? "-19px" : "-28px"})`
                        : `translateY(${isMobile ? "19px" : "28px"})`,
                  transition:
                    "opacity 0.55s cubic-bezier(0.4,0,0.2,1), transform 0.55s cubic-bezier(0.4,0,0.2,1)",
                  pointerEvents: activeStep === idx ? "auto" : "none",
                }}
              >
                <div className="flex flex-col gap-3 md:hidden">
                  <p
                    style={{
                      fontFamily: "Barlow, sans-serif",
                      fontWeight: 300,
                      letterSpacing: "0.18em",
                      fontSize: "0.68rem",
                      textTransform: "uppercase" as const,
                      color: "oklch(0.65 0.201 36.9)",
                      margin: 0,
                    }}
                  >
                    {step.number} /{" "}
                    {String(PROCESS_STEPS.length).padStart(2, "0")}
                  </p>
                  <div
                    style={{
                      width: "2.5rem",
                      height: "1px",
                      background: "oklch(0.65 0.201 36.9 / 0.45)",
                    }}
                  />
                  <p
                    style={{
                      fontFamily: "Barlow, sans-serif",
                      fontWeight: 200,
                      letterSpacing: "0.14em",
                      fontSize: "0.85rem",
                      textTransform: "uppercase" as const,
                      color: "oklch(0.12 0.006 60)",
                      lineHeight: 1.35,
                      margin: 0,
                    }}
                  >
                    {step.title}
                  </p>
                  <p
                    style={{
                      fontFamily: "Barlow, sans-serif",
                      fontWeight: 300,
                      fontSize: "0.82rem",
                      lineHeight: 1.85,
                      color: "oklch(0.38 0.006 62)",
                      margin: 0,
                    }}
                  >
                    {step.copy}
                  </p>
                  <p
                    style={{
                      fontFamily: "Barlow, sans-serif",
                      fontWeight: 300,
                      letterSpacing: "0.16em",
                      fontSize: "0.6rem",
                      textTransform: "uppercase" as const,
                      color: "oklch(0.65 0.201 36.9)",
                      margin: 0,
                    }}
                  >
                    {step.meta}
                  </p>
                </div>

                <div
                  className="hidden md:grid"
                  style={{
                    gridTemplateColumns:
                      "minmax(48px, auto) 1px minmax(0, 1fr)",
                    alignItems: "center",
                    columnGap: "clamp(1rem, 3vw, 2.5rem)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "Barlow, sans-serif",
                      fontWeight: 700,
                      fontSize: "clamp(2.1rem, 4.8vw, 3.8rem)",
                      color: "oklch(0.12 0.006 60)",
                      opacity: 0.13,
                      lineHeight: 1,
                      userSelect: "none",
                      letterSpacing: "0.12em",
                    }}
                  >
                    {step.number}
                  </span>

                  <div
                    style={{
                      width: "1px",
                      height: "clamp(4rem, 12vh, 7rem)",
                      background:
                        "linear-gradient(to bottom, oklch(0.65 0.201 36.9 / 0.45), oklch(0.65 0.201 36.9 / 0.08))",
                    }}
                  />

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.85rem",
                      maxWidth: "48rem",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "Barlow, sans-serif",
                        fontWeight: 200,
                        letterSpacing: "0.14em",
                        fontSize: "clamp(0.82rem, 1.45vw, 1.08rem)",
                        textTransform: "uppercase",
                        color: "oklch(0.12 0.006 60)",
                        lineHeight: 1.35,
                        margin: 0,
                      }}
                    >
                      {step.title}
                    </p>

                    <p
                      style={{
                        fontFamily: "Barlow, sans-serif",
                        fontWeight: 300,
                        fontSize: "clamp(0.82rem, 1.1vw, 0.92rem)",
                        lineHeight: 1.85,
                        color: "oklch(0.38 0.006 62)",
                        margin: 0,
                      }}
                    >
                      {step.copy}
                    </p>

                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.75rem",
                        paddingTop: "0.15rem",
                      }}
                    >
                      <div
                        style={{
                          width: "2rem",
                          height: "1px",
                          background: "oklch(0.65 0.201 36.9 / 0.35)",
                          flexShrink: 0,
                        }}
                      />
                      <p
                        style={{
                          fontFamily: "Barlow, sans-serif",
                          fontWeight: 300,
                          letterSpacing: "0.16em",
                          fontSize: "0.64rem",
                          textTransform: "uppercase",
                          color: "oklch(0.65 0.201 36.9)",
                          margin: 0,
                        }}
                      >
                        {step.meta}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              gap: "0.75rem",
              marginTop: "clamp(2rem, 5vh, 4rem)",
              alignItems: "center",
            }}
          >
            {PROCESS_STEPS.map((step, idx) => (
              <div
                key={step.number}
                style={{
                  width: activeStep === idx ? "2.2rem" : "0.45rem",
                  height: "0.45rem",
                  borderRadius: "999px",
                  background:
                    activeStep === idx
                      ? "oklch(0.65 0.201 36.9)"
                      : "oklch(0.12 0.006 60 / 0.12)",
                  transition: "width 0.4s ease, background 0.4s ease",
                }}
              />
            ))}
            <p
              style={{
                fontFamily: "Barlow, sans-serif",
                fontWeight: 300,
                letterSpacing: "0.18em",
                fontSize: "0.6rem",
                textTransform: "uppercase",
                color: "oklch(0.55 0.008 65)",
                margin: 0,
                marginLeft: "0.5rem",
              }}
            >
              Step {activeStep + 1} of {PROCESS_STEPS.length}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TurinClosingSection() {
  const [copied, setCopied] = useState(false);

  const email = "info@studio34.in";
  const subject = "Project Enquiry — Studio34";
  const gmailCompose = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    email,
  )}&su=${encodeURIComponent(subject)}`;

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section
      id="ideology-closing"
      style={{
        scrollMarginTop: "80px",
        background: "oklch(0.97 0.006 80)",
        padding: "clamp(5rem, 12vh, 9rem) 0",
      }}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-16 lg:px-24 flex flex-col items-center text-center gap-6">
        <div
          style={{
            height: "1px",
            background:
              "linear-gradient(to right, transparent, oklch(0.65 0.201 36.9 / 0.3), transparent)",
            width: "100%",
            marginBottom: "1rem",
          }}
        />

        <p
          style={{
            fontFamily: "Barlow, sans-serif",
            fontWeight: 100,
            letterSpacing: "0.3em",
            fontSize: "clamp(1.6rem, 4vw, 2.8rem)",
            textTransform: "uppercase",
            color: "oklch(0.12 0.006 60)",
            lineHeight: 1.2,
            margin: 0,
          }}
        >
          Turin Trained.
          <br />
          <span style={{ color: "oklch(0.65 0.201 36.9)" }}>India Built.</span>
        </p>

        <p
          style={{
            maxWidth: "36rem",
            fontFamily: "Barlow, sans-serif",
            fontWeight: 300,
            fontSize: "clamp(0.82rem, 1.2vw, 0.92rem)",
            lineHeight: 1.9,
            color: "oklch(0.38 0.006 62)",
            margin: 0,
          }}
        >
          Global discipline. Indian perspective. Production-aware design that
          moves with intent.
        </p>

        <div
          style={{
            height: "1px",
            width: "min(120px, 30%)",
            background:
              "linear-gradient(to right, transparent, oklch(0.65 0.201 36.9 / 0.4), transparent)",
          }}
        />

        <div className="flex flex-col items-center gap-3">
          <a
            href={`mailto:${email}?subject=${encodeURIComponent(subject)}`}
            data-ocid="ideology.collaborate.button"
            style={{
              marginTop: "0.5rem",
              display: "inline-block",
              fontFamily: "Barlow, sans-serif",
              fontWeight: 300,
              letterSpacing: "0.28em",
              fontSize: "clamp(0.65rem, 1.2vw, 0.78rem)",
              textTransform: "uppercase",
              color: "oklch(0.97 0.006 80)",
              background: "oklch(0.12 0.006 60)",
              border: "1px solid oklch(0.12 0.006 60)",
              borderRadius: "2px",
              padding: "1rem 2.75rem",
              textDecoration: "none",
              transition: "background 0.25s ease, border-color 0.25s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background =
                "oklch(0.65 0.201 36.9)";
              (e.currentTarget as HTMLAnchorElement).style.borderColor =
                "oklch(0.65 0.201 36.9)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background =
                "oklch(0.12 0.006 60)";
              (e.currentTarget as HTMLAnchorElement).style.borderColor =
                "oklch(0.12 0.006 60)";
            }}
          >
            Collaborate with Studio34
          </a>

          <div
            className="flex flex-wrap items-center justify-center gap-3"
            style={{
              fontFamily: "Barlow, sans-serif",
              fontWeight: 300,
              fontSize: "0.72rem",
              letterSpacing: "0.08em",
              color: "oklch(0.42 0.006 62)",
            }}
          >
            <span>Prefer browser email?</span>

            <a
              href={gmailCompose}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "oklch(0.57 0.135 38)",
                textDecoration: "none",
                textTransform: "uppercase",
                letterSpacing: "0.14em",
                fontSize: "0.68rem",
              }}
            >
              Open in Gmail
            </a>

            <span style={{ color: "oklch(0.65 0.006 65)" }}>·</span>

            <button
              type="button"
              onClick={handleCopyEmail}
              style={{
                background: "transparent",
                border: "none",
                padding: 0,
                cursor: "pointer",
                color: "oklch(0.57 0.135 38)",
                textTransform: "uppercase",
                letterSpacing: "0.14em",
                fontSize: "0.68rem",
                fontFamily: "Barlow, sans-serif",
                fontWeight: 300,
              }}
            >
              {copied ? "Email copied" : "Copy email"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function IdeologyPage() {
   useEffect(() => {
    document.title = "Ideology | Studio34 Design Philosophy";

    document
      .querySelector('meta[name="description"]')
      ?.setAttribute(
        "content",
        "The design ideology behind Studio34, shaped by automotive design discipline, Indian context, precision craft, proportion, surface, motion and meaning."
      );
  }, []);
  return (
    <main>
      <HeroSection />

      <div
        aria-hidden="true"
        style={{
          height: "88px",
          background:
            "linear-gradient(to bottom, oklch(0.08 0.006 60) 0%, oklch(0.18 0.006 60) 24%, oklch(0.48 0.006 65) 62%, oklch(0.97 0.006 80) 100%)",
          pointerEvents: "none",
        }}
      />

      <nav
        className="hidden md:flex fixed right-6 top-1/2 -translate-y-1/2 flex-col gap-4 z-40 pointer-events-auto"
        aria-label="Section index"
      >
        {[
          { id: "meaning-34", label: "Identity" },
          { id: "research-realisation", label: "R&D" },
          { id: "process", label: "Process" },
        ].map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            title={item.label}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              textDecoration: "none",
              opacity: 0.35,
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.opacity = "1";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.opacity = "0.35";
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "oklch(0.65 0.201 36.9)",
                flexShrink: 0,
                display: "inline-block",
              }}
            />
            <span
              style={{
                fontFamily: "Barlow, sans-serif",
                fontWeight: 300,
                fontSize: "0.68rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "oklch(0.35 0.006 60)",
              }}
            >
              {item.label}
            </span>
          </a>
        ))}
      </nav>

      <Meaning34Section />
      <IndiaLensSection />
      <DualitySection />
      <ResearchRealisationSection />
      <ProcessSection />
      <TurinClosingSection />
    </main>
  );
}

