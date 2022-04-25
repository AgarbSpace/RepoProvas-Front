
import { useEffect, useState} from "react";
import Container from "../GlobalStyleds/Container";
import Header from "../Header/Header";
import useAuth from "../hooks/userAuth";
import api from "../services/api";
import ButtonsContainer from "./styleds/ButtonsContainer";
import ContentContainer from "./styleds/ContentContainer";
import Subjects from "./styleds/Subjects";
import SubjectsContainer from "./styleds/SubjectsContainer";
import Tests from "./styleds/Tests";
import TestsContainer from "./styleds/TestsContainer";
import Topics from "./styleds/Topics";
import TopicsContainer from "./styleds/TopicsContainer";

export default function MainPage(){
    const [tests, setTests] = useState()
    const {auth} = useAuth();

    useEffect(async () => {
        const data = await api.getTests(auth);
        setTests(data);
    }, [])

    if(!tests){
        return <>
        <span>Unauthorized</span>
        </>
    }

    console.log(tests)
    const terms = tests.map(data => data);
    console.log(terms);
    const disciplinesArray = tests.map(termsObject => termsObject.disciplines);
    console.log(disciplinesArray);
    const disciplinesObject = disciplinesArray.map(disciplinesObjectArray => disciplinesObjectArray.map(object => object.name));
    console.log(disciplinesObject);
    const teachersNamesArray = disciplinesArray.map(disciplinesObjectArray => disciplinesObjectArray.map(object => object.teachersDisciplines.map(test => test.teachers.name)));
    console.log(teachersNamesArray)
    const testsNamesArray = disciplinesArray.map(disciplinesObjectArray => disciplinesObjectArray.map(object => object.teachersDisciplines.map(test => test.tests.map(testName => testName.name))))
    console.log(testsNamesArray)
    const testsPdfArray = disciplinesArray.map(disciplinesObjectArray => disciplinesObjectArray.map(object => object.teachersDisciplines.map(test => test.tests.map(testName => testName.pdfUrl))))
    console.log(testsPdfArray);
    const categoriesArray = disciplinesArray.map(disciplinesObjectArray => disciplinesObjectArray.map(object => object.teachersDisciplines.map(test => test.tests.map(testName => testName.categories.name))))
    console.log(categoriesArray)

    return (
        <Container>
            <Header />
            <ContentContainer>
                <ButtonsContainer>
                    <button>DISCIPLINAS</button>
                    <button>PESSOA INSTRUTORA</button>
                    <button>ADICIONAR</button>
                </ButtonsContainer>
                <TestsContainer>
                {tests.map((data) => {
                    return(
                    <Subjects>
                        <SubjectsContainer>
                            <h3>{data.number} Período</h3>
                            <ion-icon name="chevron-up-outline"></ion-icon>
                        </SubjectsContainer>
                        <Topics>
                            <TopicsContainer>
                                <h4>{data.disciplines.map(name => name.name)}</h4>
                                <ion-icon name="chevron-up-outline"></ion-icon>
                            </TopicsContainer>
                            <Tests>
                                <h5>{data.disciplines.map(teachersDisciplines => teachersDisciplines.teachersDisciplines.map(teacher => teacher.teachers.name))}</h5>
                                <span>{data.disciplines.map(teachersDisciplines => teachersDisciplines.teachersDisciplines.map(teacher => teacher.tests.map(testsObject => testsObject.categories.name)))} <a href = {data.disciplines.map(teachersDisciplines => teachersDisciplines.teachersDisciplines.map(teacher => teacher.tests.map(testsObject => testsObject.pdfUrl)))} target= "_blank">{data.disciplines.map(teachersDisciplines => teachersDisciplines.teachersDisciplines.map(teacher => teacher.tests.map(testsObject => testsObject.pdfUrl)))}</a> ({data.disciplines.map(teachersDisciplines => teachersDisciplines.teachersDisciplines.map(teacher => teacher.teachers.name))})</span>
                            </Tests>
                        </Topics>
                </Subjects>
                    )
                })}
                </TestsContainer>
            </ContentContainer>
        </Container>
    )
}