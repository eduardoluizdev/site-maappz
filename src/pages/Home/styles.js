import styled from 'styled-components';
import bg01 from '../../assets/images/bg01.png';



export const Bgwrapper = styled.section`
    background: url(${bg01}) center top no-repeat;
    width: 100%;
    min-height: 400px;


    .bg-dif{
        background-position: center -800px;
        padding-bottom: 20px;
    }

    @media (max-width:980px){
        background: linear-gradient(#090b20 0%, #21093b 100%);
        overflow:initial;
    }
`;

export const Flexcontainer = styled.div`
    display: flex;
    max-width: 1140px;
    padding: 0 15px;
    margin:0 auto;
    flex-wrap: wrap;
`;
export const Col = styled.div`
    width: 50%;

    @media (max-width:980px){
        width: 100%;
    }
`;
export const BoxTextTop = styled.div`
    margin: 150px 0 0 0

    small, h1, h3, h3 strong, a{
        color: white;
    }

    small{
        font-size: 0.9rem;
        font-weight: 600;
    }
    h1{
        font-size: 1.6rem;
        font-weight: 300;
    }
    h1 strong{
        font-family: 'Open Sans Condensed', sans-serif;
        color: white;
        font-weight: 700;
    }
    h3 {
        font-weight: 300;
        font-size: 1.1rem;
        strong{
            font-weight: 700;
        }
    }
    .btn{
        padding: 15px 20px;
        display: flex;
        justify-content: center;
        margin: 15px 0;
        width: 100%;
        max-width: 300px;
        border-radius: 5px;
        border:1px solid white;
        transition: background .3s;

        :hover{
            background: white;
            border: 1px solid transparent;
            color: #190936;
        }
    }

    @media (max-width:980px){
        text-align: center;
        margin-top: 50px;

        .btn{
            max-width: 100%;
        }
    }
`;
export const BoxImgTop = styled.div`

    img{
        position: absolute;
        top: 0;
        max-width: 600px;
        margin: 60px 0 0 0;
        height: auto;

    @media (max-width:1240px){
            position: absolute;
            top: 0;
            width: 440px;
            margin: 180px 0 0 0;
    }

    @media (max-width:980px){
        position: relative;
        top: 30px;
        width: 320px;
        margin: 0 auto;
    }
    }
`;
export const Detalheleft = styled.div`
    display: block;
    height: 4px;
    width: 60px;
    background: white;
    border-radius: 30px;
    margin:0 0 5px 0;

    :after{
        content: '';
        display: block;
        height: 4px;
        width: 20px;
        background: white;
        border-radius: 30px;
        margin: 0 0 0 65px;
    }
`;
export const SectionWhite = styled.div`
    background: white;
    padding: 50px 0;
    margin:50px 0;

    @media (max-width:980px){
        margin: 0;
        padding: 0;
    }
`;
export const BoxTextMid = styled.div`
    margin: 60px 0 0 0;

    h2{
        font-family: 'Open Sans Condensed', sans-serif;
        font-size: 1.6rem;
        font-weight: 700;
        text-transform: uppercase;
    }
    h3{
        font-size: 2.1rem;
        font-weight: 300;
        line-height: 35px;
    }
    .btn{
        padding: 15px 20px;
        display: flex;
        justify-content: center;
        margin: 15px 0;
        width: 100%;
        max-width: 300px;
        border-radius: 5px;
        border:1px solid white;
        transition: background .3s;

        :hover{
            background: white;
            border: 1px solid transparent;
            color: #190936;
        }
    }
    .full{
        background: #24093e;
        color: white !important;
        -webkit-box-shadow: 10px 10px 16px -5px rgba(0,0,0,0.4);
        -moz-box-shadow: 10px 10px 16px -5px rgba(0,0,0,0.4);
        box-shadow: 10px 10px 16px -5px rgba(126, 94, 94, 0.4);

        :hover{
            color: #24093e !important;
            background: transparent !important;
            border: 1px solid #24093e;
        }
    }

    strong{
        font-weight:700;
    }

    @media (max-width:980px){

        .btn{
            max-width: 100%;
        }
    }
`;
export const Detalheleftcolor = styled.div`
    display: block;
    height: 4px;
    width: 60px;
    background:#190936;
    border-radius: 30px;
    margin:0 0 5px 0;
    :after{
        content: '';
        display: block;
        height: 4px;
        width: 20px;
        background:#190936;
        border-radius: 30px;
        margin: 0 0 0 65px;
    }
`;
export const GridBox = styled.div`
    display: flex;
    width: 100%;

    .item{
        width: 50%;
        margin: 0 10px;

        :first-child{
            margin:0 10px 0 0;
        }
        :last-child{
            margin:0 0 0 10px;
        }
    }
    .item-full{
        width: 100%;
    }
    @media (max-width:980px){
        display: flex;
        flex-wrap: wrap;

        .item{
            width:100%;
            margin: 10px 0 !important;
        }
    }
`;
export const BoxServicos = styled.div`
    padding: 50px 15px;
    border:1px solid #190936;
    border-radius: 5px;
    text-align: center;
    -webkit-box-shadow: 10px 10px 16px -5px rgba(0,0,0,0.4);
    -moz-box-shadow: 10px 10px 16px -5px rgba(0,0,0,0.4);
    box-shadow: 10px 10px 16px -5px rgba(126, 94, 94, 0.4);

    img{
        display: block;
        margin:0 auto 15px auto;
        max-width: 110px;
        color: white;
        fill: white;
    }
    svg{
        width:60px;
        height: 60px;
        margin: 0 auto 15px auto;
        fill: white;
        color: white;
    }
    span,
    p{
    color: white;
    }
    span{
        font-size: 1.2rem;
        font-weight: 700;
        display: block;
        margin: 0 0 10px 0;
        }
`;
export const ChamdaText = styled.div`
    text-align: center;
    display: block;
    width: 100%;
    max-width: 400px;
    margin:30px auto 15px auto;

    h2,
    p{
    color: white;
    }

    h2 {
        font-size: 2.5rem;
        font-family: 'Open Sans Condensed', sans-serif;
    }
`;
export const Detalheright = styled.div`
    display: block;
    height: 4px;
    width: 20px;
    background: white;
    border-radius: 30px;
    margin: 8px 65px 0 0;
    float: right;

    :before{
        content: '';
        display: block;
        height: 4px;
        width: 60px;
        background: white;
        border-radius: 30px;
        margin:0 0 0 25px;
    }
`;

