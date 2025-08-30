// src/locales/home_ko.ts
import { Mail, Phone, MapPin, Users, Heart, BookOpen, Globe, ArrowRight } from "lucide-react";

export const homeKo = {
  hero: {
    title: ["한인 커뮤니티 워커스 네트워크"],
    subtitle:
      "한인 커뮤니티 워커스 네트워크(KCWN)는 \n비영리, 교육, 정부 분야의 50명 이상의 회원이 함께하는 등록된 자선 단체입니다.",
    buttons: {
      learnMore: "자세히 보기",
      getInvolved: "참여하기",
    },
  },

  mission: {
    heading: "우리의 사명",
    paragraphs: [
      "KCWN은 시민, 영주권자, 난민, 신입 이민자를 포함한 다양한 민족 집단에게 정착 및 고용 지원을 제공하여 캐나다 사회에 성공적으로 정착할 수 있도록 돕습니다.",
      "또한, 브리티시컬럼비아주 내 다양한 민족 커뮤니티와 교류하며 한국 문화에 대한 인식과 축하, 그리고 세계적 인정 확대를 추진합니다.",
    ],
    cards: [
      {
        icon: Users,
        title: "50명 이상의 활동 회원",
        description: "비영리, 교육, 정부 부문의 전문가들이 함께 활동하고 있습니다.",
      },
      {
        icon: Heart,
        title: "등록된 자선단체",
        description: "지역 사회 봉사를 위해 공식적으로 등록된 자선 단체입니다.",
      },
      {
        icon: Globe,
        title: "다양한 커뮤니티",
        description: "브리티시컬럼비아 전역의 여러 민족 커뮤니티를 지원합니다.",
      },
    ],
  },

  vision: {
    heading: "우리의 비전",
    subtitle: "한국 및 다양한 민족 커뮤니티를 \n이끌고, 교육하며, 지원하고, 발전시킵니다.",
    items: [
      { icon: ArrowRight, title: "리드(LEAD)", description: "지역 사회 개발에서 리더십을 발휘합니다." },
      { icon: BookOpen, title: "교육(EDUCATE)", description: "교육 자료와 프로그램을 제공합니다." },
      { icon: Heart, title: "지원(ASSIST)", description: "정착 및 고용 관련 필요를 지원합니다." },
      { icon: Users, title: "발전(DEVELOP)", description: "더 강하고 연결된 커뮤니티를 만들어갑니다." },
    ],
  },

  programs: {
    heading: "우리의 프로그램",
    items: [
      {
        icon: Users,
        title: "정착 지원",
        description:
          "신규 이민자, 영주권자, 난민을 포함한 사람들이 캐나다 사회에 적응할 수 있도록 종합적인 지원을 제공합니다.",
        link: "#settlement",
      },
      {
        icon: BookOpen,
        title: "고용 지원",
        description:
          "일자리 탐색 지원, 기술 개발, 커리어 가이던스를 통해 브리티시컬럼비아의 다양한 민족 커뮤니티를 돕습니다.",
        link: "#employment",
      },
      {
        icon: Heart,
        title: "Tracing Hope",
        description:
          "연방 정부 지원을 받아 커뮤니티 구성원에게 전문적인 지원과 자원을 제공하는 프로그램입니다.",
        link: "#tracing-hope",
      },
    ],
  },

  culture: {
    heading: "한국 문화 확산",
    subtitle:
      "우리는 한국 문화를 기념하고 알리며, \n브리티시컬럼비아 내 다양한 민족 커뮤니티 간의 이해를 증진합니다.",
    features: [
      {
        icon: Globe,
        title: "문화 인식 제고",
        description: "한국의 전통과 유산을 이해하고 존중하는 문화를 확산합니다.",
      },
      {
        icon: Users,
        title: "커뮤니티 통합",
        description: "한국 커뮤니티와 다양한 민족 커뮤니티 사이에 다리를 놓습니다.",
      },
      {
        icon: Heart,
        title: "세계적 인정",
        description: "한국 문화의 세계적 인정과 가치 향상을 위해 노력합니다.",
      },
    ],
  },

  contact: {
    items: [
      { icon: Mail, title: "이메일 문의", info: "info@kcwn.ca" },
      { icon: Phone, title: "전화 문의", info: "(604) XXX-XXXX" },
      { icon: MapPin, title: "방문하기", info: "Vancouver, BC\nCanada" },
    ],
  },
};
