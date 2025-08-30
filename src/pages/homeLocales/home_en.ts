// src/locales/home_en.ts
import { Mail, Phone, MapPin, Users, Heart, BookOpen, Globe, ArrowRight } from "lucide-react";

export const homeEn = {
  hero: {
    title: ["KOREAN COMMUNITY WORKERS NETWORK"],
    subtitle:
      "Korean Community Workers Network (KCWN) is a registered charity \n with 50+ members from non-profit, education, and government fields.",
    buttons: {
      learnMore: "Learn More",
      getInvolved: "Get Involved",
    },
  },

  mission: {
    heading: "Our Mission",
    paragraphs: [
      "KCWN will offer settlement and employment support for diverse ethnic groups, including citizens, permanent residents, refugees, and newcomers, assisting their integration into Canada.",
      "Additionally, KCWN will engage with diverse ethnic communities in British Columbia, promoting awareness and celebration of Korean culture and its global recognition.",
    ],
    cards: [
      {
        icon: Users,
        title: "50+ Active Members",
        description:
          "Professionals from non-profit, education, and government sectors working together.",
      },
      {
        icon: Heart,
        title: "Registered Charity",
        description:
          "Officially registered charitable organization dedicated to community service.",
      },
      {
        icon: Globe,
        title: "Diverse Communities",
        description:
          "Supporting various ethnic groups throughout British Columbia.",
      },
    ],
  },

  vision: {
    heading: "OUR VISION",
    subtitle:
      "To lead, educate, assist, and develop \nthe Korean and diverse ethnic communities",
    items: [
      { icon: ArrowRight, title: "LEAD", description: "Providing leadership in community development" },
      { icon: BookOpen, title: "EDUCATE", description: "Offering educational resources and programs" },
      { icon: Heart, title: "ASSIST", description: "Supporting settlement and employment needs" },
      { icon: Users, title: "DEVELOP", description: "Building stronger, more connected communities" },
    ],
  },

  programs: {
    heading: "Our Programs",
    items: [
      {
        icon: Users,
        title: "Settlement Support",
        description:
          "Comprehensive support for newcomers, permanent residents, and refugees to help them integrate into Canadian society.",
        link: "#settlement",
      },
      {
        icon: BookOpen,
        title: "Employment Support",
        description:
          "Job search assistance, skills development, and career guidance for diverse ethnic communities in BC.",
        link: "#employment",
      },
      {
        icon: Heart,
        title: "Tracing Hope",
        description:
          "Our federally funded program providing specialized support and resources for community members.",
        link: "#tracing-hope",
      },
    ],
  },

  culture: {
    heading: "Promoting Korean Culture",
    subtitle:
      "We celebrate and promote awareness of Korean culture \nwhile fostering understanding among diverse ethnic communities in British Columbia.",
    features: [
      {
        icon: Globe,
        title: "Cultural Awareness",
        description:
          "Promoting understanding and appreciation of Korean heritage and traditions.",
      },
      {
        icon: Users,
        title: "Community Integration",
        description:
          "Building bridges between Korean and diverse ethnic communities.",
      },
      {
        icon: Heart,
        title: "Global Recognition",
        description:
          "Enhancing the global recognition and appreciation of Korean culture.",
      },
    ],
  },

  contact: {
    items: [
      { icon: Mail, title: "Email Us", info: "info@kcwn.ca" },
      { icon: Phone, title: "Call Us", info: "(604) XXX-XXXX" },
      { icon: MapPin, title: "Visit Us", info: "Vancouver, BC\nCanada" },
    ],
  },
};
