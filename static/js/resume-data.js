// Resume data exported from the Django production database (droplet dump, 2026-08-11).
// Regenerate by editing data/resume_source.json and re-running the conversion,
// or edit these structures directly.
const JOB_DATA = [
  {
    "id": 1,
    "employer": "Scottrade",
    "position": "Branch Stock Broker",
    "dates": "Jan 2011 – Jan 2014",
    "value": 0,
    "details": [
      "Architected and delivered comprehensive support and tailored investment education for a diverse client base, ranging from novice to experienced investors.",
      "Led client-facing seminars on complex investment topics, including technical analysis, options strategies, fundamental analysis, and portfolio management.",
      "Mentored and trained junior brokers and interns in daily branch operations, trading best practices, and client relationship management.",
      "Drove business development initiatives to actively promote Scottrade's suite of products and financial services, expanding client engagement.",
      "Selected as one of only 20 brokers nationwide for an exclusive, invitation-only Advanced Broker Training program based on high performance.",
      "Earned the \"Scottrade Outstanding Customer Service Award\" in recognition of consistently exceeding client satisfaction benchmarks."
    ]
  },
  {
    "id": 2,
    "employer": "Eldorado Trading",
    "position": "Futures Trader",
    "dates": "Jan 2014 – Feb 2016",
    "value": 150,
    "details": [
      "Developed and executed proprietary trading strategies in Eurodollar futures, leveraging in-depth analysis of macroeconomic indicators to identify and capitalize on market trends.",
      "Managed a proprietary trading book focused on interest rate futures, consistently generating profit through disciplined risk management and strategic market positioning.",
      "Conducted comprehensive analysis of global macroeconomic data and cross-asset correlations (commodities, currencies, equities) to inform trading decisions and build robust models.",
      "Mentored and developed junior trading clerks, providing hands-on training in proprietary trading methodologies, risk management, and advanced market analysis techniques."
    ]
  },
  {
    "id": 3,
    "employer": "Pikes Peak Property Management",
    "position": "Strategic Consultant",
    "dates": "Feb 2016 – Present",
    "value": 250,
    "details": [
      "Spearheaded the end-to-end design and development of a custom software application to automate financial and legal communications for a 120-unit property portfolio.",
      "The custom application automated balance notices, legal demands, and insurance compliance, resulting in a significant increase in operational efficiency and a reduction in manual errors.",
      "Conducted continuous financial analysis of the property portfolio, evaluating asset performance, cash flow, and operating revenue to provide data-driven strategic recommendations to shareholders.",
      "Advised on pricing strategies, lead conversion optimization, and operational efficiencies, directly contributing to revenue optimization and improved leasing performance.",
      "Collaborated with the management team on strategic initiatives, including hiring processes and the implementation of new operational workflows to increase overall firm effectiveness."
    ]
  },
  {
    "id": 4,
    "employer": "AutoPay / Auto Approve / iLending Direct",
    "position": "Loan Consultant (Auto Finance)",
    "dates": "Dec 2019 – Dec 2022",
    "value": 400,
    "details": [
      "Managed the full-cycle loan origination process for a consistent pipeline of 25-30 clients monthly, from initial consultation to final funding.",
      "Performed comprehensive credit analysis on client financial statements and credit reports to assess creditworthiness, identify risk factors, and determine loan eligibility.",
      "Structured tailored financing solutions based on individual risk profiles and lender criteria, clearly communicating complex financial terms to ensure client satisfaction.",
      "Executed a high-volume communication strategy, engaging over 100 prospects and clients daily to nurture leads and facilitate an efficient closing process.",
      "Recognized as the top-performing loan consultant in a training class of 15 and ranked in the top 20 (of 75+) for gross income and deal volume."
    ]
  },
  {
    "id": 5,
    "employer": "Huffman Medicare Consulting, LLC",
    "position": "Licensed Medicare Agent",
    "dates": "Jan 2024 – Mar 2025",
    "value": 750,
    "details": [
      "Designed, developed, and launched a custom digital application to streamline the client consultation process, significantly enhancing sales efficiency and client clarity.",
      "The application features a comprehensive database of Medicare plans and an integrated tool for locating in-network doctors, providing immediate, data-driven value to clients.",
      "Excelled in a high-volume, consultative sales environment, building rapport with and guiding 50-60 clients monthly through complex Medicare decisions.",
      "Consistently achieved monthly sales targets by translating complex CMS data and product information into clear, actionable advice for clients."
    ]
  }
];

