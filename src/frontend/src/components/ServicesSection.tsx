import { useState } from "react";

const SERVICE_PILLARS = [
  {
    title: "Design",
    hindi: "रचना",
    description:
      "Concept ideation, form language development and design direction for vehicles and mobility products.",
  },
  {
    title: "Sculpting",
    hindi: "संरचना",
    description:
      "Clay modelling, Class A sculpting, CAD development and CNC milling to refine form with precision.",
  },
  {
    title: "Prototyping",
    hindi: "खाका",
    description:
      "Concept bucks, mock-ups and functional validation models that translate ideas into physical reality.",
  },
  {
    title: "CMF",
    hindi: "रूप-रंग-बनावट",
    description:
      "Colour, material and finish strategies that turn brand intent into tactile, production-aware outcomes.",
  },
];

export default function ServicesSection() {
  const [hoveredTitle, setHoveredTitle] = useState<string | null>(null);

  return (
    <section
      id="services"
      data-ocid="services.section"
      className="relative"
      style={{ background: "oklch(0.97 0.006 80)", scrollMarginTop: "80px" }}
    >
      {/* Top hairline */}
      <div
        className="absolute top-0 left-0 right-0"
        style={{
          height: "1px",
          background:
            "linear-gradient(to right, transparent, oklch(0.65 0.201 36.9 / 0.25), transparent)",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 md:px-16 lg:px-24 py-24 md:py-32">
        {/* Section header */}
        <div className="mb-12 md:mb-20 flex flex-col items-center text-center gap-4">
          <p
            style={{
              fontFamily: "Barlow, sans-serif",
              fontWeight: 400,
              letterSpacing: "0.35em",
              fontSize: "clamp(0.68rem, 1.2vw, 0.78rem)",
              textTransform: "uppercase",
              color: "oklch(0.65 0.201 36.9)",
            }}
          >
            सेवाएँ — What we do
          </p>
          <h2
            style={{
              fontFamily: "Barlow, sans-serif",
              fontWeight: 200,
              letterSpacing: "0.2em",
              fontSize: "clamp(2rem, 4.5vw, 3.25rem)",
              textTransform: "uppercase",
              color: "oklch(0.12 0.006 60)",
              lineHeight: "1.1",
            }}
          >
            From Line to Life
          </h2>
          <div
            style={{
              height: "1px",
              width: "min(200px, 40%)",
              background:
                "linear-gradient(to right, transparent, oklch(0.65 0.201 36.9 / 0.4), transparent)",
            }}
          />
        </div>

        {/* Pillars grid — 2 cols on mobile, 4 cols on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 md:gap-[5vw] items-start justify-items-center w-full">
          {SERVICE_PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="flex flex-col items-center text-center w-full"
            >
              {/* Accent dot */}
              <div
                style={{
                  width: "4px",
                  height: "4px",
                  borderRadius: "50%",
                  background: "oklch(0.65 0.201 36.9)",
                  marginBottom: "1.25rem",
                }}
              />

              {/* English title — linked */}
              <a
                href="/work#work-services"
                onMouseEnter={() => setHoveredTitle(pillar.title)}
                onMouseLeave={() => setHoveredTitle(null)}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <span
                  style={{
                    fontFamily: "Barlow, sans-serif",
                    fontWeight: 300,
                    letterSpacing: "0.22em",
                    fontSize: "clamp(1rem, 1.6vw, 1.15rem)",
                    textTransform: "uppercase",
                    color:
                      hoveredTitle === pillar.title
                        ? "oklch(0.65 0.201 36.9)"
                        : "oklch(0.12 0.006 60)",
                    display: "block",
                    marginBottom: "0.4rem",
                    transition: "color 0.2s ease",
                  }}
                >
                  {pillar.title}
                </span>
              </a>

              {/* Hindi name */}
              <span
                style={{
                  fontFamily: "Noto Sans Devanagari, sans-serif",
                  fontWeight: 200,
                  fontSize: "clamp(0.82rem, 1.3vw, 0.92rem)",
                  color: "oklch(0.65 0.201 36.9)",
                  display: "block",
                  marginBottom: "1rem",
                  letterSpacing: "0.04em",
                }}
              >
                {pillar.hindi}
              </span>

              {/* Thin rule */}
              <div
                style={{
                  height: "1px",
                  width: "32px",
                  background: "oklch(0.65 0.201 36.9 / 0.35)",
                  marginBottom: "1rem",
                }}
              />

              {/* Description */}
              <p
                style={{
                  fontFamily: "Barlow, sans-serif",
                  fontWeight: 300,
                  fontSize: "clamp(0.9rem, 1.1vw, 1rem)",
                  lineHeight: "1.75",
                  color: "oklch(0.40 0.006 62)",
                  textAlign: "center",
                }}
              >
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
