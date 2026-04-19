import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

const rundownData = [
  {
    start: "08:30",
    end: "09:00",
    duration: "0:30:00",
    venue: "Main Room",
    activity: "Open Gate and Registration",
  },
  {
    start: "09:00",
    end: "09:07",
    duration: "0:07:00",
    venue: "Main Room",
    activity: "Opening Session - Welcoming Address, Opening prayer",
  },
  {
    start: "09:07",
    end: "09:13",
    duration: "0:06:00",
    venue: "Main Room",
    activity: "National Anthem and Hymne UC",
  },
  {
    start: "09:13",
    end: "09:16",
    duration: "0:03:00",
    venue: "Main Room",
    activity: "Opening Remarks by Head of Icombus - Eddrick Christian Chang",
  },
  {
    start: "09:16",
    end: "09:19",
    duration: "0:03:00",
    venue: "Main Room",
    activity:
      "Opening Remarks by The President of IBM Student Union - Vincent Nicholaselin",
  },
  {
    start: "09:19",
    end: "09:22",
    duration: "0:03:00",
    venue: "Main Room",
    activity: "Opening Remarks by Vice Head Department of IBM Major",
  },
  {
    start: "09:22",
    end: "09:25",
    duration: "0:03:00",
    venue: "Main Room",
    activity:
      "Rundown Overview - Reading Rules of ICOMBUS, Explanation of ICOMBUS Timeline",
  },
  {
    start: "09:25",
    end: "12:00",
    duration: "2:35:00",
    venue: "Main Room",
    activity:
      "Speaker Session by Dr. Dian Mayasari, Msc., Speaker Session by Prof. Dennis Cheek BA, BS,MA, Ph.D., FRSA, AAAS, QnA, Speaker Session by Diana Hartono, CFP",
  },
  {
    start: "12:00",
    end: "13:15",
    duration: "1:15:00",
    venue: "Main Room",
    activity: "Break Time",
  },
  {
    start: "13:15",
    end: "15:50",
    duration: "2:35:00",
    venue: "Break Out Room",
    activity: "Break Out Room Session",
  },
  {
    start: "15:50",
    end: "16:05",
    duration: "0:15:00",
    venue: "Main Room",
    activity: "Awarding and Closing ceremony",
  },
];

