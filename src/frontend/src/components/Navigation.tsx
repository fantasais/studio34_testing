import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const navItems = [
  { label: "HOME", path: "/" },
  { label: "WORK", path: "/work" },
  { label: "IDEOLOGY", path: "/ideology" },
];

export default function Navigation() {
  const [logoIsDark, setLogoIsDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;
  const currentHash = routerState.location.hash;
  const isHome = currentPath === "/" || currentPath === "";
    const HASH_SCROLL_DELAY_MS = 50;
  const CONTACT_SCROLL_DELAY_MS = 500;

  const scrollToId = (id: string, behavior: ScrollBehavior = "auto") => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior, block: "start" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (isHome) {
        const heroEl = document.getElementById("hero");
        if (heroEl) {
          const heroHeight = heroEl.offsetHeight;
          setLogoIsDark(scrollY > heroHeight + 180);
        }
      } else {
        const heroId = currentPath === "/work" ? "work-hero" : "ideology-hero";
        const heroEl = document.getElementById(heroId);
        const threshold = heroEl ? heroEl.offsetHeight : 400;
        setLogoIsDark(scrollY > threshold);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [isHome, currentPath]);

   useEffect(() => {
    if (currentHash) {
      const id = currentHash.replace("#", "");

      const timer = window.setTimeout(() => {
        scrollToId(id, "auto");
      }, HASH_SCROLL_DELAY_MS);

      return () => window.clearTimeout(timer);
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [currentPath, currentHash]);

  const handleContact = () => {
    setMenuOpen(false);

    if (isHome) {
      scrollToId("contact", "smooth");
      return;
    }

    void navigate({ to: "/" });

    window.setTimeout(() => {
      scrollToId("contact", "smooth");
    }, CONTACT_SCROLL_DELAY_MS);
  };

  const textColor = logoIsDark
    ? "oklch(0.12 0.006 60)"
    : "oklch(0.88 0.006 70)";
  const activeColor = "oklch(0.65 0.201 36.9)";

  const navBackground = logoIsDark
    ? "oklch(0.96 0.006 80 / 0.34)"
    : "oklch(0.08 0.006 60 / 0.27)";

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          background: navBackground,
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          transform: "translateZ(0)",
          willChange: "transform",
          isolation: "isolate",
          transition: "background 0.5s ease",
        }}
      >
        <div className="flex items-center justify-between px-6 md:px-10 lg:px-16 h-16">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-3 group"
          >
            <img
              src="/assets/new34_wordmark_white_nobar.png"
              alt="Studio34"
              className="h-7 w-auto object-contain"
              style={{
                maxHeight: "28px",
                filter: logoIsDark
                  ? "invert(1) sepia(0.15) saturate(0.5) brightness(0.12)"
                  : "none",
                transition: "filter 0.5s ease",
              }}
            />
            <div
              className="w-px h-4 hidden md:block"
              style={{
                background: logoIsDark
                  ? "oklch(0.65 0.201 36.9 / 0.4)"
                  : "oklch(0.65 0.201 36.9 / 0.30)",
                transition: "background 0.5s ease",
              }}
            />
            <span
              className="hidden md:block font-barlow tracking-widest uppercase"
              style={{
                fontWeight: 300,
                letterSpacing: "0.3em",
                fontSize: "0.9rem",
                color: logoIsDark
                  ? "oklch(0.45 0.008 65)"
                  : "oklch(0.55 0.008 65)",
                transition: "color 0.5s ease",
              }}
            >
              AUTOMOTIVE DESIGN
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = currentPath === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className={`group flex flex-col items-center gap-0.5 transition-all duration-300 ${
                    isActive ? "opacity-100" : "opacity-40 hover:opacity-80"
                  }`}
                >
                  <span
                    className="font-barlow text-xs tracking-widest"
                    style={{
                      fontWeight: 300,
                      fontSize: "0.72rem",
                      letterSpacing: "0.22em",
                      color: isActive ? activeColor : textColor,
                      transition: "color 0.5s ease",
                    }}
                  >
                    {item.label}
                  </span>
                  <div
                    className={`h-px w-full transition-all duration-300 ${
                      isActive ? "" : "bg-transparent group-hover:bg-gold/40"
                    }`}
                    style={
                      isActive ? { background: "oklch(0.65 0.201 36.9)" } : {}
                    }
                  />
                </Link>
              );
            })}
            <button
              type="button"
              data-ocid="nav.link"
              onClick={handleContact}
              className="group flex flex-col items-center gap-0.5 transition-all duration-300 bg-transparent border-0 p-0 cursor-pointer opacity-40 hover:opacity-80"
            >
              <span
                className="font-barlow text-xs tracking-widest"
                style={{
                  fontWeight: 300,
                  fontSize: "0.72rem",
                  letterSpacing: "0.22em",
                  color: textColor,
                  transition: "color 0.5s ease",
                }}
              >
                CONTACT
              </span>
              <div className="h-px w-full bg-transparent group-hover:bg-gold/40 transition-all duration-300" />
            </button>
          </div>

          <button
            type="button"
            className="md:hidden flex flex-col gap-1.5 p-3 bg-transparent border-0 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={`block w-5 h-px transition-all duration-300 ${
                  i === 0 && menuOpen
                    ? "rotate-45 translate-y-2"
                    : i === 1 && menuOpen
                      ? "opacity-0"
                      : i === 2 && menuOpen
                        ? "-rotate-45 -translate-y-2"
                        : ""
                }`}
                style={{
                  background: logoIsDark
                    ? "oklch(0.12 0.006 60)"
                    : "oklch(0.88 0.006 70)",
                  transition:
                    "background 0.5s ease, transform 0.3s ease, opacity 0.3s ease",
                }}
              />
            ))}
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 flex flex-col justify-center items-center transition-all duration-500 md:hidden ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{ background: "oklch(0.97 0.006 80)" }}
      >
        <div className="flex flex-col items-center gap-10">
          {navItems.map((item, i) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className="flex flex-col items-center gap-1 group"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <span
                className="font-barlow text-xl tracking-widest uppercase"
                style={{
                  fontWeight: 200,
                  letterSpacing: "0.25em",
                  color: "oklch(0.12 0.006 60)",
                }}
              >
                {item.label}
              </span>
            </Link>
          ))}
          <button
            type="button"
            data-ocid="nav.link"
            onClick={handleContact}
            className="flex flex-col items-center gap-1 group bg-transparent border-0 p-0 cursor-pointer"
          >
            <span
              className="font-barlow text-xl tracking-widest uppercase"
              style={{
                fontWeight: 200,
                letterSpacing: "0.25em",
                color: "oklch(0.12 0.006 60)",
              }}
            >
              CONTACT
            </span>
          </button>
        </div>
      </div>
    </>
  );
}
