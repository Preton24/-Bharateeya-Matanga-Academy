import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import {
  Menu, X, ArrowRight, Music2, Sparkles, GraduationCap, Users,
  CalendarDays, Image as ImageIcon, Phone, Mail, MapPin, ChevronDown, ChevronUp,
  MessageCircle, BookOpen, Award, Globe2, CheckCircle2, FileText,
  Clock, ShieldCheck, ChevronRight, ExternalLink, HelpCircle,
  Building2, Landmark, Check, Send, AlertCircle
} from "lucide-react";
import "./styles.css";

/* ==========================================================================
   BMSSA DATA DEFINITIONS (Source of Truth: Website Content Handoff V2)
   ========================================================================== */

const ACADEMY_INFO = {
  name: "BMSSA",
  fullName: "Bharateeya Matanga Samajik Samskrik Academy",
  kannadaName: "ಭಾರತೀಯ ಮತಂಗ ಸಾಮಾಜಿಕ ಸಾಂಸ್ಕೃತಿಕ ಅಕಾಡೆಮಿ",
  batch: "2026-27",
  established: "2017",
  location: "Humnabad, Bidar District & Bengaluru, Karnataka",
  affiliation: "Recognised by Kannada University, Hampi",
  primaryPhone: "+91 89396 89737",
  primaryPhoneRaw: "918939689737",
  email: "bmssacademy.h@gmail.com",
  socials: {
    facebook: "https://www.facebook.com/share/18dsJKKJid/?mibextid=wwXIfr",
    instagram: "https://www.instagram.com/bmssacademy?stkn=MXY3ZGJiOWF3YWVzZw==",
    instagramHandle: "@bmssacademy"
  }
};

const PROGRAMS = [
  {
    id: "karnataka-sangita",
    title: "Master of Performing Arts — Karnataka Sangita",
    shortTitle: "MPA Karnataka Sangita",
    degree: "Master of Performing Arts (MPA)",
    discipline: "Karnataka Sangita (Classical Music)",
    tag: "Classical Music",
    image: "/images/group_singing.jpg",
    imagePosition: "center 38%",
    duration: "2 Years",
    semesters: "4 Semesters",
    admissionBatch: "2026-27",
    eligibility: "Any Bachelor degree",
    generalPercent: "55% aggregate marks",
    categoryPercent: "50% aggregate marks",
    exemption: "Applicants who have passed the Senior Exam in Karnataka Sangita are exempt from the entrance exam.",
    hod: "Dr. Ambika Shastry",
    hodTitle: "Head of the Department of Karnataka Sangita",
    overview: "Academic and performance-oriented study of Karnataka music with guidance from experienced faculty. Deep immersion in rare compositions, Raga-Tana-Pallavi, musicological treatises, vocal concert presentation and a research-based dissertation.",
    curriculum: [
      "Advanced Ragas & Compositions of Karnataka Vaggeyakaras",
      "Raga-Tana-Pallavi (RTP) Performance & Manodharma Sangita",
      "Studies in Karnataka Sangita : History, Composers of Karnataka Music, Lakshya and Lakshanas of Tala Vadyas, Musical Terminologies, Music & Science, Principles of Musicology, Karnataka Music and complementary Shastras, Western Music a comparative understanding",
      "Indian Musicological Treatises & Natyashastra Musical Systems",
      "Concert Presentation & Research Methodologies with Dissertation"
    ]
  },
  {
    id: "bharatanatya",
    title: "Master of Performing Arts — Bharatanatya",
    shortTitle: "MPA Bharatanatya",
    degree: "Master of Performing Arts (MPA)",
    discipline: "Bharatanatya (Classical Dance)",
    tag: "Classical Dance",
    image: "/images/solo-pic-3.png",
    imagePosition: "center center",
    modalImage: "/images/master_of_performing_arts.jpg",
    modalImagePosition: "center 22%",
    duration: "2 Years",
    semesters: "4 Semesters",
    admissionBatch: "2026-27",
    eligibility: "Any Bachelor degree",
    generalPercent: "55% aggregate marks",
    categoryPercent: "50% aggregate marks",
    exemption: "Applicants who have passed the Senior Exam in Bharatanatya are exempt from the entrance exam.",
    hod: "Guru Vidushi Ranjana Nagaraj",
    hodTitle: "Head of the Department Bharatanatyam",
    overview: "Structured academic and practical learning for students aspiring to pursue Bharatanatya. Comprehensive training in Nritta, Abhinaya, Natyasastra Marga, Karanas, choreographic curation and exposure to folk dances.",
    curriculum: [
      "Global Dance History - Exploring the evolution of dance through different cultures and historical periods",
      "Dance literature – Analysing various texts and scholarly works on dance",
      "Allied art forms – Gaining insights into related art forms to enhance dance understanding",
      "Natya Shastra – Theory & Practicum of the text",
      "Folk dance – Understanding the significance and movements of various folk dances",
      "Expert workshops – Participating in workshops led by subject matter experts",
      "Choreography skills – Developing and refining choreography techniques",
      "Group productions – Collaborating on group dance thematic productions",
      "Solo concerts – Preparing for and performing solo dance live concerts",
      "Research methodology – Learning research methods and preparing a thesis",
      "Field trips – Engaging in a field study to experience dance in different artistic contexts"
    ]
  }
];

const FACULTY = {
  academic: [
    {
      id: "nagendra-shastry",
      name: "Vidwan Dr. Srikantham Nagendra Shastry",
      designation: "Chief Academic Mentor & Revered Guru",
      department: "Karnataka Sangita",
      image: "/images/dr-nagendra-shastry.jpg",
      phone: null,
      shortBio: "Torchbearer of the 40-generation Chintalapalli music lineage and Mysore Sadashiva Rao tradition. Acclaimed vocalist and musicologist guiding BMSSA's classical musicology and performance curriculum.",
      fullBio: "Vidwan Dr. Srikantham Nagendra Shastry is an acclaimed Carnatic classical vocalist, musicologist, and torchbearer of the 40-generation Chintalapalli music lineage and Mysore Sadashiva Rao tradition. Discipled under Mahamahopadhyaya Dr. R. Sathyanarayana, he is celebrated for his monumental contributions in editing rare compositions of the Mysore Royal Court and Mysore Sadashiva Rao. Having served in distinguished academic leadership capacities including the Academic Committee for Kalakshetra Foundation and Deputy Registrar of Maharani Cluster University, he serves as Chief Academic Mentor guiding the curriculum, Raga-Tana-Pallavi exegesis, and musicological treatises at BMSSA.",
      highlights: [
        "Torchbearer, 40-gen Chintalapalli Lineage",
        "Eminent Musicologist & Vocal Maestro",
        "Disciple of Dr. R. Sathyanarayana",
        "Senior Academic Mentor (Music)",
        "Former Member, Kalakshetra Academic Committee"
      ]
    },
    {
      id: "ambika-shastry",
      name: "Dr. Ambika Shastry",
      designation: "Head of the Department of Karnataka Sangita",
      department: "Karnataka Sangita",
      image: "/images/dr-ambika-shastry.jpg",
      phone: "+91 99805 13526",
      shortBio: "Foremost disciple of Dr. Srikantham Nagendra Shastry and expert Raga-Tana-Pallavi performer. Former Assistant Professor at Maharani Cluster University, heading BMSSA's vocal and academic curriculum.",
      fullBio: "Dr. Ambika Shastry is the foremost disciple of famous and eminent guru of Karnataka music, Dr. Srikantham Nagendra Shastry. She is well-known for her absolute dedication, as a very fine performer, an astute teacher of Karnataka Music, a very able administrator and a cultural curator. She has served eminently as Assistant Professor for Research institutes like Rasashri, Maharani Cluster University and many other prestigious institutions. She has given innumerable and important concerts based on unique compositions of Karnataka composers. She is an expert Raga-Tana-Pallavi performer, presently heading the Department of Karnataka Sangita at BMSSA.",
      highlights: [
        "Foremost disciple of Dr. Srikantham Nagendra Shastry",
        "Expert Raga-Tana-Pallavi performer",
        "Ex-Assistant Professor, Maharani Cluster University",
        "Cultural curator & researcher",
        "Specialist in Rare Karnataka Vaggeyakara Compositions"
      ]
    },
    {
      id: "ranjana-nagaraj",
      name: "Guru Vidushi Ranjana Nagaraj",
      designation: "Head of the Department Bharatanatyam",
      department: "Bharatanatyam",
      image: "/images/ranjana-nagaraj.jpg",
      phone: "+91 99019 27272",
      shortBio: "Founder-Director of 'Nrtta Kashini' with 20+ years of training under Guru Smt. Jyothi Pattabhiram. A PhD scholar specializing in the Marga and Karanas of Bharatamuni's Natyashastra.",
      fullBio: "Guru Vidushi Ranjana Nagaraj is a multi-faceted personality, deeply devoted to promoting India's dance tradition. Ranjana excels in dance education, choreography and its performance. She is a post-graduate degree holder from Jain University and is now pursuing her PhD. As the founder and director of her institution 'Nrtta Kashini', she provides top-notch dance education. Ranjana is also a painting artist and has obtained a BVM degree from the Karnataka Chitrakala Parishath Educational Institution. Having trained in dance for 20 years under Karnataka Rajyotsava Awardee Guru Smt. Jyothi Pattabhiram, Ranjana has received further training in the Marga and Karanas of Bharatamuni's Natyasastra from Vidushi Namita and Vidushi Deeksha, disciples of Guru Smt. Sundari Santhanam.",
      highlights: [
        "Founder & Director, 'Nrtta Kashini'",
        "20 Years training under Guru Smt. Jyothi Pattabhiram",
        "Scholar of Marga & Karanas of Bharatamuni's Natyasastra",
        "PhD Scholar & BVM Graduate from Chitrakala Parishath",
        "Choreographer & Performing Artist"
      ]
    }
  ],
  management: [
    {
      id: "anil-katti",
      name: "Sri Anil Kumar Katti",
      designation: "Founder Trustee, BMSSA",
      department: "Board of Trustees & Chairman",
      image: "/images/anil-kumar-katti.jpg",
      phone: null,
      shortBio: "Chairman and Founder Trustee serving society for over three decades through educational leadership, cultural preservation, and philanthropic patronage.",
      fullBio: "Sri Anil Kumar Katti is a unique personality of many achievements: he has built huge temples, is an able businessman, runs many educational institutions and is a generous philanthropist. He is presently serving as the Chairman of Bharateeya Matanga Samajik Samskrik Academy which he established successfully and has served our society for more than 3 decades. He is deeply committed to the upliftment of education and moral values and works diligently without compromising on anything. He was deeply spiritually influenced by Mahamahopadhyaya Dr. R. Sathyanarayana and since then has taken the upliftment of the Matanga community, Matangamuni publications and social work as his life's sole aim and purpose.",
      highlights: [
        "Chairman & Founder Trustee, BMSSA",
        "Over 3 Decades of Social & Cultural Service",
        "Temple Builder & Philanthropist",
        "Patron of Matangamuni Research Publications"
      ]
    },
    {
      id: "santosh-prasad",
      name: "Sri Santosh Prasad",
      designation: "Executive Admin",
      department: "Administration & Student Welfare",
      image: "/images/arts-workshop.jpg",
      phone: "+91 98862 52375",
      shortBio: "Ministry of Culture Junior Fellowship awardee, accomplished Bharatanatyam artist, and administrator managing student welfare, admissions, and university liaison.",
      fullBio: "Sri Santosh Prasad is a very able, hard working and successful administrator and a Bharatanatyam artist. He is an interior designer by profession and an artist by heart. He was awarded the prestigious Junior Fellowship by Ministry of Culture, Government of India. He is serving the institution as executive admin to take care of student welfare, admissions, scheduling of academic sessions, seminars and examination work.",
      highlights: [
        "Executive Admin — Admissions & Student Welfare",
        "Junior Fellowship Awardee, Ministry of Culture (Govt. of India)",
        "Accomplished Bharatanatyam Artist",
        "Academic Scheduling & University Liaison"
      ]
    }
  ]
};

