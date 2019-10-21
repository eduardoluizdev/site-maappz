import styled from 'styled-components';


export const BgBread = styled.div`
    background: #f1f1f1;
    padding: 70px 0 20px 0;

    ol.breadcrumb{
        display: flex;
        width: 100%;
        max-width: 1140px;
        padding: 0 15px;
        margin:0 auto;
        align-items: center;
        justify-content: flex-end

        li{
            margin:10px;

            svg{
                width:20px;
                position: relative;
                top: -3px;
            }

            :after{
                content: '/';
                position: absolute;
                margin:0 7px;
            }

            :last-child:after{
                content: '';
            }
        }
    }

    @media(max-width:1240px){
        padding: 30px 0 20px 0;
    }
    @media(max-width:980px){
        padding: 40px 0 20px 0;
    }
`;