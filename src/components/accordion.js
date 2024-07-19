import React from 'react';

const Accordion = ({ id, title, description, isOpen, toggleAccordion }) => {
    const onClickAccordion = () => {
        toggleAccordion(id);
    };

    return (
        <div className="accordion">
            <div className="accordion-header" onClick={onClickAccordion}>
                <div className={`accordion-title ${isOpen ? 'open' : ''}`}>{title}</div>
            </div>
            {isOpen && (
                <div className="accordion-content">
                    <p>{description}</p>
                </div>
            )}
        </div>
    );
};

export default Accordion;
