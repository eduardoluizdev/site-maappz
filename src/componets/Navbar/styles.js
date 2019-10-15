import styled from 'styled-components';

export const Mainnav = styled.nav`
      ul{
        display: flex;

        li{
            margin: 0 20px;

            :first-child{
                margin-left: 0;
            }

            :last-child{
                margin-right: 0;
            }

            :nth-child(3) {

                a {
                    background: white;
                    border:1px solid white;
                    border-radius: 3px;
                    color: #24093e;
                    padding: 10px 20px;

                    :hover{
                        background: #ff225f;
                        color: white;
                        border:1px solid #ff225f;
                    }
                }
            }

            a{
                display: block;
                color: white;
                padding: 10px;
                transition: all .3s;
                border:1px solid transparent;

                :hover{
                    border:1px solid white;
                    border-radius: 3px;
                }
            }
        }
    }
    @media (max-width:980px){
        width: 100%;
        position: absolute;
        left: 0;
        top: 0;
        margin-top: 80px;

        ul{
            display: none;
            padding: 0 25px 25px 25px;
            background: linear-gradient(#090b20 0%, #21093b 100%);
            transition: all .3s;

            li {
                margin: 10px !important;
            }
        }
    }
`;