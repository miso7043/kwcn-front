import { Home, Building2, Users2, MapPin, FileSearch, Settings, TreePine, Shield, HandHeart, GraduationCap, FileText, DollarSign, Users, TrendingUp, Heart, UserCheck, TrendingDown, Clock } from 'lucide-react';

// Page header content
export const pageHeader = {
  title: "Co-op Housing",
  backgroundImage: "/imgs/co-op/co-opHousing.webp"
};

// Why section content
export const whySection = {
  title: "1. Why is Co-op Housing Needed?",
  description: "Co-operative housing meets an urgent need in British Columbia's housing market. With many renters spending over 30% of their gross income on shelter, and one in four paying more than half their income, affordability is a serious crisis. Co-op housing typically costs",
  highlightText: "20-30% less than average rental rates",
  descriptionSuffix: "in Metro Vancouver, making it a crucial affordable housing option for many families and individuals."
};

export const advantageCards = [
  {
    id: '1',
    title: 'Lower cost housing',
    description: 'Co-ops operate on a non-profit "at-cost" basis, rather than aiming to generate investor profit, allowing housing charges that better reflect actual costs.',
    icon: <DollarSign size={24} />
  },
  {
    id: '2',
    title: 'Security of tenure',
    description: 'In many co-operatives you can live in your home for as long as you follow the rules and pay your housing charge, offering more stability than many rental arrangements.',
    icon: <Shield size={24} />
  },
  {
    id: '3',
    title: 'Member control and community involvement',
    description: 'Members have a vote, sit on boards, and shape how the community is run, which builds engagement and social connection.',
    icon: <Users size={24} />
  },
  {
    id: '4',
    title: 'Life and job-skills development',
    description: 'Being part of a co-op means participating in governance, committees, maintenance oversight, building teamwork and leadership skills.',
    icon: <TrendingUp size={24} />
  },
  {
    id: '5',
    title: 'Part of a co-operative movement promoting sustainable communities',
    description: 'Co-ops contribute to housing solutions that are community-based rather than purely market-driven.',
    icon: <Heart size={24} />
  }
];

// Advantages section content
export const advantagesSection = {
  title: "Advantages",
  description: "Key benefits include:",
  cards: advantageCards,
  bgColor: 'bg-blue-400/60',
  titleColor: 'text-blue-800'
};

export const disadvantageCards = [
  {
    id: '1',
    title: 'Requires active participation',
    description: 'Living in a co-op means being part of a community with governance, meetings, committees and shared responsibilities. If you prefer minimal interaction and oversight, this may be a drawback.',
    icon: <UserCheck size={24} />
  },
  {
    id: '2',
    title: 'No personal equity gains',
    description: 'Most non-profit co-ops are not designed to create resale profit for individual members. You may not build personal wealth the way you might owning a condo.',
    icon: <TrendingDown size={24} />
  },
  {
    id: '3',
    title: 'Limited availability',
    description: 'There are fewer co-op units than traditional rentals or ownership options; waiting lists and income/eligibility criteria can make access challenging.',
    icon: <Clock size={24} />
  }
];

// Disadvantages section content
export const disadvantagesSection = {
  title: "Disadvantages",
  description: "While co-op housing has many advantages, it also comes with trade-offs that potential members need to understand:",
  cards: disadvantageCards,
  bgColor: 'bg-red-800/20',
  titleColor: 'text-red-400'
};

// Gallery section content
export const gallerySection = {
  title: "Gallery"
};


// What is Co-op Housing section content
export const whatIsCoopSection = {
  title: "2. What is Co-op Housing?"
};

// Housing Options subsection
export const housingOptionsSection = {
  title: "2-1. Housing Options in BC",
  description: "In the context of BC's housing landscape, co-operative housing fits between rental housing and full home-ownership."
};

export const housingOptionsData = [
  {
    id: '1',
    title: 'Temporary Housing',
    description: 'Emergency or transitional housing for short-term needs',
    icon: <Building2 size={24} />
  },
  {
    id: '2',
    title: 'Traditional Ownership',
    description: 'Single- or multi-family homes',
    subItems: [
      'Single- or multi-family homes',
      'Very expensive',
      'Owners make or share decisions',
      'Full responsibility for maintenance'
    ],
    icon: <MapPin size={24} />
  },
  {
    id: '3',
    title: 'Rental Housing',
    description: 'Offers flexibility with trade-offs',
    subItems: [
      'Flexibility',
      'Limited control',
      'Higher costs',
      'Less stability in the long term'
    ],
    icon: <Home size={24} />
  },
  {
    id: '4',
    title: 'Non-Profit Co-operative Housing',
    description: 'Community-governed affordable housing',
    subItems: [
      'Operates at break-even cost',
      'Decisions made democratically by members',
      'Maintenance by Co-op Housing'
    ],
    icon: <Users2 size={24} />
  }
];

