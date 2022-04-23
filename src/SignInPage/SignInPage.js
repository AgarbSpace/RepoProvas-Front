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

export default function SignInPage(){

    const navigate = useNavigate();
    const [signInForm, setSignInForm] = useState({
        email: "",
        password: "",
    });
    const [buttonStatus, setButtonStatus] = useState("");

    function controlledInput(e) {
    setSignInForm({ ...signInForm, [e.target.name]: e.target.value });
    }

    async function signIn(e) {
    e.preventDefault();
    try {
        setButtonStatus("")
        navigate('/')
    } catch (error) {
        setButtonStatus("")
        console.log(error.response.data);
    }
  }


    return(
        <Container>
            <SignUpDataContainer>
                <TitleContainer>
                    <h1>Repo</h1><h1>Provas</h1>
                </TitleContainer>
                <h2>Login</h2>
                <EnterWithGithubButton>ENTRAR COM O GITHUB</EnterWithGithubButton>
                <OrContainer>
                    <hr/><span>ou</span><hr/>
                </OrContainer>
                <form onSubmit={signIn} status={buttonStatus}>
                    <input type="email" placeholder="Email" name="email" value={signInForm.email} onChange={controlledInput}/>
                    <input type="password" placeholder="Senha" name="password" value={signInForm.password} onChange={controlledInput}/>
                    <FormFooter>
                        <Link to = "/signUp">Não possuo cadastro</Link>
                        <FooterButton type="submit" onClick={() => setButtonStatus("loading")}>{buttonStatus === 'loading' ? <ThreeDots type="ThreeDots" color="#000000" height={30} width={30} /> : "Entrar"}</FooterButton>
                    </FormFooter>
                </form>
            </SignUpDataContainer>
        </Container>
    );
}