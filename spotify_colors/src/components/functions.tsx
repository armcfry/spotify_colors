import React from "react"
import { useNavigate, useLocation } from 'react-router-dom';

// connect to spotify api
// get data
// return data
// code verifier

// var response;
// const clientId = '47a20135bab4443fba6e9752a550095c';
// const redirectUri = 'http://localhost:3000/#/redirect';
// const scope = 'user-read-private user-read-email';
// const authUrl = new URL("https://accounts.spotify.com/authorize")
const generateRandomString = (length) => {
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const values = crypto.getRandomValues(new Uint8Array(length));
    return values.reduce((acc, x) => acc + possible[x % possible.length], "");
}

const codeVerifier = generateRandomString(64);

export async function connectionThings(clientId: string,
                                        scope: string,
                                        redirectUri: string,
                                        authUrl: URL): Promise<string> {
    //code challenge
    const sha256 = async (plain) => {
        const encoder = new TextEncoder()
        const data = encoder.encode(plain)
        return window.crypto.subtle.digest('SHA-256', data)
    }

    const base64encode = (input) => {
        return btoa(String.fromCharCode(...new Uint8Array(input)))
            .replace(/=/g, '')
            .replace(/\+/g, '-')
            .replace(/\//g, '_');
    }
    const hashed = await sha256(codeVerifier)
    const codeChallenge = base64encode(hashed);

    // generated in the previous step
    window.localStorage.setItem('code_verifier', codeVerifier);

    const params = {
        response_type: 'code',
        client_id: clientId,
        scope,
        code_challenge_method: 'S256',
        code_challenge: codeChallenge,
        redirect_uri: redirectUri,
    }

    authUrl.search = new URLSearchParams(params).toString();

    // window.location.href = authUrl.toString();

    // const urlParams = new URLSearchParams(window.location.search);
    // let code = urlParams.get('code');
    // return (typeof code == "string") ? code : "null";
    return "please hold"
}

export async function getToken(code, clientId, redirectUri): Promise<string> {

    // stored in the previous step
    // let codeVerifier = localStorage.getItem('code_verifier');

    const payload = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            client_id: clientId,
            grant_type: 'authorization_code',
            code,
            redirect_uri: redirectUri,
            code_verifier: codeVerifier,
        }),
    }

    const body = await fetch('https://accounts.spotify.com/api/token', payload);
    let response = await body.json();
    console.log(response);

    // localStorage.setItem('access_token', response.access_token);
    return response.access_token;
}; 