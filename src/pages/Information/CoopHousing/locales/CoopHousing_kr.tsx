import { Home, Building2, Users2, FileSearch, Settings, TreePine, Shield, HandHeart, GraduationCap, FileText, DollarSign, Users, TrendingUp, Heart, UserCheck, TrendingDown, Clock } from 'lucide-react';

// Page header content
export const pageHeader = {
  title: "협동조합 주택",
  backgroundImage: "/imgs/co-op/co-opHousing.webp"
};

// Why section content
export const whySection = {
  title: "1. 왜 협동조합 주택이 필요한가?",
  description: "협동조합 주택은 브리티시컬럼비아의 주택 시장에서 긴급한 필요를 충족합니다. 많은 임차인들이 총소득의 30% 이상을 주거비로 지출하고, 4명 중 1명은 소득의 절반 이상을 지불하는 상황에서 주거비 부담은 심각한 위기입니다. 협동조합 주택은 일반적으로",
  highlightText: "평균 임대료보다 20-30% 저렴하여",
  descriptionSuffix: "메트로 밴쿠버 지역에서 많은 가족과 개인에게 중요한 저렴한 주택 옵션을 제공합니다."
};

export const advantageCards = [
  {
    id: '1',
    title: '저렴한 주거비',
    description: '협동조합은 투자자 이익 창출보다는 비영리 "실비" 기준으로 운영되어, 실제 비용을 더 잘 반영하는 주거비를 가능하게 합니다.',
    icon: <DollarSign size={24} />
  },
  {
    id: '2',
    title: '거주 안정성',
    description: '많은 협동조합에서는 규칙을 따르고 주거비를 지불하는 한 원하는 만큼 거주할 수 있어, 많은 임대 계약보다 더 안정적입니다.',
    icon: <Shield size={24} />
  },
  {
    id: '3',
    title: '조합원 통제 및 지역사회 참여',
    description: '조합원들은 투표권을 가지고, 이사회에 참여하며, 지역사회 운영 방식을 결정하여 참여와 사회적 연결을 구축합니다.',
    icon: <Users size={24} />
  },
  {
    id: '4',
    title: '생활 및 직업 기술 개발',
    description: '협동조합의 일원이 된다는 것은 거버넌스, 위원회, 유지관리 감독에 참여하여 팀워크와 리더십 기술을 구축하는 것을 의미합니다.',
    icon: <TrendingUp size={24} />
  },
  {
    id: '5',
    title: '지속 가능한 지역사회를 촉진하는 협동조합 운동의 일부',
    description: '협동조합은 순전히 시장 주도가 아닌 지역사회 기반의 주택 솔루션에 기여합니다.',
    icon: <Heart size={24} />
  }
];

// Advantages section content
export const advantagesSection = {
  title: "장점",
  description: "주요 혜택은 다음과 같습니다:",
  cards: advantageCards,
  bgColor: 'bg-blue-400/60',
  titleColor: 'text-blue-800'
};

export const disadvantageCards = [
  {
    id: '1',
    title: '적극적인 참여 필요',
    description: '협동조합에서 생활한다는 것은 거버넌스, 회의, 위원회 및 공유 책임이 있는 지역사회의 일원이 되는 것입니다. 최소한의 상호작용과 감독을 선호한다면 이는 단점이 될 수 있습니다.',
    icon: <UserCheck size={24} />
  },
  {
    id: '2',
    title: '개인 자산 증가 없음',
    description: '대부분의 비영리 협동조합은 개별 조합원을 위한 재판매 이익을 창출하도록 설계되지 않았습니다. 콘도 소유처럼 개인 재산을 축적하지 못할 수 있습니다.',
    icon: <TrendingDown size={24} />
  },
  {
    id: '3',
    title: '제한된 이용 가능성',
    description: '전통적인 임대나 소유 옵션보다 협동조합 유닛이 적습니다; 대기자 명단과 소득/자격 기준으로 인해 접근이 어려울 수 있습니다.',
    icon: <Clock size={24} />
  }
];

// Disadvantages section content
export const disadvantagesSection = {
  title: "단점",
  description: "협동조합 주택에는 많은 장점이 있지만, 잠재적 조합원들이 이해해야 할 절충안도 있습니다:",
  cards: disadvantageCards,
  bgColor: 'bg-red-800/20',
  titleColor: 'text-red-400'
};

// Gallery section content
export const gallerySection = {
  title: "갤러리"
};

// What is Co-op Housing section content
export const whatIsCoopSection = {
  title: "2. 협동조합 주택이란?"
};

