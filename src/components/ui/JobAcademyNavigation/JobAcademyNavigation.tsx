import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface JobAcademyNavigationProps {
    currentJobId: number;
}

const JobAcademyNavigation: React.FC<JobAcademyNavigationProps> = ({ currentJobId }) => {
    const { t } = useTranslation('common');

    // 페이지 상단으로 스크롤하는 함수
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'auto' });
    };

    // Job Academy 페이지 정보
    const jobPages = [
        { id: 1, titleKey: 'job1', path: '/info/jobacademy/job1' },
        { id: 2, titleKey: 'job2', path: '/info/jobacademy/job2' },
        { id: 3, titleKey: 'job3', path: '/info/jobacademy/job3' },
        { id: 4, titleKey: 'job4', path: '/info/jobacademy/job4' },
        { id: 5, titleKey: 'job5', path: '/info/jobacademy/job5' },
        { id: 6, titleKey: 'job6', path: '/info/jobacademy/job6' },
        { id: 7, titleKey: 'job7', path: '/info/jobacademy/job7' },
        { id: 8, titleKey: 'job8', path: '/info/jobacademy/job8' },
        { id: 9, titleKey: 'job9', path: '/info/jobacademy/job9' },
        { id: 10, titleKey: 'job10', path: '/info/jobacademy/job10' },
        { id: 11, titleKey: 'job11', path: '/info/jobacademy/job11' },
        { id: 12, titleKey: 'job12', path: '/info/jobacademy/job12' },
        { id: 13, titleKey: 'job13', path: '/info/jobacademy/job13' },
        { id: 14, titleKey: 'job14', path: '/info/jobacademy/job14' }
    ];

    return (
        <section className="bg-gray-800 p-8 rounded-xl shadow-lg border-l-4 border-indigo-500 mt-12">
            <h2 className="text-white text-2xl font-bold mb-6 text-center">
                {t('information.jobAcademy')}
            </h2>

            <div className="space-y-3">
                {jobPages.map((job) => {
                    const isCurrentPage = job.id === currentJobId;

                    if (isCurrentPage) {
                        // 현재 페이지는 링크 없이 다른 색상으로 표시
                        return (
                            <div
                                key={job.id}
                                className="bg-yellow-600 text-yellow-900 px-6 py-4 rounded-lg flex items-center justify-between font-bold transition-all duration-300 cursor-default border-l-4 border-yellow-400"
                            >
                                <div className="flex items-center">
                                    <span className="text-lg font-bold mr-4">Lecture {job.id}</span>
                                    <span className="text-base">
                                        {t(`information.${job.titleKey}`) || `information.${job.id}`}
                                    </span>
                                </div>
                            </div>
                        );
                    }

                    // 다른 페이지들은 링크로 표시
                    return (
                        <Link
                            key={job.id}
                            to={job.path}
                            onClick={scrollToTop}
                            className="bg-gray-700 hover:bg-blue-600 text-white px-6 py-4 rounded-lg flex items-center justify-between font-medium transition-all duration-300 hover:translate-x-2 hover:shadow-lg group border-l-4 border-gray-500 hover:border-blue-400"
                        >
                            <div className="flex items-center">
                                <span className="text-lg font-bold mr-4 group-hover:text-blue-200">Lecture {job.id}</span>
                                <span className="text-base group-hover:text-blue-100">
                                    {t(`information.${job.titleKey}`)}
                                </span>
                            </div>
                        </Link>
                    );
                })}
            </div>

            <div className="mt-6 text-center">
                <p className="text-gray-300 text-sm">
                    {t('information.navigationDescription')}
                </p>
            </div>
        </section>
    );
};

export default JobAcademyNavigation;
