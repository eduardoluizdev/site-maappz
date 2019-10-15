import styled from 'styled-components';
import bg01 from '../../assets/images/bg01.png';

export const Bgwrapper = styled.section`
    background: url(${bg01}) center top no-repeat;
    width: 100%;
    min-height: 400px;
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
        margin-top: 140px;

        .btn{
            max-width: 100%;
        }
    }
`;
export const BoxImgTop = styled.div`

    img{
        display: block;
        margin:100px auto 0  auto;

    @media (max-width:980px){
        img {
            margin: 50px auto 0 auto;
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