// --- DATA FOR BREAK OUT ROOMS ---
const borData = [
  // BOR 1
  {
    room: 1,
    presenters: [
      {
        title:
          "Immersive Content is Not Enough: Emotional Appeal and Perceived Credibility Mediation",
        name: "Fendy Octavianto",
      },
      {
        title:
          "Do Underwriter Reputation, Warrants, and Pre-IPO Dividend Affect Acceleration Board IPO Underpricing?",
        name: "Surya Adam Saputra",
      },
      {
        title:
          "Linking Mindfulness to Mindful Fashion Consumption Behavior Among Indonesian Gen Z: The Mediating Role of Pro Environmental Behavior and Moderating Effect of Social Media Engagement",
        name: "Naomi Augusta",
      },
      {
        title:
          "Understanding Impulsive Buying in Live E-Commerce: The Interplay of Streamers’ Positive Emotions, Emotional Contagion, and Hedonic Value (Study of Generation Z on Tiktok Live)",
        name: "Jonathan Richard Gunawan",
      },
      {
        title:
          "IS CORPORATE REPUTATION THE BRIDGE BETWEEN INTELLECTUAL CAPITAL AND FINANCIAL PERFORMANCE IN THE BANKING SECTOR",
        name: "Apfia Liliosa Agatha Tarigan",
      },
      {
        title:
          "THE INFLUENCE OF FAMILY SUPPORT AND ENTREPRENEURIAL KNOWLEDGE ON ENTREPRENEURIAL INTEREST OF SATYA WACANA CHRISTIAN UNIVERSITY STUDENTS: MULTIGROUP ANALYSIS BETWEEN BUSINESS AND NON-BUSINESS FACULTY",
        name: "Hernawan Finley Banoet",
      },
      {
        title:
          "Cognitive Trust and Affective Trust as Moderators in Radio Streaming Use Based on TAM",
        name: "Eben Haezer Lase",
      },
      {
        title:
          "The Influence of Motivation, Social Media and Risk Perception on Students' Investment Behavior in the Capital Market",
        name: "Ika Pratiwi Simbolon",
      },
      {
        title:
          "Do risk disclosure and firm value drive Indonesian bank stock returns?",
        name: "Salsabila Ahadia Rahmah",
      },
      {
        title:
          "The Role of Financial Literacy on the Impact of Financial Technology based Online Loans and Its Legal Aspects",
        name: "Ika Pratiwi Simbolon",
      },
    ],
  },
  // BOR 2
  {
    room: 2,
    presenters: [
      {
      "title": "Perceived Financial Risk & TPB: The Utilization of Two Different Concepts to Predict Indonesians' Behavior to Purchase Chinese-Made EV Cars",
      "name": "Nicholas Wilson"
    },
    {
      "title": "Total Quality Management on Employee Performance through Innovative Work Behavior and Dynamic Absorptive Capacity",
      "name": "Carlos"
    },
    {
      "title": "The Influence of Employer Branding and E-recruitment on Job Seekers' Intention to Apply with Corporate Reputation as a Variable Mediating",
      "name": "Steffi Cheryl Kustanto"
    },
    {
      "title": "Employer Branding and Application Intention: Employer Attractiveness as Mediator and LinkedIn as Moderator",
      "name": "Arkaantiar Bintang Fajar"
    },
    {
      "title": "The Role of Independent Commissioners in Income Smoothing Practices in The Agricultural Sector",
      "name": "Eka Candra Nugroho"
    },
    {
      "title": "The Impact of Carbon Emission Disclosure on Firm Value: Female Boards as the Moderator",
      "name": "FX Herry Christyanto"
    },
    {
      "title": "The Influence of Board Diversity on Carbon Emission Disclosure in Energy-Sector Firms",
      "name": "Fristalia Tifani Sintana"
    },
    {
      "title": "Is Intellectual Capital A Savior of Financial Distress?",
      "name": "Aryasena Raditya Zandra"
    },
    {
      "title": "Marketing Strategy in A Monopolistic Competitive Market: A Case Study On Asa Space Coffee Shop",
      "name": "Yuni Kurniasih"
    },
    {
      "title": "Did the Global Minimum Tax Break the Leverage-Tax Shield Mechanism in FAANG Companies?",
      "name": "Adhisca Edward Edo Sadewa"
    }
    ],
  },
  {
    room: 3,
    presenters: [
      {
      "title": "Building Customer Satisfaction Through Delivery Accuracy, Cash on Delivery, and Free Shipping on Klik Indomaret in Tangerang City",
      "name": "Anisa Rahmay"
    },
    {
      "title": "The Influence of the Implementation of Green Human Resource Management and Teamwork on Employee Performance Through Work Motivation at PT Astra Sedaya Finance Karawaci Branch",
      "name": "Rina Amanda"
    },
    {
      "title": "The Appeal of advertising, Flash sales, and Online customer reviews on Purchasing decisions for Nivea facial cleanser in Tangerang City",
      "name": "Nanda Suciatiningrum"
    },
    {
      "title": "CSR Disclosure, Financial Performance, and Ownership Structure: Evidence From Indonesian Mining Companies",
      "name": "Grazelaria Sekar Langit"
    },
    {
      "title": "Islamic Social Funds, Unemployment, and Human Capital: Foundations of Indonesia's Economic Sustainability",
      "name": "Nawal Belindawati"
    },
    {
      "title": "Students’ Interest in Sukuk Investment in JABODETABEK: Examining the Influence of Financial Literacy, Motivation, and Risk Perception",
      "name": "Rafif Aufa Fadhilah"
    },
    {
      "title": "The Effect of Digital Transformation, Sustainable Leadership, and Employee Sustainable Training on the Sustainable Performance of Employees at PT Telmark Integrasi Indonesia",
      "name": "Ega Listina Prabawati"
    },
    {
      "title": "Exploring Bank Performance: Intellectual Capital, Capital Structure, and Liquidity Risk Effects",
      "name": "Aditya Yunardi"
    },
    {
      "title": "Legitimacy Theory Implementation in Social Responsibility Practices: Empirical Study of the Health Care Sector 2022-2023",
      "name": "Kenty Riesmi Mustika Anggraini"
    },
    {
      "title": "The Effect of Green Credit and Green Accounting on Financial Performance at Commercial Banks in Indonesia",
      "name": "Annisa Banjiria"
    }
    ],
  },
  // BOR 4
  {
    room: 4,
    presenters: [
      {
      "title": "Analysis of the Effect of Local Taxes, Local Retribution, and Separated Regional Asset Management Results on Local Own-Source Revenue of Jambi City",
      "name": "Ardina"
    },
    {
      "title": "The Impact of Perceived Algorithmic Management on Job Engagement among Application-Based Motorcycle Taxi Drivers",
      "name": "Edwin Tri Angga Saputra"
    },
    {
      "title": "The Influence of Affective Commitment on the Career Success of Civil Servants in Indonesia",
      "name": "Endah Setyowati"
    },
    {
      "title": "ANTECEDENTS OF CAREER DEVELOPMENT AND ITS IMPACT ON PRIVATE LECTURER RETENTION IN INDONESIA",
      "name": "Abdul Hakim"
    },
    {
      "title": "DETERMINANTS OF ACCOUNTING FRAUD TENDENCY WITH UN ETHICAL BEHAVIOR AS MEDIATION (Empirical Study On Regional Government Agencies Jambi Province)",
      "name": "M. Ihsan"
    },
    {
      "title": "Optimisation of Risk-Based Capital through Loss Ratio: Solvency and Inflation in Non-Life Insurance",
      "name": "Satiman"
    },
    {
      "title": "ESG Star Listed Companies: The Impact of ESG Practices on Profitability",
      "name": "SILSA RIDA NOOR AZKIYA"
    },
    {
      "title": "Analysis of Income and Feasibility of Sugarcane Farming in Kandat Subdistrict,Kediri Regency",
      "name": "Faris Dwi Kuncoro"
    },
    {
      "title": "THE EFFECT OF DEBT TO ASSET RATIO, ASSET GROWTH, EXCHANGE RATE, AND DEBT TO EQUITY RATIO ON THE PROFITABILITY OF CPO COMPANIES IN INDONESIA",
      "name": "Khaeril Anwar Junaedi"
    }
    ],
  },
  // BOR 5
  {
    room: 5,
    presenters: [
      {
      "title": "Organizational Structure Change and Employee Placement on Performance in the Public Sector",
      "name": "Norman Iswahyudi"
    },
    {
      "title": "Beyond Intent: Uncovering Psychological and Contextual Drivers of Ethical Violations in Public Organizations",
      "name": "Ni Ketut Ayuni"
    },
    {
      "title": "Job Hopping vs. Job Hugging: Exploring Employee Engagement Across Generation Y and Z",
      "name": "Caezara Diva Tritya"
    },
    {
      "title": "Can Digitalization Enhance Government Effectiveness? The Moderating Role of Regulatory Quality in Asia and Europe",
      "name": "Saeed Abdulrahman Ali Saif"
    },
    {
      "title": "Career Development, Compensation, and Turnover Intention: The Mediating Role of Job Satisfaction at Aitimedia",
      "name": "Lifvia Azzahra"
    },
    {
      "title": "The Influence of Innovation and Knowledge Sharing on Employee Performance at PT Sinar Kaliman Sehat with Self-Efficacy as a Moderating Variable",
      "name": "Haekal Saputra"
    },
    {
      "title": "Driving Change from Within: Empowering Leadership, Job Autonomy, and Job Crafting",
      "name": "Galuh Dwi Cahyani"
    },
    {
      "title": "Supporting Performance Management with Business Progress Management and Business Intelligence: a case analysis of integration and orchestration",
      "name": "Iram Ghaffar"
    }
    ],
  },
  // BOR 6
  {
    room: 6,
    presenters: [
      {
      "title": "High Profile Sports: Healthy or Deathly (Financially)?",
      "name": "Jessica Halim"
    },
    {
      "title": "Designed to be Overspend: A Behavioral Look Into Marketing's Financial Impact in the Digital Age",
      "name": "Natania Ken Anniko Giamanto"
    },
    {
      "title": "Financial Technology, Financial Literacy, and MSME Financial Performance: Mediating Role of Financial Inclusion in East Java",
      "name": "Raymond Setiyawan"
    },
    {
      "title": "The Mediating Role of Attitude: How Paid Communication and Source Credibility Influence the Intention to Recommend Digital Influencers",
      "name": "Yessa Jovita Sugiharto"
    },
    {
      "title": "Investor Behavior Model toward Trading Robots: An Initial Trust and Social Influence Approach",
      "name": "Revalina Gunawan"
    },
    {
      "title": "In Influencers We Trust: How TikTok Content Shapes Gen Z’s Brand Awareness and Buying Intention",
      "name": "Jocelline Aarona Putricia"
    },
    {
      "title": "The Role of Ease in Transactions on MSME Performance",
      "name": "Jonathan Stanislaus"
    },
    {
      "title": "Does Alignment Matter? How Product-Influencer Congruence and Credibility Drive Intention to Follow",
      "name": "I Gusti Ayu Made Maia Anindia"
    },
    {
      "title": "Navigating Digital Business Model Innovation in East Java MSMEs: The Role of Culture, Transformation, and Competitive Intensity.",
      "name": "Amy Morgan"
    }
    ],
  },
  // BOR 7
  {
    room: 7,
    presenters: [
      {
      "title": "Exploring Gen Z’s Environmental Knowledge and Consumer Hope in Driving Sustainable Consumption Behavior: Evidence from Hokky Supermarket Surabaya",
      "name": "Jessica Chrisya Tanjaya"
    },
    {
      "title": "Open Minds, Bold Futures: Linking Readiness for Uncertainty and Optimism to Business Performance among Woman Entrepreneurs",
      "name": "Anita Lucrecia"
    },
    {
      "title": "The Moderating Role Of Gender In Exploring Impulse Buying Behaviour Among Gen Z In Live Streaming Shopping: A Stimulus-Organism-Response (SOR) Perspective",
      "name": "Andre Sandrianus Mario"
    },
    {
      "title": "The Effect of Peer Influence and Social Media Advertising toward Purchase Intention of iPhone Products with Brand Trust As Mediating Variable Among Gen Z in Surabaya",
      "name": "Angelica Stephanie"
    },
    {
      "title": "Influence of Perceived Ease of Use, Challenge, Variety, Social Interaction on Perceived Enjoyment in Roblox",
      "name": "Rachel Naomi Supratman"
    },
    {
      "title": "The Influence of Women's Economic Empowerment on Technology Entrepreneurship Intention Through Self-Efficacy in Womenpreneurs in Surabaya",
      "name": "Gabriel Carolina Tjoe"
    },
    {
      "title": "The Effect of Influencer Credibility, Brand Image, and Ad Relevance on Consumer Purchase Intention in Social Media (Study on Somethinc Product Promotion through Influencer Tasya Farasya)",
      "name": "Leslie Natalie Tanesa"
    },
    {
      "title": "The Effect of Price Discount and Electronic Word of Mouth on Purchase Intention with Brand Image as a Mediator (A Case Study of Generation Z Coffee Consumers in Surabaya)",
      "name": "Syaiful Anam"
    }
    ],
  },
  // BOR 8
  {
    room: 8,
    presenters: [
      {
      "title": "The Influence of FoMO, Hedonism, and Scarcity on Impulsive iPhone Buying Among Generation Z Social Media Users",
      "name": "Benjamin Juan Constantine"
    },
    {
      "title": "The Effect of Perceived Quality on Emotion and Behavioral Intention Based on Google Reviews of Haidilao Restaurant Surabaya",
      "name": "Fulgentio Hartono"
    },
    {
      "title": "THE ROLE OF AIDA IN AI-ASSISTED PROMOTIONAL CONTENT EFFECTIVENESS ON INSTAGRAM CUTEGRAM.ID",
      "name": "Tiffany"
    },
    {
      "title": "The Effect of Digital Financial Literacy on QRIS Transaction Intention among Consumers in Solo City",
      "name": "Regita Adhika Putri Wijayanto"
    },
    {
      "title": "The Impact of Brand Awareness, Price Fairness, and Product Quality on Customer Satisfaction of Scarlett Whitening Handbody Lotion Users",
      "name": "Aliya Nur Azizah"
    },
    {
      "title": "Determinants of Student Satisfaction in Mandarin Language Courses",
      "name": "Lisa"
    },
    {
      "title": "The Effect of Job Satisfaction, Work Passion, and Motivation on Employee Retention Intention in Citra Maja City",
      "name": "Rapli Humaedi"
    },
    {
      "title": "Tax Aggressiveness in Infrastructure Firms: The Impact of Political Connections, Ownership Structure, CSR, and Firm Size",
      "name": "Totty Dwi Syamba"
    }
    ],
  },
  // BOR 9
  {
    room: 9,
    presenters: [
        {
        "title": "Understanding AI-Driven Social Media Marketing Strategies and Their Impact on Art-Based Content Creators’ Performance",
        "name": "Phelia Livia"
      },
      {
        "title": "The Influence of Customer Experience, Satisfaction, and Perceived Safety on Customer Loyalty at Gamerskin Aesthetic",
        "name": "Galang Saputro Wahyu Nugroho"
      },
      {
        "title": "Pengaruh Fasilitas Gym Terhadap Kepuasan Pelanggan",
        "name": "I Gusti Made Ngurah Surya Danendra"
      },
      {
        "title": "Authority Before Revenue: Strategic Social Media Architecture for Sustainable MSME Digital Transformation",
        "name": "Priscilla Putri Hartono"
      },
      {
        "title": "Perception of Modern Service Features as a Predictor of Public Purchase Intention at Pharmacies Kimia Farma Banyuwangi",
        "name": "Siska waril istiqomah"
      },
      {
        "title": "Determinants of Work Productivity: The Role of Organizational Culture, Compensation, and Digital Leadership",
        "name": "Deni Prastowo"
      },
      {
        "title": "Digital Learning Experience and Student Loyalty: The Mediating Role of Satisfaction",
        "name": "Christine Angelina"
      },
      {
        "title": "ANALYSIS OF SKILLS AND WORK ENVIRONMENT AMONG INDONESIAN MIGRANT WORKERS IN HONG KONG",
        "name": "HARININGSIH"
      }
    ],
  },
  {
    room: 10,
    presenters: [
      {
      "title": "Emoji-Driven Micro-Interactions: A Suistainable CRM Framework For Digital Entrepreneurship Growth",
      "name": "Ester Juniarta Simanjuntak"
    },
    {
      "title": "Rethinking Monetary Policy Transmission in Indonesia: The Dominance of the Exchange Rate Channel",
      "name": "Nicholas Chang"
    },
    {
      "title": "The Role of Entrepreneurial Motivation as a Mediator for the Campus Environment and Entrepreneurial Self-Efficacy in Generation Z",
      "name": "Beatrix Adelaide Herijanto"
    },
    {
      "title": "Value Formation and Purchase Decisions : Product Bundling, Product Quality, and Personal Selling at UD Wulandari",
      "name": "annisa putri wulandari"
    },
    {
      "title": "ESG, Capital Intensity, and Leverage as Determinants of Profitability: Evidence from Indonesia Chemical Firms",
      "name": "Ferryanto Pietoyo"
    },
    {
      "title": "The Effect of Price and Product Quality on Customer Satisfaction at PT. Indojaya Pasifik Mining Industry",
      "name": "Shera Aurel Thalia Zhalzabiela"
    },
    {
      "title": "Factorial Analysis on Avocado Production Among Small-Scale Farmers in Kemiling District, Lampung, Indonesia",
      "name": "ADI INDRA PERMANA"
    }
    ],
  },
];
// --- END OF DATA FOR BREAK OUT ROOMS ---

