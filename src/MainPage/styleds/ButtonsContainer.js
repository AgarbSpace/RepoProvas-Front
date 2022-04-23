import styled from "styled-components"

const ButtonsContainer = styled.div`
    width: 100%;
    height: 36px;

    display: flex;
    justify-content: space-between;

    button:first-child{
        width: 119px;
    }

    button:nth-child(2){
        width: 180px;
    }

    button:nth-child(3){
        width: 109px;
    }

    button{
        height: 36px;

        font-family: "Roboto";
        font-size: 14px;
        font-weight: 500;
        line-height: 24px;
        letter-spacing: 0.4000000059604645px;
        text-align: left;

        display: flex;
        justify-content: center;
        align-items: center;

        border-radius: 5px;
        border: 1px solid #1976D2;
        color:#1976D2;
    }
`

export default ButtonsContainer;