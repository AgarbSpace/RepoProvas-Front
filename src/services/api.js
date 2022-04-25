import axios from "axios";
import dotenv, { config } from "dotenv";
dotenv.config();

const BASE_URL = process.env.REACT_APP_URL || "http://localhost:5000";

function createConfig(token){
    return { headers: {
        'Authorization': `Bearer ${token}`
    }};
}

async function signUp(data){
    await axios.post(`${BASE_URL}/signUp`, {...data});
}

async function signIn(data){
    const token = await axios.post(`${BASE_URL}/signIn`, {...data});
    return token.data
}

async function getTests(token){
    const config = createConfig(token);

    try {
        const promise = await axios.get(`${BASE_URL}/tests`, config)
        return promise.data;

    } catch (error) {
        console.log(error);
        return;
    }
}

async function getTestsBy(token){
    const config = createConfig(token);

    try {
        const promise = await axios.get(`${BASE_URL}/tests?by=teacher`, config)
        return promise.data;

    } catch (error) {
        console.log(error);
        return;
    }
}

export default {
    signUp,
    signIn,
    getTests,
    getTestsBy
}
