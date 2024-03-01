import React from "react"
import { connectionThings, getToken } from "../components/functions.tsx";
// connect to spotify api
// get data
// return data
// code verifier

var response;
const clientId = '47a20135bab4443fba6e9752a550095c';
const redirectUri = 'http://localhost:3000/#/redirect';
const scope = 'user-read-private user-read-email';
const authUrl = new URL("https://accounts.spotify.com/authorize")
const generateRandomString = (length) => {
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const values = crypto.getRandomValues(new Uint8Array(length));
    return values.reduce((acc, x) => acc + possible[x % possible.length], "");
}
    
const codeVerifier  = generateRandomString(64); 


  
function Home() {
    const handleClickAsync = async () => {
        const result = await connectionThings(clientId, scope, redirectUri, authUrl);
        console.log('Result:', result);
      };
return (
    <h1>
        <button onClick={handleClickAsync}>Click me</button>
    </h1>
);
};
   

export default Home;