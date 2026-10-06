import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import {
  Menu, X, ArrowRight, Music2, Sparkles, GraduationCap, Users,
  CalendarDays, Image as ImageIcon, Phone, MapPin, ChevronDown, ChevronUp,
  MessageCircle, BookOpen, Award, Globe2, CheckCircle2, FileText,
  Clock, ShieldCheck, ChevronRight, ExternalLink, HelpCircle,
  Building2, Landmark, Check, Send, AlertCircle,
  Instagram, Facebook
} from "lucide-react";
import "./styles.css";
import { TRANSLATIONS } from "./translations.js";

/* ==========================================================================
   AUTHENTIC INDIAN POSTAGE STAMP COMPONENT
   ========================================================================== */
function PostageStamp({ id, name, department, stampCategory, image }) {
  const w = 240;
  const h = 300;
  const r = 5.5;
  const stepX = 16;
  const stepY = 16;

  const circles = [];
  for (let x = 8; x <= w - 8; x += stepX) {
    circles.push({ cx: x, cy: 0 });
    circles.push({ cx: x, cy: h });
  }
  for (let y = 10; y <= h - 10; y += stepY) {
    circles.push({ cx: 0, cy: y });
    circles.push({ cx: w, cy: y });
  }

  const cleanId = id || (name ? name.replace(/[^a-zA-Z0-9]/g, "") : "stamp");
  const maskId = `stamp-mask-${cleanId}`;

  return (
    <div className="stamp-frame-outer">
      <svg
        viewBox={`0 0 ${w} ${h}`}
        className="stamp-svg"
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label={`Commemorative stamp for ${name}`}
      >
        <defs>
          <mask id={maskId}>
            <rect x="0" y="0" width={w} height={h} fill="#ffffff" />
            {circles.map((c, i) => (
              <circle key={i} cx={c.cx} cy={c.cy} r={r} fill="#000000" />
            ))}
          </mask>
        </defs>

        <g mask={`url(#${maskId})`}>
          {/* Ivory paper base */}
          <rect x="0" y="0" width={w} height={h} fill="#FAF5E8" />

          {/* Subtle dashed inner margin */}
          <rect
            x="9"
            y="9"
            width={w - 18}
            height={h - 18}
            fill="none"
            stroke="#D6C4A5"
            strokeWidth="0.8"
            strokeDasharray="3 3"
          />

          {/* Inner Golden Picture Frame */}
          <rect
            x="14"
            y="14"
            width={w - 28}
            height={h - 28}
            fill="#F2E8D5"
            stroke="#C8A45D"
            strokeWidth="1.2"
          />

          {/* Portrait Image */}
          <image
            href={encodeURI(image)}
            x="16"
            y="16"
            width={w - 32}
            height={h - 32}
            preserveAspectRatio="xMidYMid slice"
          />

          {/* Postmark Seal Top-Right */}
          <g transform={`translate(${w - 48}, 22)`}>
            <circle cx="20" cy="20" r="16" fill="none" stroke="rgba(101, 0, 31, 0.45)" strokeWidth="0.9" />
            <circle cx="20" cy="20" r="13" fill="none" stroke="rgba(200, 164, 93, 0.55)" strokeWidth="0.6" strokeDasharray="2 1" />
            <path d="M 6 20 Q 20 16 34 20" stroke="rgba(101, 0, 31, 0.5)" strokeWidth="0.7" fill="none" />
            <text x="20" y="23" textAnchor="middle" fontSize="5.5" fontFamily="'Cormorant Garamond', Georgia, serif" fontWeight="700" fill="#2B211B">
              BMSSA
            </text>
          </g>
        </g>
      </svg>
    </div>
  );
}

/* ==========================================================================
   AUTHENTIC GALLERY ASSETS (17 Verified User Photographs)
   ========================================================================== */
const GALLERY_BASE = [
  { id: 1, category: "dance", image: "/images/master_of_performing_arts.jpg" },
  { id: 2, category: "dance", image: "/images/solo-1.jpg", fallbackImage: "/images/solo 1.jpeg" },
  { id: 3, category: "music", image: "/images/group_singing.jpg" },
  { id: 17, category: "music", image: "/images/group-singing-2.jpg", fallbackImage: "/images/group singing 2.jpg" },
  { id: 4, category: "heritage", image: "/images/dr-satyanarayana-2.jpg", fallbackImage: "/images/Dr satyanarayana 2.JPG" },
  { id: 5, category: "dance", image: "/images/photo-3.jpg", fallbackImage: "/images/photo 3.jpg" },
  { id: 6, category: "dance", image: "/images/solo-2.jpg", fallbackImage: "/images/solo 2.jpeg" },
  { id: 8, category: "dance", image: "/images/ranjana-nagaraj.jpg", fallbackImage: "/images/Ranjana.jpeg" },
  { id: 9, category: "dance", image: "/images/photo-1.jpg", fallbackImage: "/images/photo 1.jpeg" },
  { id: 10, category: "music", image: "/images/dr-nandakumar.jpg", fallbackImage: "/images/Dr. NandaKumar.JPG" },
  { id: 11, category: "heritage", image: "/images/dr-satyanarayana-3.jpg", fallbackImage: "/images/Dr. satyanarayana 3.png" },
  { id: 12, category: "heritage", image: "/images/photo-2.jpg", fallbackImage: "/images/photo 2.jpeg" },
  { id: 13, category: "music", image: "/images/dr-ambika-shastry.jpg", fallbackImage: "/images/Dr.Ambika Shashtry.jpeg" },
  { id: 14, category: "music", image: "/images/dr-nagendra-shastry.jpg", fallbackImage: "/images/Dr.Nagendra Shastri.jpeg" },
  { id: 15, category: "heritage", image: "/images/dr-satyanarayana-pic.jpg", fallbackImage: "/images/Dr Satyanarayana pic.jpeg" },
  { id: 16, category: "heritage", image: "/images/anil-kumar-katti.jpg", fallbackImage: "/images/Anil kumar.jpeg" },
  // Newly Added Photos (Photo 4 to Photo 29)
  { id: 104, category: "dance", image: "/images/photo 4.jpg", fallbackImage: "/images/photo 4.svg" },
  { id: 105, category: "dance", image: "/images/photo 5.jpeg" },
  { id: 106, category: "heritage", image: "/images/photo 6.jpeg" },
  { id: 107, category: "dance", image: "/images/photo 7.jpeg" },
  { id: 108, category: "dance", image: "/images/photo 8.jpeg" },
  { id: 109, category: "dance", image: "/images/photo 9.jpg" },
  { id: 110, category: "dance", image: "/images/photo 10.jpg", fallbackImage: "/images/phoyo 10.jpg" },
  { id: 111, category: "dance", image: "/images/photo 11.jpg" },
  { id: 112, category: "dance", image: "/images/photo 12.jpg" },
  { id: 113, category: "dance", image: "/images/photo 13.jpg" },
  { id: 114, category: "dance", image: "/images/photo 14.jpg" },
  { id: 115, category: "dance", image: "/images/photo 15.jpg" },
  { id: 116, category: "music", image: "/images/photo 16.jpg" },
  { id: 117, category: "music", image: "/images/photo 17.jpg" },
  { id: 118, category: "music", image: "/images/photo 18.jpg" },
  { id: 119, category: "music", image: "/images/photo 19.jpg" },
  { id: 120, category: "music", image: "/images/photo 20.jpg" },
  { id: 121, category: "music", image: "/images/photo 21.jpg" },
  { id: 122, category: "music", image: "/images/photo 22.jpg" },
  { id: 123, category: "music", image: "/images/photo 23.jpg" },
  { id: 124, category: "music", image: "/images/photo 24.jpg" },
  { id: 125, category: "music", image: "/images/photo 25.jpg" },
  { id: 126, category: "music", image: "/images/photo 26.jpg" },
  { id: 127, category: "heritage", image: "/images/photo 27.jpg" },
  { id: 128, category: "heritage", image: "/images/photo 28.jpg" },
  { id: 129, category: "heritage", image: "/images/photo 29.jpg" }
];

