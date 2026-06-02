import { useState } from "react";

export default function CtaSection() {
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
      id="contact"
      data-ocid="cta.section"
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

      <div className="mx-auto max-w-7xl px-6 md:px-16 lg:px-24 py-24 md:py-32 flex flex-col items-center text-center gap-8 md:gap-10">
        {/* Tagline */}
        <div className="flex flex-col items-center gap-4">
          <h2
            style={{
              fontFamily: "Barlow, sans-serif",
              fontWeight: 100,
              letterSpacing: "clamp(0.08em, 0.9vw, 0.18em)",
              fontSize: "clamp(1.1rem, 4vw, 3.2rem)",
              textTransform: "uppercase",
              color: "oklch(0.12 0.006 60)",
              lineHeight: "1.22",
              textAlign: "center",
            }}
          >
            <span
              style={{
                display: "block",
                whiteSpace: "nowrap",
              }}
            >
              <span style={{ fontWeight: 600 }}>DREAM</span>{" "}
              <span style={{ fontWeight: 100 }}>big</span>{" "}
              <span
                style={{
                  color: "oklch(0.65 0.201 36.9)",
                  fontWeight: 200,
                  margin: "0 0.22em",
                }}
              >
                |
              </span>{" "}
              <span style={{ fontWeight: 600 }}>DESIGN</span>{" "}
              <span style={{ fontWeight: 100 }}>better</span>
            </span>

            <span
              style={{
                display: "block",
                whiteSpace: "nowrap",
                marginTop: "0.1em",
              }}
            >
              <span style={{ fontWeight: 600 }}>DEVELOP</span>{" "}
              <span style={{ fontWeight: 100 }}>faster</span>
            </span>
          </h2>
        </div>

        {/* Thin rule */}
        <div
          style={{
            height: "1px",
            width: "min(120px, 30%)",
            background:
              "linear-gradient(to right, transparent, oklch(0.65 0.201 36.9 / 0.4), transparent)",
          }}
        />

        {/* Sub-copy */}
        <p
          className="tracking-[0.015em] md:tracking-[0.03em]"
          style={{
            fontFamily: "Barlow, sans-serif",
            fontWeight: 300,
            fontSize: "clamp(0.98rem, 1.45vw, 1.08rem)",
            lineHeight: "1.85",
            color: "oklch(0.40 0.006 62)",
            maxWidth: "540px",
          }}
        >
          Every vehicle that moves the world began as a single point of
          intention. We shape the intent, test and realise it in reality. If
          you have a vision, Studio34 has the process to bring it to life.
        </p>

        {/* CTA button */}
        <div className="flex flex-col items-center gap-3">
          <a
            href={`mailto:${email}?subject=${encodeURIComponent(subject)}`}
            data-ocid="cta.primary_button"
            style={{
              fontFamily: "Barlow, sans-serif",
              fontWeight: 300,
              letterSpacing: "0.28em",
              fontSize: "clamp(0.65rem, 1.2vw, 0.78rem)",
              textTransform: "uppercase",
              color: "oklch(0.97 0.006 80)",
              background: "oklch(0.12 0.006 60)",
              padding: "1rem 2.75rem",
              border: "1px solid oklch(0.12 0.006 60)",
              borderRadius: "2px",
              textDecoration: "none",
              display: "inline-block",
              transition: "background 0.25s ease, color 0.25s ease",
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

          {/* Micro-line below CTA */}
          <p
            style={{
              fontFamily: "Barlow, sans-serif",
              fontWeight: 300,
              letterSpacing: "0.22em",
              fontSize: "0.62rem",
              textTransform: "uppercase",
              color: "oklch(0.52 0.008 65)",
              textAlign: "center",
              margin: 0,
            }}
          >
            Project Enquiries · Collaborations · Strategic Partnerships
          </p>

          {/* Fallback helper line */}
          <div
            className="flex flex-wrap items-center justify-center gap-3"
            style={{
              fontFamily: "Barlow, sans-serif",
              fontWeight: 300,
              fontSize: "0.72rem",
              letterSpacing: "0.08em",
              color: "oklch(0.42 0.006 62)",
              marginTop: "0.15rem",
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
