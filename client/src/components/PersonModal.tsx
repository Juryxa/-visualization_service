import React, {useState} from 'react';
import styles from './PersonModal.module.css';
import closeIcon from '../images/icons/close.png';

const PersonModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <div>
            {isOpen && (
                <div className={styles.modalOverlay}>
                    <dialog open className={styles.modal}>
                        <div className={styles.top}>
                            <span className={styles.FIO}>Иванов Иван Иванович</span>
                            <form method="dialog" className={styles.form}>
                                <button type="button" onClick={closeModal} className={styles.closeButton}>
                                    <img src={closeIcon} alt="Закрыть модалку"/>
                                </button>
                            </form>
                        </div>
                        <div className={styles.criterias}>
                            <div className={styles.criteria}><span className={styles.sectionBlack}>Подразделение:</span><span
                                className={styles.sectionWhite}>Центральный офис</span></div>
                            <div className={styles.criteria}><span
                                className={styles.sectionBlack}>Функциональный блок:</span><span
                                className={styles.sectionWhite}>fffffffffffff</span></div>
                            <div className={styles.criteria}><span
                                className={styles.sectionBlack}>Подразделение 2:</span><span
                                className={styles.sectionWhite}>fffffffffffff</span></div>
                            <div className={styles.criteria}><span
                                className={styles.sectionBlack}>Подразделение 3:</span><span
                                className={styles.sectionWhite}>ffffff</span></div>
                            <div className={styles.criteria}><span
                                className={styles.sectionBlack}>Подразделение 4:</span><span
                                className={styles.sectionWhite}>{}</span></div>
                            <div className={styles.criteria}><span
                                className={styles.sectionBlack}>Должность:</span><span
                                className={styles.sectionWhite}>{}</span></div>
                            <div className={styles.criteria}><span className={styles.sectionBlack}>Роль:</span><span
                                className={styles.sectionWhite}>{}</span></div>
                            <div className={styles.criteria}><span className={styles.sectionBlack}>Телефон:</span><span
                                className={styles.sectionWhite}>{}</span></div>
                            <div className={styles.criteria}><span className={styles.sectionBlack}>Город:</span><span
                                className={styles.sectionWhite}>{}</span></div>
                            <div className={styles.criteria}><span className={styles.sectionBlack}>Адрес:</span><span
                                className={styles.sectionWhite}>fffffffffffffffffffff fffffff fffff</span></div>
                        </div>
                    </dialog>
                </div>
            )}
        </div>
    );
};

export default PersonModal;
