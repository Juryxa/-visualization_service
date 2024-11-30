import React, {useState} from 'react';
import styles from './AccordionTree.module.css'

type AccordionProps = {
    title: string;
    children?: React.ReactNode;
    red?: boolean;
};

const Accordion: React.FC<AccordionProps> = ({ title, children, red = false }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <div className={styles.accordionItem}>
            <button
                className={`${styles.accordionButton} ${red ? styles.red : styles.white}`}
                onClick={toggleAccordion}
            >
                {title}
            </button>
            {isOpen && <div className={styles.accordionContent}>{children}</div>}
        </div>
    );
};


const AccordionTree = () => {
    return (
        <div className={styles.tree}>
            <Accordion title="Центральный офис" red>
                <Accordion title="Корпоративный блок">
                    <Accordion title="Управление ипотечного кредитования">
                        {/* Здесь можно добавить содержимое */}
                    </Accordion>
                </Accordion>
                <Accordion title="Розничный блок">
                    {/*<Accordion title="Управление ипотечного кредитования">*/}
                    {/*    /!* Здесь можно добавить содержимое *!/*/}
                    {/*</Accordion>*/}
                </Accordion>
            </Accordion>

            <Accordion title="Филиал в Оренбургской области" red>
                <Accordion title="Корпоративный блок">
                    {/*<Accordion title="Управление ипотечного кредитования">*/}
                    {/*    /!* Здесь можно добавить содержимое *!/*/}
                    {/*</Accordion>*/}
                </Accordion>
                <Accordion title="Розничный блок">
                    {/*<Accordion title="Управление ипотечного кредитования">*/}
                    {/*    /!* Здесь можно добавить содержимое *!/*/}
                    {/*</Accordion>*/}
                </Accordion>
            </Accordion>

            <Accordion title="Филиал в Волгоградской области" red>
                <Accordion title="Корпоративный блок">
                    {/*<Accordion title="Управление ипотечного кредитования">*/}
                    {/*    /!* Здесь можно добавить содержимое *!/*/}
                    {/*</Accordion>*/}
                </Accordion>
                <Accordion title="Розничный блок">
                    {/*<Accordion title="Управление ипотечного кредитования">*/}
                    {/*    /!* Здесь можно добавить содержимое *!/*/}
                    {/*</Accordion>*/}
                </Accordion>
            </Accordion>
        </div>
    );
};

export default AccordionTree;