/* ==========================================================================
   AUTHENTIC INDIAN POSTAGE STAMP COMPONENT
   ========================================================================== */
function PostageStamp({ id, name, department, image }) {
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
            fill="#FFFFFF"
            stroke="#C8A45D"
            strokeWidth="1.2"
          />

          {/* Stamp Top Commemorative Header */}
          <text
            x={w / 2}
            y="26"
            textAnchor="middle"
            fontFamily="'Cormorant Garamond', Georgia, serif"
            fontSize="9"
            fontWeight="700"
            letterSpacing="2"
            fill="#65001F"
          >
            ✦ BMSSA • ACADEMY ✦
          </text>

          {/* Framed Faculty Portrait Photo */}
          <image
            href={image || "/images/temple-heritage-motif.jpg"}
            xlinkHref={image || "/images/temple-heritage-motif.jpg"}
            x="18"
            y="32"
            width={w - 36}
            height={h - 68}
            preserveAspectRatio="xMidYMid slice"
          />

          {/* Fine Gold Mat around Photo */}
          <rect
            x="18"
            y="32"
            width={w - 36}
            height={h - 68}
            fill="none"
            stroke="#C8A45D"
            strokeWidth="1"
            opacity="0.85"
          />

          {/* Commemorative Postmark Cancellation Seal */}
          <g transform={`translate(${w - 62}, 38)`} opacity="0.30">
            <circle cx="20" cy="20" r="18" fill="none" stroke="#2B211B" strokeWidth="1" strokeDasharray="3 2" />
            <path d="M-15,10 Q5,4 25,10 T65,10" fill="none" stroke="#2B211B" strokeWidth="1" />
            <path d="M-15,16 Q5,10 25,16 T65,16" fill="none" stroke="#2B211B" strokeWidth="1" />
            <path d="M-15,22 Q5,16 25,22 T65,22" fill="none" stroke="#2B211B" strokeWidth="1" />
            <text x="20" y="23" textAnchor="middle" fontSize="5.5" fontFamily="'Cormorant Garamond', Georgia, serif" fontWeight="700" fill="#2B211B">
              BMSSA
            </text>
          </g>

          {/* Stamp Bottom Inscription */}
          <text
            x="22"
            y={h - 18}
            fontFamily="'Cormorant Garamond', Georgia, serif"
            fontSize="10"
            fontWeight="700"
            letterSpacing="1"
            fill="#65001F"
          >
            {department?.includes("Music") ? "SANGITA" : department?.includes("Dance") ? "NATYA" : "SEVA"}
          </text>

          <text
            x={w - 22}
            y={h - 18}
            textAnchor="end"
            fontFamily="'Inter', sans-serif"
            fontSize="9"
            fontWeight="700"
            letterSpacing="1"
            fill="#C8A45D"
          >
            ₹ 2026
          </text>
        </g>
      </svg>
    </div>
  );
}

const LEGACY = [
  {
    name: "Mahamahopadhyaya Dr. R. Sathyanarayana",
    role: "Paramaguru & Guiding Inspiration",
    theme: "On the Path of Paramaguru",
    image: "/images/dr-satyanarayana-3.jpg",
    fallbackImage: "/images/Dr. satyanarayana 3.png",
    imagePosition: "center 25%",
    quote: "Indian Art is a powerful medium for expressing human emotions, and music and dance are woven into the very fabric of life.",
    bio: "Padma Shri awardee and monumental musicologist whose visionary synthesis of Karnataka Sangita and Bharatanatya treatises forms the intellectual bedrock of BMSSA.",
    accolades: ["Padma Shri Awardee", "Mahamahopadhyaya", "Eminent Musicologist", "Guiding Paramaguru"]
  },
  {
    name: "Vidwan Dr. R. S. Nandakumar",
    role: "Musical & Scholarly Legacy",
    theme: "Heritage of Mysuru Vaggeyakaras",
    designations: [
      "Academic Director of BMSS Academy",
      "HOD - Department of Music"
    ],
    image: "/images/dr-nandakumar.jpg",
    fallbackImage: "/images/Dr. NandaKumar.JPG",
    imagePosition: "center 18%",
    quote: "Music is both a sacred lineage of composers and an empirical science of sound connecting generations.",
    bio: "Eminent musician, scholar, and son of Padma Shri Dr. R. Sathyanarayana. Master of Mysuru vaggeyakara compositions and shastric treatises, upholding Karnataka's heritage globally.",
    accolades: [
      "Karnataka Kalashree",
      "Asthana Vidwan, Kanchi Peetham",
      "Shastra Kaustubha",
      "Sangeetha Kalavaridhi"
    ]
  }
];

const ADMISSION_STEPS = [
  { num: "01", title: "Google Form", desc: "Initial registration using the Academy admission link" },
  { num: "02", title: "Prepare Documents", desc: "Compile academic marks cards, degrees & certificates" },
  { num: "03", title: "UUCMS Application", desc: "Submit through the University portal (link shared post-registration)" },
  { num: "04", title: "BMSSA Verification", desc: "Academy reviews eligibility and document compliance" },
  { num: "05", title: "Submit 3 Sets", desc: "Submit 3 copies + originals (verified & returned; 2 to University)" },
  { num: "06", title: "Viva / Entrance Exam", desc: "Senior Exam holders in Music/Dance are EXEMPT" },
  { num: "07", title: "Admission & Enrolment", desc: "University merit announcement and batch enrolment" }
];

const REQUIRED_DOCUMENTS = [
  "S.S.L.C Marks card",
  "P.U.C Marks card",
  "Aadhaar Card showing full address",
  "U.G. Degree certificate (in any subject, full course completed and graduated)",
  "Course completion or provisional certificate, if U.G. Degree Certificate is not issued",
  "U.G. all semester marks cards (if any missing, online printout from university allowed)",
  "Karnataka Secondary Board Senior or Gandharva exam completed certificate (if unavailable, prequalification exam conducted)",
  "Caste / Category 1 certificate for eligible students",
  "Passport size photos — 5 copies",
  "Optional: P.G. degree certificate and all semester marks cards, if completed"
];

