import { useEffect, useRef, useState } from "react";

// ─── Shared media helper ─────────────────────────────────────────────

function MediaFill({
  src,
  alt,
  placeholderLabel,
  className = "",
  style = {},
  zoomed = false,
}: {
  src?: string;
  alt: string;
  placeholderLabel: string;
  className?: string;
  style?: React.CSSProperties;
  zoomed?: boolean;
}) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div
        className={className}
        style={{
          ...style,
          background:
            "linear-gradient(180deg, oklch(0.93 0.004 78) 0%, oklch(0.88 0.004 74) 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "1.5rem",
        }}
      >
        <span
          style={{
            fontFamily: "Barlow, sans-serif",
            fontWeight: 300,
            letterSpacing: "0.22em",
            fontSize: "0.72rem",
            textTransform: "uppercase",
            color: "oklch(0.52 0.008 65)",
          }}
        >
          {placeholderLabel}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      style={{
        ...style,
        transform: zoomed ? "scale(1.05)" : "scale(1)",
        transition: "transform 0.6s ease",
      }}
    />
  );
}

// ─── Act 1: Services In Depth ─────────────────────────────────────────────

const SERVICE_DETAILS = [
  {
    title: "Design",
    hindi: "रचना",
    image: "/assets/services/Work_Design.webp",
    overview:
      "Concept development, form language direction and production-aware proposals for vehicles and mobility products.",
    pillars: [
      { label: "Concept Ideation" },
      { label: "Exterior / Interior Design" },
      { label: "Form Language" },
      { label: "Design Systems" },
    ],
  },
  {
    title: "Sculpting",
    hindi: "संरचना",
    image:
      "/assets/services/Work_Sculpting.webp",
    overview:
      "Digital and physical surface development that refines proportion, continuity and manufacturable form with precision.",
    pillars: [
      { label: "Clay Modelling" },
      { label: "Class A Sculpting" },
      { label: "CAD Development" },
      { label: "Precision CNC Milling" },
    ],
  },
  {
    title: "Prototyping",
    hindi: "खाका",
    image: "/assets/services/Work_Proto.webp",
    overview:
      "Physical bucks, appearance models and validation builds that translate design intent into testable reality.",
    pillars: [
      { label: "Design Verification Bucks" },
      { label: "Appearance Models" },
      { label: "Functional Prototypes" },
      { label: "Validation Builds" },
    ],
  },
  {
    title: "CMF",
    hindi: "रूप-रंग-बनावट",
    image:
      "/assets/services/Work_CMF.webp",
    overview:
      "Colour, material and finish strategies shaped for brand expression, tactile quality and manufacturing intent.",
    pillars: [
      { label: "Colour Strategy" },
      { label: "Material Direction" },
      { label: "Finish Development" },
      { label: "CMF Guidelines" },
    ],
  },
];

