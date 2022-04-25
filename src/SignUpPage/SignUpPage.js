import { Link, useNavigate } from "react-router-dom";
import Container from "../GlobalStyleds/Container";
import EnterWithGithubButton from "../SignInAndSignUpStyleds/Styleds/EnterWithGithubButton";
import FooterButton from "../SignInAndSignUpStyleds/Styleds/FooterButton";
import OrContainer from "../SignInAndSignUpStyleds/Styleds/OrContainer";
import SignUpDataContainer from "../SignInAndSignUpStyleds/Styleds/SignUpDataContainer";
import TitleContainer from "../GlobalStyleds/TitleContainer";
import { useState } from "react";
import FormFooter from "../SignInAndSignUpStyleds/Styleds/FormFooter";
import { ThreeDots } from "react-loader-spinner";
import api from "../services/api";

export default function SignUpPage(){

    const navigate = useNavigate();
    const [signUpForm, setSignUpForm] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    });
    const [buttonStatus, setButtonStatus] = useState("");

    function controlledInput(e) {
    setSignUpForm({ ...signUpForm, [e.target.name]: e.target.value });
    }

    async function signUp(e) {
        e.preventDefault();
            if(signUpForm.password !== signUpForm.confirmPassword){
                alert("Invalid credentials");
                setButtonStatus("");
                return;
            }

        try {
            delete signUpForm.confirmPassword
            await api.signUp(signUpForm);
            setButtonStatus("");
            navigate('/signIn');
        } catch (error) {
            setButtonStatus("");
            alert(error.response.data);
        }
    }

    return(
        <Container>
            <SignUpDataContainer>
                <TitleContainer>
                    <h1>Repo</h1><h1>Provas</h1>
                </TitleContainer>
                <h2>Cadastro</h2>
                <EnterWithGithubButton>ENTRAR COM O GITHUB</EnterWithGithubButton>
                <OrContainer>
                    <hr/><span>ou</span><hr/>
                </OrContainer>
                <form onSubmit={signUp} status={buttonStatus}>
                    <input type="email" placeholder="Email" name="email" value={signUpForm.email} onChange={controlledInput}/>
                    <input type="password" placeholder="Senha" name="password" value={signUpForm.password} onChange={controlledInput}/>
                    <input type="password" placeholder="Confirme sua senha" name="confirmPassword" value={signUpForm.confirmPassword} onChange={controlledInput}/>
                    <FormFooter>
                        <Link to = "/signIn">Já possuo cadastro</Link>
                        <FooterButton type="submit" onClick={() => setButtonStatus("loading")}>{buttonStatus === 'loading' ? <ThreeDots type="ThreeDots" color="#000000" height={30} width={30} /> : "Cadastrar"}</FooterButton>
                    </FormFooter>
                </form>
            </SignUpDataContainer>
        </Container>
    );
}