import React, {useState, useEffect} from 'react';
import axios from 'axios';


function Search() {
    const [term, setTerm] = useState('sea')
    const [debouncedTerm, setDebouncedTerm] = useState(term);
    const [results, setResults] = useState([])

    useEffect(() => {
        const searchTimeout = setTimeout(() => {
            setDebouncedTerm(term)
        }, 1000)

        return () => {
            clearTimeout(searchTimeout)
        }
    }, [term])


    useEffect(() => {
        const search = async () => {
            const {data} = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: debouncedTerm
                }
            })
            setResults(data.query.search)
        }

        search()

    }, [debouncedTerm])


    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input
                        onChange={e => setTerm(e.target.value)}
                        value={term}
                        className="input"/>
                </div>
            </div>

            <div className="ui called list">
                {
                    results.map(result =>
                        <div key={result.pageid} className="item">
                            <div className="right floated content">
                                <a
                                    href={`https://en.wikipedia.org?curid=${result.pageid}`}
                                    className="ui button">Go</a>
                            </div>
                            <div className="content">
                                <div className="header">{result.title}</div>
                                <span dangerouslySetInnerHTML={{__html: result.snippet}}/>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default Search;