// Membership subsection
export const membershipSection = {
  title: "2-1. 조합원 자격 및 주택 옵션",
  description: "협동조합 주택은 다양한 지역사회 요구를 충족하기 위해 다양한 조합원 유형과 주택 배치를 제공합니다.",
  cards: [
    {
      id: '1',
      title: '시장 주택 조합원',
      description: '보조금 없이 전체 시장 주거비를 지불',
      icon: <Home size={24} />,
      subItems: [
        '실제 비용을 기반으로 한 전체 주거비 지불',
        '입주 시 소득 제한 없음',
        '보조금이 있는 유닛을 교차 보조하는 데 도움',
        '완전한 투표권과 이사회 참여'
      ]
    },
    {
      id: '2',
      title: '소득 비례 임대료(RGI) 조합원',
      description: '가계 소득의 비율에 따른 주거비 지불',
      icon: <DollarSign size={24} />,
      subItems: [
        '총 가계 소득의 25-30% 지불',
        '소득 및 자산 한도 적용',
        '정부 보조금으로 차액 보전',
        '지속적인 자격 요건 충족 필요'
      ]
    },
    {
      id: '3',
      title: '주택 수당 프로그램(HAP)',
      description: '협동조합에서 사용할 수 있는 휴대용 주택 혜택',
      icon: <FileText size={24} />,
      subItems: [
        '가구와 함께 이동하는 휴대용 혜택',
        '민간 시장이나 협동조합에서 사용 가능',
        '소득 및 자산 요건',
        '자녀가 있는 가족 우선'
      ]
    }
  ],
  bgColor: 'bg-green-800/40',
  titleColor: 'text-green-900',
  cardWidth: 400
};

// Co-op Types subsection
export const coopTypesSection = {
  title: "2-2. BC의 협동조합 유형, 위치 및 수",
  description: "브리티시컬럼비아에는 260개 이상의 비영리 주택 협동조합이 있습니다. 대부분은 메트로 밴쿠버와 밴쿠버 섬에 위치해 있습니다.",
  cards: [
    {
      id: '1',
      title: '비영리 협동조합',
      description: '주거권만 있음, 투자수익 없음',
      subItems: [
        '주거권만 있음, 투자수익 없음',
        '지분 매입 없음',
        '최대한 저렴, 정부지원 가능',
        '조합원 자격 상실 시만 퇴거',
        '비영리성, 민주적 운영, 사회적 목적',
        '협동조합 단체가 소유'
      ],
      icon: <Users2 size={24} />
    },
    {
      id: '2',
      title: '지분 협동조합',
      description: '투자 가능성이 있는 지분 소유',
      subItems: [
        '지분(share)을 소유, 매매 가능, 자본이득 가능',
        '주거권에 해당하는 지분 매입',
        '보통 시세와 비슷, 유지비 별도',
        '지분 판매하여 타인에게 양도 가능',
        '투자 성격 요소 존재, 커뮤니티 참여도 병행',
        '협동조합 단체가 소유, 지분 형태로 권리 행사'
      ],
      icon: <Building2 size={24} />
    }
  ],
  bgColor: 'bg-purple-600/40',
  titleColor: 'text-purple-800',
  cardWidth: 400
};

export const ownershipModelsData = [
  {
    id: '1',
    title: '협동조합 소유',
    description: '주택 협동조합이 토지와 건물을 소유하는 전통적 모델',
    subItems: [
      '협동조합이 토지와 건물을 직접 소유',
      '조합원들이 집합적으로 자산을 관리',
      '토지 가격 상승에 따른 부담',
      '장기적 경제성에 대한 우려 가능'
    ],
    icon: <Users2 size={24} />
  },
  {
    id: '2',
    title: '커뮤니티 토지 신탁(CLT) 모델',
    description: 'CLT가 토지를 소유하고 협동조합이 건물을 소유하여 영구적인 경제성을 보장',
    subItems: [
      'CLT가 토지 소유, 협동조합이 건물 소유',
      '토지를 시장에서 분리하여 영구 저렴성 보장',
      '토지 가격 상승으로부터 보호',
      '세대 간 저렴한 주거 지속 가능',
      '전통적인 협동조합 주택 대비 임대료 비쌈',
      '전통적인 협동조합 주택 대비 신축 건물이 더 많음'
    ],
    icon: <TreePine size={24} />
  }
];

// Ownership Models subsection
export const ownershipModelsSection = {
  title: "2-3. 협동조합 소유 모델",
  description: "협동조합 주택은 각각 경제성과 지역사회 통제에 대한 뚜렷한 장점을 가진 다양한 소유 모델 하에 구조화될 수 있습니다.",
  cards: ownershipModelsData,
  bgColor: 'bg-slate-500/20',
  titleColor: 'text-slate-700',
  cardWidth: 400
};

