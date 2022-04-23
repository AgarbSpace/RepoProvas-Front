import styled from "styled-components"

const SignUpDataContainer = styled.div `
    width: 464px;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    h2{
        font-family: "Poppins";
        font-size: 24px;
        font-weight: 500;
        line-height: 24px;
        letter-spacing: 0.15000000596046448px;
        text-align: left;

        margin-bottom: 31px;
        margin-top: 20%;
    }

    input{
        height: 36px;
        width: 100%;

        font-family: "Poppins";
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
        letter-spacing: 0.15000000596046448px;
        text-align: left;
        color: #646464;

        border: 1px solid #C0C0C0;
        border-radius: 5px;

        padding-left: 10px;
        margin-bottom: 15px;
    }
`

export default SignUpDataContainer;