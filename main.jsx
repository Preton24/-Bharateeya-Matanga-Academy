import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  Menu, X, ArrowRight, Music2, Sparkles, GraduationCap, Users,
  CalendarDays, Image as ImageIcon, Phone, Mail, MapPin, ChevronDown,
  MessageCircle, BookOpen, Award, Globe2
} from "lucide-react";
import "./styles.css";

const courses = [
  {
    icon: Music2,
    title: "Karnataka Sangeetha",
    tag: "Music",
    text: "Academic and performance-oriented study of Karnataka music with guidance from experienced faculty."
  },
  {
    icon: Sparkles,
    title: "Bharatanatyam",
    tag: "Dance",
    text: "Structured academic and practical learning for students aspiring to pursue Bharatanatyam."
  },
  {
    icon: GraduationCap,
    title: "BPA & MPA Pathways",
    tag: "Academics",
    text: "Information and guidance for eligible students seeking undergraduate and postgraduate study pathways."
  }
];

const faqs = [
  ["What courses are offered?", "The academy's current website describes Karnataka Music and Bharatanatyam academic pathways, including BPA and MPA."],
  ["What is required for MPA admission?", "The current website states that MPA applicants should have adequate subject knowledge and a completed undergraduate degree from a recognized university."],
  ["Can students living outside India apply?", "The current website says Indian citizens living outside India may apply, while non-Indian citizens require special permission."],
  ["How can I ask about fees?", "Fees and service charges can change. Please contact the academy administration for the current fee structure."]
];