// Co-op Types subsection
export const coopTypesSection = {
  title: "2-2. Types, Locations, and Numbers of Co-ops in BC",
  description: "In British Columbia there are more than 260 non-profit housing co-ops. Most are located in Metro Vancouver and on Vancouver Island.",
  cards: [
    {
      id: '1',
      title: 'Non-Profit Co-ops',
      description: 'Housing rights only, no investment returns',
      subItems: [
        'Housing rights only, no investment returns',
        'No purchase of equity shares',
        'As affordable as possible, eligible for government subsidies',
        'Eviction only upon loss of membership qualifications',
        'Non-profit, democratic governance, social purpose',
        'Owned by the co-operative organization'
      ],
      icon: <Users2 size={24} />
    },
    {
      id: '2',
      title: 'Equity Co-ops',
      description: 'Share ownership with investment potential',
      subItems: [
        'Ownership of shares, tradable with potential capital gains',
        'Purchase of shares corresponding to housing rights',
        'Typically priced at market rate, plus separate maintenance fees',
        'Shares can be sold and transferred to others',
        'Combines investment elements with community participation',
        'Owned by the co-operative organization, rights exercised through shares'
      ],
      icon: <Building2 size={24} />
    }
  ],
  bgColor: 'bg-purple-600/40',
  titleColor: 'text-purple-800',
  cardWidth: 400
};

export const coopPrinciplesSection = {
  title: "2-6. Co-op Principles",
  description: "Co-operatives operate under guiding values:",
  cards: [
    {
      id: '1',
      title: 'Voluntary and Open Membership',
      description: 'Open to all persons able to use their services and willing to accept member responsibilities',
      icon: <Users2 size={24} />
    },
    {
      id: '2',
      title: 'Democratic Member Control',
      description: 'Controlled by their members, who actively participate in setting policies and making decisions',
      icon: <Settings size={24} />
    },
    {
      id: '3',
      title: 'Members\' Economic Participation',
      description: 'Members contribute equitably to the capital of their cooperative',
      icon: <Building2 size={24} />
    },
    {
      id: '4',
      title: 'Autonomy and Independence',
      description: 'Autonomous, self-help organizations controlled by their members',
      icon: <Home size={24} />
    }
  ],
  bgColor: 'bg-indigo-400/50',
  titleColor: 'text-indigo-800'
};

// Financial Supports for new members section - using applicationProcessData for now
export const financialSupportsForMembersSection = {
  title: "3-1. Financial Supports for New Members",
  description: "Special financial assistance programs are available to help members overcome barriers to co-op housing.",
  cards: [
    {
      id: '1',
      title: 'Eligibility Requirements',
      description: 'Typically need to be a Canadian citizen, permanent resident, or eligible refugee',
      icon: <FileSearch size={24} />
    },
    {
      id: '2',
      title: 'Income Requirements',
      description: 'Some co-ops and subsidy programs set maximum income ceilings at move-in time',
      icon: <Building2 size={24} />
    },
    {
      id: '3',
      title: 'Home Suitability',
      description: 'Matching household size to unit size, meeting housing charge obligations, and agreeing to membership rules',
      icon: <Home size={24} />
    }
  ],
  bgColor: 'bg-blue-400/40',
  titleColor: 'text-pink-900',
  cardWidth: 400
};

export const applicationProcessData = [
  {
    id: '1',
    title: 'Eligibility Requirements',
    description: 'Typically need to be a Canadian citizen, permanent resident, or eligible refugee',
    icon: <FileSearch size={24} />
  },
  {
    id: '2',
    title: 'Income Requirements',
    description: 'Some co-ops and subsidy programs set maximum income ceilings at move-in time',
    icon: <Building2 size={24} />
  },
  {
    id: '3',
    title: 'Home Suitability',
    description: 'Matching household size to unit size, meeting housing charge obligations, and agreeing to membership rules',
    icon: <Home size={24} />
  }
];

export const applicationTypesData = [
  {
    id: '1',
    title: 'Individual Co-op Applications',
    description: 'Traditional application process for independent co-operatives',
    subItems: [
      'Apply directly to each co-op housing website or office',
      'Must contact multiple co-ops individually',
      'Update applications every 6 months via email or phone',
      'Higher chances with regular follow-ups',
      'More time-consuming but direct contact with communities'
    ],
    icon: <Home size={24} />
  },
  {
    id: '2',
    title: 'Community Land Trust Applications',
    description: 'Centralized application process through CLT management',
    subItems: [
      'Single application through website of Community Land Trust',
      'CLT manages multiple co-op housing options',
      'Centralized updates and communication',
      'More convenient and streamlined process',
      'Easier to track multiple housing opportunities'
    ],
    icon: <Settings size={24} />
  }
];