export const cltSection = {
  title: "2-4. 커뮤니티 토지 신탁(CLT)이란?",
  description: "커뮤니티 토지 신탁 모델은 토지를 소유하거나 통제하여 주택이 영구적으로 저렴하게 유지되도록 함으로써 협동조합 주택을 지원합니다.",
  cards: [
    {
      id: '1',
      title: '비영리 단체',
      description: '저렴한 주택을 지원하기 위해 주택 협동조합 및 비영리 개발업체와 협력',
      icon: <Users2 size={24} />
    },
    {
      id: '2',
      title: '대상 가구',
      description: '저렴한 주택 옵션이 필요한 저소득 및 중산층 가구에 중점',
      icon: <Home size={24} />
    },
    {
      id: '3',
      title: '파트너십 접근법',
      description: '지방자치단체, 주정부 기관, 협동조합 주택 제공업체와 파트너십',
      icon: <Settings size={24} />
    },
    {
      id: '4',
      title: '장기 경제성',
      description: '토지를 확보하고 미래 세대를 위한 장기 경제성을 보장',
      icon: <Shield size={24} />
    },
    {
      id: '5',
      title: 'BC 사례',
      description: 'BC의 사례로는 "McHardy", "Sunshine", "Sawmill" 협동조합이 있음',
      icon: <TreePine size={24} />
    }
  ],
  bgColor: 'bg-emerald-800/40',
  titleColor: 'text-emerald-800'
};

// Application Process subsection
export const applicationProcessSection = {
  title: "2-5. 사람들은 어떻게 협동조합에서 집을 찾나요?",
  description: "주택 협동조합의 조합원이 되는 것은 자격 기준, 신청 과정, 유닛 매칭을 포함합니다.",
  generalRequirementsTitle: "일반 요건",
  applicationTypesTitle: "신청 과정 유형",
  resourcesTitle: "신청 자원:",
  resources: [
    "chf.bc.ca/find-co-op – BC 협동조합 목록 디렉토리",
    "bchousing.org – 주정부 주택 지원",
    "cltrust.ca – 커뮤니티 토지 신탁 및 협동조합 파트너십 정보"
  ]
};

export const applicationProcessData = [
  {
    id: '1',
    title: '자격 요건',
    description: '일반적으로 캐나다 시민, 영주권자 또는 적격 난민이어야 함',
    icon: <FileSearch size={24} />
  },
  {
    id: '2',
    title: '소득 요건',
    description: '일부 협동조합과 보조금 프로그램은 입주 시 최대 소득 한도를 설정',
    icon: <Building2 size={24} />
  },
  {
    id: '3',
    title: '주택 적합성',
    description: '가구 규모와 유닛 크기 매칭, 주거비 의무 이행, 조합원 규칙 동의',
    icon: <Home size={24} />
  }
];

export const applicationTypesData = [
  {
    id: '1',
    title: '개별 협동조합 신청',
    description: '독립적인 협동조합을 위한 전통적인 신청 과정',
    subItems: [
      '각 협동조합 웹사이트나 사무실에 직접 신청',
      '여러 협동조합에 개별적으로 연락해야 함',
      '6개월마다 이메일이나 전화로 신청서 업데이트',
      '정기적인 후속 조치로 더 높은 기회',
      '시간이 더 걸리지만 커뮤니티와 직접 접촉'
    ],
    icon: <Home size={24} />
  },
  {
    id: '2',
    title: '커뮤니티 토지 신탁 신청',
    description: 'CLT 관리를 통한 중앙화된 신청 과정',
    subItems: [
      '커뮤니티 토지 신탁 웹사이트를 통한 단일 신청',
      'CLT가 여러 협동조합 주택 옵션을 관리',
      '중앙화된 업데이트 및 커뮤니케이션',
      '더 편리하고 간소화된 과정',
      '여러 주택 기회를 추적하기 쉬움'
    ],
    icon: <Settings size={24} />
  }
];

export const coopPrinciplesSection = {
  title: "2-6. 협동조합 원칙",
  description: "협동조합은 지도 가치에 따라 운영됩니다:",
  cards: [
    {
      id: '1',
      title: '자발적이고 개방적인 조합원 가입',
      description: '서비스를 이용할 수 있고 조합원 책임을 받아들일 의지가 있는 모든 사람에게 개방',
      icon: <Users2 size={24} />
    },
    {
      id: '2',
      title: '민주적 조합원 통제',
      description: '정책 설정과 의사결정에 적극적으로 참여하는 조합원들이 통제',
      icon: <Settings size={24} />
    },
    {
      id: '3',
      title: '조합원의 경제적 참여',
      description: '조합원들이 협동조합의 자본에 공평하게 기여',
      icon: <Building2 size={24} />
    },
    {
      id: '4',
      title: '자율성과 독립성',
      description: '조합원들이 통제하는 자율적이고 자조적인 조직',
      icon: <Home size={24} />
    }
  ],
  bgColor: 'bg-indigo-400/50',
  titleColor: 'text-indigo-800'
};

