import React, {useState} from 'react';

function Accordion({items}) {

    const [activeIndex, setActiveIndex] = useState(null)

    const onTitleClick = (index) => {
        setActiveIndex(index)
    }
    return (
        <div className='ui styled accordion'>
            {
                items.map((item, index) =>
                    <React.Fragment key={item.title}>
                        <div
                            onClick={() => onTitleClick(index)}
                            className={`title ${activeIndex === index ? 'active' : ''}`}>
                            <i className='dropdown icon'/>
                            {item.title}
                        </div>

                        <div className={`content ${activeIndex === index ? 'active' : ''}`}>
                            <p>{item.content}</p>
                        </div>


                    </React.Fragment>
                )
            }

        </div>

    );
}

export default Accordion;