const breakoutRoomRules = [
  "Ensure your laptop or device is fully charged or connected to a power source to avoid any interruptions during the event.",
  "A stable connection is essential for a smooth experience. Please check your connection before the event begins.",
  "It is recommended to use headphones or earphones for better audio quality and to minimize background noise. Please join the zoom meeting 15 minutes earlier to ensure everything is in order before the event starts.",
  "Please make sure your powerpoint presentation is ready and has been prepared properly.",
  "Each participant will be given 10-15 minutes for their presentation including the Q&A session.",
  "Participants are allowed to ask questions to other participants regarding their presentation.",
  "After completing your presentation, Please do not leave the zoom meeting.",
  "The event will be facilitated by a moderator who will guide the proceedings.",
  "While inside the zoom meeting, turning on your camera and using a virtual background is mandatory.",
  "All participants must join all the session and are prohibited to leave the zoom meeting or the breakout room before any further instructions.",
  "All participants must speak and ask questions formally and properly, not using inappropriate language throughout the meeting including cursing, mocking, and making fun of one another.",
  "All participants must behave respectfully and well mannered to others.",
  "Ensure that your microphone is muted during the conference and only turn it on when asking questions or during presentations. Please wait after the presenter directs you to open your microphone.",
  "Ensure that you enter the right BOR (Break Out Room) according to the instructions that were already given.",
  "All participants must have their camera’s on and in a proper position with their faces show clearly on screen.",
  "Participants who are not present and who are leaving the zoom meeting and BOR (Break Out Room) before instructed are disqualified immediately.",
  "All participants must not change their group members and all members must be present throughout the event until it finishes. The member that is not present will be disqualified immediately.",
  "All participant must use formal and proper attire during the event and presentation.",
  "Every team must attend conference session from the begining until the end and for the presetation session and also one person must represent the whole team.",
];

