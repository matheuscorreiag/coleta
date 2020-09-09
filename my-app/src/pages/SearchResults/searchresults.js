import React, { useState, useEffect } from 'react';

import './searchresults.css'
import '../../assets/styles/global.css'
import ArrowHeader from '../../components/PageArrowHeader/ArrowHeader'
import api from '../../services/api'

function SearchResults() {

    const [items, setItems] = useState([]);
    const [search, setSearch] = useState(localStorage.getItem('@coleta-search'))

    useEffect(() => {
        api.get(`items?search=${search}`).then(response => {
            const data = response.data.reverse();
            console.log(data);
            setItems(data)
        })
    }, [])
    function setSearchFilter() {
        if (search != '') {
            localStorage.setItem('@coleta-search', search)
            window.location.reload();
        }
    }
    return (
        <>
            <ArrowHeader />
            <div className="search-container">
                <div className="input-button">
                    <input type="text" placeholder='Digite aqui' onChange={event => setSearch(event.target.value)} />
                    <button type="search" onClick={setSearchFilter}>
                        <img src={require('../../assets/img/icons/1656641261586786442.svg')} alt='lupa' />
                    </button>
                </div>
            </div>

            {items.map(item => (
                < div className="results-container" >
                    <div className="results">
                        <div className="middle-align">
                            <div className="img-container">
                                <img src={require('../../assets/img/icons/1656641261586786442.svg')} alt='cgalogo' />
                            </div>
                        </div>
                        <div className="middle-align">
                            <div className="description-container">
                                <React.Fragment key={item.id}>
                                    <p>Descrição: {item.description}</p>
                                    <p>Marca: {item.brand}</p>
                                    <p>Local: {item.local}</p>
                                </React.Fragment>
                            </div>
                        </div>
                        <div className="middle-align">
                            <div className="state-container">
                                <p>Reuso</p>
                            </div>
                        </div>
                    </div>
                </div>

            ))
            }



        </>

    );

}

export default SearchResults;