import styled from 'styled-components';

export const FooterDiv = styled.footer`
    padding: 100px 0;
    background: linear-gradient(90deg, #11092e 0%, #260941 100%);
    margin-top: 120px;

    @media ( max-width:980px ){
        padding: 50px 0 20px 0;
    }
`;
export const ColFooter = styled.div`
    strong,
    a,
    .newsLetter strong{
        color: white;
    }
    strong{
        font-weight: 700;
    }
    ul{
        margin-top: 20px;

        li{
            a{
                padding: 10px 0;
                display: block;
            }
        }
    }

    @media ( max-width:980px ){
        border-bottom: 1px solid white;
        margin-bottom: 15px;
        padding-bottom: 15px;
    }
`;
export const GroupIpt = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: center;

    input{
        width: 100%;
        max-width: 400px;
        padding:15px;
        border:0;
        border-radius: 3px 0 0 3px;
        background: rgba(255,255,255,0.8)
    }
    button {
        width: 100%;
        max-width: 100px;
        background: white;
        border: 0;
        border-radius: 0 3px 3px 0;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        svg{
            display: flex;
            width: 19px;
            height: 19px;
            margin:0 5px 0 0;
        }
    }
`;
export const SocialLinks = styled.ul`
    display: flex;
    margin-top: 10px;
    width: 100%;
    align-items: center;
    justify-content: center;
    li{
        margin:10px;

        strong{
            font-size: 0.8rem;
        }

        a{
            width: 40px;
            height: 40px;;
            display: flex;
            padding: 10px;
            border:1px solid white;
            border-radius: 50%;
            align-items: center;
            justify-content: center;
            transition: all .3s;

            :hover{
                background: #ff225f;
                border-color: #ff225f;
            }

            svg{
                width: 20px;
                margin: 0 auto;
                display: block;
            }
        }
    }

    @media ( max-width: 980px ){
        display: flex;
        flex-wrap: wrap;

        li {
            strong{
                display: block;
                text-align: center;
            }
            :first-child{
                width:100%;
            }
        }
    }
`;

export const Copy = styled.div`
    padding:20px 0;
    font-size: 0.9rem;
    color: white;
    background: linear-gradient(90deg, #260941 0%, #11092e 100%);
    text-align: center;
    font-family: 'Open Sans Condensed', sans-serif;
    font-weight: 700;

    svg{
        max-width:20px;
        fill: red;
    }
`;