export const coopLivingSection = {
  title: "2-7. Co-op Living",
  description: "Living in a housing co-op means more than just residing in a unit—there is community governance, rights, duties, and shared responsibilities.",
  cards: [
    {
      id: '1',
      title: 'Governance Structure',
      description: 'Members elect a Board of Directors from among themselves. The Board oversees management, ensures rules are followed, approves new members, and sets housing charges',
      icon: <Settings size={24} />
    },
    {
      id: '2',
      title: 'Member Responsibilities',
      description: 'Paying housing charges on time, adhering to co-op rules and policies, participating in meetings and committees, maintaining the unit\'s condition and being a good neighbour',
      icon: <Users2 size={24} />
    },
    {
      id: '3',
      title: 'Board Responsibilities',
      description: 'Legal duty of care and loyalty, ensuring democratic governance, oversight of finances and operations',
      icon: <Building2 size={24} />
    },
    {
      id: '4',
      title: 'Housing Charges & Subsidies',
      description: 'A housing charge covers operating expenses and reserves. Some units may receive subsidies if funding agreements are in place',
      icon: <Home size={24} />
    }
  ],
  bgColor: 'bg-teal-500/40',
  titleColor: 'text-teal-800'
};

export const cltSection = {
  title: "2-4. What is the Community Land Trust (CLT)?",
  description: "The Community Land Trust model supports co-op housing by owning or controlling land so that housing remains permanently affordable.",
  cards: [
    {
      id: '1',
      title: 'Non-profit entity',
      description: 'Works with housing co-ops and non-profit developers to support affordable housing',
      icon: <Users2 size={24} />
    },
    {
      id: '2',
      title: 'Target households',
      description: 'Focuses on low- and middle-income households who need affordable housing options',
      icon: <Home size={24} />
    },
    {
      id: '3',
      title: 'Partnership approach',
      description: 'Partners with municipalities, provincial agencies, and co-operative housing providers',
      icon: <Settings size={24} />
    },
    {
      id: '4',
      title: 'Long-term affordability',
      description: 'Secures land and ensures long-term affordability for future generations',
      icon: <Shield size={24} />
    },
    {
      id: '5',
      title: 'BC Examples',
      description: 'Examples in BC include "McHardy", "Sunshine", and "Sawmill" co-ops',
      icon: <TreePine size={24} />
    }
  ],
  bgColor: 'bg-emerald-800/40',
  titleColor: 'text-emerald-800'
};

export const ownershipModelsData = [
  {
    id: '1',
    title: 'Co-operative Ownership',
    description: 'Traditional model where the housing co-operative owns the land and buildings',
    subItems: [
      'Co-operative directly owns the land and buildings',
      'Members collectively manage the assets',
      'Potential burden due to rising land prices',
      'Possible concerns about long-term economic viability'
    ],
    icon: <Users2 size={24} />
  },
  {
    id: '2',
    title: 'Community Land Trust (CLT) Model',
    description: 'CLT owns the land while the co-op owns the buildings, ensuring permanent affordability',
    subItems: [
      'CLT owns the land, co-operative owns the buildings',
      'Land is removed from the market to ensure permanent affordability',
      'Protection from rising land prices',
      'Sustainable affordable housing across generations',
      'Higher rent compared to traditional co-op housing',
      'More new constructions compared to traditional co-op housing'
    ],
    icon: <TreePine size={24} />
  }
];

// Ownership Models subsection
export const ownershipModelsSection = {
  title: "2-3. Co-op Ownership Models",
  description: "Co-operative housing can be structured under different ownership models, each with distinct advantages for affordability and community control.",
  cards: ownershipModelsData,
  bgColor: 'bg-slate-500/20',
  titleColor: 'text-slate-700',
  cardWidth: 400
};

// Application Process subsection
export const applicationProcessSection = {
  title: "2-5. How Do People Find Homes in Co-ops?",
  description: "Becoming a member in a housing co-op involves eligibility criteria, application processes, and matching to units.",
  generalRequirementsTitle: "General Requirements",
  applicationTypesTitle: "Application Process Types",
  resourcesTitle: "Application Resources:",
  resources: [
    "chf.bc.ca/find-co-op – directory of co-op listings in BC",
    "bchousing.org – provincial housing supports",
    "cltrust.ca – information on Community Land Trusts and co-op partnerships"
  ]
};

// Supports and Learning Resources section
export const supportsResourcesSection = {
  title: "3. Supports and Learning Resources"
};

