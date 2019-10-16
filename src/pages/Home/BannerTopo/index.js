import React, { Component } from 'react';
import { Detalheleft } from '../styles';

const BannerTopo = (props) => {
    return(
        <div>
            <Detalheleft></Detalheleft>
            <small>{props.servico}</small>
            <h1>{props.titulo}</h1>
            <h3>{props.descricao}</h3>
        </div>
    );
}

// class BannerTopo extends Component{

//     constructor(props){
//         super(props);
//         this.state = {
//             bannerinfos:[
//                 {id:1, servico: '123', titulo: '456', descricao:'789'}
//             ]
//         };
//     }
//     render(){
//         return(
//             <div>
//                 {this.state.bannerinfos.map((bannerinfo) =>{
//                     return(
//                         <div key={bannerinfo.id}>
//                             <small>{this.props.servico}</small>
//                             <h1>{this.props.titulo}</h1>
//                             <h3>{this.props.descricao}</h3>
//                         </div>
//                     );
//                 })}
//             </div>
//         );
//     }
// }

export default BannerTopo;