const ACTIVITIES = [
  {
    icon: Landmark,
    category: "PERFORMANCES",
    sealLeft: "✦ BMSSA SAMSKRIKA",
    sealRight: "ESTD. 2017",
    title: "Cultural Events & Sabha Concerts",
    desc: "Annual classical music and dance festivals, Tyagaraja & Purandara Dasa Aradhana celebrations, and prestigious sabha concert platforms across Karnataka."
  },
  {
    icon: BookOpen,
    category: "SCHOLARSHIP",
    sealLeft: "✦ INDOLOGY ARCHIVES",
    sealRight: "PUBLICATIONS",
    title: "Research & Matangamuni Publications",
    desc: "Academic preservation of rare musicological treatises, Sanskrit manuscripts, and authoritative publications on ancient Indian performing arts."
  },
  {
    icon: Sparkles,
    category: "WORKSHOPS",
    sealLeft: "✦ MASTERCLASSES",
    sealRight: "NATYASHASTRA",
    title: "Seminars & Residential Art Workshops",
    desc: "Intensive residential masterclasses in Natyashastra Karanas, Raga-Tana-Pallavi, and lecture demonstrations with eminent visiting vidwans."
  },
  {
    icon: Users,
    category: "COMMUNITY",
    sealLeft: "✦ SOCIAL HERITAGE",
    sealRight: "KARNATAKA",
    title: "Community Initiatives & Cultural Outreach",
    desc: "Youth cultural scholarships, social engagement, and grassroots arts education extending traditional Indian heritage into mainstream learning."
  }
];

const GALLERY_ITEMS = [
  {
    id: 1,
    title: "Master of Performing Arts — Bharatanatyam Stage Production",
    category: "dance",
    tag: "Bharatanatya Production",
    image: "/images/master_of_performing_arts.jpg"
  },
  {
    id: 2,
    title: "Bharatanatyam Recital — Classical Marga Posture",
    category: "dance",
    tag: "Bharatanatya Solo",
    image: "/images/solo-1.jpg",
    fallbackImage: "/images/solo 1.jpeg"
  },
  {
    id: 3,
    title: "Karnataka Sangita — Classical Vocal Ensemble & Presentation",
    category: "music",
    tag: "Karnataka Sangita",
    image: "/images/group_singing.jpg"
  },
  {
    id: 17,
    title: "Karnataka Sangita Vocal Group Abhyasa & Rehearsal",
    category: "music",
    tag: "Karnataka Sangita",
    image: "/images/group-singing-2.jpg",
    fallbackImage: "/images/group singing 2.jpg"
  },
  {
    id: 4,
    title: "Mahamahopadhyaya Dr. R. Sathyanarayana — Shastric Treatises & Musicology",
    category: "heritage",
    tag: "Scholarly Legacy",
    image: "/images/dr-satyanarayana-2.jpg",
    fallbackImage: "/images/Dr satyanarayana 2.JPG"
  },
  {
    id: 5,
    title: "Dr. R. S. Nandakumar with Guru Ranjana & Bharatanatyam Ensemble",
    category: "dance",
    tag: "Stage Ensemble",
    image: "/images/photo-3.jpg",
    fallbackImage: "/images/photo 3.jpg"
  },
  {
    id: 6,
    title: "Bharatanatyam Recital — Sculpturesque Karana Posture",
    category: "dance",
    tag: "Bharatanatya Solo",
    image: "/images/solo-2.jpg",
    fallbackImage: "/images/solo 2.jpeg"
  },
  {
    id: 7,
    title: "Bharatanatyam Live Sabha Performance",
    category: "dance",
    tag: "Bharatanatya Stage",
    image: "/images/solo-pic-3.png",
    fallbackImage: "/images/solo pic 3.png"
  },
  {
    id: 8,
    title: "Guru Vidushi Ranjana Nagaraj — Classical Natyashastra Abhinaya & Nritta",
    category: "dance",
    tag: "Faculty & Artists",
    image: "/images/ranjana-nagaraj.jpg",
    fallbackImage: "/images/Ranjana.jpeg"
  },
  {
    id: 9,
    title: "Nrtta Kashini & Academy Dance Hall Studio Rehearsal",
    category: "dance",
    tag: "Rehearsal Studio",
    image: "/images/photo-1.jpg",
    fallbackImage: "/images/photo 1.jpeg"
  },
  {
    id: 10,
    title: "Vidwan Dr. R. S. Nandakumar — Karnataka Music Concert Presentation",
    category: "music",
    tag: "Karnataka Sangita",
    image: "/images/dr-nandakumar.jpg",
    fallbackImage: "/images/Dr. NandaKumar.JPG"
  },
  {
    id: 11,
    title: "Mahamahopadhyaya Dr. R. Sathyanarayana — Revered Paramaguru",
    category: "heritage",
    tag: "Paramaguru",
    image: "/images/dr-satyanarayana-3.jpg",
    fallbackImage: "/images/Dr. satyanarayana 3.png"
  },
  {
    id: 12,
    title: "Academy Cultural Assembly & Gurukula Gathering",
    category: "heritage",
    tag: "Cultural Gathering",
    image: "/images/photo-2.jpg",
    fallbackImage: "/images/photo 2.jpeg"
  },
  {
    id: 13,
    title: "Dr. Ambika Shastry — Vocal Recital with Sacred Tanpura",
    category: "music",
    tag: "Karnataka Sangita",
    image: "/images/dr-ambika-shastry.jpg",
    fallbackImage: "/images/Dr.Ambika Shashtry.jpeg"
  },
  {
    id: 14,
    title: "Vidwan Dr. Srikantham Nagendra Shastry — Vocal Concert & Lineage",
    category: "music",
    tag: "Karnataka Sangita",
    image: "/images/dr-nagendra-shastry.jpg",
    fallbackImage: "/images/Dr.Nagendra Shastri.jpeg"
  },
  {
    id: 15,
    title: "Dr. R. Sathyanarayana — Archival Historical Portrait",
    category: "heritage",
    tag: "Archival History",
    image: "/images/dr-satyanarayana-pic.jpg",
    fallbackImage: "/images/Dr Satyanarayana pic.jpeg"
  },
  {
    id: 16,
    title: "Sri Anil Kumar Katti — Founder Trustee & Chairman",
    category: "heritage",
    tag: "Academy Leadership",
    image: "/images/anil-kumar-katti.jpg",
    fallbackImage: "/images/Anil kumar.jpeg"
  }
];

const FAQS = [
  {
    q: "What courses are offered?",
    a: "Master of Performing Arts — Karnataka Sangita and Master of Performing Arts — Bharatanatya."
  },
  {
    q: "Who is eligible to apply?",
    a: "Applicants must hold any Bachelor degree. General Category applicants require a minimum of 55% aggregate marks and Category applicants require a minimum of 50% aggregate marks."
  },
  {
    q: "Who is exempt from the entrance exam?",
    a: "Applicants who have passed the Senior Exam in Karnataka Sangita or Bharatanatya are exempt from the entrance exam."
  },
  {
    q: "When will admission dates be announced?",
    a: "Admission dates will be updated after the University publishes the official schedule."
  },
  {
    q: "How can I apply?",
    a: "Use the Apply for Admission button once the Academy's Google Form / application link is connected, or contact the Academy through WhatsApp at +91 89396 89737."
  },
  {
    q: "How many sets of documents need to be submitted?",
    a: "3 sets of copies are required along with originals for verification. 2 sets are sent to Kannada University, Hampi and 1 set is retained by the institution."
  }
];