// Financial Supports subsection
export const financialSupportsSection = {
  title: "3-1. Financial Supports for New Members",
  description: "Special financial assistance programs are available to help members overcome barriers to co-op housing."
};

export const financialSupportsData = [
  {
    id: '1',
    title: 'Disability Trust Fund',
    description: 'Assists members with permanent disabilities and financial need',
    icon: <HandHeart size={24} />
  },
  {
    id: '2',
    title: 'Domestic Violence Relief Fund',
    description: 'Supports women escaping or at risk of abuse who need housing stability',
    icon: <Shield size={24} />
  }
];

// Learning Resources subsection
export const learningResourcesSection = {
  title: "3-2. Learning Resources",
  description: "Educational materials and training programs to help members and potential residents understand co-op housing."
};

export const learningResourcesData = [
  {
    id: '1',
    title: 'What is a Housing Co-op? Video',
    description: 'Educational resource from CHF BC illustrating how co-ops work',
    icon: <GraduationCap size={24} />
  },
  {
    id: '2',
    title: 'Centre for Co-operative Learning',
    description: 'A training hub for co-op members and boards',
    icon: <Users2 size={24} />
  }
];

// Additional Supports subsection
export const additionalSupportsSection = {
  title: "3-3. Additional Supports",
  description: "Member co-ops receive comprehensive resources and support services through CHF BC.",
  cards: [
    {
      id: '1',
      title: 'Model Rules and Policies',
      description: 'Standardized governance templates and policy frameworks for member co-ops',
      icon: <FileText size={24} />
    },
    {
      id: '2',
      title: 'Governance Support',
      description: 'Professional guidance and training for co-op boards and management',
      icon: <Settings size={24} />
    },
    {
      id: '3',
      title: 'Group-buying Programs',
      description: 'Access to bulk purchasing programs for maintenance, utilities, and services',
      icon: <Building2 size={24} />
    },
    {
      id: '4',
      title: 'CHF BC Resources',
      description: 'Comprehensive support network through the Co-operative Housing Federation of BC',
      icon: <Users2 size={24} />
    }
  ],
  bgColor: 'bg-violet-400/40',
  titleColor: 'text-violet-800'
};

// Membership subsection
export const membershipSection = {
  title: "2-1. Membership and Housing Options",
  description: "Co-operative housing offers different membership types and housing arrangements to meet diverse community needs.",
  cards: [
    {
      id: '1',
      title: 'Market Housing Members',
      description: 'Pay full market housing charges without subsidies',
      icon: <Home size={24} />,
      subItems: [
        'Pay full housing charges based on actual costs',
        'No income restrictions at move-in',
        'Help cross-subsidize units with subsidies',
        'Full voting rights and board participation'
      ]
    },
    {
      id: '2',
      title: 'Rent-Geared-to-Income (RGI) Members',
      description: 'Pay housing charges based on percentage of household income',
      icon: <DollarSign size={24} />,
      subItems: [
        'Pay 25-30% of gross household income',
        'Income and asset limits apply',
        'Government subsidy covers difference',
        'Must meet ongoing eligibility requirements'
      ]
    },
    {
      id: '3',
      title: 'Housing Allowance Program (HAP)',
      description: 'Portable housing benefit that can be used in co-ops',
      icon: <FileText size={24} />,
      subItems: [
        'Portable benefit that moves with household',
        'Can be used in private market or co-ops',
        'Income and asset requirements',
        'Priority for families with children'
      ]
    }
  ],
  bgColor: 'bg-green-800/40',
  titleColor: 'text-green-900',
  cardWidth: 400
};

// Application subsection  
export const applicationSection = {
  title: "3-1. Financial Supports for New Members",
  description: "Special financial assistance programs are available to help members overcome barriers to co-op housing."
};

// Governance subsection
export const governanceSection = {
  title: "3-2. Learning Resources",
  description: "Educational materials and training programs to help members and potential residents understand co-op housing.",
  cards: [
    {
      id: '1',
      title: 'What is a Housing Co-op? Video',
      description: 'Educational resource from CHF BC illustrating how co-ops work',
      icon: <GraduationCap size={24} />
    },
    {
      id: '2',
      title: 'Centre for Co-operative Learning',
      description: 'A training hub for co-op members and boards',
      icon: <Users2 size={24} />
    },
    {
      id: '3',
      title: 'Member Orientation Programs',
      description: 'Comprehensive training for new co-op members on rights and responsibilities',
      icon: <FileText size={24} />
    }
  ],
  bgColor: 'bg-cyan-400/40',
  titleColor: 'text-cyan-800',
  cardWidth: 400
};