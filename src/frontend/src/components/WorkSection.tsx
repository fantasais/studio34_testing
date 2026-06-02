import { useEffect, useRef, useState } from "react";

const WORK_ITEMS = [
  {
    id: 1,
    label: "KITSUN - The FOX pc",
    image: "/assets/worksection/WorkSection_P1.webp",
    category: "Custom Product Design",
    featured: true,
  },
  {
    id: 2,
    label: "Compact Lawn Mower",
    image: "/assets/worksection/WorkSection_P2.webp",
    category: "Industrial Design",
    featured: false,
  },
  {
    id: 3,
    label: "Golf Cart",
    image:
      "/assets/worksection/WorkSection_P3.webp",
    category: "Leisure Mobility Design",
    featured: false,
  },
];

function WorkCard({
  item,
  animationDelay,
  featured = false,
  fillHeight = false,
}: {
  item: (typeof WORK_ITEMS)[0];
  animationDelay: number;
  featured?: boolean;
  fillHeight?: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), animationDelay);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [animationDelay]);

  return (
    <a
      href="/work#work-projects"
      style={{ display: "block", textDecoration: "none" }}
    >
      <div
        ref={ref}
        data-ocid={`work.item.${item.id}`}
        className={`relative overflow-hidden${fillHeight ? " h-full" : ""}`}
        style={{
          ...(fillHeight
            ? { height: "100%", minHeight: "280px" }
            : { aspectRatio: featured ? "4/3" : "16/9" }),
          background: "oklch(0.88 0.010 72 / 0.45)",
          border: "1px solid oklch(0.65 0.201 36.9 / 0.12)",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
          cursor: "pointer",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
       <img
  src={item.image}
  alt={item.label}
  className="absolute inset-0 w-full h-full object-cover"
  loading="lazy"
  decoding="async"
  style={{
    transform: hovered ? "scale(1.05)" : "scale(1)",
    transition: "transform 0.5s ease",
  }}
/>

        {/* Hover reveal overlay with category */}
        <div
          className="absolute left-0 right-0 bottom-0 flex items-end px-4 md:px-5"
          style={{
            height: featured ? "42%" : "52%",
            background: "oklch(0.08 0.006 60 / 0.88)",
            opacity: hovered ? 1 : 0,
            transform: hovered ? "translateY(0)" : "translateY(100%)",
            transition: "opacity 0.35s ease, transform 0.35s ease",
            paddingBottom: featured ? "2.9rem" : "2.25rem",
          }}
        >
          <span
            style={{
              fontFamily: "Barlow, sans-serif",
              fontWeight: 200,
              letterSpacing: "0.3em",
              fontSize: "0.68rem",
              textTransform: "uppercase",
              color: "oklch(0.92 0.006 70)",
            }}
          >
            {item.category}
          </span>
        </div>

        {/* Label overlay */}
        <div
          className="absolute bottom-0 left-0 right-0 px-4 md:px-5 py-3 md:py-4"
          style={{
            background:
              "linear-gradient(to top, oklch(0.08 0.006 60 / 0.82) 0%, oklch(0.08 0.006 60 / 0.3) 70%, transparent 100%)",
            pointerEvents: "none",
          }}
        >
          <span
            style={{
              fontFamily: "Barlow, sans-serif",
              fontWeight: 300,
              letterSpacing: "0.2em",
              fontSize: "clamp(0.68rem, 0.92vw, 0.78rem)",
              textTransform: "uppercase",
              color: "oklch(0.92 0.006 70)",
              textShadow: "0 1px 4px oklch(0.04 0.006 60 / 0.6)",
            }}
          >
            {item.label}
          </span>
        </div>
      </div>
    </a>
  );
}

export default function WorkSection() {
  const featuredProject = WORK_ITEMS.find((item) => item.featured);
  const supportingProjects = WORK_ITEMS.filter((item) => !item.featured);

  return (
    <section
      id="work-preview"
      data-ocid="work.section"
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

      <div className="mx-auto max-w-7xl px-6 md:px-16 lg:px-24 py-36 md:py-32">
        {/* Section header */}
        <div className="relative mb-16 md:mb-20 flex flex-col items-center text-center gap-4">
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
            काम — Selected Work
          </p>

          <h2
            style={{
              fontFamily: "Barlow, sans-serif",
              fontWeight: 200,
              letterSpacing: "0.22em",
              fontSize: "clamp(1.8rem, 4.5vw, 3rem)",
              textTransform: "uppercase",
              color: "oklch(0.12 0.006 60)",
              lineHeight: "1.1",
            }}
          >
            Across Mobility, Product and Prototype
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

        {/* Editorial layout — featured spans both rows, right side is a 2-row grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:grid-rows-2 gap-6 lg:items-stretch">
          {featuredProject && (
            <div className="lg:col-span-7 lg:row-span-2 lg:h-full">
              <WorkCard
                item={featuredProject}
                animationDelay={0}
                featured={true}
                fillHeight={true}
              />
            </div>
          )}

          {supportingProjects.map((item, index) => (
            <div key={item.id} className="lg:col-span-5 lg:row-span-1">
              <WorkCard
                item={item}
                animationDelay={(index + 1) * 120}
                featured={false}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
