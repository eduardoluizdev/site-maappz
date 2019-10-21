import styled from 'styled-components';

export const BoxServicosFull = styled.div`
    padding: 50px 15px;
    border:1px solid #190936;
    border-radius: 5px;
    text-align: left;
    -webkit-box-shadow: 10px 10px 16px -5px rgba(0,0,0,0.4);
    -moz-box-shadow: 10px 10px 16px -5px rgba(0,0,0,0.4);
    box-shadow: 10px 10px 16px -5px rgba(126, 94, 94, 0.4);


    strong,
    p{
        color: white;
    }

    strong{
        font-size: 1.5rem;
        margin-bottom: 15px;
        display: block;
    }

    @media(max-width:980px){
        margin-top: 30px;
    }
`;