/* ==========================================================================
   MAIN APPLICATION COMPONENT
   ========================================================================== */

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(0);
  const [galleryFilter, setGalleryFilter] = useState("all");
  const [galleryLimit, setGalleryLimit] = useState(10);
  const [lightboxItem, setLightboxItem] = useState(null);
  const [courseModal, setCourseModal] = useState(null);
  const [applyModalOpen, setApplyModalOpen] = useState(false);
  const [selectedProgramForApply, setSelectedProgramForApply] = useState("Master of Performing Arts — Karnataka Sangita");
  const [campaignMode, setCampaignMode] = useState(false);
  const [showDeptContacts, setShowDeptContacts] = useState(false);
  const [selectedFaculty, setSelectedFaculty] = useState(null);

  // Allow URL parameter (?ad=true or #ad) for direct digital ad traffic
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("ad") === "true" || params.get("campaign") === "true" || window.location.hash === "#ad") {
      setCampaignMode(true);
    }
  }, []);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    program: "Master of Performing Arts — Karnataka Sangita",
    seniorExam: "no",
    message: ""
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const handleApplyClick = (programTitle) => {
    if (programTitle) setSelectedProgramForApply(programTitle);
    setApplyModalOpen(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    // WhatsApp prefilled message sync
    const text = encodeURIComponent(
      `Hello BMSSA Admission Desk,\n\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email || 'N/A'}\nProgram: ${formData.program}\nSenior Exam Holder: ${formData.seniorExam === 'yes' ? 'Yes (Entrance Exempted)' : 'No'}\nMessage: ${formData.message || 'I would like to apply for MPA Admissions 2026-27.'}`
    );
    window.open(`https://wa.me/${ACADEMY_INFO.primaryPhoneRaw}?text=${text}`, "_blank");
  };

  const filteredGallery = galleryFilter === "all"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === galleryFilter);

  const visibleGallery = filteredGallery.slice(0, galleryLimit);

  return (
    <div className="site-wrap">
      {/* 1. TOP NOTICE & QUICK CONTACT BAR */}
      <div className="top-notice-bar">
        <div className="container top-notice-inner">
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span className="notice-pill">ADMISSIONS 2026-27 OPEN</span>
            <span>Master of Performing Arts (MPA) in Karnataka Sangita and Bharatanatya</span>
          </div>
          <div className="top-quick-contacts">
            <a href={`tel:${ACADEMY_INFO.primaryPhoneRaw}`}>
              <Phone size={13} /> {ACADEMY_INFO.primaryPhone}
            </a>
            <a
              href={`https://wa.me/${ACADEMY_INFO.primaryPhoneRaw}?text=${encodeURIComponent("Hello BMSSA, I would like to enquire about Admissions 2026-27")}`}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={13} /> WhatsApp Enquiry
            </a>
            <span style={{ opacity: 0.5 }}>|</span>
            <span style={{ fontSize: "0.75rem", color: "var(--gold-antique)" }}>
              {ACADEMY_INFO.affiliation}
            </span>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION */}
      <header className="site-header">
        <div className="container header-inner">
          <button className="brand-link" onClick={() => scrollTo("home")} aria-label="BMSSA Home">
            <img
              src="/images/logo-eng.png"
              alt="Bharateeya Matanga Samajik Samskrik Academy"
              className="brand-logo-img"
              width="58"
              height="58"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = "/images/logo eng.jpeg";
              }}
            />
            <div className="brand-text">
              <div className="brand-title">BMSSA</div>
              <span className="brand-sub">Bharateeya Matanga Samajik Samskrik Academy</span>
            </div>
          </button>

          <nav className={`nav-menu ${mobileMenuOpen ? "open" : ""}`}>
            <button className="nav-link" onClick={() => scrollTo("home")}>Home</button>
            <button className="nav-link" onClick={() => scrollTo("about")}>About</button>
            <button className="nav-link" onClick={() => scrollTo("programs")}>Courses</button>
            <button className="nav-link" onClick={() => scrollTo("faculty")}>Faculty</button>
            <button className="nav-link" onClick={() => scrollTo("activities")}>Activities</button>
            <button className="nav-link" onClick={() => scrollTo("gallery")}>Gallery</button>
            <button className="nav-link" onClick={() => scrollTo("admissions")}>Admissions</button>
            <button className="nav-link" onClick={() => scrollTo("faqs")}>FAQs</button>
            <button className="nav-link" onClick={() => scrollTo("contact")}>Contact</button>
          </nav>

          <div className="header-actions">
            <button
              className="btn btn-primary"
              onClick={() => handleApplyClick("Master of Performing Arts — Karnataka Sangita")}
            >
              Apply for Admission
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
            3. HERO SECTION — ORNAMENTAL INDIAN ARCH ARCHITECTURE
            Recreating the reference visual concept digitally with SVG & CSS
            ================================================================== */}
        <section id="home" className="hero-section">
          <div className="hero-container">
            {/* The Ornamental Deep Maroon Arch Frame */}
            <div className="arch-frame">
              {/* Pointed Indian Architectural Crown with Cascading Cusps (SVG) */}
              <div className="arch-crown-wrap">
                <svg
                  className="arch-crown-svg"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 900 240"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id="heroMaroonGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#78062B" />
                      <stop offset="30%" stopColor="#65001F" />
                      <stop offset="100%" stopColor="#500219" />
                    </linearGradient>
                  </defs>
                  {/* Pointed crown apex at (450, 16) with 6 cascading cusped lobes down each side */}
                  <path
                    d="M 450 16 C 442 32, 432 44, 422 52 A 27.9 27.9 0 0 0 384 76 A 35.1 35.1 0 0 0 336 106 A 42.3 42.3 0 0 0 278 142 A 49.6 49.6 0 0 0 210 184 A 53.8 53.8 0 0 0 134 226 A 52.8 52.8 0 0 0 50 240 L 850 240 A 52.8 52.8 0 0 0 766 226 A 53.8 53.8 0 0 0 690 184 A 49.6 49.6 0 0 0 622 142 A 42.3 42.3 0 0 0 564 106 A 35.1 35.1 0 0 0 516 76 A 27.9 27.9 0 0 0 478 52 C 468 44, 458 32, 450 16 Z"
                    fill="url(#heroMaroonGrad)"
                    stroke="#C8A45D"
                    strokeWidth="2.5"
                  />
                  {/* Inner gold decorative line */}
                  <path
                    d="M 450 16 C 442 32, 432 44, 422 52 A 27.9 27.9 0 0 0 384 76 A 35.1 35.1 0 0 0 336 106 A 42.3 42.3 0 0 0 278 142 A 49.6 49.6 0 0 0 210 184 A 53.8 53.8 0 0 0 134 226 A 52.8 52.8 0 0 0 50 240 L 850 240 A 52.8 52.8 0 0 0 766 226 A 53.8 53.8 0 0 0 690 184 A 49.6 49.6 0 0 0 622 142 A 42.3 42.3 0 0 0 564 106 A 35.1 35.1 0 0 0 516 76 A 27.9 27.9 0 0 0 478 52 C 468 44, 458 32, 450 16 Z"
                    fill="none"
                    stroke="#E6CCA0"
                    strokeWidth="1"
                    strokeOpacity="0.4"
                    transform="translate(450, 160) scale(0.96) translate(-450, -160)"
                  />
                  {/* Auspicious Kalasha Apex Finial */}
                  <g transform="translate(450, 12)">
                    <circle cx="0" cy="0" r="3.5" fill="#FFE4A3" />
                    <polygon points="0,-8 3,-2 0,0 -3,-2" fill="#C8A45D" />
                  </g>
                </svg>
              </div>

              {/* Side Bracket Notches from Reference */}
              <div className="arch-bracket-left"></div>
              <div className="arch-bracket-right"></div>

              {/* Inner Decorative Filigree Line */}
              <div className="arch-inner-border"></div>
              <div className="corner-flourish tl"></div>
              <div className="corner-flourish tr"></div>
              <div className="corner-flourish bl"></div>
              <div className="corner-flourish br"></div>

              {/* Content Inside Maroon Arch (Ivory Typography) */}
              <div className="arch-content">
                {/* Eyebrow strictly per PDF */}
                <div className="hero-eyebrow">
                  <span>✦</span> CULTURE • EDUCATION • TRADITION <span>✦</span>
                </div>

                {/* Headline strictly per PDF */}
                <h1 className="hero-headline">
                  Preserving tradition.
                  <em>Inspiring the next generation.</em>
                </h1>

                {/* Description strictly per PDF */}
                <p className="hero-desc">
                  Bharateeya Matanga Samajik Samskrik Academy brings together Indian music,
                  dance, scholarship and cultural activities in a contemporary learning environment.
                </p>

                {/* Recognition Badge strictly per PDF */}
                <div>
                  <div className="hero-recognition">
                    <Award size={18} />
                    <span>Recognised by Kannada University, Hampi</span>
                  </div>
                </div>

                {/* Admission Status */}
                <div className="hero-batch-wrapper">
                  <div className="hero-batch-pill">
                    <span className="pulse-dot"></span>
                    <div className="hero-batch-text">
                      <span className="hero-batch-line hero-batch-line-primary">
                        Admissions 2026-27 OPEN for Master of Performing Arts (MPA)
                      </span>
                      <span className="hero-batch-line hero-batch-line-sub">
                        in Karnataka Sangita and Bharatanatya
                      </span>
                    </div>
                  </div>
                </div>

                {/* Hero CTAs strictly per PDF */}
                <div className="hero-actions">
                  <button
                    className="btn btn-gold"
                    onClick={() => scrollTo("programs")}
                  >
                    Explore Admissions <ArrowRight size={17} />
                  </button>
                  <button
                    className="btn btn-outline-gold"
                    onClick={() => scrollTo("about")}
                  >
                    Discover Our Academy
                  </button>
                </div>

                {/* Direct Phone / WhatsApp link */}
                <div className="hero-contact-strip">
                  <a href={`tel:${ACADEMY_INFO.primaryPhoneRaw}`}>
                    <Phone size={14} /> Admissions Desk: {ACADEMY_INFO.primaryPhone}
                  </a>
                  <a
                    href={`https://wa.me/${ACADEMY_INFO.primaryPhoneRaw}?text=${encodeURIComponent("Hello BMSSA, I would like to enquire about Admissions 2026-27")}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MessageCircle size={14} /> WhatsApp Assistance
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================
            4. QUICK HIGHLIGHTS / TRUST STRIP
            Strictly per PDF: 2017, 02 Core Programs, 02 Years MPA, 04 Semesters
            ================================================================== */}
        <section className="trust-section">
          <div className="container trust-grid">
            <div className="trust-item">
              <span className="trust-value">2017</span>
              <span className="trust-label">Academy Established</span>
            </div>
            <div className="trust-item">
              <span className="trust-value">02</span>
              <span className="trust-label">Core Performing Arts Programs</span>
            </div>
            <div className="trust-item">
              <span className="trust-value">02 Years</span>
              <span className="trust-label">Master of Performing Arts</span>
            </div>
            <div className="trust-item">
              <span className="trust-value">04 Semesters</span>
              <span className="trust-label">Academic Pathway</span>
            </div>
          </div>
        </section>

        {/* ==================================================================
            5. ACADEMIC PROGRAMS SECTION
            Strictly the two confirmed MPA programs per PDF
            ================================================================== */}
        <section id="programs" className="programs-section">
          <div className="container">
            <div className="section-head-center">
              <div className="kicker">Academic Programs</div>
              <h2 className="section-title">
                Learn with <em>depth & purpose</em>
              </h2>
              <div className="gold-divider">
                <span>✦</span>
              </div>
              <p className="section-desc" style={{ margin: "0 auto" }}>
                Rigorous Master of Performing Arts degrees combining traditional gurukula-level
                practical immersion with formal university research scholarship.
              </p>
            </div>

            <div className="programs-grid">
              {PROGRAMS.map((prog) => (
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
                        <span className="meta-label">Duration</span>
                        <span className="meta-val">{prog.duration}</span>
                      </div>
                      <div className="meta-item">
                        <span className="meta-label">Semesters</span>
                        <span className="meta-val">{prog.semesters}</span>
                      </div>
                      <div className="meta-item">
                        <span className="meta-label">Admission Batch</span>
                        <span className="meta-val">{prog.admissionBatch}</span>
                      </div>
                      <div className="meta-item">
                        <span className="meta-label">Eligibility</span>
                        <span className="meta-val">Any Bachelor Degree</span>
                      </div>
                    </div>

                    {/* Entrance Exemption Note strictly per PDF */}
                    <div className="exemption-box">
                      <ShieldCheck size={20} />
                      <div>
                        <strong>Entrance Exemption:</strong> {prog.exemption}
                      </div>
                    </div>

                    <div className="program-card-actions">
                      <button
                        className="btn btn-outline-maroon"
                        onClick={() => setCourseModal(prog)}
                      >
                        View Course Details
                      </button>
                      <button
                        className="btn btn-primary"
                        onClick={() => handleApplyClick(prog.title)}
                      >
                        Apply for Admission <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ==================================================================
            6. ABOUT SECTION
            Strictly per PDF: Founded 2017 Humnabad, Mission & Focus Areas
            ================================================================== */}
        <section id="about" className="about-section">
          <div className="container about-grid">
            <div className="about-left-col">
              <div className="about-image-stack">
                <div className="about-main-image">
                  <img
                    src="/images/academy-campus.jpg"
                    alt="Bharateeya Matanga Academy Campus and Cultural Courtyard"
                    loading="lazy"
                  />
                </div>
                <div className="about-floating-card">
                  <strong>Est. 2017</strong>
                  <span>Humnabad, Bidar District & Bengaluru, Karnataka</span>
                </div>
              </div>
              <p className="about-image-subtext">
                The Academy's undertakes cultural programs, support for education, research, publications, music, dance and broader cultural initiatives. Under the scholarly vision of its founders and gurus, BMSSA stands as a revered bridge connecting ancient shastric wisdom with contemporary university education.
              </p>
            </div>

            <div className="about-content">
              <div className="kicker">Our Academy</div>
              <h2 className="section-title">
                A sacred space for <em>Indian culture</em>
              </h2>
              <p className="lead">
                Founded in 2017 in Humnabad and with a centre in Bengaluru, the Academy describes its mission around promotion of Bharatiya culture and Indian classical performing art forms – Music & Dance, with programs extending across the country.
              </p>
              <p>
                Our approach to education in Indian classical music and dance is founded on a time-tested principle: a deep understanding of theory (Lakṣaṇa) is essential for a refined and authentic performance (Lakṣya).
              </p>

              <div className="focus-areas-list">
                <div className="focus-item">
                  <CheckCircle2 size={18} />
                  <span>Master of Performing Arts in Music & Dance</span>
                </div>
                <div className="focus-item">
                  <CheckCircle2 size={18} />
                  <span>Cultural and social programs</span>
                </div>
                <div className="focus-item">
                  <CheckCircle2 size={18} />
                  <span>Research and publications</span>
                </div>
                <div className="focus-item">
                  <CheckCircle2 size={18} />
                  <span>Performances, workshops & seminars</span>
                </div>
              </div>

              <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
                <button className="btn btn-primary" onClick={() => scrollTo("activities")}>
                  Explore Our Activities <ArrowRight size={17} />
                </button>
                <button className="btn btn-outline-maroon" onClick={() => scrollTo("legacy")}>
                  Our Inspiration & Legacy
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================
            7. OUR INSPIRATION & LEGACY
            Strictly per PDF: Dr. R. Sathyanarayana & Dr. R. S. Nandakumar
            ================================================================== */}
        <section id="legacy" className="legacy-section">
          <div className="container legacy-inner">
            <div className="section-head-center">
              <span className="kicker kicker-gold">Revered Mentors</span>
              <h2 className="section-title" style={{ color: "#ffffff" }}>
                Our Inspiration & Scholarly Legacy
              </h2>
              <div className="gold-divider">
                <span>✦</span>
              </div>
              <p className="section-desc" style={{ color: "#E0D2D5", margin: "0 auto" }}>
                Honoring the great musical, scholarly and spiritual personalities whose profound
                treatises and lifelong dedication illuminate BMSSA's academic journey.
              </p>
            </div>

            <div className="legacy-grid">
              {LEGACY.map((pers) => (
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

        {/* ==================================================================
            8. FACULTY & LEADERSHIP SECTION
            Strictly per PDF: Academic Leadership + Management
            ================================================================== */}
        <section id="faculty" className="faculty-section">
          <div className="container">
            <div className="section-head-center">
              <div className="kicker">Distinguished Mentorship</div>
              <h2 className="section-title">
                Meet the <em>Faculty & Leadership</em>
              </h2>
              <div className="gold-divider">
                <span>✦</span>
              </div>
              <p className="section-desc" style={{ margin: "0 auto" }}>
                Learn under acclaimed concert performers, renowned researchers, and devoted cultural
                custodians recognized by state and national institutions.
              </p>
            </div>

            {/* Academic Leadership */}
            <div className="faculty-category-title">
              <span>Academic Leadership</span>
            </div>

            <div className="faculty-stamp-grid">
              {FACULTY.academic.map((f, idx) => (
                <div
                  key={f.name}
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
                  <div className="stamp-card-top-tag">
                    <span>✦ {f.department} ✦</span>
                  </div>

                  <PostageStamp
                    id={`acad-${idx}`}
                    name={f.name}
                    department={f.department}
                    image={f.image}
                  />

                  <div className="stamp-card-info">
                    <h3 className="stamp-faculty-name">{f.name}</h3>
                    <span className="stamp-faculty-designation">{f.designation}</span>
                    <div className="stamp-click-hint">
                      <span>View Profile & Details</span> <ArrowRight size={13} />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Management & Governance */}
            <div className="faculty-category-title" style={{ marginTop: "55px" }}>
              <span>Management & Administration</span>
            </div>

            <div className="faculty-stamp-grid">
              {FACULTY.management.map((m, idx) => (
                <div
                  key={m.name}
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
                  <div className="stamp-card-top-tag">
                    <span>✦ {m.department} ✦</span>
                  </div>

                  <PostageStamp
                    id={`mgmt-${idx}`}
                    name={m.name}
                    department={m.department}
                    image={m.image}
                  />

                  <div className="stamp-card-info">
                    <h3 className="stamp-faculty-name">{m.name}</h3>
                    <span className="stamp-faculty-designation">{m.designation}</span>
                    <div className="stamp-click-hint">
                      <span>View Profile & Details</span> <ArrowRight size={13} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================================================================
            9. ACTIVITIES SECTION (BEYOND THE CLASSROOM)
            Strictly per PDF: 7 activity categories
            ================================================================== */}
        <section id="activities" className="activities-section">
          <div className="container">
            <div className="section-head-center">
              <div className="kicker">Beyond the Classroom</div>
              <h2 className="section-title">
                Culture is meant to be <em>experienced</em>
              </h2>
              <div className="gold-divider">
                <span>✦</span>
              </div>
              <p className="section-desc" style={{ margin: "0 auto" }}>
                The Academy's public profile includes cultural and social programs, festivals,
                performances, research, publications and educational initiatives.
              </p>
            </div>

            <div className="activities-grid">
              {ACTIVITIES.map((act) => {
                const IconComponent = act.icon;
                return (
                  <div key={act.title} className="stamp-activity-card">
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

            {/* Featured Visual Strip */}
            <div className="activity-feature-strip">
              <div className="feature-tile">
                <img
                  src="/images/concert-performance.jpg"
                  alt="Annual Sabha Concert Ensemble Performance"
                  loading="lazy"
                />
                <div className="feature-tile-overlay">
                  <h4>Grand Classical Sabha Concerts</h4>
                  <p>Students and faculty performing with seasoned accompanists on prestigious stages.</p>
                </div>
              </div>
              <div className="feature-tile">
                <img
                  src="/images/arts-workshop.jpg"
                  alt="Interactive Shastric Musicology Workshop"
                  loading="lazy"
                />
                <div className="feature-tile-overlay">
                  <h4>Residential Shastric Workshops</h4>
                  <p>In-depth study of ancient palm-leaf manuscripts and Natyashastra practical demonstrations.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================
            10. GALLERY SECTION
            Editorial-style filterable gallery
            ================================================================== */}
        <section id="gallery" className="gallery-section">
          <div className="container">
            <div className="section-head-center">
              <div className="kicker">Moments of Tradition</div>
              <h2 className="section-title">
                Moments of <em>learning & performance</em>
              </h2>
              <div className="gold-divider">
                <span>✦</span>
              </div>
              <p className="section-desc" style={{ margin: "0 auto" }}>
                Approved glimpses from the Academy's classrooms, rehearsals, scholarly archives, and cultural stages.
              </p>
            </div>

            <div className="gallery-filters">
              {[
                ["all", "All Moments"],
                ["dance", "Bharatanatya"],
                ["music", "Karnataka Sangita"],
                ["heritage", "Mentors & Academy"]
              ].map(([key, label]) => (
                <button
                  key={key}
                  className={`filter-btn ${galleryFilter === key ? "active" : ""}`}
                  onClick={() => {
                    setGalleryFilter(key);
                    setGalleryLimit(10);
                  }}
                >
                  {label}
                </button>
              ))}
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
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    onError={(e) => {
                      if (item.fallbackImage && e.currentTarget.src !== item.fallbackImage) {
                        e.currentTarget.src = item.fallbackImage;
                      }
                    }}
                  />
                  <div className="gallery-masonry-overlay">
                    <span className="gallery-masonry-tag">{item.tag}</span>
                    <h4 className="gallery-masonry-title">{item.title}</h4>
                  </div>
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
                      Show More Pictures ({filteredGallery.length - galleryLimit} more)
                      <ChevronDown size={18} />
                    </>
                  ) : (
                    <>
                      Show Less
                      <ChevronUp size={18} />
                    </>
                  )}
                </button>
              </div>
            )}
          </div>
        </section>

        {/* ==================================================================
            11. ADMISSIONS PROCESS & ELIGIBILITY
            Strictly per PDF: 7 steps + 10 required documents + university notes
            ================================================================== */}
        <section id="admissions" className="admissions-section">
          <div className="container">
            <div className="section-head-center">
              <div className="kicker">Enrolment Pathway</div>
              <h2 className="section-title">
                Admission Process & <em>Guidelines</em>
              </h2>
              <div className="gold-divider">
                <span>✦</span>
              </div>
              <p className="section-desc" style={{ margin: "0 auto" }}>
                Admissions 2026-27 for Master of Performing Arts in Karnataka Sangita and Bharatanatya.
                Follow the 7-step process outlined below.
              </p>
            </div>

            {/* 7-Step Visual Timeline */}
            <div className="timeline-track">
              {ADMISSION_STEPS.map((step) => (
                <div key={step.num} className="timeline-step">
                  <div className="step-num-bubble">{step.num}</div>
                  <div className="step-title">{step.title}</div>
                  <div className="step-desc">{step.desc}</div>
                </div>
              ))}
            </div>

            {/* Documents Checklist & Sidebar */}
            <div className="admissions-docs-grid">
              <div className="docs-checklist-card">
                <h3>Required Documents for Postgraduate Admission</h3>
                <div className="doc-items-list">
                  {REQUIRED_DOCUMENTS.map((doc, idx) => (
                    <div key={idx} className="doc-item">
                      <CheckCircle2 size={18} />
                      <span>{doc}</span>
                    </div>
                  ))}
                </div>

                <div className="doc-note-box">
                  <strong>Document Submission Note:</strong> 3 sets of copies are required along with originals for verification. 2 sets are sent to Kannada University, Hampi and 1 set is retained by the institution.
                </div>
              </div>

              <div className="admissions-sidebar">
                <div className="sidebar-info-card">
                  <h4>Eligibility Summary</h4>
                  <table className="eligibility-table">
                    <tbody>
                      <tr>
                        <td>Qualifying Degree</td>
                        <td>Any Bachelor Degree</td>
                      </tr>
                      <tr>
                        <td>General Category</td>
                        <td>Minimum 55% aggregate marks</td>
                      </tr>
                      <tr>
                        <td>Category Students</td>
                        <td>Minimum 50% aggregate marks</td>
                      </tr>
                      <tr>
                        <td>Senior Exam Holders</td>
                        <td>Entrance Exam Exempted</td>
                      </tr>
                    </tbody>
                  </table>

                  <div className="exemption-box" style={{ margin: "16px 0 0" }}>
                    <ShieldCheck size={20} />
                    <div style={{ fontSize: "0.82rem" }}>
                      Applicants who have passed the Senior Exam in Karnataka Sangita or Bharatanatya are exempt from the entrance exam.
                    </div>
                  </div>
                </div>

                <div className="sidebar-info-card" style={{ background: "var(--cream-card)" }}>
                  <h4>Official University Schedule</h4>
                  <p style={{ fontSize: "0.88rem", color: "var(--ink-muted)", marginBottom: "14px" }}>
                    Admission opening and closing dates, entrance exam / viva schedule, and class commencement dates will be updated after the University notification is published.
                  </p>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <button
                      className="btn btn-primary"
                      style={{ flex: 1 }}
                      onClick={() => handleApplyClick("Master of Performing Arts — Karnataka Sangita")}
                    >
                      Pre-Register Now
                    </button>
                    <a
                      href={`https://wa.me/${ACADEMY_INFO.primaryPhoneRaw}?text=${encodeURIComponent("Hello BMSSA, please notify me when the 2026-27 admission dates are published.")}`}
                      className="btn btn-whatsapp"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <MessageCircle size={16} /> Get Updates
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* ==================================================================
            13. FREQUENTLY ASKED QUESTIONS (FAQ)
            Strictly per PDF: Exact answers
            ================================================================== */}
        <section id="faqs" className="faq-section">
          <div className="container faq-layout">
            <div>
              <div className="kicker">Got Questions?</div>
              <h2 className="section-title">
                Frequently Asked <em>Questions</em>
              </h2>
              <div className="gold-divider" style={{ margin: "1rem 0 2rem" }}>
                <span>✦</span>
              </div>
              <p className="section-desc">
                Everything you need to know regarding MPA program eligibility, entrance exam exemptions,
                and application procedures verified directly with BMSSA guidelines.
              </p>
              <div style={{ marginTop: "28px" }}>
                <a
                  href={`https://wa.me/${ACADEMY_INFO.primaryPhoneRaw}?text=${encodeURIComponent("Hello BMSSA, I have a specific question regarding admission eligibility.")}`}
                  className="btn btn-outline-maroon"
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle size={16} /> Have another question? WhatsApp Us
                </a>
              </div>
            </div>

            <div className="faq-accordion-list">
              {FAQS.map((faq, index) => {
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

        {/* ==================================================================
            14. CONTACT SECTION & INTERACTIVE ENQUIRY FORM
            Strictly per PDF: Humnabad, Bengaluru, Phone, Email, Forms
            ================================================================== */}
        <section id="contact" className="contact-section">
          <div className="container contact-grid">
            <div className="contact-info-card">
              <div>
                <div className="kicker">Reach Out</div>
                <h2 className="section-title">
                  Let's connect & <em>learn together</em>
                </h2>
                <div className="gold-divider" style={{ margin: "1rem 0 1.5rem" }}>
                  <span>✦</span>
                </div>
                <p className="section-desc">
                  We welcome prospective students, scholars, and patrons of classical Indian arts.
                  Connect with the Academy administration for admissions, syllabus overviews, and campus visits.
                </p>
              </div>

              <div className="contact-detail-row">
                <div className="contact-icon-bubble">
                  <Phone size={20} />
                </div>
                <div className="contact-detail-text">
                  <small>Primary Admission Phone & WhatsApp</small>
                  <strong>{ACADEMY_INFO.primaryPhone}</strong>
                  <p>Admissions helpline & instant WhatsApp responses</p>
                </div>
              </div>

              <div className="contact-detail-row">
                <div className="contact-icon-bubble">
                  <Mail size={20} />
                </div>
                <div className="contact-detail-text">
                  <small>Academy Official Email</small>
                  <strong>{ACADEMY_INFO.email}</strong>
                  <p>Brochure inquiries & formal university correspondences</p>
                </div>
              </div>

              <div className="contact-detail-row">
                <div className="contact-icon-bubble">
                  <MapPin size={20} />
                </div>
                <div className="contact-detail-text">
                  <small>Academy Locations</small>
                  <strong>Humnabad, Bidar District & Bengaluru, Karnataka</strong>
                  <p>Main Campus & Administrative Liaison Center</p>
                </div>
              </div>

              {/* Department Contacts Toggle */}
              <div className="dept-contacts-drawer">
                <div
                  style={{ display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer" }}
                  onClick={() => setShowDeptContacts(!showDeptContacts)}
                >
                  <h4>Department-Specific Contacts</h4>
                  <ChevronDown size={18} style={{ transform: showDeptContacts ? "rotate(180deg)" : "none", transition: "0.2s" }} />
                </div>
                {showDeptContacts && (
                  <div style={{ marginTop: "12px" }}>
                    <div className="dept-row">
                      <span>Dr. Ambika Shastry (HOD, Music Dept)</span>
                      <a href="tel:+919980513526">+91 99805 13526</a>
                    </div>
                    <div className="dept-row">
                      <span>Vidushi. Ranjana Nagaraj (HOD, Dance Dept)</span>
                      <a href="tel:+919901927272">+91 99019 27272</a>
                    </div>
                    <div className="dept-row">
                      <span>Shri Santhosh Prasad (Executive Admin)</span>
                      <a href="tel:+919886252375">+91 98862 52375</a>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-wrap">
              <h3>Send an Admission Enquiry</h3>
              <p>Fill out your details below. Our admissions desk will promptly connect with you.</p>

              {formSubmitted ? (
                <div className="form-success-banner">
                  <h4 style={{ marginBottom: "6px" }}>✓ Thank You! Enquiry Submitted.</h4>
                  <p>
                    Your enquiry for <strong>{formData.program}</strong> has been received.
                    A pre-filled WhatsApp conversation has also been prepared for your convenience.
                  </p>
                  <button
                    className="btn btn-outline-maroon"
                    style={{ marginTop: "14px" }}
                    onClick={() => setFormSubmitted(false)}
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit}>
                  <div className="form-group">
                    <label>Your Full Name *</label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      placeholder="e.g. Smt. Ananya Rao"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label>Phone Number (WhatsApp) *</label>
                    <input
                      type="tel"
                      required
                      className="form-control"
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label>Email Address</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="e.g. ananya@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label>Select Program of Interest *</label>
                    <select
                      className="form-control"
                      value={formData.program}
                      onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                    >
                      <option value="Master of Performing Arts — Karnataka Sangita">
                        Master of Performing Arts — Karnataka Sangita
                      </option>
                      <option value="Master of Performing Arts — Bharatanatya">
                        Master of Performing Arts — Bharatanatya
                      </option>
                      <option value="General Academy & Admission Enquiry">
                        General Academy & Cultural Activities Enquiry
                      </option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Have you passed the Senior Exam in Music / Dance?</label>
                    <select
                      className="form-control"
                      value={formData.seniorExam}
                      onChange={(e) => setFormData({ ...formData, seniorExam: e.target.value })}
                    >
                      <option value="yes">Yes (Entrance Exam Exempted)</option>
                      <option value="no">No – Have not completed Senior Exam</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Your Message or Query</label>
                    <textarea
                      rows={3}
                      className="form-control"
                      placeholder="Ask about syllabus, document verification, or admission timelines..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ width: "100%", marginTop: "10px" }}>
                    Send Enquiry via WhatsApp Desk <Send size={16} />
                  </button>
                  <small style={{ display: "block", textAlign: "center", color: "var(--ink-light)", marginTop: "10px" }}>
                    🔒 Your information is held confidential for Academy admission purposes only.
                  </small>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* ==================================================================
          15. TRADITIONAL RICH FOOTER
          Strictly per PDF: BMSSA, Explore, Connect, Social, Copyright
          ================================================================== */}
      <footer className="site-footer">
        <div className="container footer-inner">
          <div className="footer-grid">
            <div className="footer-brand">
              <h3>BMSSA</h3>
              <p>
                Bharateeya Matanga Samajik Samskrik Academy brings together Indian music, dance,
                scholarship and cultural activities in a contemporary learning environment.
              </p>
              <div className="footer-affiliation">
                <Award size={16} />
                <span>Recognised by Kannada University, Hampi</span>
              </div>
              <div className="footer-social-row">
                <a
                  href={ACADEMY_INFO.socials.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-social-btn"
                  title="BMSSA on Facebook"
                  aria-label="Facebook"
                >
                  f
                </a>
                <a
                  href={ACADEMY_INFO.socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-social-btn"
                  title="BMSSA on Instagram (@bmssacademy)"
                  aria-label="Instagram"
                >
                  📷
                </a>
              </div>
            </div>

            <div className="footer-col">
              <h4>Explore</h4>
              <ul className="footer-links">
                <li><button onClick={() => scrollTo("home")}>Home</button></li>
                <li><button onClick={() => scrollTo("about")}>About Academy</button></li>
                <li><button onClick={() => scrollTo("programs")}>MPA Programs</button></li>
                <li><button onClick={() => scrollTo("legacy")}>Inspiration & Legacy</button></li>
                <li><button onClick={() => scrollTo("faculty")}>Faculty Leadership</button></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Connect</h4>
              <ul className="footer-links">
                <li><button onClick={() => scrollTo("admissions")}>Admissions 2026-27</button></li>
                <li><button onClick={() => scrollTo("activities")}>Cultural Activities</button></li>
                <li><button onClick={() => scrollTo("gallery")}>Editorial Gallery</button></li>
                <li><button onClick={() => scrollTo("faqs")}>Admissions FAQ</button></li>
                <li><button onClick={() => scrollTo("contact")}>Contact & Location</button></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Direct Inquiries</h4>
              <p style={{ fontSize: "0.85rem", color: "#D2C0C3", marginBottom: "12px" }}>
                Primary phone & WhatsApp contact:
              </p>
              <a
                href={`tel:${ACADEMY_INFO.primaryPhoneRaw}`}
                style={{ display: "block", color: "var(--gold-light)", fontWeight: 700, marginBottom: "8px" }}
              >
                {ACADEMY_INFO.primaryPhone}
              </a>
              <a
                href={`mailto:${ACADEMY_INFO.email}`}
                style={{ display: "block", color: "#E0D2D5", fontSize: "0.85rem" }}
              >
                {ACADEMY_INFO.email}
              </a>
            </div>
          </div>

          <div className="footer-bottom-bar">
            <div>
              © 2026 Bharateeya Matanga Samajik Samskrik Academy. All rights reserved.
            </div>
            <div>
              Website Content & Handoff V2 | KAYAKA STUDIOS | Humnabad & Bengaluru
            </div>
          </div>
        </div>
      </footer>

      {/* ==================================================================
          16. FLOATING ACTION DOCK (Sticky WhatsApp & Apply)
          ================================================================== */}
      <aside className="floating-actions-dock" aria-label="Quick Actions">
        <a
          href={`https://wa.me/${ACADEMY_INFO.primaryPhoneRaw}?text=${encodeURIComponent("Hello BMSSA, I would like to enquire about Admissions 2026-27.")}`}
          className="floating-btn-wa"
          target="_blank"
          rel="noreferrer"
          title="Chat with BMSSA Admissions Desk on WhatsApp"
          aria-label="WhatsApp Enquiry"
        >
          <MessageCircle size={24} />
        </a>
        <button
          className="btn btn-primary"
          style={{ padding: "8px 18px", fontSize: "0.85rem" }}
          onClick={() => handleApplyClick("Master of Performing Arts — Karnataka Sangita")}
        >
          Apply 2026-27
        </button>
      </aside>

      {/* ==================================================================
          17. COURSE DETAILS MODAL
          ================================================================== */}
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
                Course Overview
              </h4>
              <p style={{ color: "var(--ink-muted)", fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "20px" }}>
                {courseModal.overview}
              </p>

              <div className="program-meta-list" style={{ marginBottom: "22px" }}>
                <div className="meta-item">
                  <span className="meta-label">Duration & Semesters</span>
                  <span className="meta-val">{courseModal.duration} ({courseModal.semesters})</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Admission Batch</span>
                  <span className="meta-val">{courseModal.admissionBatch}</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">General Eligibility</span>
                  <span className="meta-val">Min. {courseModal.generalPercent}</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Category Eligibility</span>
                  <span className="meta-val">Min. {courseModal.categoryPercent}</span>
                </div>
              </div>

              <div className="exemption-box">
                <ShieldCheck size={20} />
                <div>
                  <strong>Entrance Exam Exemption:</strong> {courseModal.exemption}
                </div>
              </div>

              <h4 style={{ fontFamily: "var(--font-serif)", fontSize: "1.2rem", color: "var(--maroon-darkest)", margin: "20px 0 10px" }}>
                Curriculum
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
                  Apply for This Program <ArrowRight size={16} />
                </button>
                <a
                  href={`https://wa.me/${ACADEMY_INFO.primaryPhoneRaw}?text=${encodeURIComponent(`Hello BMSSA, I would like more details about ${courseModal.title}.`)}`}
                  className="btn btn-whatsapp"
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle size={16} /> WhatsApp Inquiry
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==================================================================
          18. PRE-REGISTRATION / ADMISSION MODAL
          ================================================================== */}
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
                Admissions 2026-27
              </div>
              <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.75rem", margin: "6px 0 8px" }}>
                Apply for Admission MPA course
              </h3>
              <p style={{ color: "#E8D5D8", fontSize: "0.88rem" }}>
                Recognised by Kannada University, Hampi. Submit your preliminary registration below.
              </p>
            </div>

            <div style={{ padding: "26px" }}>
              <div style={{ background: "var(--ivory-base)", border: "1px solid var(--cream-border)", padding: "14px", borderRadius: "8px", marginBottom: "20px", fontSize: "0.82rem", color: "var(--ink-muted)" }}>
                <strong>Note:</strong> Please submit this form for pre-registration and BMSS admin team will contact you and take you through further admission process.
              </div>

              <form onSubmit={handleFormSubmit}>
                <div className="form-group">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    required
                    className="form-control"
                    placeholder="Candidate full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label>Phone / WhatsApp Number *</label>
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
                  <label>Program *</label>
                  <select
                    className="form-control"
                    value={selectedProgramForApply}
                    onChange={(e) => setSelectedProgramForApply(e.target.value)}
                  >
                    <option value="Master of Performing Arts — Karnataka Sangita">
                      Master of Performing Arts — Karnataka Sangita
                    </option>
                    <option value="Master of Performing Arts — Bharatanatya">
                      Master of Performing Arts — Bharatanatya
                    </option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Senior Exam Holder (Exempt from Entrance)?</label>
                  <select
                    className="form-control"
                    value={formData.seniorExam}
                    onChange={(e) => setFormData({ ...formData, seniorExam: e.target.value })}
                  >
                    <option value="yes">Yes — Passed Senior Exam (Entrance Exempted)</option>
                    <option value="no">No – Have not completed Senior Exam</option>
                  </select>
                </div>

                <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
                  <button type="submit" className="btn btn-primary" style={{ flex: 1 }}>
                    Submit Pre-Registration <ArrowRight size={16} />
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-maroon"
                    onClick={() => setApplyModalOpen(false)}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* ==================================================================
          19. DIGITAL MARKETING AD LANDING VIEW (PDF Section 15)
          Compact, mobile-optimized high-converting landing modal
          ================================================================== */}
      {campaignMode && (
        <div className="campaign-modal-backdrop" onClick={() => setCampaignMode(false)}>
          <div className="campaign-modal-container" onClick={(e) => e.stopPropagation()}>
            <div className="campaign-modal-header">
              <div>
                <span className="notice-pill">DIGITAL CAMPAIGN VIEW</span>
                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.6rem", color: "#fff", marginTop: "4px" }}>
                  BMSSA Admissions 2026-27
                </h3>
                <small style={{ color: "var(--gold-light)" }}>
                  Recognised by Kannada University, Hampi
                </small>
              </div>
              <button
                className="modal-close-btn"
                onClick={() => setCampaignMode(false)}
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>

            <div className="campaign-modal-body">
              <div style={{ textAlign: "center", marginBottom: "24px" }}>
                <h4 style={{ fontFamily: "var(--font-serif)", fontSize: "1.5rem", color: "var(--maroon-darkest)" }}>
                  Begin Your Journey in Indian Performing Arts
                </h4>
                <p style={{ fontSize: "0.9rem", color: "var(--ink-muted)", marginTop: "4px" }}>
                  2 Years / 4 Semesters Academic Master's Pathways in Karnataka Sangita & Bharatanatya
                </p>
              </div>

              {/* 2 Program Cards Compact */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "22px" }}>
                <div style={{ background: "#fff", border: "1px solid var(--cream-border)", borderRadius: "10px", padding: "16px" }}>
                  <span className="program-tag" style={{ position: "static", display: "inline-block", marginBottom: "8px" }}>Music</span>
                  <h5 style={{ fontFamily: "var(--font-serif)", fontSize: "1.2rem", color: "var(--maroon-darkest)" }}>
                    MPA Karnataka Sangita
                  </h5>
                  <p style={{ fontSize: "0.8rem", color: "var(--ink-muted)", margin: "6px 0 10px" }}>
                    2 Yrs / 4 Sems • Head: Dr. Ambika Shastry
                  </p>
                  <button
                    className="btn btn-outline-maroon"
                    style={{ width: "100%", padding: "6px 10px", fontSize: "0.75rem" }}
                    onClick={() => {
                      setCampaignMode(false);
                      handleApplyClick("Master of Performing Arts — Karnataka Sangita");
                    }}
                  >
                    Apply Now
                  </button>
                </div>

                <div style={{ background: "#fff", border: "1px solid var(--cream-border)", borderRadius: "10px", padding: "16px" }}>
                  <span className="program-tag" style={{ position: "static", display: "inline-block", marginBottom: "8px" }}>Dance</span>
                  <h5 style={{ fontFamily: "var(--font-serif)", fontSize: "1.2rem", color: "var(--maroon-darkest)" }}>
                    MPA Bharatanatya
                  </h5>
                  <p style={{ fontSize: "0.8rem", color: "var(--ink-muted)", margin: "6px 0 10px" }}>
                    2 Yrs / 4 Sems • Head: Vidushi Ranjana Nagaraj
                  </p>
                  <button
                    className="btn btn-outline-maroon"
                    style={{ width: "100%", padding: "6px 10px", fontSize: "0.75rem" }}
                    onClick={() => {
                      setCampaignMode(false);
                      handleApplyClick("Master of Performing Arts — Bharatanatya");
                    }}
                  >
                    Apply Now
                  </button>
                </div>
              </div>

              {/* Exemption Highlight */}
              <div className="exemption-box" style={{ marginBottom: "20px" }}>
                <ShieldCheck size={18} />
                <div style={{ fontSize: "0.82rem" }}>
                  Senior Exam in Karnataka Sangita or Bharatanatya? <strong>Entrance exam is exempted!</strong> Any Bachelor degree holders eligible (General 55%, Category 50%).
                </div>
              </div>

              {/* Fast Campaign Actions */}
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <a
                  href={`https://wa.me/${ACADEMY_INFO.primaryPhoneRaw}?text=${encodeURIComponent("Hello BMSSA, I came from your Instagram/Facebook campaign and would like to apply for MPA admissions 2026-27.")}`}
                  className="btn btn-whatsapp"
                  target="_blank"
                  rel="noreferrer"
                  style={{ width: "100%", padding: "12px" }}
                >
                  <MessageCircle size={18} /> Fast WhatsApp Enquiry ({ACADEMY_INFO.primaryPhone})
                </a>
                <button
                  className="btn btn-primary"
                  style={{ width: "100%", padding: "12px" }}
                  onClick={() => {
                    setCampaignMode(false);
                    setApplyModalOpen(true);
                  }}
                >
                  Fill Pre-Registration Form
                </button>
                <button
                  className="btn btn-outline-gold"
                  style={{ color: "var(--maroon-deep)", borderColor: "var(--cream-border)" }}
                  onClick={() => {
                    setCampaignMode(false);
                    scrollTo("about");
                  }}
                >
                  Explore Full Institutional Website
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==================================================================
          20. GALLERY LIGHTBOX MODAL
          ================================================================== */}
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
            <div style={{ background: "#0c0407", display: "flex", justifyContent: "center", alignItems: "center", minHeight: "260px" }}>
              <img
                src={lightboxItem.image}
                alt={lightboxItem.title}
                onError={(e) => {
                  if (lightboxItem.fallbackImage && e.currentTarget.src !== lightboxItem.fallbackImage) {
                    e.currentTarget.src = lightboxItem.fallbackImage;
                  }
                }}
                style={{ width: "100%", maxHeight: "78vh", objectFit: "contain" }}
              />
            </div>
            <div style={{ padding: "20px", background: "var(--ivory-base)" }}>
              <span className="gallery-tag">{lightboxItem.tag}</span>
              <h4 style={{ fontFamily: "var(--font-serif)", fontSize: "1.35rem", color: "var(--maroon-darkest)", marginTop: "4px" }}>
                {lightboxItem.title}
              </h4>
            </div>
          </div>
        </div>
      )}
      {/* ==================================================================
          21. FACULTY PROFILE DETAIL MODAL (Stamp Click)
          ================================================================== */}
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
              {/* Left Column: Authentic Commemorative Stamp */}
              <div className="faculty-detail-stamp-wrap">
                <PostageStamp
                  id="modal-stamp"
                  name={selectedFaculty.name}
                  department={selectedFaculty.department}
                  image={selectedFaculty.image}
                />
                <div className="stamp-modal-caption">
                  <span>Commemorative Academic Stamp</span>
                  <small>BMSSA • Estd. 2017</small>
                </div>
              </div>

              {/* Right Column: Full Details */}
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
                  About & Artistic Lineage
                </div>
                <p className="faculty-modal-bio">
                  {selectedFaculty.fullBio || selectedFaculty.bio}
                </p>

                {selectedFaculty.highlights && selectedFaculty.highlights.length > 0 && (
                  <>
                    <div className="faculty-modal-section-title" style={{ marginTop: "18px" }}>
                      Key Accolades & Roles
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
