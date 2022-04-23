import Container from "../GlobalStyleds/Container";
import Header from "../Header/Header";
import ButtonsContainer from "./styleds/ButtonsContainer";
import ContentContainer from "./styleds/ContentContainer";
import Subjects from "./styleds/Subjects";
import SubjectsContainer from "./styleds/SubjectsContainer";
import Tests from "./styleds/Tests";
import Topics from "./styleds/Topics";
import TopicsContainer from "./styleds/TopicsContainer";

export default function MainPage(){
    return (
        <Container>
            <Header />
            <ContentContainer>
                <ButtonsContainer>
                    <button>DISCIPLINAS</button>
                    <button>PESSOA INSTRUTORA</button>
                    <button>ADICIONAR</button>
                </ButtonsContainer>
                <Subjects>
                    <SubjectsContainer>
                        <h3>10 Período</h3>
                        <ion-icon name="chevron-up-outline"></ion-icon>
                    </SubjectsContainer>
                    <Topics>
                        <TopicsContainer>
                            <h4>CSS</h4>
                            <ion-icon name="chevron-up-outline"></ion-icon>
                        </TopicsContainer>
                        <Tests>
                            <h5>P1</h5>
                            <span>P1 2022 - globo.com (Fulano)</span>
                        </Tests>
                    </Topics>
                </Subjects>
            </ContentContainer>
        </Container>
    )
}