import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Convert({text, language}) {

    const [translated, setTranslated] = useState('')
    const [debouncedText, setDebouncedText] = useState(text);

    useEffect(() => {
        const translateTimeout = setTimeout(() => {
            setDebouncedText(text)
        }, 750)

        return () => {
            clearTimeout(translateTimeout)
        }
    }, [text])

    useEffect(() => {
        axios.post(`https://translation.googleapis.com/language/translate/v2`, {}, {
            params: {
                q: debouncedText,
                target: language.value,
                key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
            }
        }).then(res => setTranslated(res.data.data.translations[0].translatedText))


    }, [language,debouncedText])

    return (
        <div>
            <h1 className="ui header">
                {translated}
            </h1>
        </div>
    );
}

export default Convert;