function ServiceRow({
  service,
  idx,
  textRight = false,
}: {
  service: (typeof SERVICE_DETAILS)[0];
  idx: number;
  textRight?: boolean;
}) {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
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
      { threshold: 0.12 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const imageLeft = idx % 2 === 0;

  const paddingLeft = imageLeft
    ? "clamp(1.5rem, 3vw, 2.5rem)"
    : "clamp(2rem, 4.5vw, 4rem)";
  const paddingRight = imageLeft
    ? "clamp(2rem, 4.5vw, 4rem)"
    : "clamp(1.5rem, 3vw, 2.5rem)";

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
      }}
    >
      <div
        className={`flex flex-col ${
          imageLeft ? "lg:flex-row" : "lg:flex-row-reverse"
        } gap-0 items-stretch md:min-h-[380px]`}
      >
        {/* Image frame — 58% */}
        <div
          className="w-full lg:w-[58%] flex-none relative overflow-hidden"
          style={{ aspectRatio: "16/9", minHeight: "260px" }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <MediaFill
            src={service.image}
            alt={service.title}
            placeholderLabel={`${service.title} image`}
            className="absolute inset-0 w-full h-full object-cover"
            zoomed={hovered}
          />
          <div
            className="absolute bottom-0 left-0 right-0"
            style={{
              height: "30%",
              background:
                "linear-gradient(to top, oklch(0.12 0.006 60 / 0.45), transparent)",
              pointerEvents: "none",
            }}
          />
          {/* Service number stamp */}
        </div>

        {/* Text block — 42% */}
        <div
          className={`w-full lg:w-[42%] flex-none flex flex-col justify-center${
            textRight ? " lg:items-end" : ""
          }`}
          style={{
            paddingTop: "clamp(2.5rem, 6vw, 5rem)",
            paddingBottom: "clamp(2.5rem, 6vw, 5rem)",
            paddingLeft,
            paddingRight,
            background: "oklch(0.97 0.006 80)",
          }}
        >
          {/* Title row */}
          <div className="flex flex-col gap-2 mb-8">
            <h3
              className={textRight ? "lg:[text-align:right]" : ""}
              style={{
                fontFamily: "Barlow, sans-serif",
                fontWeight: 200,
                letterSpacing: "0.28em",
                fontSize: "clamp(1.1rem, 2.2vw, 1.5rem)",
                textTransform: "uppercase",
                color: "oklch(0.12 0.006 60)",
                lineHeight: 1.1,
              }}
            >
              {service.title}
            </h3>
            <span
              className={textRight ? "lg:[text-align:right] lg:block" : ""}
              style={{
                fontFamily: "Noto Sans Devanagari, sans-serif",
                fontWeight: 200,
                fontSize: "0.82rem",
                color: "oklch(0.65 0.201 36.9)",
              }}
            >
              {service.hindi}
            </span>
            <div
              className={textRight ? "lg:ml-auto" : ""}
              style={{
                marginTop: "0.25rem",
                height: "1px",
                width: "32px",
                background: "oklch(0.65 0.201 36.9 / 0.5)",
              }}
            />
          </div>

          {/* Overview */}
          <p
            className={textRight ? "lg:ml-auto lg:[text-align:right]" : ""}
            style={{
              fontFamily: "Barlow, sans-serif",
              fontWeight: 300,
              fontSize: "clamp(0.78rem, 1.2vw, 0.88rem)",
              lineHeight: 2.0,
              color: "oklch(0.45 0.006 62)",
              marginBottom: "2.5rem",
              maxWidth: "38ch",
            }}
          >
            {service.overview}
          </p>

          {/* Pillars */}
          <div
          className={`flex flex-col gap-0 ${
          textRight ? "lg:self-end" : "lg:self-start"
          }`}
          >
            {service.pillars.map((pillar, i) => (
              <div
                key={pillar.label}
                className={`flex items-center gap-3 py-2${
                  textRight ? " lg:flex-row-reverse" : ""
                }`}
                style={{
                  borderBottom:
                    i < service.pillars.length - 1
                      ? "1px solid oklch(0.65 0.201 36.9 / 0.10)"
                      : "none",
                }}
              >
                <div
                  style={{
                    width: "4px",
                    height: "4px",
                    borderRadius: "50%",
                    background: "oklch(0.65 0.201 36.9 / 0.5)",
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontFamily: "Barlow, sans-serif",
                    fontWeight: 300,
                    letterSpacing: "0.14em",
                    fontSize: "0.66rem",
                    textTransform: "uppercase",
                    color: "oklch(0.38 0.006 62)",
                  }}
                >
                  {pillar.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ServicesAct() {
  return (
    <section
      id="work-services"
      data-ocid="work.services.section"
      className="relative"
      style={{
        scrollMarginTop: "80px",
        background: "oklch(0.97 0.006 80)",
      }}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-16 lg:px-24 pt-24 md:pt-32 pb-16">
        <p
          style={{
            fontFamily: "Barlow, sans-serif",
            fontWeight: 400,
            letterSpacing: "0.35em",
            fontSize: "0.70rem",
            textTransform: "uppercase",
            color: "oklch(0.65 0.201 36.9)",
            marginBottom: "0.75rem",
          }}
        >
          सेवाएँ — Services In Depth
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
          SERVICES
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

      <div>
        {SERVICE_DETAILS.map((service, idx) => (
          <ServiceRow
            key={service.title}
            service={service}
            idx={idx}
            textRight={idx === 1 || idx === 3}
          />
        ))}
      </div>
    </section>
  );
}

// ─── Full-Bleed Visual Divider ───────────────────────────────────────────

function VisualDivider() {
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
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

return (
 <section
  id="work-divider"
  style={{
    scrollMarginTop: "80px",
    paddingTop: "clamp(2rem, 4vw, 4rem)",
    paddingBottom: "clamp(1.5rem, 3vw, 3rem)",
    background: "oklch(0.97 0.006 80)",
  }}
>
    <div
      className="mx-auto"
      style={{
        width: "min(1320px, calc(100% - 3rem))",
        height: "1px",
        marginBottom: "clamp(1.25rem, 2vw, 2rem)",
        background:
          "linear-gradient(to right, transparent, oklch(0.65 0.201 36.9 / 0.32), transparent)",
      }}
    />

    <div
      ref={ref}
      className="relative w-full overflow-hidden"
      style={{ height: "clamp(260px, 45vh, 520px)" }}
    >
      <MediaFill
        src="/assets/pagedividers/wip.webp"
        alt="Studio work"
        placeholderLabel="Studio process image"
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          transform: visible ? "scale(1)" : "scale(1.06)",
          transition: "transform 1.2s ease-out",
          objectPosition: "center 20%",
        }}
      />
      <div
        className="absolute inset-0"
        style={{ background: "oklch(0.08 0.006 60 / 0.25)" }}
      />
      <div
        className="absolute inset-0 flex flex-col items-center justify-end pb-8 md:pb-12 gap-4"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(16px)",
          transition:
            "opacity 0.9s ease-out 0.3s, transform 0.9s ease-out 0.3s",
        }}
      >
        <h2
          style={{
            fontFamily: "Barlow, sans-serif",
            fontWeight: 100,
            fontSize: "clamp(0.96rem, 3vw, 2.4rem)",
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            color: "oklch(0.95 0.006 78)",
            lineHeight: 1,
            textAlign: "center",
          }}
        >
          Intent into reality
        </h2>
        <div
          style={{
            height: "1px",
            width: "clamp(60px, 12vw, 120px)",
            background: "oklch(0.72 0.13 76 / 0.5)",
          }}
        />
      </div>
    </div>
  </section>
);
}

// ─── Act 2: Portfolio ────────────────────────────────────────────

const PORTFOLIO_ITEMS = [
  {
    id: 1,
    label: "Electric Lawn Mower",
    category: "Utility Concept",
    role: "Design + Development + CMF",
    image: "/assets/project1/8.webp",
    isPlaceholder: false,
    categoryTag: "Automotive",
    intro:
      "An upmarket EV Lawn Mower for the European and American markets",
    gallery: [
  "/assets/project1/1.webp",
      "/assets/project1/2.webp",
      "/assets/project1/3.webp",
      "/assets/project1/4.webp",
      "/assets/project1/5.webp",
      "/assets/project1/6.webp",
      "/assets/project1/7.webp",
      "/assets/project1/8.webp",
      "/assets/project1/9.webp",
      "/assets/project1/10.webp",
],
  },
  {
    id: 2,
    label: "EVA - India's take on Urban Micro Mobility",
    category: "Automotive Design",
    role: "Design + Development",
    image: "/assets/project2/1.webp",
    isPlaceholder: false,
    categoryTag: "Automotive",
    intro:
      "A ground-up micro mobility EV concept for Indian Metros presented at Auto Expo 2023",
    gallery: [
     "/assets/project2/1.webp",
      "/assets/project2/2.webp",
      "/assets/project2/3.webp",
      "/assets/project2/4.webp",
      "/assets/project2/5.webp",
      "/assets/project2/6.webp",
      "/assets/project2/7.webp",
      "/assets/project2/8.webp",
      "/assets/project2/9.webp",
      "/assets/project2/10.webp",
    ],
  },
  {
    id: 3,
    label: "KITSUN - the FOX PC",
    category: "Product Design",
    role: "Concept + Design + Development",
    image: "/assets/project3/1.webp",
    isPlaceholder: false,
    categoryTag: "Product",
    intro:
      "A custom one off PC cabinet conceptualised, designed and built in collaboration with Gigabyte, AMD and FoxMyBox",
    gallery: [
      "/assets/project3/1.webp",
      "/assets/project3/2.webp",
      "/assets/project3/3.webp",
      "/assets/project3/4.webp",
      "/assets/project3/5.webp",
      "/assets/project3/6.webp",
      "/assets/project3/7.webp",
      "/assets/project3/8.webp",
      "/assets/project3/9.webp",
      "/assets/project3/10.webp",
    ],
  },
  {
    id: 4,
    label: "POC Launch Vehicles",
    category: "Multi Utility Electric Vehicle",
    role: "Design + Development + CMF",
    image:
      "/assets/project4/1.webp",
    isPlaceholder: false,
    categoryTag: "Automotive",
    intro:
      "Full exterior form development and CMF direction for a next-generation agricultural tractor platform.",
    gallery: [
  "/assets/project4/2.webp",
      "/assets/project4/3.webp",
      "/assets/project4/4.webp",
      "/assets/project4/5.webp",
 "/assets/project4/6.webp",
      "/assets/project4/7.webp",
      "/assets/project4/8.webp",
      "/assets/project4/9.webp",
      "/assets/project4/10.webp",
      "/assets/project4/11.webp",
],
  },
  {
    id: 5,
    label: "Golf Cart",
    category: "Leisure Vehicle",
    role: "Concept + Design + CMF",
    image: "/assets/project5/11.webp",
    isPlaceholder: false,
    categoryTag: "Automotive",
    intro:
      "Form development and CMF strategy for a refined leisure vehicle designed for resort and hospitality environments.",
    gallery: [
  "/assets/project5/1.webp",
      "/assets/project5/2.webp",
      "/assets/project5/3.webp",
      "/assets/project5/4.webp",
      "/assets/project5/5.webp",
      "/assets/project5/6.webp",
      "/assets/project5/8.webp",
      "/assets/project5/9.webp",
      "/assets/project5/10.webp",
      "/assets/project5/11.webp",
     ],
  },
  {
    id: 6,
    label: "Vegetable Chopper",
    category: "Product Design",
    role: "Design + CMF + Visualization",
    image: "/assets/project6/7.webp",
    isPlaceholder: false,
    categoryTag: "Product",
    intro:
      "Designing a daily use product for the Indian Kitchen",
    gallery: [
  "/assets/project6/1.webp",
      "/assets/project6/2.webp",
      "/assets/project6/3.webp",
      "/assets/project6/4.webp",
      "/assets/project6/5.webp",
      "/assets/project6/6.webp",
      "/assets/project6/7.webp",
      "/assets/project6/8.webp",
      "/assets/project6/9.webp",
      "/assets/project6/10.webp",
     ], 
  },
  {
    id: 7,
  label: "Concept T1",
    category: "Futuristic Tractor Concept",
    role: "Concept + Design + Visualization",
    image: "/assets/project7/7.webp",
    isPlaceholder: false,
    categoryTag: "Automotive",
    intro:
      "A strong and masculine take on a conceptual and futuristic tractor",
    gallery: [
  "/assets/project7/1.webp",
  "/assets/project7/2.webp",
      "/assets/project7/3.webp",
      "/assets/project7/4.webp",
      "/assets/project7/5.webp",
      "/assets/project7/6.webp",
      "/assets/project7/7.webp",
      "/assets/project7/8.webp",
      "/assets/project7/9.webp",
      "/assets/project7/10.webp",
    ],
  },
];

// ─── Project Lightbox ────────────────────────────────────────────

function ProjectLightbox({
  projectId,
  galleryIndex,
  onClose,
  onPrevProject,
  onNextProject,
  onGalleryPrev,
  onGalleryNext,
}: {
  projectId: number;
  galleryIndex: number;
  onClose: () => void;
  onPrevProject: () => void;
  onNextProject: () => void;
  onGalleryPrev: () => void;
  onGalleryNext: () => void;
}) {
  const project = PORTFOLIO_ITEMS.find((p) => p.id === projectId);
  const projectIndex = PORTFOLIO_ITEMS.findIndex((p) => p.id === projectId);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Animate in
    const t = setTimeout(() => setVisible(true), 10);
    // Lock body scroll
    document.body.style.overflow = "hidden";
    return () => {
      clearTimeout(t);
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onGalleryPrev();
      if (e.key === "ArrowRight") onGalleryNext();
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose, onGalleryPrev, onGalleryNext]);

  if (!project) return null;

  const hasGallery = project.gallery.length > 0;
  const totalProjects = PORTFOLIO_ITEMS.length;
  const projectNumStr = String(projectIndex + 1).padStart(2, "0");
  const totalStr = String(totalProjects).padStart(2, "0");

  const galleryImg = hasGallery ? project.gallery[galleryIndex] : null;
  const galleryTotal = project.gallery.length;
  const galleryNumStr = hasGallery
    ? String(galleryIndex + 1).padStart(2, "0")
    : "00";
  const galleryTotalStr = hasGallery
    ? String(galleryTotal).padStart(2, "0")
    : "00";

  return (
    <div
      data-ocid="work.project.modal"
      className="fixed inset-0 z-50 flex flex-col"
      style={{
        background: "oklch(0.06 0.006 60 / 0.97)",
        opacity: visible ? 1 : 0,
        transform: visible ? "scale(1)" : "scale(0.98)",
        transition: "opacity 300ms ease, transform 300ms ease",
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onClose();
      }}
    >
      {/* Top bar */}
      <div
        className="flex items-center justify-between px-6 md:px-12"
        style={{ paddingTop: "1.5rem", paddingBottom: "1rem", flexShrink: 0 }}
      >
        <span
          style={{
            fontFamily: "Barlow, sans-serif",
            fontWeight: 200,
            fontSize: "0.70rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "oklch(0.65 0.201 36.9)",
          }}
        >
          {projectNumStr} / {totalStr}
        </span>
        <button
          data-ocid="work.project.close_button"
          type="button"
          onClick={onClose}
          style={{
            fontFamily: "Barlow, sans-serif",
            fontWeight: 300,
            fontSize: "0.6rem",
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "oklch(0.65 0.201 36.9)",
            background: "transparent",
            border: "1px solid oklch(0.65 0.201 36.9 / 0.45)",
            padding: "0.45rem 1rem",
            cursor: "pointer",
            transition: "border-color 0.2s, color 0.2s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.borderColor =
              "oklch(0.65 0.201 36.9)";
            (e.currentTarget as HTMLButtonElement).style.color =
              "oklch(0.93 0.006 70)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.borderColor =
              "oklch(0.65 0.201 36.9 / 0.45)";
            (e.currentTarget as HTMLButtonElement).style.color =
              "oklch(0.65 0.201 36.9)";
          }}
        >
          Close ×
        </button>
      </div>

      {/* Project info block */}
      <div
        className="px-6 md:px-12"
        style={{ paddingBottom: "1.25rem", flexShrink: 0 }}
      >
        {/* Category tag */}
        <span
          style={{
            display: "inline-block",
            fontFamily: "Barlow, sans-serif",
            fontWeight: 300,
            fontSize: "0.68rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "oklch(0.65 0.201 36.9)",
            border: "1px solid oklch(0.65 0.201 36.9 / 0.35)",
            padding: "0.25rem 0.7rem",
            marginBottom: "0.75rem",
          }}
        >
          {project.categoryTag}
        </span>
        {/* Project title */}
        <h2
          style={{
            fontFamily: "Barlow, sans-serif",
            fontWeight: 200,
            fontSize: "clamp(1.4rem, 3vw, 2.2rem)",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "oklch(0.93 0.006 70)",
            lineHeight: 1.1,
            margin: "0 0 0.5rem 0",
          }}
        >
          {project.label}
        </h2>
        {/* Intro line */}
        <p
          style={{
            fontFamily: "Barlow, sans-serif",
            fontWeight: 300,
            fontSize: "0.78rem",
            lineHeight: 1.7,
            color: "oklch(0.65 0.006 65)",
            maxWidth: "60ch",
            margin: 0,
          }}
        >
          {project.intro}
        </p>
      </div>

      {/* Gallery area */}
      <div
        className="flex-1 relative px-6 md:px-12 flex items-center justify-center"
        style={{ minHeight: 0, paddingBottom: "0.5rem" }}
      >
        {!hasGallery ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.75rem",
            }}
          >
            <div
              style={{
                width: "32px",
                height: "1px",
                background: "oklch(0.65 0.201 36.9 / 0.35)",
              }}
            />
            <span
              style={{
                fontFamily: "Barlow, sans-serif",
                fontWeight: 300,
                fontSize: "0.70rem",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "oklch(0.65 0.201 36.9)",
              }}
            >
              Gallery · Coming Soon
            </span>
          </div>
        ) : (
          <div
            className="relative w-full h-full flex items-center justify-center"
            style={{ maxHeight: "100%" }}
          >
            {/* Prev arrow */}
            {galleryTotal > 1 && (
              <button
                data-ocid="work.project.pagination_prev"
                type="button"
                onClick={onGalleryPrev}
                style={{
                  position: "absolute",
                  left: 0,
                  top: "50%",
                  transform: "translateY(-50%)",
                  zIndex: 2,
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  background: "oklch(0.12 0.006 60 / 0.7)",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "oklch(0.88 0.006 70)",
                  fontSize: "1rem",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background =
                    "oklch(0.18 0.006 60 / 0.9)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background =
                    "oklch(0.12 0.006 60 / 0.7)";
                }}
              >
                ‹
              </button>
            )}

            <img
              src={galleryImg ?? ""}
              alt={`${project.label} — ${galleryIndex + 1}`}
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain",
                display: "block",
              }}
            />

            {/* Next arrow */}
            {galleryTotal > 1 && (
              <button
                data-ocid="work.project.pagination_next"
                type="button"
                onClick={onGalleryNext}
                style={{
                  position: "absolute",
                  right: 0,
                  top: "50%",
                  transform: "translateY(-50%)",
                  zIndex: 2,
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  background: "oklch(0.12 0.006 60 / 0.7)",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "oklch(0.88 0.006 70)",
                  fontSize: "1rem",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background =
                    "oklch(0.18 0.006 60 / 0.9)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background =
                    "oklch(0.12 0.006 60 / 0.7)";
                }}
              >
                ›
              </button>
            )}

            {/* Image counter */}
            <div
              style={{
                position: "absolute",
                bottom: "0.75rem",
                left: "50%",
                transform: "translateX(-50%)",
                fontFamily: "Barlow, sans-serif",
                fontWeight: 200,
                fontSize: "0.68rem",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "oklch(0.55 0.006 65)",
              }}
            >
              {galleryNumStr} / {galleryTotalStr}
            </div>
          </div>
        )}
      </div>

      {/* Bottom project navigation */}
      <div
        className="flex items-center justify-between px-6 md:px-12"
        style={{
          paddingTop: "1rem",
          paddingBottom: "1.5rem",
          flexShrink: 0,
          borderTop: "1px solid oklch(0.65 0.201 36.9 / 0.12)",
        }}
      >
        <button
          data-ocid="work.project.secondary_button"
          type="button"
          onClick={onPrevProject}
          style={{
            fontFamily: "Barlow, sans-serif",
            fontWeight: 300,
            fontSize: "0.68rem",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "oklch(0.45 0.006 65)",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            padding: "0.5rem 0",
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.color =
              "oklch(0.65 0.201 36.9)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.color =
              "oklch(0.45 0.006 65)";
          }}
        >
          ← Previous
        </button>
        <span
          style={{
            fontFamily: "Barlow, sans-serif",
            fontWeight: 200,
            fontSize: "0.66rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "oklch(0.35 0.006 65)",
          }}
        >
          {project.category}
        </span>
        <button
          data-ocid="work.project.primary_button"
          type="button"
          onClick={onNextProject}
          style={{
            fontFamily: "Barlow, sans-serif",
            fontWeight: 300,
            fontSize: "0.68rem",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "oklch(0.45 0.006 65)",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            padding: "0.5rem 0",
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.color =
              "oklch(0.65 0.201 36.9)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.color =
              "oklch(0.45 0.006 65)";
          }}
        >
          Next →
        </button>
      </div>
    </div>
  );
}

