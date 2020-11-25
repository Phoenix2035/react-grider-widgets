import React, {useState} from 'react';
import Accordion from "./Components/Accordion";
import Search from "./Components/Search";
import Dropdown from "./Components/Dropdown";
import Translate from "./Components/Translate";


const items = [
    {
        title: 'What is React?',
        content: 'React is a frontend javascript library'
    }, {
        title: 'Why use React?',
        content: 'React is a favorite Js library among engineers'
    },
    {
        title: 'How do you use React?',
        content: 'You use React by creating components'
    }
]


const options = [
    {
        label: 'The Color Red',
        value: 'red'
    }, {
        label: 'The Color Green',
        value: 'green'
    },
    {
        label: 'The Color Blue',
        value: 'blue'
    }
]

function App() {
    const [selected, setSelected] = useState(options[0])

    return (
        <>
            {/*<Accordion items={items}/>*/}
            <Search/>
            {/*<Dropdown*/}
            {/*    label="Select a Color"*/}
            {/*    options={options}*/}
            {/*    selected={selected}*/}
            {/*    setSelected={setSelected}*/}
            {/*/>*/}
            {/*<Translate/>*/}

        </>
    );
}

export default App;

