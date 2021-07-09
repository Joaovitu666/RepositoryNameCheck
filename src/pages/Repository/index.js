import './Repository.css'
import React, { useEffect, useState } from 'react';


function Repository() {
    const [repositories, setRepositories] = useState([]);
    const [usuario, setUsuario] = useState()

    useEffect(() => {
        let repositoriesName = localStorage.getItem('repositoriesName');


        repositoriesName = JSON.parse(repositoriesName);

        setRepositories(repositoriesName);
    }, []);
    useEffect(() => {
        let usuario = localStorage.getItem('usuario');
        usuario = JSON.parse(usuario);
        setUsuario(usuario);
    }, []);


    return (
        <div className="Retangulo">
            <div className='Repository'>
                <div className='titulo'>Repositórios de {usuario} </div>
                <ol className="List">
                    {repositories.map(repository => {
                        return (
                            <li className="Item"> Repositório: {repository}</li>
                        )
                    })}

                </ol>

            </div>
        </div>
    );
}

export default Repository;