// ─── Portfolio Card ────────────────────────────────────────────

function PortfolioCard({
  item,
  aspectRatio = "4/3",
  animationDelay = 0,
  fullHeight = false,
  onClick,
}: {
  item: (typeof PORTFOLIO_ITEMS)[0];
  aspectRatio?: string;
  animationDelay?: number;
  fullHeight?: boolean;
  onClick?: () => void;
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
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [animationDelay]);

  if (item.isPlaceholder) {
    return (
      <div
        ref={ref}
        data-ocid={`work.item.${item.id}`}
        className={`relative overflow-hidden w-full ${
          fullHeight ? "aspect-[4/3] sm:aspect-auto sm:h-full" : ""
        }`}
        style={{
          ...(fullHeight ? {} : { aspectRatio }),
          background:
            "linear-gradient(180deg, oklch(0.93 0.004 78) 0%, oklch(0.88 0.004 74) 100%)",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 0.65s ease-out, transform 0.65s ease-out",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "0.5rem",
          border: "1px solid oklch(0.12 0.006 60 / 0.07)",
          cursor: onClick ? "pointer" : "default",
        }}
        onClick={onClick}
        onKeyDown={(e) => {
          if ((e.key === "Enter" || e.key === " ") && onClick) onClick();
        }}
      >
        <div
          style={{
            width: "24px",
            height: "1px",
            background: "oklch(0.65 0.201 36.9 / 0.4)",
          }}
        />
        <span
          style={{
            fontFamily: "Barlow, sans-serif",
            fontWeight: 300,
            letterSpacing: "0.3em",
            fontSize: "0.68rem",
            textTransform: "uppercase",
            color: "oklch(0.58 0.008 65)",
          }}
        >
          {item.label}
        </span>
      </div>
    );
  }

  return (
    <div
      ref={ref}
      data-ocid={`work.item.${item.id}`}
      className={`relative overflow-hidden w-full ${
        fullHeight ? "aspect-[4/3] sm:aspect-auto sm:h-full" : ""
      }`}
      style={{
        ...(fullHeight ? {} : { aspectRatio }),
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: "opacity 0.65s ease-out, transform 0.65s ease-out",
        cursor: onClick ? "pointer" : "default",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      onKeyDown={(e) => {
        if ((e.key === "Enter" || e.key === " ") && onClick) onClick();
      }}
    >
      <MediaFill
        src={item.image}
        alt={item.label}
        placeholderLabel={item.label}
        className="absolute inset-0 w-full h-full object-cover"
        zoomed={hovered}
      />

      {/* Hover reveal */}
      <div
        className="absolute inset-0"
        style={{
          background: "oklch(0.08 0.006 60 / 0.72)",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.35s ease",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "2rem",
        }}
      >
        <span
          style={{
            fontFamily: "Barlow, sans-serif",
            fontWeight: 200,
            letterSpacing: "0.35em",
            fontSize: "0.68rem",
            textTransform: "uppercase",
            color: "oklch(0.72 0.13 76)",
            marginBottom: "0.35rem",
          }}
        >
          {item.category}
        </span>
        <span
          style={{
            fontFamily: "Barlow, sans-serif",
            fontWeight: 300,
            letterSpacing: "0.16em",
            fontSize: "0.70rem",
            textTransform: "uppercase",
            color: "oklch(0.76 0.008 72)",
            marginBottom: "0.7rem",
          }}
        >
          {item.role}
        </span>
        <span
          style={{
            fontFamily: "Barlow, sans-serif",
            fontWeight: 300,
            letterSpacing: "0.2em",
            fontSize: "clamp(0.85rem, 1.8vw, 1.1rem)",
            textTransform: "uppercase",
            color: "oklch(0.93 0.006 70)",
          }}
        >
          {item.label}
        </span>
      </div>

      {/* Always-visible label gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 px-5 py-4"
        style={{
          background:
            "linear-gradient(to top, oklch(0.08 0.006 60 / 0.8) 0%, transparent 100%)",
          opacity: hovered ? 0 : 1,
          transition: "opacity 0.3s ease",
          pointerEvents: "none",
        }}
      >
        <div className="flex flex-col gap-1">
          <span
            style={{
              fontFamily: "Barlow, sans-serif",
              fontWeight: 200,
              letterSpacing: "0.28em",
              fontSize: "0.66rem",
              textTransform: "uppercase",
              color: "oklch(0.72 0.13 76)",
            }}
          >
            {item.category}
          </span>
          <span
            style={{
              fontFamily: "Barlow, sans-serif",
              fontWeight: 300,
              letterSpacing: "0.22em",
              fontSize: "clamp(0.68rem, 1vw, 0.76rem)",
              textTransform: "uppercase",
              color: "oklch(0.88 0.006 70)",
            }}
          >
            {item.label}
          </span>
        </div>
      </div>
    </div>
  );
}

function PortfolioAct() {
  const [openProjectId, setOpenProjectId] = useState<number | null>(null);
  const [galleryIndex, setGalleryIndex] = useState(0);

  const openProject = (id: number) => {
    setOpenProjectId(id);
    setGalleryIndex(0);
  };

  const closeProject = () => {
    setOpenProjectId(null);
    setGalleryIndex(0);
  };

  const prevProject = () => {
    if (openProjectId === null) return;
    const idx = PORTFOLIO_ITEMS.findIndex((p) => p.id === openProjectId);
    const prevIdx = (idx - 1 + PORTFOLIO_ITEMS.length) % PORTFOLIO_ITEMS.length;
    setOpenProjectId(PORTFOLIO_ITEMS[prevIdx].id);
    setGalleryIndex(0);
  };

  const nextProject = () => {
    if (openProjectId === null) return;
    const idx = PORTFOLIO_ITEMS.findIndex((p) => p.id === openProjectId);
    const nextIdx = (idx + 1) % PORTFOLIO_ITEMS.length;
    setOpenProjectId(PORTFOLIO_ITEMS[nextIdx].id);
    setGalleryIndex(0);
  };

  const galleryPrev = () => {
    if (openProjectId === null) return;
    const project = PORTFOLIO_ITEMS.find((p) => p.id === openProjectId);
    if (!project || project.gallery.length === 0) return;
    setGalleryIndex(
      (i) => (i - 1 + project.gallery.length) % project.gallery.length,
    );
  };

  const galleryNext = () => {
    if (openProjectId === null) return;
    const project = PORTFOLIO_ITEMS.find((p) => p.id === openProjectId);
    if (!project || project.gallery.length === 0) return;
    setGalleryIndex((i) => (i + 1) % project.gallery.length);
  };

  return (
    <>
      {openProjectId !== null && (
        <ProjectLightbox
          projectId={openProjectId}
          galleryIndex={galleryIndex}
          onClose={closeProject}
          onPrevProject={prevProject}
          onNextProject={nextProject}
          onGalleryPrev={galleryPrev}
          onGalleryNext={galleryNext}
        />
      )}
      <section
        id="work-projects"
        data-ocid="work.portfolio.section"
        className="relative"
        style={{ scrollMarginTop: "80px", background: "oklch(0.97 0.006 80)" }}
      >
        <div
          className="absolute top-0 left-0 right-0"
          style={{
            height: "1px",
            background:
              "linear-gradient(to right, transparent, oklch(0.65 0.201 36.9 / 0.25), transparent)",
          }}
        />
        <div className="mx-auto max-w-7xl px-6 md:px-16 lg:px-24 py-24 md:py-32">
          {/* Header */}
          <div className="mb-16 md:mb-20">
            <p
              style={{
                fontFamily: "Barlow, sans-serif",
                fontWeight: 400,
                letterSpacing: "0.35em",
                fontSize: "clamp(0.68rem, 1.2vw, 0.78rem)",
                textTransform: "uppercase",
                color: "oklch(0.65 0.201 36.9)",
                marginBottom: "0.75rem",
              }}
            >
              काम — Selected Work
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
              PROJECTS
            </h2>
            <div
              style={{
                marginTop: "1rem",
                height: "1px",
                width: "min(200px, 40%)",
                background:
                  "linear-gradient(to right, oklch(0.65 0.201 36.9 / 0.4), transparent)",
              }}
            />
          </div>

          {/* 3-tier grid */}
          <div className="flex flex-col gap-4">
            {/* Tier 1: large left (col-span-2) + small right (col-span-1) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-stretch">
              <div className="col-span-1 sm:col-span-2">
                <PortfolioCard
                  item={PORTFOLIO_ITEMS[0]}
                  aspectRatio="16/9"
                  animationDelay={0}
                  onClick={() => openProject(PORTFOLIO_ITEMS[0].id)}
                />
              </div>
              <div
                className="col-span-1"
                style={{ display: "flex", flexDirection: "column" }}
              >
                <div style={{ flex: 1, minHeight: 0 }}>
                  <PortfolioCard
                    item={PORTFOLIO_ITEMS[1]}
                    fullHeight
                    animationDelay={80}
                    onClick={() => openProject(PORTFOLIO_ITEMS[1].id)}
                  />
                </div>
              </div>
            </div>

            {/* Tier 2: 3 equal columns */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <PortfolioCard
                item={PORTFOLIO_ITEMS[2]}
                aspectRatio="4/3"
                animationDelay={0}
                onClick={() => openProject(PORTFOLIO_ITEMS[2].id)}
              />
              <PortfolioCard
                item={PORTFOLIO_ITEMS[3]}
                aspectRatio="4/3"
                animationDelay={80}
                onClick={() => openProject(PORTFOLIO_ITEMS[3].id)}
              />
              <PortfolioCard
                item={PORTFOLIO_ITEMS[4]}
                aspectRatio="4/3"
                animationDelay={160}
                onClick={() => openProject(PORTFOLIO_ITEMS[4].id)}
              />
            </div>

            {/* Tier 3: small left (col-span-1) + large right (col-span-2) — mirror of Tier 1 */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-stretch">
              <div
                className="col-span-1"
                style={{ display: "flex", flexDirection: "column" }}
              >
                <div style={{ flex: 1, minHeight: 0 }}>
                  <PortfolioCard
                    item={PORTFOLIO_ITEMS[5]}
                    fullHeight
                    animationDelay={0}
                    onClick={() => openProject(PORTFOLIO_ITEMS[5].id)}
                  />
                </div>
              </div>
              <div className="col-span-1 sm:col-span-2">
                <PortfolioCard
                  item={PORTFOLIO_ITEMS[6]}
                  aspectRatio="16/9"
                  animationDelay={80}
                  onClick={() => openProject(PORTFOLIO_ITEMS[6].id)}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// ─── Act 3: Clients ────────────────────────────────────────────

const CLIENT_LOGOS = [
  { name: "Mahindra", src: "/assets/clients/mahindra.webp" },
  { name: "Tata Motors", src: "/assets/clients/tata.webp" },
  { name: "Hero MotoCorp", src: "/assets/clients/hero.webp" },
  { name: "Maruti Suzuki", src: "/assets/clients/msil.webp" },
  { name: "Toyota", src: "/assets/clients/toyota.webp" },
  { name: "Sonalika Tractors", src: "/assets/clients/sonalika.webp" },
  { name: "Solis International", src: "/assets/clients/solis.webp" },
  { name: "Ashok Leyland", src: "/assets/clients/al.webp" },
  { name: "Royal Enfield", src: "/assets/clients/re.webp" },
  { name: "Skoda Auto", src: "/assets/clients/skoda.webp" },
  { name: "Volkswagen", src: "/assets/clients/vw.webp" },
  { name: "Morris Garages", src: "/assets/clients/mg.webp" },
  { name: "Ford", src: "/assets/clients/ford.webp" },
  { name: "Kia", src: "/assets/clients/kia.webp" },
];

function ClientLogoCell({
  client,
  delay,
}: {
  client: (typeof CLIENT_LOGOS)[0];
  delay: number;
}) {
  const [visible, setVisible] = useState(false);
  const [failed, setFailed] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0.9rem 0.75rem",
        borderRight: "1px solid oklch(0.12 0.006 60 / 0.07)",
        borderBottom: "1px solid oklch(0.12 0.006 60 / 0.07)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(12px)",
        transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
        background: "transparent",
        minHeight: "118px",
      }}
    >
      {!failed ? (
        <div
          style={{
            width: "100%",
            height: "72px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={client.src}
            alt={client.name}
            loading="lazy"
            decoding="async"
            onError={() => setFailed(true)}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              objectPosition: "center",
              filter: "grayscale(100%) opacity(0.78)",
              display: "block",
            }}
          />
        </div>
      ) : (
        <span
          style={{
            fontFamily: "Barlow, sans-serif",
            fontWeight: 300,
            letterSpacing: "0.22em",
            fontSize: "0.68rem",
            textTransform: "uppercase",
            color: "oklch(0.18 0.006 60 / 0.55)",
            textAlign: "center",
          }}
        >
          {client.name}
        </span>
      )}
    </div>
  );
}

function ClientsAct() {
  return (
    <section
      id="work-clients"
      data-ocid="work.clients.section"
      className="relative"
      style={{ scrollMarginTop: "80px", background: "oklch(0.97 0.006 80)" }}
    >
      <div
        className="absolute top-0 left-0 right-0"
        style={{
          height: "1px",
          background:
            "linear-gradient(to right, transparent, oklch(0.12 0.006 60 / 0.12), transparent)",
        }}
      />
      <div className="mx-auto max-w-7xl px-6 md:px-16 lg:px-24 py-24 md:py-32">
        {/* Header */}
        <div className="mb-16 md:mb-20">
          <p
            style={{
              fontFamily: "Barlow, sans-serif",
              fontWeight: 400,
              letterSpacing: "0.35em",
              fontSize: "0.70rem",
              textTransform: "uppercase",
              color: "oklch(0.65 0.201 36.9)",
              marginBottom: "0.75rem",
            }}
          >
            ग्राहक — Selected Collaborations
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
            CLIENTS
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

        {/* Logo grid */}
        <div
  className="grid grid-cols-2 xl:grid-cols-7"
  style={{
    borderLeft: "1px solid oklch(0.12 0.006 60 / 0.07)",
    borderTop: "1px solid oklch(0.12 0.006 60 / 0.07)",
    background: "oklch(0.985 0.004 82)",
  }}
>
  {CLIENT_LOGOS.map((client, idx) => (
    <ClientLogoCell
      key={client.name}
      client={client}
      delay={idx * 40}
    />
  ))}
</div>
        
        {/* NDA note */}
        <p
          style={{
            marginTop: "2.5rem",
            fontFamily: "Barlow, sans-serif",
            fontWeight: 200,
            letterSpacing: "0.15em",
            fontSize: "0.7rem",
            textTransform: "uppercase",
            color: "oklch(0.55 0.006 65)",
            textAlign: "center",
          }}
        >
          SOME OF OUR ESTEEMED CLIENTS
        </p>
      </div>
    </section>
  );
}

function WorkCtaAct() {
  return (
    <section
      id="work-contact"
      data-ocid="work.contact.section"
      className="relative"
      style={{ background: "oklch(0.97 0.006 80)" }}
    >
      <div
        className="absolute top-0 left-0 right-0"
        style={{
          height: "1px",
          background:
            "linear-gradient(to right, transparent, oklch(0.65 0.201 36.9 / 0.25), transparent)",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 md:px-16 lg:px-24 py-24 md:py-28">
        <div
          style={{
            border: "1px solid oklch(0.12 0.006 60 / 0.08)",
            background:
              "linear-gradient(180deg, oklch(0.985 0.004 82) 0%, oklch(0.97 0.006 80) 100%)",
            padding: "clamp(2rem, 4vw, 3.5rem)",
          }}
        >
          <div className="flex flex-col items-center text-center gap-6 md:gap-8">
          <div className="flex flex-col items-center text-center gap-3">
    <h2
                style={{
                  fontFamily: "Barlow, sans-serif",
                  fontWeight: 200,
                  letterSpacing: "0.14em",
                  fontSize: "clamp(1.35rem, 3vw, 2.2rem)",
                  textTransform: "uppercase",
                  color: "oklch(0.12 0.006 60)",
                  lineHeight: "1.15",
                  margin: 0,
                }}
              >
                Have a project in motion?
              </h2>

              <p
  style={{
    fontFamily: "Barlow, sans-serif",
    fontWeight: 300,
    fontSize: "clamp(0.95rem, 1.25vw, 1.05rem)",
    lineHeight: "1.9",
    color: "oklch(0.42 0.006 62)",
    maxWidth: "46ch",
    margin: 0,
    textAlign: "center",
  }}
>
                Design / Development / Prototype — Let’s Talk.
              </p>
            </div>

            <div className="flex flex-col items-center gap-3">
              <a
                href="mailto:info@studio34.in?subject=Project%20Enquiry%20%E2%80%94%20Studio34"
                data-ocid="work.contact.primary_button"
                style={{
                  fontFamily: "Barlow, sans-serif",
                  fontWeight: 300,
                  letterSpacing: "0.24em",
                  fontSize: "clamp(0.68rem, 1vw, 0.78rem)",
                  textTransform: "uppercase",
                  color: "oklch(0.97 0.006 80)",
                  background: "oklch(0.12 0.006 60)",
                  padding: "1rem 2rem",
                  border: "1px solid oklch(0.12 0.006 60)",
                  textDecoration: "none",
                  display: "inline-block",
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
                Start a conversation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Page ────────────────────────────────────────────

export default function WorkPage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section
        id="work-hero"
        style={{ scrollMarginTop: "80px" }}
        className="relative overflow-hidden min-h-[68svh] md:min-h-[82vh]"
      >
        {/* Background image */}
     <img
  src="/assets/workpagehero/Work_Hero.webp"
  alt="Prototype build in process"
  className="absolute inset-0 w-full h-full object-cover"
  style={{ objectPosition: "center center" }}
/>
        
<div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black via-black/85 to-transparent pointer-events-none" />
        
        {/* Left-dark to right-light gradation */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, oklch(0.08 0.006 60 / 0.97) 0%, oklch(0.08 0.006 60 / 0.92) 25%, oklch(0.08 0.006 60 / 0.70) 45%, oklch(0.08 0.006 60 / 0.35) 65%, oklch(0.08 0.006 60 / 0.08) 85%, transparent 100%)",
            pointerEvents: "none",
          }}
        />
        {/* Subtle bottom fade into gradient bridge */}
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{
            height: "40%",
            background:
              "linear-gradient(to top, oklch(0.08 0.006 60 / 0.60), transparent)",
            pointerEvents: "none",
          }}
        />

        {/* PAGE TITLE */}
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
                fontSize: "clamp(1.6rem, 4vw, 2.8rem)",
                textTransform: "uppercase",
                color: "oklch(0.95 0.006 78)",
                lineHeight: 1,
                margin: 0,
              }}
            >
              OUR WORK
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
                काम
              </span>
              <div
                style={{
                  height: "1px",
                  width: "clamp(48px, 8vw, 110px)",
                  background: "oklch(0.65 0.201 36.9 / 0.45)",
                  flexShrink: 0,
                }}
              />
            </div>
          </div>
          <p
            style={{
              fontFamily: "Barlow, sans-serif",
              fontWeight: 300,
              fontSize: "clamp(0.95rem, 1.4vw, 1.05rem)",
              lineHeight: 1.85,
              color: "oklch(0.82 0.006 70)",
              margin: "0 0 1rem 0",
              maxWidth: "56ch",
            }}
          >
            A sharper look at Studio34 across services, selected projects and client trust — built to show capability without turning the page into noise.
          </p>
          <p
            style={{
              fontFamily: "Barlow, sans-serif",
              fontWeight: 200,
              letterSpacing: "0.22em",
              fontSize: "clamp(0.72rem, 1vw, 0.78rem)",
              textTransform: "uppercase",
              color: "oklch(0.60 0.008 65)",
              margin: 0,
            }}
          >
            SERVICES . PROJECTS . CLIENTS
          </p>
        </div>
      </section>

      {/* Dark-to-light gradient bridge */}
      <div
        aria-hidden="true"
        style={{
          height: "160px",
          background:
            "linear-gradient(to bottom, oklch(0.12 0.006 60) 0%, oklch(0.15 0.006 60) 12%, oklch(0.25 0.006 62) 28%, oklch(0.45 0.006 65) 48%, oklch(0.68 0.007 72) 65%, oklch(0.85 0.007 78) 80%, oklch(0.97 0.006 80) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Section index — Work */}
      <nav
      className="hidden md:flex fixed right-6 top-1/2 -translate-y-1/2 flex-col gap-4 z-40 pointer-events-auto"
        aria-label="Section index"
      >
        {[
          { id: "work-services", label: "Services" },
          { id: "work-projects", label: "Projects" },
          { id: "work-clients", label: "Clients" },
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
      <ServicesAct />
      <VisualDivider />
      <PortfolioAct />
      <ClientsAct />
      <WorkCtaAct />
    </main>
  );
}
