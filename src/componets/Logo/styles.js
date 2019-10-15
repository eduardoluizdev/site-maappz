import styled from 'styled-components';

export const Respmenu = styled.div`


    .logo{
        width: 100%;
        max-width: 126px;
        height: 40px;
    }

    @media (max-width:980px){

        width: 100%;
        display: flex;
        justify-content: space-between;
        align-content: center;

        #toggle {
            color: white;
            cursor: pointer;
            height: 40px;
            width: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
`;

export const Toggle = styled.div`
    display: none;
`;