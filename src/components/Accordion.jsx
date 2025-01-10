import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './Accordion.css';

const Accordion = () => {
  const data = [
    {
      title: "الإستراتيجيـة",
      content:
        "مهمتنا هي أن نستمر في التزامنا لنكون دائماً الخيار الأفضل لعملائنا وهذا ما جعلنا نكتسب سمعتنا كشركة رائدة تقدم الخدمات المميزة والمنتجات القيمة في مجالات متعددة. وأن تكــون الشـركـة نموذجاً مرجعياً متميزاً في جـودة وتنـوع منتجاتهـا من مـواد البنـاء، محليـاً وإقليمياً، وأن تحافظ على الريادة والأصالة وتسبق طموحات عملائها في مستوى خدماتها وإرضاء مساهميها ورقي مجتمعها وتنميته.",
    },
    {
      title: "الـرؤيـــة",
      content:
        "رؤيتنا المستقبلية هي دوام التقدم والتطور مع الحفاظ على موقعنا الريادي في الكويت في مجالات عمل الشركة. بالإضافة إلى الاستمرار في توسيع نطاق أعمالنا في كافة دول العالم وخاصة في مجلس التعاون الخليجي والشرق الأوسط. حيث إننا مستمرون في إرضاء عملاؤنا.",
    },
    {
      title: "القيم الأساسية",
      content:
        `حرصت شركة الميادين المتميزة للتجارة العامة والمقاولات دوماً على الالتزام بمجموعة من القيم الأساسية لا تقتصر على عوامل نجاح الشركة، بل تتعداها لتكون مصدراً مستمراً لتوجيهها، حيث تقوم الشركة بالتالي:
• بذل أقصى الجهد لإرضاء العملاء.
• العمل بنزاهة مطلقة وبأعلى معايير أخلاقية.
• العمل بأدق معايير الجودة.
• مزاولة العمل الدؤوب لتقديم الأفضل والأنسب من المنتجات.
• التميز في خدمة العملاء.`,
    },
    {
      title: "نشاط الشركة",
      content:
        `• متخصصون في تنفيذ كافة المشاريع الانشائية هيكل اسود وتشطيبات كاملة علي المفتاح.
• قسائم سكنية وشاليهات سكن خاص.
• مجمعات سكنية استثماري ومجمعات تجارية.
• قسائم صناعية او حرفية.
• قسم خاص بالإضافات والتعليات والترميمات الانشائية والصيانات.
• نتميز بجودة ودقة في التنفيذ في اقل مدة زمنية ممكنة.
• عمل مخططات تنفيذية قبل التنفيذ ومخططات ما تم تنفيذه على الطبيعة.`,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div style={{ maxWidth: '95%',height:'auto', margin: '0 auto', marginTop:'50px',direction: 'rtl', fontFamily: 'Arial, sans-serif' }}>
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
              fontSize:'25px',
              color:'#b9a567'
            }}
          >
            {item.title}
            <span
              style={{
                fontSize:'20px',
                color:'#b9a567',
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
            <div style={{ padding: '10px', background: '#fff', textAlign: 'right',fontSize:'24px' }}>
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
