import Container from "../GlobalStyleds/Container";
import TitleContainer from "../GlobalStyleds/TitleContainer";
import HeaderContainer from "./styleds/HeaderContainer";
import TitleAndIconContainer from "./styleds/TitleAndIconContainer";

export default function Header(){
    return(
        <Container>
            <HeaderContainer>
                <TitleAndIconContainer>
                    <TitleContainer>
                        <h1>Repo</h1><h1>Provas</h1>
                    </TitleContainer>
                    <ion-icon name="exit-outline"></ion-icon>
                </TitleAndIconContainer>
                <input placeholder = "Pesquise por disciplina"/>
                <hr/>
            </HeaderContainer>
        </Container>
    )
}