export const coopLivingSection = {
  title: "2-7. 협동조합 생활",
  description: "주택 협동조합에서 생활한다는 것은 단순히 유닛에 거주하는 것 이상을 의미합니다—지역사회 거버넌스, 권리, 의무, 공유 책임이 있습니다.",
  cards: [
    {
      id: '1',
      title: '거버넌스 구조',
      description: '조합원들이 자신들 중에서 이사회를 선출. 이사회는 관리를 감독하고, 규칙 준수를 보장하며, 신규 조합원을 승인하고, 주거비를 설정',
      icon: <Settings size={24} />
    },
    {
      id: '2',
      title: '조합원 책임',
      description: '주거비를 제때 지불하고, 협동조합 규칙과 정책을 준수하며, 회의와 위원회에 참여하고, 유닛 상태를 유지하며 좋은 이웃이 되기',
      icon: <Users2 size={24} />
    },
    {
      id: '3',
      title: '이사회 책임',
      description: '주의와 충성의 법적 의무, 민주적 거버넌스 보장, 재정 및 운영 감독',
      icon: <Building2 size={24} />
    },
    {
      id: '4',
      title: '주거비 및 보조금',
      description: '주거비는 운영비와 적립금을 포함. 자금 지원 협정이 있는 경우 일부 유닛은 보조금을 받을 수 있음',
      icon: <Home size={24} />
    }
  ],
  bgColor: 'bg-teal-500/40',
  titleColor: 'text-teal-800'
};

// Supports and Learning Resources section
export const supportsResourcesSection = {
  title: "3. 지원 및 학습 자원"
};

// Financial Supports for new members section
export const financialSupportsForMembersSection = {
  title: "3-1. 신규 조합원을 위한 재정 지원",
  description: "조합원들이 협동조합 주택에 대한 장벽을 극복할 수 있도록 특별한 재정 지원 프로그램이 제공됩니다.",
  cards: [
    {
      id: '1',
      title: '장애 신탁 기금',
      description: '영구 장애와 재정적 필요가 있는 조합원을 지원',
      icon: <HandHeart size={24} />
    },
    {
      id: '2',
      title: '가정폭력 구제 기금',
      description: '주거 안정성이 필요한 학대를 피하거나 위험에 처한 여성을 지원',
      icon: <Shield size={24} />
    }
  ],
  bgColor: 'bg-blue-400/40',
  titleColor: 'text-pink-900',
  cardWidth: 400
};

export const governanceSection = {
  title: "3-2. 학습 자원",
  description: "조합원과 잠재적 거주자가 협동조합 주택을 이해할 수 있도록 돕는 교육 자료와 교육 프로그램입니다.",
  cards: [
    {
      id: '1',
      title: '주택 협동조합이란? 비디오',
      description: '협동조합이 어떻게 작동하는지 설명하는 CHF BC의 교육 자료',
      icon: <GraduationCap size={24} />
    },
    {
      id: '2',
      title: '협동조합 학습 센터',
      description: '협동조합 조합원과 이사회를 위한 교육 허브',
      icon: <Users2 size={24} />
    },
    {
      id: '3',
      title: '조합원 오리엔테이션 프로그램',
      description: '새로운 협동조합 조합원의 권리와 책임에 대한 포괄적인 교육',
      icon: <FileText size={24} />
    }
  ],
  bgColor: 'bg-cyan-400/40',
  titleColor: 'text-cyan-800',
  cardWidth: 400
};

export const additionalSupportsSection = {
  title: "3-3. 추가 지원",
  description: "조합원 협동조합은 CHF BC를 통해 포괄적인 자원과 지원 서비스를 받습니다.",
  cards: [
    {
      id: '1',
      title: '모델 규칙 및 정책',
      description: '조합원 협동조합을 위한 표준화된 거버넌스 템플릿 및 정책 프레임워크',
      icon: <FileText size={24} />
    },
    {
      id: '2',
      title: '거버넌스 지원',
      description: '협동조합 이사회 및 관리를 위한 전문적인 지도 및 교육',
      icon: <Settings size={24} />
    },
    {
      id: '3',
      title: '그룹 구매 프로그램',
      description: '유지보수, 유틸리티 및 서비스에 대한 대량 구매 프로그램 접근',
      icon: <Building2 size={24} />
    },
    {
      id: '4',
      title: 'CHF BC 자원',
      description: 'BC 협동조합 주택 연맹을 통한 포괄적인 지원 네트워크',
      icon: <Users2 size={24} />
    }
  ],
  bgColor: 'bg-violet-400/40',
  titleColor: 'text-violet-800'
};