const Rundown = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Konten utama */}
      <main className="flex-grow max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Bagian judul & info */}
        <div className="text-left mb-8">
          <div className="flex justify-between items-center w-full">
            {" "}
            {/* Container flex */}
            <Link href="https://drive.google.com/file/d/15S3jLDKo2-o76ABSXSR_qlyUUOt7pnGa/view?usp=drivesdk"
              className="inline-block bg-gradient-to-r from-[#0C2A56] to-[#144373] text-white py-2 px-6 rounded-lg transition-colors hover:opacity-90 text-xs sm:text-sm"
              >
                Download Rundown
            </Link>
            <Link
              href="https://www.canva.com/design/DAHCUS_uiC0/CtwibRK5vNsfMOs_ehQ-XQ/view?utm_content=DAHCUS_uiC0&utm_campaign=designshare&utm_medium=link&utm_source=viewer"
              className="inline-block bg-gradient-to-r from-[#0C2A56] to-[#144373] text-white py-2 px-6 rounded-lg transition-colors hover:opacity-90 text-xs sm:text-sm" // Menyesuaikan padding dan ukuran teks untuk mobile
            >
              Download Guidebook
            </Link>
          </div>

          {/* Logo */}
          <div className="py-4">
            <Image
              src="/ICOMBUS.svg"
              alt="ICOMBUS logo"
              width={200}
              height={50}
              priority
            />
          </div>

          {/* Judul */}
          <h1 className="text-2xl md:text-3xl font-bold mb-2 text-[#0C2A56]">
            Rundown - Main Session
          </h1>
          <p className="text-gray-600 font-semibold">Online: Zoom</p>
          <p className="text-gray-600 font-semibold mb-4">Date: 18 April 2026</p>
          <p className="text-black font-semibold mb-4">
            Meeting ID: 942 2919 3940
          </p>
          <p className="text-black font-semibold mb-4">Passcode: 249193</p>
          <p className="text-gray-600 font-semibold mb-4">
            Please use name: “full name_institution”
          </p>
        </div>

        {/* Tabel rundown utama */}
        <div className="overflow-x-auto mb-12">
          <table className="min-w-full border border-[#0C2A56] text-left text-xs sm:text-sm md:text-base">
            <thead className="bg-[#0C2A56] text-white">
              <tr>
                <th className="p-3 border-r border-[#0C2A56]">Start</th>
                <th className="p-3 border-r border-[#0C2A56]">End</th>
                <th className="p-3 border-r border-[#0C2A56]">Duration</th>
                <th className="p-3 border-r border-[#0C2A56]">Venue</th>
                <th className="p-3">Activity</th>
              </tr>
            </thead>
            <tbody className="text-black">
              {rundownData.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="p-3 border-b border-[#0C2A56]">
                    {item.start}
                  </td>
                  <td className="p-3 border-b border-[#0C2A56]">{item.end}</td>
                  <td className="p-3 border-b border-[#0C2A56]">
                    {item.duration}
                  </td>
                  <td className="p-3 border-b border-[#0C2A56]">
                    {item.venue}
                  </td>
                  <td className="p-3 border-b border-[#0C2A56]">
                    {item.activity}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Rundown Breakout Room (BOR) */}
        <div className="text-left mb-8">
          {/* Download Rekap BOR */}
          {/* <a
            href="https://docs.google.com/uc?export=download&id=1g6ZTONhL7U5NL19So4h0O1hVEj0vlLtd"
            className="inline-block bg-gradient-to-r from-[#0C2A56] to-[#144373] text-white py-2 px-6 rounded-lg transition-colors hover:opacity-90"
          >
            Download Break Out Room Details
          </a> */}

          {/* Judul */}
          <h1 className="text-2xl md:text-3xl font-bold mb-2 text-[#0C2A56] mt-8">
            Rundown - Break Out Rooms (13:15 - 15:30)
          </h1>
          <p className="text-gray-600 font-semibold">Online: Zoom</p>
          <p className="text-gray-600 font-semibold mb-4">Date: 18 April 2026</p>
          <p className="text-black font-semibold mb-4">
            Meeting ID: 942 2919 3940
          </p>
          <p className="text-black font-semibold mb-4">Passcode: 249193</p>
          <p className="text-gray-600 font-semibold mb-4">
            Please use name: “full name_institution”
          </p>
          <p className="text-gray-600 font-semibold font-style: italic mb-4">
            The Host will assign you to the breakout room
          </p>

          {/* Breakout Room Rules Section */}
          <div className="mb-8 p-4 border border-gray-300 rounded-lg bg-gray-50">
            <h2 className="text-xl font-semibold text-[#0C2A56] mb-3">
              Breakout Room Rules
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm md:text-base">
              {breakoutRoomRules.map((rule, index) => (
                <li key={index}>{rule}</li>
              ))}
            </ul>
          </div>
          {/* End of Breakout Room Rules Section */}
        </div>

        {/* Tabel BOR */}
        {borData.map((bor, borIndex) => (
          <div key={borIndex} className="overflow-x-auto mb-10">
            <h2 className="text-xl md:text-2xl font-semibold mb-3 text-[#0C2A56]">
              Break Out Room {bor.room}
            </h2>
            <table className="min-w-full border border-[#0C2A56] text-left text-xs sm:text-sm md:text-base">
              <thead className="bg-[#0C2A56] text-white">
                <tr>
                  <th className="p-3 border-r border-[#0C2A56] w-3/5">TITLE</th>
                  <th className="p-3 w-2/5">NAME</th>
                </tr>
              </thead>
              <tbody className="text-black">
                {bor.presenters.map((presenter, presenterIndex) => (
                  <tr key={presenterIndex} className="hover:bg-gray-50">
                    <td className="p-3 border-b border-[#0C2A56]">
                      {presenter.title}
                    </td>
                    <td className="p-3 border-b border-[#0C2A56]">
                      {presenter.name}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Rundown;
