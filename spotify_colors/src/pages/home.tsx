import React, {useState, useEffect} from "react"
import { getParams, getToken, sha256, generateRandomString, base64encode, getCV, setCV } from "../components/functions.tsx";
import { Navigate } from "react-router-dom";

const clientId = '47a20135bab4443fba6e9752a550095c';
const redirectUri = 'http://localhost:3000';
const scope = 'user-read-private user-read-email';
const authUrl = new URL("https://accounts.spotify.com/authorize");
const urlParams = new URLSearchParams(window.location.search);
let code = urlParams.get('code');

async function callForToken(code: string){
    const codeVerifier = getCV();
    // console.log(`code verifier at get token: ${codeVerifier}`);
    return await getToken(code, clientId, redirectUri, codeVerifier);
}

function Home() {
    const [token, setToken] = useState<string|null> (null);

    useEffect(() => {
        const fetchAndSetToken = async () => {
            if (code) {
                const token = await callForToken(code);
                setToken(token);
                // console.log(`token: ${token}`);
            }
        };
        fetchAndSetToken();
    }, []);

    if (token) {
        // console.log(`token exists, will navigate: ${token}`);
        return <Navigate to="/results" />;
    }
    
    const handleClickAsync = async () => {
        const codeVerifier = generateRandomString(64);
        // console.log(`code verifier initial: ${codeVerifier}`);
        setCV(codeVerifier);
        const hashed = await sha256(codeVerifier)
        const codeChallenge = base64encode(hashed);
        const result = await getParams(clientId, scope, redirectUri, codeVerifier, codeChallenge);
        authUrl.search = new URLSearchParams(result).toString();
        //open auth URL in window
        window.location.href = authUrl.toString();
    };

    if (!code){
        return (
            <h1>
                <button onClick={handleClickAsync}>Authenticate with Spotify</button>
            </h1>
        );
    } else {
        // TODO: eventually add animation here
        return (
            <h1>
                loading...
            </h1>
        );
    }
};


export default Home;