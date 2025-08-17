import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getCurrentLanguage } from '../../../i18n';
import styles from './Footer.module.scss';

const Footer: React.FC = () => {
    const { t } = useTranslation('common');
    const currentLang = getCurrentLanguage();

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                {/* 상단 섹션 */}
                <div className={styles.topSection}>
                    {/* 로고 및 소개 */}
                    <div className={styles.brandSection}>
                        <Link to="/" className={styles.logoLink}>
                            <img
                                src="/imgs/logos/KCWN_logo1.png"
                                alt="KWCN Logo"
                                className={styles.logo}
                            />
                        </Link>
                        <p className={styles.description}>
                            {t('footer.vision')}
                        </p>
                    </div>

                    {/* 참여하기 */}
                    <div className={styles.getInvolvedSection}>
                        <h3 className={styles.sectionTitle}>{t('footer.getInvolved')}</h3>
                        <ul className={styles.linksList}>
                            <li><Link to="/getinvolved/volunteer" className={styles.link}>{t('footer.volunteer')}</Link></li>
                            <li className={styles.donationItem}>
                                <span className={styles.donationTitle}>{t('footer.donation')}</span>
                                <ul className={styles.donationList}>
                                    <li><Link to="/donate?method=etransfer" className={styles.donationLink}>{t('footer.eTransfer')}</Link></li>
                                    <li><Link to="/donate?method=creditcard" className={styles.donationLink}>{t('footer.creditCard')}</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    {/* 연락처 정보 */}
                    <div className={styles.contactSection}>
                        <h3 className={styles.sectionTitle}>{t('footer.contact')}</h3>
                        <div className={styles.contactInfo}>
                            <div className={styles.contactItem}>
                                <span className={styles.contactLabel}>{t('footer.email')}:</span>
                                <a href="mailto:info@kwcn.ca" className={styles.contactLink}>info@kwcn.ca</a>
                            </div>
                        </div>
                    </div>
                    
                    {/* 개발자 */}
                    <div className={styles.developerSection}>
                        <h3 className={styles.sectionTitle}>{t('footer.developer')}</h3>
                        <div className={styles.contactInfo}>
                            <div className={styles.contactItem}>
                                <a href="http://thyoon7043.com/" className={styles.contactLink}>http://thyoon7043.com/</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 하단 섹션 */}
                <div className={styles.bottomSection}>
                    <div className={styles.copyright}>
                        <p>{t('footer.copyright')}</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
