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
            font-weight: 700;

            svg{
                width: 20px;
                margin: 0 10px 0 0;
            }
        }
        :nth-child(2) a{
            background: rgb(255, 34, 95);
            border:1px solid rgb(255, 34, 95);
        }

        .btn{
            padding: 15px 10px;
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

    @media(max-width: 980px){
        flex-wrap: wrap;

        li{
            width: 100%;
            margin:0;

            .btn{
                max-width: 100%;
            }
        }
    }
`;
