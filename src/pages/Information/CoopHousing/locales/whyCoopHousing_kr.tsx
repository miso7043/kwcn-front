import { DollarSign, Shield, Users, TrendingUp, Heart, UserCheck, TrendingDown, Clock } from 'lucide-react';

export const advantageCards = [
  {
    id: '1',
    title: '저렴한 주거 비용',
    description: '협동조합 주택은 투자 수익을 목표로 하지 않고 실제 비용 기반의 비영리 구조로 운영되기 때문에, 주거비가 실제 운영비를 더 정확히 반영합니다.',
    icon: <DollarSign size={24} />
  },
  {
    id: '2',
    title: '안정적인 거주 보장',
    description: '대부분의 협동조합에서는 규칙을 준수하고 주거비를 납부하는 한 장기간 거주가 가능하여 일반 임대보다 안정성이 높습니다.',
    icon: <Shield size={24} />
  },
  {
    id: '3',
    title: '회원의 통제권과 커뮤니티 참여',
    description: '회원들은 투표권을 가지고, 이사회에 참여하며, 공동체 운영에 직접 참여할 수 있어 사회적 연결과 참여도가 높아집니다.',
    icon: <Users size={24} />
  },
  {
    id: '4',
    title: '생활 및 직무 기술 향상',
    description: '협동조합 참여를 통해 거버넌스, 위원회 활동, 유지관리 감독 등 다양한 역할을 경험하며 팀워크와 리더십 능력을 키울 수 있습니다.',
    icon: <TrendingUp size={24} />
  },
  {
    id: '5',
    title: '지속 가능한 커뮤니티를 지향하는 협동조합 운동',
    description: '협동조합은 시장 중심 모델이 아닌 지역 기반 주거 해결 방식으로서 지속 가능한 공동체 구축에 기여합니다.',
    icon: <Heart size={24} />
  }
];


export const disadvantageCards = [
  {
    id: '1',
    title: '적극적인 참여 요구',
    description: '협동조합 거주는 회의, 위원회, 공동 책임 등 커뮤니티 활동이 필수적입니다. 개인적 개입을 최소화하고 싶다면 단점이 될 수 있습니다.',
    icon: <UserCheck size={24} />
  },
  {
    id: '2',
    title: '개인 자산(에쿼티) 증가 없음',
    description: '대부분의 비영리 협동조합은 개인 재산 증식을 위한 구조가 아니며, 콘도 소유처럼 시세 차익을 얻을 수 없습니다.',
    icon: <TrendingDown size={24} />
  },
  {
    id: '3',
    title: '한정된 공급량',
    description: '협동조합 주택은 일반 임대나 소유주택에 비해 공급량이 적어 대기자 명단, 소득/자격 요건 등 접근이 어려울 수 있습니다.',
    icon: <Clock size={24} />
  }
];
