import React, {useState, useEffect, useRef} from 'react';

function Dropdown({label,options, selected, setSelected}) {

    const [open, setOpen] = useState(false)
    const dropDownRef = useRef(null)

    useEffect(() => {
        const onBodyClick = e => {
            if (dropDownRef.current.contains(e.target)) {
                return;
            }
            setOpen(false)
        }

        document.body.addEventListener('click', onBodyClick)


        return () => {
            document.body.removeEventListener('click', onBodyClick)
        }
    }, [])

    return (
        <div ref={dropDownRef} className="ui form">
            <div className="field">
                <label className="label">{label}</label>
                <div
                    onClick={() => setOpen(!open)}
                    className={`ui selection dropdown ${open ? 'visible active' : ''}`}>
                    <i className="dropdown icon"/>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open ? 'visible transition' : ''}`}>
                        {
                            options.map(option =>
                                option.value === selected.value
                                    ?
                                    null
                                    :
                                    <div
                                        key={option.value}
                                        className="item"
                                        onClick={() => setSelected(option)}
                                    >
                                        {option.label}
                                    </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dropdown;