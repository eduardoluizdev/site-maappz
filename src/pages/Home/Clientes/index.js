import React, { Component } from 'react';

import { ListaClientes } from '../styles';

import LogoIngridReis from '../../../assets/images/clientes/ingrid-reis.png';
import LogoCL from '../../../assets/images/clientes/cl-info.png';
import LogoBarbearia from '../../../assets/images/clientes/barbearia-bw.png';
import LogoTricotando from '../../../assets/images/clientes/tricotando.png';
import Brocks from '../../../assets/images/clientes/b-rocks.png';
import Nadecora from '../../../assets/images/clientes/nadecora.png';

class Clientes extends Component{

    constructor(props){
        super(props);
        this.state = {
            listClientes:[
                {id:1, nome: 'IngridReis', imagem:LogoIngridReis },
                {id:2, nome: 'Nadecora', imagem:Nadecora },
                {id:3, nome: 'Tricotando Tricot', imagem:LogoTricotando },
                {id:4, nome: 'CL Informática e Serviços', imagem:LogoCL },
                {id:5, nome: 'Barbearia BlackWhite', imagem:LogoBarbearia },
                {id:6, nome: 'BuzzyRocks', imagem:Brocks }
            ]
        };
    }
    render(){
        return(
            <ListaClientes>
                {this.state.listClientes.map((listCliente) =>{
                    return(
                        <li key={listCliente.id}><img src={listCliente.imagem} alt={listCliente.nome} /></li>
                    );
                })}
            </ListaClientes>
        );
    }
}

export default Clientes;