import Style from './Home.css';
import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function Home() {
    const history = useHistory();
    const [usuario, setUsuario] = useState('')
    function handlePesquisa() {
        axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => {
            const repositories = response.data;
            const repositoriesName = [];
            repositories.map((repository) => {
                repositoriesName.push(repository.name);
            });
            localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
            localStorage.setItem('usuario', JSON.stringify(usuario))
            history.push('/repository');
        });
    }


    return (
        <div className='Home'>
            <div className='HomeContainer'>
                <h1>Repository Check</h1>
                <h3>{usuario}</h3>
                <div>
                    <input placeholder='Github User Name' type='text' value={usuario} className="input" onChange={e => setUsuario(e.target.value)}></input>
                    <button type="button" id="buttonCompanyStar" className="btn btn-danger" onClick={handlePesquisa}>
                        Pesquisar
                    </button>
                </div>
            </div>
        </div>
    );
}




export default Home;
