import { DollarSign, Shield, Users, TrendingUp, Heart, UserCheck, TrendingDown, Clock } from 'lucide-react';

// Page header content
export const pageHeader = {
  title: "Co-op Housing",
  backgroundImage: "/imgs/co-op/co-opHousing.webp"
};

// Why section content
export const whySection = {
  title: "1. Why is Co-op Housing Needed?",
  description: "Co-operative housing meets an urgent need in British Columbia's housing market. With many renters spending over 30% of their gross income on shelter, and one in four paying more than half their income, affordability is a serious crisis. Co-op housing typically costs 20-30% less than average rental rates in Metro Vancouver, making it a crucial affordable housing option for many families and individuals.",
  highlightText: "20-30% less than average rental rates"
};

// Advantages section content
export const advantagesSection = {
  title: "Advantages",
  description: "Key benefits include:"
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

// Disadvantages section content
export const disadvantagesSection = {
  title: "Disadvantages",
  description: "While co-op housing has many advantages, it also comes with trade-offs that potential members need to understand:"
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

// Gallery section content
export const gallerySection = {
  title: "Gallery"
};