const ACTIVITY_ICONS = [Landmark, BookOpen, Sparkles, Users];

/* ==========================================================================
   MAIN APPLICATION COMPONENT
   ========================================================================== */
function App() {
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem("bmssa_lang") || "en";
    } catch (e) {
      return "en";
    }
  });

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(0);
  const [galleryFilter, setGalleryFilter] = useState("all");
  const [galleryLimit, setGalleryLimit] = useState(10);
  const [lightboxItem, setLightboxItem] = useState(null);
  const [selectedFaculty, setSelectedFaculty] = useState(null);
  const [courseModal, setCourseModal] = useState(null);
  const [applyModalOpen, setApplyModalOpen] = useState(false);
  const [campaignMode, setCampaignMode] = useState(false);
  const [selectedProgramForApply, setSelectedProgramForApply] = useState(
    "Master of Performing Arts — Karnataka Sangita"
  );

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    program: "Master of Performing Arts — Karnataka Sangita",
    seniorExam: "yes",
    message: ""
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Sync active language with <html> and body class
  useEffect(() => {
    document.documentElement.lang = lang;
    if (lang === "kn") {
      document.body.classList.add("lang-kn");
    } else {
      document.body.classList.remove("lang-kn");
    }
    try {
      localStorage.setItem("bmssa_lang", lang);
    } catch (e) {}
  }, [lang]);

  const toggleLanguage = () => {
    setLang((prev) => (prev === "en" ? "kn" : "en"));
  };

  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  // Subtle parallax effect for hero artwork
  const [heroParallax, setHeroParallax] = useState({ x: 0, y: 0 });
  const handleHeroMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setHeroParallax({ x: Math.max(-1, Math.min(1, x)), y: Math.max(-1, Math.min(1, y)) });
  };
  const handleHeroMouseLeave = () => {
    setHeroParallax({ x: 0, y: 0 });
  };

  const handleApplyClick = (programTitle) => {
    window.open("https://forms.gle/mWKrf4AaReJDEM7v8", "_blank", "noopener,noreferrer");
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    const text = encodeURIComponent(
      lang === "kn"
        ? `ನಮಸ್ಕಾರ ಬಿ.ಎಂ.ಎಸ್.ಎಸ್.ಎ ಪ್ರವೇಶ ಕೇಂದ್ರ,

ಹೆಸರು: ${formData.name}
ದೂರವಾಣಿ: ${formData.phone}
ಇಮೇಲ್: ${formData.email || 'N/A'}
ಕೋರ್ಸ್: ${formData.program}
ಸೀನಿಯರ್ ಪರೀಕ್ಷೆ: ${formData.seniorExam === 'yes' ? 'ಹೌದು (ಪ್ರವೇಶ ಪರೀಕ್ಷಾ ವಿನಾಯಿತಿ)' : 'ಇಲ್ಲ'}
ಸಂದೇಶ: ${formData.message || 'ನಾನು 2026-27ರ ಎಂ.ಪಿ.ಎ ಪ್ರವೇಶಕ್ಕೆ ಅರ್ಜಿ ಸಲ್ಲಿಸಲು ಇಚ್ಛಿಸುತ್ತೇನೆ.'}`
        : `Hello BMSSA Admission Desk,

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email || 'N/A'}
Program: ${formData.program}
Senior Exam Holder: ${formData.seniorExam === 'yes' ? 'Yes (Entrance Exempted)' : 'No'}
Message: ${formData.message || 'I would like to apply for MPA Admissions 2026-27.'}`
    );
    window.open(`https://wa.me/918939689737?text=${text}`, "_blank");
  };

  // Merge base photos with translated titles & tags
  const localizedGallery = GALLERY_BASE.map((base) => {
    const trans = t.gallery.items.find((i) => i.id === base.id) || {};
    return {
      ...base,
      title: trans.title || "",
      tag: trans.tag || ""
    };
  });

  const filteredGallery = galleryFilter === "all"
    ? localizedGallery
    : localizedGallery.filter((item) => item.category === galleryFilter);

  const visibleGallery = filteredGallery.slice(0, galleryLimit);

  return (
    <div className="site-wrap">
      {/* 1. TOP NOTICE & QUICK CONTACT BAR */}
      <div className="top-notice-bar">
        <div className="container top-notice-inner">
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span className="notice-pill">{t.topNotice.pill}</span>
            <span>{t.topNotice.text}</span>
          </div>
          <div className="top-quick-contacts">
            <a href="tel:918939689737">
              <Phone size={13} /> +91 89396 89737
            </a>
            <a
              href={`https://wa.me/918939689737?text=${encodeURIComponent(
                lang === "kn"
                  ? "ನಮಸ್ಕಾರ ಬಿ.ಎಂ.ಎಸ್.ಎಸ್.ಎ, 2026-27ರ ಪ್ರವೇಶದ ಕುರಿತು ವಿಚಾರಿಸಲು ಇಚ್ಛಿಸುತ್ತೇನೆ."
                  : "Hello BMSSA, I would like to enquire about Admissions 2026-27"
              )}`}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={13} /> {t.topNotice.whatsappEnquiry}
            </a>
            <span style={{ opacity: 0.5 }}>|</span>
            <span style={{ fontSize: "0.75rem", color: "var(--gold-antique)" }}>
              {t.topNotice.affiliation}
            </span>
            <button
              className="top-bar-lang-pill"
              onClick={toggleLanguage}
              aria-label={t.nav.langTooltip}
              title={t.nav.langTooltip}
            >
              <Globe2 size={12} />
              <span>{t.nav.langSwitchLabel}</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION */}
      <header className="site-header">
        <div className="container header-inner">
          <button className="brand-link" onClick={() => scrollTo("home")} aria-label="BMSSA Home">
            <img
              src="/images/logo-eng.png"
              alt={t.academy.fullName}
              className="brand-logo-img"
              width="58"
              height="58"
            />
            <div className="brand-text">
              <div className="brand-title">{t.academy.name}</div>
              <span className="brand-sub">
                {lang === "kn" ? t.academy.kannadaName : t.academy.fullName}
              </span>
            </div>
          </button>

          <nav className={`nav-menu ${mobileMenuOpen ? "open" : ""}`}>
            <button className="nav-link" onClick={() => scrollTo("home")}>{t.nav.home}</button>
            <button className="nav-link" onClick={() => scrollTo("about")}>{t.nav.about}</button>
            <button className="nav-link" onClick={() => scrollTo("programs")}>{t.nav.courses}</button>
            <button className="nav-link" onClick={() => scrollTo("faculty")}>{t.nav.faculty}</button>
            {/* <button className="nav-link" onClick={() => scrollTo("activities")}>{t.nav.activities}</button> */}
            <button className="nav-link" onClick={() => scrollTo("gallery")}>{t.nav.gallery}</button>
            <button className="nav-link" onClick={() => scrollTo("admissions")}>{t.nav.admissions}</button>
            <button className="nav-link" onClick={() => scrollTo("faqs")}>{t.nav.faqs}</button>
            <button className="nav-link" onClick={() => scrollTo("contact")}>{t.nav.contact}</button>

            {/* Mobile-only language switch option */}
            <div className="mobile-only-lang-wrap" style={{ padding: "12px 14px", display: "none" }}>
              <button
                className="lang-switcher-btn"
                style={{ width: "100%", justifyContent: "center" }}
                onClick={toggleLanguage}
              >
                <Globe2 size={16} className="lang-icon" />
                <span>{t.nav.langSwitchLabel}</span>
              </button>
            </div>
          </nav>

          <div className="header-actions">
            {/* Top Right Corner Language Switcher Button */}
            <button
              className="lang-switcher-btn"
              onClick={toggleLanguage}
              aria-label={t.nav.langTooltip}
              title={t.nav.langTooltip}
            >
              <Globe2 size={16} className="lang-icon" />
              <span>{t.nav.langSwitchLabel}</span>
            </button>

            <button
              className="btn btn-primary nav-apply-btn"
              onClick={() => handleApplyClick(t.programs.list[0].title)}
            >
              {t.nav.applyBtn}
            </button>
            <button
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* ==================================================================
            3. HERO SECTION — ARTWORK-BASED CULTURAL HERITAGE EXPERIENCE
            ================================================================== */}
        {/* 3. HERO SECTION — Fullscreen Artwork Heritage Experience */}
        <section
          id="home"
          className="hero-section hero-fullscreen-section"
          onMouseMove={handleHeroMouseMove}
          onMouseLeave={handleHeroMouseLeave}
          style={{
            "--hero-px": heroParallax.x,
            "--hero-py": heroParallax.y
          }}
        >
          {/* Full-width Responsive Viewport spanning edge-to-edge */}
          <div className="hero-fullscreen-viewport">
            {/* Coordinate-Locked Artwork Stage Canvas */}
            <div className="hero-art-canvas">
              {/* Layer 1: Background Scenery (Sunrise, river, hills, temple, courtyard) */}
              <img
                src="/images/Golden River Valley Through Temple Pillars.png"
                alt="Sacred landscape at sunrise"
                className="hero-art-layer hero-art-bg"
              />

              {/* Layer 2A: Rotating Sacred Mandala (Down in its original backdrop location) */}
              <div className="hero-mandala-layer" aria-hidden="true">
                <div className="hero-mandala-spinner">
                  <img
                    src="/images/Radiant Golden Sacred Mandala.png"
                    alt="Radiant Golden Sacred Mandala"
                    className="hero-mandala-disc-img"
                  />
                </div>
                {/* Subtle golden ambient aura pulse */}
                <div className="hero-chakra-glow"></div>
              </div>

              {/* Layer 2B: Rotating Golden Triforce Emblem (Directly Behind Sage Matanga's Head) */}
              <div className="hero-triforce-layer" aria-hidden="true">
                <div className="hero-triforce-spinner">
                  <img
                    src="/images/Golden Triforce Glow Emblem-transparent.png"
                    alt="Golden Triforce Glow Emblem"
                    className="hero-triforce-disc-img"
                  />
                </div>
              </div>

              {/* Layer 4: Stationary Foreground Subject (Sage Matanga with Veena) */}
              <img
                src="/images/matanga-hero-subject.png"
                alt="Sage Matanga seated with Veena"
                className="hero-art-layer hero-art-subject"
              />
            </div>

            {/* Layer 5: Natural Golden Vignette & Bottom Section Blend */}
            <div className="hero-ambient-vignette" aria-hidden="true"></div>
            <div className="hero-bottom-blend" aria-hidden="true"></div>

            {/* Layer 6: Minimal, Elegant Hero Content Overlay */}
            <div className="hero-content-stage">
              <div className="hero-content-container">
                {/* Top Sky Group: Badges + Minimal Elegant Headline */}
                <div className="hero-header-group">
                  <div className="hero-top-strip">
                    <div className="hero-eyebrow-badge">
                      <span className="eyebrow-gem">✦</span>
                      <span>{t.hero.badge}</span>
                      <span className="eyebrow-gem">✦</span>
                    </div>

                    <div className="hero-recognition-tag">
                      <Award size={13} />
                      <span>{t.hero.recognitionPill}</span>
                    </div>
                  </div>

                  <div className="hero-headline-block">
                    <h1 className="hero-refined-headline">
                      <span className="hero-headline-lead">{t.hero.headlineLead}</span>{" "}
                      <span className="hero-serif-highlight">{t.hero.headlineHighlight}</span>
                    </h1>
                  </div>
                </div>

                {/* Bottom Terrace: Admission Status, CTAs, & Assistance */}
                <div className="hero-bottom-terrace">
                  <div className="hero-batch-pill hero-batch-pill-artwork">
                    <span className="pulse-dot"></span>
                    <div className="hero-batch-text">
                      <span className="hero-batch-line hero-batch-line-primary">
                        {t.hero.batchLinePrimary}
                      </span>
                      <span className="hero-batch-line hero-batch-line-sub">
                        {t.hero.batchLineSub}
                      </span>
                    </div>
                  </div>

                  <div className="hero-actions hero-actions-artwork">
                    <button className="btn btn-gold btn-hero-gold" onClick={() => scrollTo("programs")}>
                      {t.hero.exploreBtn} <ArrowRight size={16} />
                    </button>
                    <button className="btn btn-outline-gold btn-hero-outline" onClick={() => scrollTo("about")}>
                      {t.hero.discoverBtn}
                    </button>
                  </div>

                  <div className="hero-contact-strip hero-contact-strip-artwork">
                    <a href="tel:918939689737">
                      <Phone size={13} /> {t.hero.deskLabel}: +91 89396 89737
                    </a>
                    <span className="contact-separator">•</span>
                    <a
                      href={`https://wa.me/918939689737?text=${encodeURIComponent(
                        lang === "kn"
                          ? "ನಮಸ್ಕಾರ ಬಿ.ಎಂ.ಎಸ್.ಎಸ್.ಎ, 2026-27ರ ಪ್ರವೇಶದ ಕುರಿತು ವಿಚಾರಿಸಲು ಇಚ್ಛಿಸುತ್ತೇನೆ."
                          : "Hello BMSSA, I would like to enquire about Admissions 2026-27"
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <MessageCircle size={13} /> {t.hero.whatsappLabel}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. QUICK HIGHLIGHTS / TRUST STRIP */}
        <section className="trust-section">
          <div className="container trust-grid">
            {t.trust.map((item, idx) => (
              <div key={idx} className="trust-item">
                <span className="trust-value">{item.val}</span>
                <span className="trust-label">{item.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 5. ACADEMIC PROGRAMS SECTION */}
        <section id="programs" className="programs-section">
          <div className="container">
            <div className="section-head-center">
              <div className="kicker">{t.programs.kicker}</div>
              <h2 className="section-title">
                {t.programs.title} <em>{t.programs.titleHighlight}</em>
              </h2>
              <div className="gold-divider">
                <span>✦</span>
              </div>
              <p className="section-desc" style={{ margin: "0 auto" }}>
                {t.programs.desc}
              </p>
            </div>

            <div className="programs-grid">
              {t.programs.list.map((prog) => (
                <article key={prog.id} className="program-card">
                  <div className="program-image-wrap">
                    <img
                      src={prog.image}
                      alt={prog.title}
                      className="program-img"
                      style={prog.imagePosition ? { objectPosition: prog.imagePosition } : undefined}
                      loading="lazy"
                    />
                    <span className="program-tag">{prog.tag}</span>
                  </div>

                  <div className="program-body">
                    <div className="program-degree">{prog.degree}</div>
                    <h3 className="program-title">{prog.discipline}</h3>

                    <div className="program-meta-list">
                      <div className="meta-item">
                        <span className="meta-label">{t.programs.durationLabel}</span>
                        <span className="meta-val">{prog.duration}</span>
                      </div>
                      <div className="meta-item">
                        <span className="meta-label">{t.programs.semestersLabel}</span>
                        <span className="meta-val">{prog.semesters}</span>
                      </div>
                      <div className="meta-item">
                        <span className="meta-label">{t.programs.batchLabel}</span>
                        <span className="meta-val">{prog.admissionBatch}</span>
                      </div>
                      <div className="meta-item">
                        <span className="meta-label">{t.programs.eligibilityLabel}</span>
                        <span className="meta-val">{prog.eligibility}</span>
                      </div>
                    </div>

                    <div className="exemption-box">
                      <ShieldCheck size={20} />
                      <div>
                        <strong>{t.programs.exemptionLabel}</strong> {prog.exemption}
                      </div>
                    </div>

                    <div className="program-card-actions">
                      <button
                        className="btn btn-outline-maroon"
                        onClick={() => setCourseModal(prog)}
                      >
                        {t.programs.viewCourseDetailsBtn}
                      </button>
                      <button
                        className="btn btn-primary program-apply-btn"
                        onClick={() => handleApplyClick(prog.title)}
                      >
                        {t.programs.applyBtn} <ArrowRight size={15} />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 6. ABOUT SECTION */}
        <section id="about" className="about-section">
          <div className="container about-grid">
            <div className="about-left-col">
              <div className="about-image-stack">
                <div className="about-main-image">
                  <img
                    src="/images/academy-campus.jpg"
                    alt={t.about.heading}
                    loading="lazy"
                  />
                </div>
                <div className="about-floating-card">
                  <strong>{t.about.estCard.est}</strong>
                  <span>{t.about.estCard.location}</span>
                </div>
              </div>
              <p className="about-image-subtext">
                {t.about.imageSubtext}
              </p>
            </div>

            <div className="about-content">
              <div className="kicker">{t.about.kicker}</div>
              <h2 className="section-title">
                {t.about.heading} <em>{t.about.headingHighlight}</em>
              </h2>
              <p className="lead">{t.about.leadParagraph}</p>
              <p>{t.about.philosophyParagraph}</p>

              <div className="focus-areas-list">
                {t.about.focusItems.map((item, idx) => (
                  <div key={idx} className="focus-item">
                    <CheckCircle2 size={18} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
                <button className="btn btn-primary" onClick={() => scrollTo("gallery")}>
                  {t.about.exploreBtn} <ArrowRight size={17} />
                </button>
                <button className="btn btn-outline-maroon" onClick={() => scrollTo("legacy")}>
                  {t.about.legacyBtn}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 7. OUR INSPIRATION & LEGACY */}
        <section id="legacy" className="legacy-section">
          <div className="container legacy-inner">
            <div className="section-head-center">
              <span className="kicker kicker-gold">{t.legacy.kicker}</span>
              <h2 className="section-title" style={{ color: "#ffffff" }}>
                {t.legacy.heading}
              </h2>
              <div className="gold-divider">
                <span>✦</span>
              </div>
              <p className="section-desc" style={{ color: "#E0D2D5", margin: "0 auto" }}>
                {t.legacy.desc}
              </p>
            </div>

            <div className="legacy-grid">
              {t.legacy.figures.map((pers) => (
                <div key={pers.name} className="legacy-card">
                  <div className="legacy-image-wrap">
                    {pers.image ? (
                      <img
                        src={pers.image}
                        alt={pers.name}
                        className="legacy-img"
                        style={pers.imagePosition ? { objectPosition: pers.imagePosition } : undefined}
                        loading="lazy"
                        onError={(e) => {
                          if (pers.fallbackImage && e.currentTarget.src !== pers.fallbackImage) {
                            e.currentTarget.src = pers.fallbackImage;
                          }
                        }}
                      />
                    ) : (
                      <div className="legacy-avatar-crest">ॐ</div>
                    )}
                    <div className="legacy-image-overlay" />
                    <span className="legacy-tag">{pers.theme || pers.role}</span>
                  </div>

                  <div className="legacy-card-body">
                    <span className="legacy-role-kicker">{pers.role}</span>
                    <h3 className="legacy-name">{pers.name}</h3>

                    {pers.designations && pers.designations.length > 0 && (
                      <div className="legacy-designations">
                        {pers.designations.map((desig, idx) => (
                          <div key={idx} className="legacy-designation-item">
                            <span className="legacy-designation-bullet">✦</span>
                            <span>{desig}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    <blockquote className="legacy-quote">
                      "{pers.quote}"
                    </blockquote>

                    <p className="legacy-desc">{pers.bio}</p>

                    <div className="accolades-pill-row">
                      {pers.accolades.map((acc) => (
                        <span key={acc} className="accolade-pill">
                          ✦ {acc}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. FACULTY & LEADERSHIP SECTION */}
        <section id="faculty" className="faculty-section">
          <div className="container">
            <div className="section-head-center">
              <div className="kicker">{t.faculty.kicker}</div>
              <h2 className="section-title">
                {t.faculty.title} <em>{t.faculty.titleHighlight}</em>
              </h2>
              <div className="gold-divider">
                <span>✦</span>
              </div>
              <p className="section-desc" style={{ margin: "0 auto" }}>
                {t.faculty.desc}
              </p>
            </div>

            {/* 1. Management & Administration */}
            <div className="faculty-category-title">
              <span>{t.faculty.managementHeading}</span>
            </div>

            <div className="faculty-stamp-grid management-grid">
              {t.faculty.data.management.map((m, idx) => (
                <div
                  key={m.id || m.name}
                  className="faculty-stamp-card"
                  onClick={() => setSelectedFaculty(m)}
                  role="button"
                  tabIndex={0}
                  aria-label={`View profile for ${m.name}`}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setSelectedFaculty(m);
                    }
                  }}
                >
                  {m.department && (
                    <div className="stamp-card-top-tag">
                      <span>✦ {m.department} ✦</span>
                    </div>
                  )}

                  <PostageStamp
                    id={`mgmt-${idx}`}
                    name={m.name}
                    department={m.department}
                    stampCategory={m.stampCategory}
                    image={m.image}
                  />

                  <div className="stamp-card-info">
                    <h3 className="stamp-faculty-name">{m.name}</h3>
                    <span className="stamp-faculty-designation">{m.designation}</span>
                    <div className="stamp-click-hint">
                      <span>{t.faculty.clickHint}</span> <ArrowRight size={13} />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* 2. In-house Faculty */}
            <div className="faculty-category-title" style={{ marginTop: "55px" }}>
              <span>{t.faculty.inHouseHeading}</span>
            </div>

            <div className="faculty-stamp-grid inhouse-grid">
              {t.faculty.data.inHouse.map((f, idx) => (
                <div
                  key={f.id || f.name}
                  className="faculty-stamp-card"
                  onClick={() => setSelectedFaculty(f)}
                  role="button"
                  tabIndex={0}
                  aria-label={`View profile for ${f.name}`}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setSelectedFaculty(f);
                    }
                  }}
                >
                  {f.department && (
                    <div className="stamp-card-top-tag">
                      <span>✦ {f.department} ✦</span>
                    </div>
                  )}

                  <PostageStamp
                    id={`inhouse-${idx}`}
                    name={f.name}
                    department={f.department}
                    stampCategory={f.stampCategory}
                    image={f.image}
                  />

                  <div className="stamp-card-info">
                    <h3 className="stamp-faculty-name">{f.name}</h3>
                    <span className="stamp-faculty-designation">{f.designation}</span>
                    <div className="stamp-click-hint">
                      <span>{t.faculty.clickHint}</span> <ArrowRight size={13} />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* 2. Revered Gurus & Eminent Scholars */}
            <div className="faculty-category-title" style={{ marginTop: "55px" }}>
              <span>{t.faculty.gurusHeading}</span>
            </div>

            <div className="faculty-stamp-grid">
              {t.faculty.data.gurus.map((g, idx) => (
                <div
                  key={g.id || g.name}
                  className="faculty-stamp-card"
                  onClick={() => setSelectedFaculty(g)}
                  role="button"
                  tabIndex={0}
                  aria-label={`View profile for ${g.name}`}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setSelectedFaculty(g);
                    }
                  }}
                >
                  {g.department && (
                    <div className="stamp-card-top-tag">
                      <span>✦ {g.department} ✦</span>
                    </div>
                  )}

                  <PostageStamp
                    id={`guru-${idx}`}
                    name={g.name}
                    department={g.department}
                    stampCategory={g.stampCategory}
                    image={g.image}
                  />

                  <div className="stamp-card-info">
                    <h3 className="stamp-faculty-name">{g.name}</h3>
                    <span className="stamp-faculty-designation">{g.designation}</span>
                    <div className="stamp-click-hint">
                      <span>{t.faculty.clickHint}</span> <ArrowRight size={13} />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* 3. Visiting Faculty */}
            <div className="faculty-category-title" style={{ marginTop: "55px" }}>
              <span>{t.faculty.visitingHeading}</span>
            </div>

            <div className="faculty-stamp-grid">
              {t.faculty.data.visiting.map((v, idx) => (
                <div
                  key={v.id || v.name}
                  className="faculty-stamp-card"
                  onClick={() => setSelectedFaculty(v)}
                  role="button"
                  tabIndex={0}
                  aria-label={`View profile for ${v.name}`}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setSelectedFaculty(v);
                    }
                  }}
                >
                  {v.department && (
                    <div className="stamp-card-top-tag">
                      <span>✦ {v.department} ✦</span>
                    </div>
                  )}

                  <PostageStamp
                    id={`visit-${idx}`}
                    name={v.name}
                    department={v.department}
                    stampCategory={v.stampCategory}
                    image={v.image}
                  />

                  <div className="stamp-card-info">
                    <h3 className="stamp-faculty-name">{v.name}</h3>
                    <span className="stamp-faculty-designation">{v.designation}</span>
                    <div className="stamp-click-hint">
                      <span>{t.faculty.clickHint}</span> <ArrowRight size={13} />
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* 9. ACTIVITIES SECTION (Hidden for now as requested - kept intact) */}
        {false && (
        <section id="activities" className="activities-section">
          <div className="container">
            <div className="section-head-center">
              <div className="kicker">{t.activities.kicker}</div>
              <h2 className="section-title">
                {t.activities.title} <em>{t.activities.titleHighlight}</em>
              </h2>
              <div className="gold-divider">
                <span>✦</span>
              </div>
              <p className="section-desc" style={{ margin: "0 auto" }}>
                {t.activities.desc}
              </p>
            </div>

            <div className="activities-grid">
              {t.activities.list.map((act, idx) => {
                const IconComponent = ACTIVITY_ICONS[idx % ACTIVITY_ICONS.length];
                return (
                  <div key={idx} className="stamp-activity-card">
                    <div className="stamp-inner-border">
                      <div className="stamp-header-row">
                        <div className="stamp-icon-bubble">
                          <IconComponent size={20} />
                        </div>
                        <span className="stamp-denomination">{act.category}</span>
                      </div>
                      <h4>{act.title}</h4>
                      <p>{act.desc}</p>
                      <div className="stamp-footer-strip">
                        <span>{act.sealLeft}</span>
                        <span>{act.sealRight}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="activity-feature-strip">
              <div className="feature-tile">
                <img
                  src="/images/concert-performance.jpg"
                  alt={t.activities.feature1Title}
                  loading="lazy"
                />
                <div className="feature-tile-overlay">
                  <h4>{t.activities.feature1Title}</h4>
                  <p>{t.activities.feature1Desc}</p>
                </div>
              </div>
              <div className="feature-tile">
                <img
                  src="/images/arts-workshop.jpg"
                  alt={t.activities.feature2Title}
                  loading="lazy"
                />
                <div className="feature-tile-overlay">
                  <h4>{t.activities.feature2Title}</h4>
                  <p>{t.activities.feature2Desc}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        )}

        {/* 10. GALLERY SECTION — PINTEREST MASONRY */}
        <section id="gallery" className="gallery-section">
          <div className="container">
            <div className="section-head-center">
              <div className="kicker">{t.gallery.kicker}</div>
              <h2 className="section-title">
                {t.gallery.title} <em>{t.gallery.titleHighlight}</em>
              </h2>
              <div className="gold-divider">
                <span>✦</span>
              </div>
            </div>

            <div className="gallery-masonry">
              {visibleGallery.map((item) => (
                <div
                  key={item.id}
                  className="gallery-masonry-item"
                  onClick={() => setLightboxItem(item)}
                  role="button"
                  tabIndex={0}
                  aria-label={`View photo: ${item.title}`}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setLightboxItem(item);
                    }
                  }}
                >
                  <img
                    src={encodeURI(item.image)}
                    alt={item.title || "BMSSA Gallery photo"}
                    loading="lazy"
                    onError={(e) => {
                      if (item.fallbackImage && e.currentTarget.src !== item.fallbackImage) {
                        e.currentTarget.src = encodeURI(item.fallbackImage);
                      }
                    }}
                  />
                </div>
              ))}
            </div>

            {filteredGallery.length > 10 && (
              <div className="gallery-show-more-wrap">
                <button
                  className="btn btn-primary"
                  onClick={() =>
                    setGalleryLimit(galleryLimit >= filteredGallery.length ? 10 : filteredGallery.length)
                  }
                >
                  {galleryLimit < filteredGallery.length ? (
                    <>
                      {t.gallery.showMore} ({filteredGallery.length - galleryLimit})
                      <ChevronDown size={18} />
                    </>
                  ) : (
                    <>
                      {t.gallery.showLess}
                      <ChevronUp size={18} />
                    </>
                  )}
                </button>
              </div>
            )}
          </div>
        </section>

        {/* 11. ADMISSIONS PROCESS & ELIGIBILITY */}
        <section id="admissions" className="admissions-section">
          <div className="container">
            <div className="section-head-center">
              <div className="kicker">{t.admissions.kicker}</div>
              <h2 className="section-title">
                {t.admissions.title} <em>{t.admissions.titleHighlight}</em>
              </h2>
              <div className="gold-divider">
                <span>✦</span>
              </div>
              <p className="section-desc" style={{ margin: "0 auto" }}>
                {t.admissions.desc}
              </p>
            </div>

            <div className="timeline-track">
              {t.admissions.steps.map((step) => (
                <div key={step.num} className="timeline-step">
                  <div className="step-num-bubble">{step.num}</div>
                  <div className="step-title">{step.title}</div>
                  <div className="step-desc">{step.desc}</div>
                </div>
              ))}
            </div>

            <div className="admissions-docs-grid">
              <div className="docs-checklist-card">
                <h3>{t.admissions.docsCardHeading}</h3>
                <div className="doc-items-list">
                  {t.admissions.docs.map((doc, idx) => (
                    <div key={idx} className="doc-item">
                      <CheckCircle2 size={18} />
                      <span>{doc}</span>
                    </div>
                  ))}
                </div>

                <div className="doc-note-box">
                  <strong>Note: </strong> {t.admissions.docsNote}
                </div>
              </div>

              <div className="admissions-sidebar">
                <div className="sidebar-info-card">
                  <h4>{t.admissions.sidebar.eligibilityHeading}</h4>
                  <table className="eligibility-table">
                    <tbody>
                      <tr>
                        <td>{t.admissions.sidebar.qualDegree}</td>
                        <td>{t.admissions.sidebar.qualDegreeVal}</td>
                      </tr>
                      {t.admissions.sidebar.generalCat && (
                        <tr>
                          <td>{t.admissions.sidebar.generalCat}</td>
                          <td>{t.admissions.sidebar.generalCatVal}</td>
                        </tr>
                      )}
                      {t.admissions.sidebar.categoryCat && (
                        <tr>
                          <td>{t.admissions.sidebar.categoryCat}</td>
                          <td>{t.admissions.sidebar.categoryCatVal}</td>
                        </tr>
                      )}
                      <tr>
                        <td>{t.admissions.sidebar.seniorExamRow}</td>
                        <td>{t.admissions.sidebar.seniorExamRowVal}</td>
                      </tr>
                    </tbody>
                  </table>

                  <div className="exemption-box" style={{ margin: "16px 0 0" }}>
                    <ShieldCheck size={20} />
                    <div style={{ fontSize: "0.82rem" }}>
                      {t.admissions.sidebar.exemptionNotice}
                    </div>
                  </div>
                </div>

                <div className="sidebar-info-card" style={{ background: "var(--cream-card)" }}>
                  <h4>{t.admissions.sidebar.scheduleHeading}</h4>
                  <p style={{ fontSize: "0.88rem", color: "var(--ink-muted)", marginBottom: "14px" }}>
                    {t.admissions.sidebar.scheduleDesc}
                  </p>

                  {t.admissions.sidebar.dateNoLateFeeVal && (
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px", margin: "16px 0 20px" }}>
                      <div
                        style={{
                          background: "#fff",
                          border: "1px solid var(--cream-border)",
                          borderLeft: "4px solid var(--gold-antique)",
                          borderRadius: "8px",
                          padding: "12px 14px",
                          display: "flex",
                          flexDirection: "column",
                          gap: "4px",
                          boxShadow: "0 2px 6px rgba(0,0,0,0.03)"
                        }}
                      >
                        <span style={{ fontSize: "0.78rem", textTransform: "uppercase", letterSpacing: "0.04em", color: "var(--ink-muted)", fontWeight: 600 }}>
                          {t.admissions.sidebar.dateNoLateFeeLabel}
                        </span>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                          <CalendarDays size={18} style={{ color: "var(--gold-antique)", flexShrink: 0 }} />
                          <span style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--maroon-darkest)", fontFamily: "var(--font-serif)" }}>
                            {t.admissions.sidebar.dateNoLateFeeVal}
                          </span>
                        </div>
                      </div>

                      <div
                        style={{
                          background: "#fff",
                          border: "1px solid var(--cream-border)",
                          borderLeft: "4px solid var(--maroon-deep)",
                          borderRadius: "8px",
                          padding: "12px 14px",
                          display: "flex",
                          flexDirection: "column",
                          gap: "4px",
                          boxShadow: "0 2px 6px rgba(0,0,0,0.03)"
                        }}
                      >
                        <span style={{ fontSize: "0.78rem", textTransform: "uppercase", letterSpacing: "0.04em", color: "var(--ink-muted)", fontWeight: 600 }}>
                          {t.admissions.sidebar.dateLateFeeLabel}
                        </span>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                          <Clock size={18} style={{ color: "var(--maroon-deep)", flexShrink: 0 }} />
                          <span style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--maroon-deep)", fontFamily: "var(--font-serif)" }}>
                            {t.admissions.sidebar.dateLateFeeVal}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                    <button
                      className="btn btn-primary"
                      style={{ flex: "1 1 140px" }}
                      onClick={() => handleApplyClick(t.programs.list[0].title)}
                    >
                      {t.admissions.sidebar.preRegisterBtn}
                    </button>
                    <a
                      href={`https://wa.me/918939689737?text=${encodeURIComponent(
                        lang === "kn"
                          ? "ನಮಸ್ಕಾರ ಬಿ.ಎಂ.ಎಸ್.ಎಸ್.ಎ, 2026-27ರ ಪ್ರವೇಶ ದಿನಾಂಕಗಳ ಕುರಿತು (ಅರ್ಜಿ ಕೊನೆಯ ದಿನಾಂಕ: ಅಕ್ಟೋಬರ್ ೧೬ / ೩೧, ೨೦೨೬) ಮಾಹಿತಿ ಕಳುಹಿಸಿ."
                          : "Hello BMSSA, I would like to inquire about the MPA 2026-27 admissions (Application deadlines: Oct 16 / Oct 31, 2026)."
                      )}`}
                      className="btn btn-whatsapp"
                      style={{ flex: "1 1 140px" }}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <MessageCircle size={16} /> {t.admissions.sidebar.getUpdatesBtn}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 12. FREQUENTLY ASKED QUESTIONS */}
        <section id="faqs" className="faq-section">
          <div className="container faq-layout">
            <div>
              <div className="kicker">{t.faqs.kicker}</div>
              <h2 className="section-title">
                {t.faqs.title} <em>{t.faqs.titleHighlight}</em>
              </h2>
              <div className="gold-divider" style={{ margin: "1rem 0 2rem" }}>
                <span>✦</span>
              </div>
              <p className="section-desc">{t.faqs.desc}</p>
              <div style={{ marginTop: "28px" }}>
                <a
                  href={`https://wa.me/918939689737?text=${encodeURIComponent(
                    lang === "kn"
                      ? "ನಮಸ್ಕಾರ ಬಿ.ಎಂ.ಎಸ್.ಎಸ್.ಎ, ಪ್ರವೇಶ ಅರ್ಹತೆಗೆ ಸಂಬಂಧಿಸಿದಂತೆ ನನ್ನದೊಂದು ಪ್ರಶ್ನೆಯಿದೆ."
                      : "Hello BMSSA, I have a specific question regarding admission eligibility."
                  )}`}
                  className="btn btn-outline-maroon"
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle size={16} /> {t.faqs.whatsappQuestionBtn}
                </a>
              </div>
            </div>

            <div className="faq-accordion-list">
              {t.faqs.items.map((faq, index) => {
                const isOpen = activeFaq === index;
                return (
                  <div key={index} className={`faq-item ${isOpen ? "open" : ""}`}>
                    <button
                      className="faq-question-btn"
                      onClick={() => setActiveFaq(isOpen ? null : index)}
                    >
                      <span>{faq.q}</span>
                      <ChevronDown size={20} />
                    </button>
                    {isOpen && <div className="faq-answer">{faq.a}</div>}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 13. CONTACT SECTION & ENQUIRY FORM */}
        <section id="contact" className="contact-section">
          <div className="container contact-grid">
            <div className="contact-info-card">
              <div>
                <div className="kicker">{t.contact.kicker}</div>
                <h2 className="section-title">
                  {t.contact.title} <em>{t.contact.titleHighlight}</em>
                </h2>
                <div className="gold-divider" style={{ margin: "1rem 0 1.5rem" }}>
                  <span>✦</span>
                </div>
                <p className="section-desc">{t.contact.desc}</p>
              </div>

              <div className="contact-detail-row">
                <div className="contact-icon-bubble">
                  <Phone size={20} />
                </div>
                <div className="contact-detail-text">
                  <small>{t.contact.phoneHeading}</small>
                  <strong>+91 89396 89737</strong>
                  <p>{t.contact.phoneSub}</p>
                </div>
              </div>


              <div className="contact-detail-row">
                <div className="contact-icon-bubble">
                  <MapPin size={20} />
                </div>
                <div className="contact-detail-text">
                  <small>{t.contact.locationsHeading}</small>
                  <strong>{t.contact.locationsVal}</strong>
                  {t.contact.locationsSub && <p>{t.contact.locationsSub}</p>}
                  {t.contact.locationsMapUrl && (
                    <a
                      href={t.contact.locationsMapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-map-btn"
                    >
                      <MapPin size={14} />
                      <span>{t.contact.viewOnMapsBtn}</span>
                      <ExternalLink size={13} />
                    </a>
                  )}
                </div>
              </div>

              {/* Campus Location Map */}
              <div className="contact-map-container">
                <div className="contact-map-header">
                  <span className="contact-map-title">
                    <MapPin size={15} /> {t.contact.campusMapTitle}
                  </span>
                  <a
                    href={t.contact.locationsMapUrl || "https://maps.app.goo.gl/UbYCYNVFAS16gXTU7"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-map-ext-link"
                  >
                    {t.contact.getDirectionsBtn} <ExternalLink size={13} />
                  </a>
                </div>
                <div className="contact-map-frame-wrapper">
                  <iframe
                    title="Bharatiya Matanga Samajik Samskritik Academy Location Map"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=77.509,12.977,77.518,12.985&layer=mapnik&marker=12.98108,77.51386"
                    className="contact-map-iframe"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Social Channels Below Map */}
              <div className="contact-social-box">
                <span className="contact-social-label">
                  <Sparkles size={14} /> {t.contact.socialChannelsHeading}
                </span>
                <div className="contact-social-actions">
                  <a
                    href="https://www.instagram.com/bharateeyamatangaacademy/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-pill contact-social-pill-instagram"
                    aria-label="Follow BMSSA on Instagram"
                  >
                    <div className="social-pill-icon">
                      <Instagram size={17} />
                    </div>
                    <span>{t.contact.instagramLabel}</span>
                    <ExternalLink size={12} className="social-pill-arrow" />
                  </a>

                  <a
                    href="https://www.facebook.com/profile.php?id=61594592056645"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-pill contact-social-pill-facebook"
                    aria-label="Follow BMSSA on Facebook"
                  >
                    <div className="social-pill-icon">
                      <Facebook size={17} />
                    </div>
                    <span>{t.contact.facebookLabel}</span>
                    <ExternalLink size={12} className="social-pill-arrow" />
                  </a>
                </div>
              </div>

            </div>

            {/* Contact Form */}
            <div className="contact-form-wrap">
              <h3>{t.contact.formHeading}</h3>
              <p>{t.contact.formDesc}</p>

              {formSubmitted ? (
                <div className="form-success-banner">
                  <h4 style={{ marginBottom: "6px" }}>{t.contact.successHeading}</h4>
                  <p>{t.contact.successDesc}</p>
                  <button
                    className="btn btn-outline-maroon"
                    style={{ marginTop: "14px" }}
                    onClick={() => setFormSubmitted(false)}
                  >
                    {t.contact.submitAnotherBtn}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit}>
                  <div className="form-group">
                    <label>{t.contact.nameLabel}</label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      placeholder={t.contact.namePlaceholder}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label>{t.contact.phoneLabel}</label>
                    <input
                      type="tel"
                      required
                      className="form-control"
                      placeholder={t.contact.phonePlaceholder}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label>{t.contact.emailLabel}</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder={t.contact.emailPlaceholder}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label>{t.contact.programLabel}</label>
                    <select
                      className="form-control"
                      value={formData.program}
                      onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                    >
                      {t.contact.programOptions.map((opt, i) => (
                        <option key={i} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label>{t.contact.seniorExamLabel}</label>
                    <select
                      className="form-control"
                      value={formData.seniorExam}
                      onChange={(e) => setFormData({ ...formData, seniorExam: e.target.value })}
                    >
                      <option value="yes">{t.contact.seniorExamYes}</option>
                      <option value="no">{t.contact.seniorExamNo}</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>{t.contact.messageLabel}</label>
                    <textarea
                      rows={3}
                      className="form-control"
                      placeholder={t.contact.messagePlaceholder}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ width: "100%", marginTop: "10px" }}>
                    {t.contact.submitBtn} <Send size={16} />
                  </button>
                  <small style={{ display: "block", textAlign: "center", color: "var(--ink-light)", marginTop: "10px" }}>
                    {t.contact.confidentialNote}
                  </small>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* 14. TRADITIONAL RICH FOOTER */}
      <footer className="site-footer">
        <div className="container footer-inner">
          <div className="footer-grid">
            <div className="footer-brand">
              <h3>{t.academy.name}</h3>
              <p>{t.footer.aboutText}</p>
              <div className="footer-affiliation">
                <Award size={16} />
                <span>{t.footer.affiliationBadge}</span>
              </div>
              <div className="footer-social-row">
                <a
                  href="https://www.facebook.com/profile.php?id=61594592056645"
                  target="_blank"
                  rel="noreferrer"
                  className="footer-social-btn"
                  title="BMSSA on Facebook"
                  aria-label="Facebook"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="https://www.instagram.com/bharateeyamatangaacademy/?hl=en"
                  target="_blank"
                  rel="noreferrer"
                  className="footer-social-btn"
                  title="BMSSA on Instagram"
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a>
              </div>
            </div>

            <div className="footer-col">
              <h4>{t.footer.exploreTitle}</h4>
              <ul className="footer-links">
                <li><button onClick={() => scrollTo("home")}>{t.nav.home}</button></li>
                <li><button onClick={() => scrollTo("about")}>{t.nav.about}</button></li>
                <li><button onClick={() => scrollTo("programs")}>{t.nav.courses}</button></li>
                <li><button onClick={() => scrollTo("legacy")}>{t.legacy.heading}</button></li>
                <li><button onClick={() => scrollTo("faculty")}>{t.nav.faculty}</button></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>{t.footer.connectTitle}</h4>
              <ul className="footer-links">
                <li><button onClick={() => scrollTo("admissions")}>{t.nav.admissions}</button></li>
                {/* <li><button onClick={() => scrollTo("activities")}>{t.nav.activities}</button></li> */}
                <li><button onClick={() => scrollTo("gallery")}>{t.nav.gallery}</button></li>
                <li><button onClick={() => scrollTo("faqs")}>{t.nav.faqs}</button></li>
                <li><button onClick={() => scrollTo("contact")}>{t.nav.contact}</button></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>{t.footer.inquiriesTitle}</h4>
              <p style={{ fontSize: "0.85rem", color: "#D2C0C3", marginBottom: "8px" }}>
                {t.footer.inquiriesSub}
              </p>
              <a
                href="tel:918939689737"
                style={{ display: "block", color: "var(--gold-light)", fontWeight: 700 }}
              >
                +91 89396 89737
              </a>
              <div style={{ marginTop: "12px", fontSize: "0.82rem", color: "#D2C0C3", lineHeight: "1.4" }}>
                <p style={{ margin: 0 }}>156, 1st I Main Rd, 1st Block, 2nd Stage, Nagarbhavi, Bengaluru - 560072</p>
                <a
                  href="https://maps.app.goo.gl/UbYCYNVFAS16gXTU7"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: "var(--gold-light)",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "4px",
                    marginTop: "6px",
                    fontWeight: 600,
                    fontSize: "0.78rem"
                  }}
                >
                  <MapPin size={12} /> Google Maps <ExternalLink size={11} />
                </a>
              </div>
            </div>
          </div>

          <div className="footer-bottom-bar">
            <div>{t.footer.copyright}</div>
            <div>{t.footer.credit}</div>
          </div>
        </div>
      </footer>

      {/* 15. FLOATING ACTION DOCK */}
      <aside className="floating-actions-dock" aria-label="Quick Actions">
        <a
          href={`https://wa.me/918939689737?text=${encodeURIComponent(
            lang === "kn"
              ? "ನಮಸ್ಕಾರ ಬಿ.ಎಂ.ಎಸ್.ಎಸ್.ಎ, 2026-27ರ ಪ್ರವೇಶದ ಕುರಿತು ವಿಚಾರಿಸಲು ಇಚ್ಛಿಸುತ್ತೇನೆ."
              : "Hello BMSSA, I would like to enquire about Admissions 2026-27."
          )}`}
          className="floating-btn-wa"
          target="_blank"
          rel="noreferrer"
          title="WhatsApp Enquiry"
          aria-label="WhatsApp Enquiry"
        >
          <MessageCircle size={24} />
        </a>
        <button
          className="btn btn-primary floating-apply-btn"
          onClick={() => handleApplyClick(t.programs.list[0].title)}
        >
          {t.floating.applyBtn}
        </button>
      </aside>

      {/* 16. COURSE DETAILS MODAL */}
      {courseModal && (
        <div className="modal-backdrop" onClick={() => setCourseModal(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close-btn"
              onClick={() => setCourseModal(null)}
              aria-label="Close Modal"
            >
              <X size={20} />
            </button>

            <div style={{ height: "260px", overflow: "hidden", position: "relative" }}>
              <img
                src={courseModal.modalImage || courseModal.image}
                alt={courseModal.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: courseModal.modalImagePosition || courseModal.imagePosition || "center center"
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(180deg, transparent 30%, rgba(42, 2, 13, 0.9) 100%)",
                  display: "flex",
                  alignItems: "flex-end",
                  padding: "24px"
                }}
              >
                <div>
                  <span className="program-tag">{courseModal.tag}</span>
                  <h3 style={{ color: "#fff", fontFamily: "var(--font-serif)", fontSize: "1.75rem", marginTop: "6px" }}>
                    {courseModal.title}
                  </h3>
                </div>
              </div>
            </div>

            <div style={{ padding: "28px" }}>
              <h4 style={{ fontFamily: "var(--font-serif)", fontSize: "1.3rem", color: "var(--maroon-darkest)", marginBottom: "8px" }}>
                {t.modals.courseOverview}
              </h4>
              <p style={{ color: "var(--ink-muted)", fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "20px" }}>
                {courseModal.overview}
              </p>

              <div className="program-meta-list" style={{ marginBottom: "22px" }}>
                <div className="meta-item">
                  <span className="meta-label">{t.modals.durationSemesters}</span>
                  <span className="meta-val">{courseModal.duration} ({courseModal.semesters})</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">{t.modals.batch}</span>
                  <span className="meta-val">{courseModal.admissionBatch}</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">{t.modals.eligibility || t.programs.eligibilityLabel}</span>
                  <span className="meta-val">{courseModal.eligibility}</span>
                </div>
              </div>

              <div className="exemption-box">
                <ShieldCheck size={20} />
                <div>
                  <strong>{t.modals.entranceExemption}</strong> {courseModal.exemption}
                </div>
              </div>

              <h4 style={{ fontFamily: "var(--font-serif)", fontSize: "1.2rem", color: "var(--maroon-darkest)", margin: "20px 0 10px" }}>
                {t.modals.curriculumHeading}
              </h4>
              <ul style={{ paddingLeft: "20px", color: "var(--ink-muted)", fontSize: "0.9rem", lineHeight: 1.8 }}>
                {courseModal.curriculum.map((curr, idx) => (
                  <li key={idx}>{curr}</li>
                ))}
              </ul>

              <div style={{ display: "flex", gap: "12px", marginTop: "28px" }}>
                <button
                  className="btn btn-primary"
                  style={{ flex: 1 }}
                  onClick={() => {
                    setCourseModal(null);
                    handleApplyClick(courseModal.title);
                  }}
                >
                  {t.modals.applyForProgramBtn} <ArrowRight size={16} />
                </button>
                <a
                  href={`https://wa.me/918939689737?text=${encodeURIComponent(
                    lang === "kn"
                      ? `ನಮಸ್ಕಾರ ಬಿ.ಎಂ.ಎಸ್.ಎಸ್.ಎ, ನಾನು ${courseModal.title} ಕುರಿತು ವಿವರಗಳನ್ನು ಬಯಸುತ್ತೇನೆ.`
                      : `Hello BMSSA, I would like more details about ${courseModal.title}.`
                  )}`}
                  className="btn btn-whatsapp"
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle size={16} /> {t.modals.whatsappInquiryBtn}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 17. PRE-REGISTRATION / ADMISSION MODAL */}
      {applyModalOpen && (
        <div className="modal-backdrop" onClick={() => setApplyModalOpen(false)}>
          <div className="modal-content" style={{ maxWidth: "620px" }} onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close-btn"
              onClick={() => setApplyModalOpen(false)}
              aria-label="Close"
            >
              <X size={20} />
            </button>

            <div style={{ background: "linear-gradient(135deg, #65001F, #3D0012)", color: "#fff", padding: "28px" }}>
              <div className="hero-eyebrow" style={{ color: "var(--gold-light)", borderColor: "rgba(200,164,93,0.3)" }}>
                {t.modals.applyModalEyebrow}
              </div>
              <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.75rem", margin: "6px 0 8px" }}>
                {t.modals.applyModalHeading}
              </h3>
              <p style={{ color: "#E8D5D8", fontSize: "0.88rem" }}>
                {t.modals.applyModalSub}
              </p>
            </div>

            <div style={{ padding: "26px" }}>
              <div style={{ background: "var(--ivory-base)", border: "1px solid var(--cream-border)", padding: "14px", borderRadius: "8px", marginBottom: "20px", fontSize: "0.82rem", color: "var(--ink-muted)" }}>
                <strong>Note: </strong> {t.modals.applyModalNote}
              </div>

              <form onSubmit={handleFormSubmit}>
                <div className="form-group">
                  <label>{t.modals.fullName}</label>
                  <input
                    type="text"
                    required
                    className="form-control"
                    placeholder={lang === "kn" ? "ಅಭ್ಯರ್ಥಿಯ ಪೂರ್ಣ ಹೆಸರು" : "Candidate full name"}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label>{t.modals.phoneWhatsApp}</label>
                  <input
                    type="tel"
                    required
                    className="form-control"
                    placeholder="+91 XXXXX XXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label>{t.modals.program}</label>
                  <select
                    className="form-control"
                    value={selectedProgramForApply}
                    onChange={(e) => setSelectedProgramForApply(e.target.value)}
                  >
                    {t.programs.list.map((p) => (
                      <option key={p.id} value={p.title}>
                        {p.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label>{t.modals.seniorExamHolder}</label>
                  <select
                    className="form-control"
                    value={formData.seniorExam}
                    onChange={(e) => setFormData({ ...formData, seniorExam: e.target.value })}
                  >
                    <option value="yes">{t.modals.seniorYes}</option>
                    <option value="no">{t.modals.seniorNo}</option>
                  </select>
                </div>

                <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
                  <button type="submit" className="btn btn-primary" style={{ flex: 1 }}>
                    {t.modals.submitPreReg} <ArrowRight size={16} />
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-maroon"
                    onClick={() => setApplyModalOpen(false)}
                  >
                    {t.modals.cancel}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* 18. GALLERY LIGHTBOX MODAL */}
      {lightboxItem && (
        <div className="modal-backdrop" onClick={() => setLightboxItem(null)}>
          <div className="modal-content" style={{ maxWidth: "780px" }} onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close-btn"
              onClick={() => setLightboxItem(null)}
              aria-label="Close"
            >
              <X size={20} />
            </button>
            <div style={{ background: "#0c0407", display: "flex", justifyContent: "center", alignItems: "center" }}>
              <img
                src={encodeURI(lightboxItem.image)}
                alt={lightboxItem.title || "Gallery image"}
                onError={(e) => {
                  if (lightboxItem.fallbackImage && e.currentTarget.src !== lightboxItem.fallbackImage) {
                    e.currentTarget.src = encodeURI(lightboxItem.fallbackImage);
                  }
                }}
                style={{ width: "100%", maxHeight: "85vh", objectFit: "contain", display: "block" }}
              />
            </div>
          </div>
        </div>
      )}

      {/* 19. FACULTY PROFILE DETAIL MODAL (Stamp Click) */}
      {selectedFaculty && (
        <div className="modal-backdrop" onClick={() => setSelectedFaculty(null)}>
          <div
            className="modal-content faculty-detail-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close-btn"
              onClick={() => setSelectedFaculty(null)}
              aria-label="Close Profile"
            >
              <X size={20} />
            </button>

            <div className="faculty-detail-grid">
              <div className="faculty-detail-stamp-wrap">
                <PostageStamp
                  id="modal-stamp"
                  name={selectedFaculty.name}
                  department={selectedFaculty.department}
                  stampCategory={selectedFaculty.stampCategory}
                  image={selectedFaculty.image}
                />
                <div className="stamp-modal-caption">
                  <span>{t.modals.commemorativeCaption}</span>
                  <small>{t.modals.commemorativeSub}</small>
                </div>
              </div>

              <div className="faculty-detail-content">
                <span className="faculty-modal-dept-badge">
                  ✦ {selectedFaculty.department}
                </span>

                <h3 className="faculty-modal-title">
                  {selectedFaculty.name}
                </h3>
                <div className="faculty-modal-designation">
                  {selectedFaculty.designation}
                </div>

                <div className="faculty-modal-section-title">
                  {t.modals.aboutLineage}
                </div>
                <p className="faculty-modal-bio">
                  {selectedFaculty.fullBio || selectedFaculty.bio || selectedFaculty.shortBio}
                </p>

                {selectedFaculty.highlights && selectedFaculty.highlights.length > 0 && (
                  <>
                    <div className="faculty-modal-section-title" style={{ marginTop: "18px" }}>
                      {selectedFaculty.accoladesTitle || t.modals.accoladesRoles}
                    </div>
                    <ul className="faculty-modal-highlights">
                      {selectedFaculty.highlights.map((h, idx) => (
                        <li key={idx}>
                          <CheckCircle2 size={16} />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