function App() {
  const [open, setOpen] = useState(false);
  const [faq, setFaq] = useState(null);

  const nav = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <div className="site">
      <header className="header">
        <div className="container nav-wrap">
          <button className="brand" onClick={() => nav("home")} aria-label="Go home">
            <span className="brand-mark">ॐ</span>
            <span>
              <strong>BMSSA</strong>
              <small>Bharateeya Matanga Academy</small>
            </span>
          </button>

          <nav className={open ? "nav open" : "nav"}>
            {[
              ["home","Home"], ["about","About"], ["courses","Courses"],
              ["activities","Activities"], ["gallery","Gallery"], ["admissions","Admissions"], ["contact","Contact"]
            ].map(([id,label]) => (
              <button key={id} onClick={() => nav(id)}>{label}</button>
            ))}
          </nav>

          <button className="mobile-menu" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-glow one"></div>
          <div className="hero-glow two"></div>
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow"><span></span> Culture • Education • Tradition</div>
              <h1>Preserving tradition.<br/><em>Inspiring the next generation.</em></h1>
              <p>
                Bharateeya Matanga Samajik Samskrik Academy brings together Indian music,
                dance, scholarship and cultural activities in a contemporary learning environment.
              </p>
              <div className="hero-actions">
                <button className="btn primary" onClick={() => nav("admissions")}>Explore Admissions <ArrowRight size={18}/></button>
                <button className="btn ghost" onClick={() => nav("about")}>Discover Our Academy</button>
              </div>
              <div className="hero-meta">
                <div><Award/><span>Recognized academic pathways</span></div>
                <div><Globe2/><span>Students in India & abroad</span></div>
              </div>
            </div>
            <div className="hero-art">
              <div className="mandala">✦</div>
              <div className="art-card card-a"><Music2/><b>Karnataka<br/>Sangeetha</b></div>
              <div className="art-card card-b"><Sparkles/><b>Bharatanatyam</b></div>
              <div className="art-center"><span>ಭಾರತೀಯ</span><strong>ಮತಂಗ</strong><small>ಸಾಮಾಜಿಕ ಸಾಂಸ್ಕೃತಿಕ ಅಕಾಡೆಮಿ</small></div>
            </div>
          </div>
        </section>

        <section className="trust-strip">
          <div className="container trust-grid">
            <div><span className="trust-number">2017</span><span>Academy established</span></div>
            <div><span className="trust-number">2+</span><span>Core cultural disciplines</span></div>
            <div><span className="trust-number">BPA</span><span>Academic pathway</span></div>
            <div><span className="trust-number">MPA</span><span>Advanced pathway</span></div>
          </div>
        </section>

        <section id="about" className="section about">
          <div className="container two-col">
            <div>
              <div className="section-kicker">Our Academy</div>
              <h2>A living space for <em>Indian culture</em></h2>
            </div>
            <div>
              <p className="lead">Founded in 2017 in Humnabad, the academy describes its mission around cultural, social and educational activities, with programs extending across Karnataka and collaborations beyond India.</p>
              <p>The academy's existing public information highlights cultural programs, support for education, research, publications, music, dance and broader cultural initiatives.</p>
              <button className="text-btn" onClick={() => nav("activities")}>Explore our activities <ArrowRight size={17}/></button>
            </div>
          </div>
        </section>

        <section id="courses" className="section soft">
          <div className="container">
            <div className="section-head">
              <div>
                <div className="section-kicker">Academic Programs</div>
                <h2>Learn with <em>depth & purpose</em></h2>
              </div>
              <p>Programs can be updated here as the academy announces new batches, eligibility and fee structures.</p>
            </div>
            <div className="course-grid">
              {courses.map(({icon:Icon,title,tag,text}) => (
                <article className="course-card" key={title}>
                  <div className="course-icon"><Icon size={25}/></div>
                  <span className="pill">{tag}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <button onClick={() => nav("contact")}>Enquire <ArrowRight size={16}/></button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="activities" className="section activities">
          <div className="container activity-grid">
            <div className="activity-visual">
              <div className="visual-tile t1">ಸಂಗೀತ</div>
              <div className="visual-tile t2">ನಾಟ್ಯ</div>
              <div className="visual-tile t3">ಸಂಸ್ಕೃತಿ</div>
            </div>
            <div className="activity-copy">
              <div className="section-kicker">Beyond the Classroom</div>
              <h2>Culture is meant to be <em>experienced</em></h2>
              <p>The academy's public profile includes cultural and social programs, festivals, performances, research, publications and educational initiatives.</p>
              <div className="activity-list">
                <div><CalendarDays/><span><b>Cultural Events</b><small>Programs, festivals and community activities</small></span></div>
                <div><BookOpen/><span><b>Research & Publications</b><small>Indian cultural and academic knowledge</small></span></div>
                <div><Users/><span><b>Community Initiatives</b><small>Education and social-cultural engagement</small></span></div>
              </div>
            </div>
          </div>
        </section>

        <section id="gallery" className="section gallery">
          <div className="container">
            <div className="section-head">
              <div><div className="section-kicker">Gallery</div><h2>Moments of <em>learning & performance</em></h2></div>
              <p>Replace these visual placeholders with the academy's approved photographs and event videos.</p>
            </div>
            <div className="gallery-grid">
              {["Music", "Bharatanatyam", "Events", "Students", "Research", "Cultural Programs"].map((x,i) => (
                <div className={`gallery-item gi${i+1}`} key={x}><ImageIcon size={25}/><span>{x}</span></div>
              ))}
            </div>
          </div>
        </section>

        <section id="admissions" className="section admission">
          <div className="container admission-box">
            <div>
              <div className="section-kicker light">Admissions</div>
              <h2>Begin your journey in <em>Indian arts</em></h2>
              <p>For current eligibility, fees, schedules and application details, contact the academy administration.</p>
            </div>
            <div className="admission-actions">
              <button className="btn light-btn" onClick={() => nav("contact")}>Request Information <ArrowRight size={18}/></button>
              <a className="whatsapp" href="https://wa.me/" target="_blank" rel="noreferrer"><MessageCircle size={19}/> WhatsApp Enquiry</a>
            </div>
          </div>
        </section>

        <section className="section faq">
          <div className="container faq-grid">
            <div><div className="section-kicker">FAQ</div><h2>Common <em>questions</em></h2><p>Answers below are based on the academy's currently published website information.</p></div>
            <div className="faq-list">
              {faqs.map(([q,a],i) => (
                <div className="faq-row" key={q}>
                  <button onClick={() => setFaq(faq === i ? null : i)}><span>{q}</span><ChevronDown className={faq===i ? "rotate":""}/></button>
                  {faq===i && <p>{a}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="container contact-grid">
            <div>
              <div className="section-kicker">Contact</div>
              <h2>Let's connect & <em>learn together</em></h2>
              <p>Update the details below with the academy's current office phone, email and address before publishing.</p>
              <div className="contact-info">
                <div><Phone/><span><b>Phone</b><small>+91 XXXXX XXXXX</small></span></div>
                <div><Mail/><span><b>Email</b><small>info@youracademy.org</small></span></div>
                <div><MapPin/><span><b>Location</b><small>Humnabad / Bengaluru, Karnataka</small></span></div>
              </div>
            </div>
            <form className="contact-form" onSubmit={(e)=>{e.preventDefault(); alert("Thank you! Connect this form to your preferred email/form backend before publishing.");}}>
              <h3>Send an enquiry</h3>
              <input required placeholder="Your name" />
              <input required type="tel" placeholder="Phone number" />
              <select defaultValue=""><option value="" disabled>Select a program</option><option>Karnataka Sangeetha</option><option>Bharatanatyam</option><option>BPA / MPA</option><option>General enquiry</option></select>
              <textarea rows="4" placeholder="Your message"></textarea>
              <button className="btn primary" type="submit">Send Enquiry <ArrowRight size={18}/></button>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <div><div className="footer-brand">BMSSA</div><p>Bharateeya Matanga Samajik Samskrik Academy</p></div>
          <div><b>Explore</b><button onClick={()=>nav("about")}>About</button><button onClick={()=>nav("courses")}>Courses</button><button onClick={()=>nav("admissions")}>Admissions</button></div>
          <div><b>Connect</b><button onClick={()=>nav("contact")}>Contact</button><button onClick={()=>nav("gallery")}>Gallery</button></div>
        </div>
        <div className="copyright">© {new Date().getFullYear()} Bharateeya Matanga Samajik Samskrik Academy. All rights reserved.</div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