export const FlexContainerGrid = styled.div`
    margin:0 auto;
    max-width: 1140px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    padding: 0 15px;

    @media (max-width:980px){
        div{
            width: 100%;
        }
    }
`;

export const BoxDiferencial = styled.div`
    text-align: center;
    width: 100%;
    max-width: 356px;
    margin: 15px 10px;
    padding: 30px 20px;
    align-content: center;

    :nth-child(1),
    :nth-child(4){
        margin-left: 0;
    }
    :nth-child(3),
    :nth-child(6){
        margin-right: 0;
    }

    span,
    h3,
    p{
        color: white;
    }

    span{
        background: #190936;
        padding: 20px 30px;
        display: inline-flex;
        border-radius: 5px;
        margin-bottom: 15px;
        font-weight: 700;
    }

    h3{
        font-size: 1.3rem;
    }

    p{
        line-height: 22px;
        letter-spacing: 1px;
        margin-top: 15px;
        text-align: justify;
    }
`;

export const DepoimentoItem = styled.div`
    border: 1px solid #21093b;
    border-radius: 5px;
    padding: 20px;
    margin: 30px 10px;
    -webkit-box-shadow: 10px 10px 16px -5px rgba(0,0,0,0.4);
    -moz-box-shadow: 10px 10px 16px -5px rgba(0,0,0,0.4);
    box-shadow: 10px 10px 16px -5px rgba(126, 94, 94, 0.4);
`;

export const TopDepo = styled.div`
    display: flex;

    @media (max-width:980px){
        flex-direction: column;
        text-align: center;

        img{
            display: block;
            margin:0 auto;
        }
    }
`;
export const Infos = styled.div`
    margin: 25px 0 0 20px;

    span,
    small{
        display: block;
        font-family: 'Open Sans Condensed', sans-serif;
        font-weight: 300;
    }

    span{
        font-weight: 700;
        font-size: 1.5rem;
        line-height: 25px;
    }
    small{
        font-size: 1.1rem;
    }

    @media (max-width:980px){

    }
`;
export const Stars = styled.ul`
    display: flex;
    margin-top: 5px;

    li{
        margin:0 3px 0 0;

        svg{
            max-width: 20px;
        }
    }

    @media (max-width:980px){
        align-content: center;
        justify-content: center;
    }
`;
export const Depoimento = styled.p`
    margin: 20px 0 0 0;
    display: block;

    @media (max-width:980px){
        text-align: center;
    }
`;
export const ChamadaTextColor = styled.div`
    text-align: center;
    display: block;
    width: 100%;
    max-width: 400px;
    margin:30px auto 15px auto;

    h2,
    p{
        color: #140526;
    }
    h2 {
        font-size: 2.5rem;
        font-family: 'Open Sans Condensed', sans-serif;
    }
    p strong{
        font-weight:700;
    }
`;
export const Detalherightcolor = styled.div`
    display: block;
    height: 4px;
    width: 20px;
    background: #140526;
    border-radius: 30px;
    margin: 8px 65px 0 0;
    float: right;

    :before{
        content: '';
        display: block;
        height: 4px;
        width: 60px;
        background: #140526;
        border-radius: 30px;
        margin:0 0 0 25px;
    }
`;
export const ListaClientes = styled.ul`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    margin-top: 50px;

    li{
        margin: 10px;
        align-content: center;
        -webkit-box-shadow: 10px 10px 16px -5px rgba(0,0,0,0.4);
        -moz-box-shadow: 10px 10px 16px -5px rgba(0,0,0,0.4);
        box-shadow: 10px 10px 16px -5px rgba(126, 94, 94, 0.4);
    }
`;