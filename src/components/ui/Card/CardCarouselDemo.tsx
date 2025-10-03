import React from 'react';
import { CardCarousel } from './CardCarousel';
import type { CardData } from './CardCarousel';

// 예제 사용법과 데모
export const CardCarouselDemo: React.FC = () => {
    // 재사용 가능한 버튼 컴포넌트 생성 헬퍼 (p 태그 제거, CardCarousel에서 처리)
    const createCardContent = (buttonText: string, buttonColor: string) => (
        <div>
            <button className={`mt-2 px-4 py-2 ${buttonColor} text-white rounded-lg hover:${buttonColor.replace('bg-', 'bg-').replace('-600', '-700')} transition-colors`}>
                {buttonText}
            </button>
        </div>
    );

    // 샘플 카드 데이터
    const sampleCards: CardData[] = [
        {
            id: '1',
            title: 'Community Events',
            description: '한국 여성 커뮤니티의 다양한 이벤트와 행사에 참여하세요.',
            image: '/imgs/history/event_001.webp',
            info: '다음 이벤트: 10월 15일',
            contentColor: 'text-gray-300',
            content: createCardContent('자세히 보기', 'bg-red-600')
        },
        {
            id: '2',
            title: 'Job Academy',
            description: '취업을 위한 전문 교육과 멘토링 프로그램을 제공합니다.',
            image: '/imgs/jobacademy/lecture1-02.jpg',
            info: '14개 강의 시리즈',
            contentColor: 'text-blue-200',
            content: createCardContent('수강하기', 'bg-green-600')
        },
        {
            id: '3',
            title: 'Cultural Programs',
            description: '한국 문화를 체험하고 공유할 수 있는 다양한 프로그램',
            image: '/imgs/bgs/main-3.webp',
            info: '매주 토요일',
            contentColor: 'text-yellow-200',
            content: createCardContent('참여하기', 'bg-blue-600')
        },
        {
            id: '4',
            title: 'Networking',
            description: '전문가들과의 네트워킹 기회를 통해 성장하세요.',
            info: '월 2회 모임',
            contentColor: 'text-purple-200',
            content: createCardContent('가입하기', 'bg-purple-600')
        },
        {
            id: '5',
            title: 'Support Groups',
            description: '서로를 지원하고 격려하는 커뮤니티 그룹',
            info: '온라인 & 오프라인',
            contentColor: 'text-pink-200',
            content: createCardContent('참여하기', 'bg-pink-600')
        },
        {
            id: '6',
            title: 'Volunteer Work',
            description: '지역 사회에 기여할 수 있는 봉사 활동 기회',
            image: '/imgs/jobacademy/govolunteer.jpg',
            info: '유연한 시간',
            contentColor: 'text-orange-200',
            content: createCardContent('신청하기', 'bg-orange-600')
        }
    ];

    return (
        <div className="p-6 bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-white text-center mb-8">
                    KWCN Card Carousel Demo
                </h1>

                {/* 기본 캐러셀 - 데스크탑 3개, 모바일 1개 */}
                <section className="mb-12">
                    <CardCarousel
                        cards={sampleCards}
                        title="🌟 주요 프로그램 (기본: 데스크탑 3개, 모바일 1개)"
                        titleColor="text-yellow-300"
                        showArrows={true}
                        showDots={true}
                        visibleCount={3}
                    />
                </section>
            </div>
        </div>
    );
};

export default CardCarouselDemo;