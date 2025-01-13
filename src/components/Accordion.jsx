import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useTranslation } from 'react-i18next';
import './Accordion.css';

const Accordion = () => {
  const { t } = useTranslation();
  const data = [
    {
      title: t("accordion.strategy"),
      content: t("accordion.strategyContent"),
    },
    {
      title: t("accordion.vision"),
      content: t("accordion.visionContent"),
    },
    {
      title: t("accordion.coreValues"),
      content: t("accordion.coreValuesContent"),
    },
    {
      title: t("accordion.companyActivities"),
      content: t("accordion.companyActivitiesContent"),
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div style={{ maxWidth: '95%', height: 'auto', margin: '0 auto', marginTop: '50px', direction: 'rtl', fontFamily: 'Arial, sans-serif' }}>
      {data.map((item, index) => (
        <div key={index} style={{ marginBottom: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
          <button
            onClick={() => toggleAccordion(index)}
            style={{
              width: '100%',
              padding: '30px',
              textAlign: 'right',
              background: '#0xA6A6A6',
              border: 'none',
              outline: 'none',
              cursor: 'pointer',
              fontWeight: 'bold',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: '25px',
              color: '#b9a567'
            }}
          >
            {item.title}
            <span
              style={{
                fontSize: '20px',
                color: '#b9a567',
                transition: 'transform 0.3s',
                transform: activeIndex === index ? 'rotate(90deg)' : 'rotate(0deg)',
              }}
            >
              ▶
            </span>
          </button>
          <CSSTransition
            in={activeIndex === index}
            timeout={500}
            classNames="accordion"
            unmountOnExit
          >
            <div style={{ padding: '10px', background: '#fff', textAlign: 'right', fontSize: '24px' }}>
              {item.content.split('\n').map((line, i) => (
                <p key={i} style={{ margin: 0 }}>{line}</p>
              ))}
            </div>
          </CSSTransition>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