const SKILLS_BY_CATEGORY = {
  "Technical": [
    {
      "name": "Application Development (Project Mgmt)",
      "experiences": [
        "Strategic Consultant at Pikes Peak Property Management"
      ]
    },
    {
      "name": "CMS Data Analysis",
      "experiences": [
        "Licensed Medicare Agent at Huffman Medicare Consulting, LLC"
      ]
    },
    {
      "name": "Custom Application Development",
      "experiences": [
        "Licensed Medicare Agent at Huffman Medicare Consulting, LLC"
      ]
    },
    {
      "name": "Database Management",
      "experiences": [
        "Licensed Medicare Agent at Huffman Medicare Consulting, LLC"
      ]
    },
    {
      "name": "Eurodollar Futures",
      "experiences": [
        "Futures Trader at Eldorado Trading"
      ]
    },
    {
      "name": "Process Automation",
      "experiences": [
        "Strategic Consultant at Pikes Peak Property Management"
      ]
    }
  ],
  "Analytical": [
    {
      "name": "Asset Performance Analysis",
      "experiences": [
        "Strategic Consultant at Pikes Peak Property Management"
      ]
    },
    {
      "name": "Client Needs Analysis",
      "experiences": [
        "Licensed Medicare Agent at Huffman Medicare Consulting, LLC"
      ]
    },
    {
      "name": "Credit Analysis",
      "experiences": [
        "Loan Consultant (Auto Finance) at AutoPay / Auto Approve / iLending Direct"
      ]
    },
    {
      "name": "Cross-Asset Correlation Analysis",
      "experiences": [
        "Futures Trader at Eldorado Trading"
      ]
    },
    {
      "name": "Data-Driven Decision Making",
      "experiences": [
        "Strategic Consultant at Pikes Peak Property Management"
      ]
    },
    {
      "name": "Economic Indicator Analysis",
      "experiences": [
        "Futures Trader at Eldorado Trading"
      ]
    },
    {
      "name": "Financial Statement Analysis",
      "experiences": [
        "Loan Consultant (Auto Finance) at AutoPay / Auto Approve / iLending Direct"
      ]
    },
    {
      "name": "Fundamental Analysis",
      "experiences": [
        "Branch Stock Broker at Scottrade"
      ]
    },
    {
      "name": "Lead Conversion Analysis",
      "experiences": [
        "Strategic Consultant at Pikes Peak Property Management"
      ]
    },
    {
      "name": "Macroeconomic Analysis",
      "experiences": [
        "Futures Trader at Eldorado Trading"
      ]
    },
    {
      "name": "Options Trading Strategies",
      "experiences": [
        "Branch Stock Broker at Scottrade"
      ]
    },
    {
      "name": "Quantitative Analysis",
      "experiences": [
        "Futures Trader at Eldorado Trading"
      ]
    },
    {
      "name": "Real Estate Financial Analysis",
      "experiences": [
        "Strategic Consultant at Pikes Peak Property Management"
      ]
    },
    {
      "name": "Risk Assessment",
      "experiences": [
        "Loan Consultant (Auto Finance) at AutoPay / Auto Approve / iLending Direct"
      ]
    },
    {
      "name": "Technical Analysis",
      "experiences": [
        "Branch Stock Broker at Scottrade"
      ]
    }
  ],
  "Sales": [
    {
      "name": "Business Development",
      "experiences": [
        "Branch Stock Broker at Scottrade"
      ]
    },
    {
      "name": "Client Consultation",
      "experiences": [
        "Loan Consultant (Auto Finance) at AutoPay / Auto Approve / iLending Direct"
      ]
    },
    {
      "name": "Consultative Sales",
      "experiences": [
        "Licensed Medicare Agent at Huffman Medicare Consulting, LLC"
      ]
    },
    {
      "name": "Sales & Lead Nurturing",
      "experiences": [
        "Loan Consultant (Auto Finance) at AutoPay / Auto Approve / iLending Direct"
      ]
    },
    {
      "name": "Sales Cycle Management",
      "experiences": [
        "Licensed Medicare Agent at Huffman Medicare Consulting, LLC"
      ]
    }
  ],
  "Management & Communication": [
    {
      "name": "Client Relationship Management",
      "experiences": [
        "Branch Stock Broker at Scottrade"
      ]
    },
    {
      "name": "Entrepreneurship",
      "experiences": [
        "Licensed Medicare Agent at Huffman Medicare Consulting, LLC"
      ]
    },
    {
      "name": "High-Volume Pipeline Management",
      "experiences": [
        "Loan Consultant (Auto Finance) at AutoPay / Auto Approve / iLending Direct"
      ]
    },
    {
      "name": "Mentoring & Training",
      "experiences": [
        "Branch Stock Broker at Scottrade"
      ]
    },
    {
      "name": "Operational Strategy",
      "experiences": [
        "Strategic Consultant at Pikes Peak Property Management"
      ]
    },
    {
      "name": "Public Speaking & Seminars",
      "experiences": [
        "Branch Stock Broker at Scottrade"
      ]
    },
    {
      "name": "Trader Development & Mentoring",
      "experiences": [
        "Futures Trader at Eldorado Trading"
      ]
    }
  ],
  "Financial": [
    {
      "name": "Futures Trading",
      "experiences": [
        "Futures Trader at Eldorado Trading"
      ]
    },
    {
      "name": "Investment Education",
      "experiences": [
        "Branch Stock Broker at Scottrade"
      ]
    },
    {
      "name": "Loan Origination",
      "experiences": [
        "Loan Consultant (Auto Finance) at AutoPay / Auto Approve / iLending Direct"
      ]
    },
    {
      "name": "Loan Structuring",
      "experiences": [
        "Loan Consultant (Auto Finance) at AutoPay / Auto Approve / iLending Direct"
      ]
    },
    {
      "name": "Portfolio Management",
      "experiences": [
        "Branch Stock Broker at Scottrade"
      ]
    },
    {
      "name": "Product Expertise (Medicare)",
      "experiences": [
        "Licensed Medicare Agent at Huffman Medicare Consulting, LLC"
      ]
    },
    {
      "name": "Revenue Optimization",
      "experiences": [
        "Strategic Consultant at Pikes Peak Property Management"
      ]
    },
    {
      "name": "Risk Management",
      "experiences": [
        "Futures Trader at Eldorado Trading"
      ]
    },
    {
      "name": "Shareholder Reporting",
      "experiences": [
        "Strategic Consultant at Pikes Peak Property Management"
      ]
    }
  ]
};
