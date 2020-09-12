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
    function modal() {
        const element = document.getElementById("modal")
        const element2 = document.getElementById("test")
        element2.style.height = '250px'

        element.classList.remove("modal-buttons")
        element.classList.add("modal-buttons-active")

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
                    <div id="test" className="modal" onClick={modal}>
                        <div className="results" >
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
                        <div id='modal' className="modal-buttons">
                            <button type="button" className="test"> Entrar em contato</button>
                            <button type="button" className="test"> Ver detalhes </button>
                        </div>
                    </div>
                </div>

            ))
            }



        </>

    );

}

export default SearchResults;