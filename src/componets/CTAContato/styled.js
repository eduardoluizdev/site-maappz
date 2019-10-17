import styled from 'styled-components';

export const BoxTextCTA = styled.div`
    padding: 50px;

    h2,
    h2 strong,
    p{
        color: white;
    }
    h2{
        font-family: 'Open Sans Condensed', sans-serif;
        font-size: 2.1rem;
        font-weight: 700;
    }
    p{
        font-size: 1.1rem;
        font-weight: 300;
    }
    h2 strong{
        font-family: 'Open Sans', sans-serif;
    }
`;

export const LinksCTA = styled.ul`
    display: flex;
    align-items: center;
    height: 100%;

    li{
        width: 50%;
        margin:10px;

        a{
            color: white;

            svg{
                max-width: 25px;
                margin: 0 10px 0 0;
            }
        }
        :nth-child(2) a{
            background: #34af23;
            border:1px solid #34af23;
        }

        .btn{
            padding: 15px 15px;
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
    }
`;
