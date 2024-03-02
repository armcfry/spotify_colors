import React from "react"
import { useNavigate, useLocation } from 'react-router-dom';

export function setCV (codeVerifier: string) {
    window.localStorage.setItem('code_verifier', codeVerifier);
}

export function getCV() {
    return window.localStorage.getItem('code_verifier');
}

export function generateRandomString(length) {
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const values = crypto.getRandomValues(new Uint8Array(length));
    return values.reduce((acc, x) => acc + possible[x % possible.length], "");
}

//code challenge
export async function sha256(plain) {
    const encoder = new TextEncoder()
    const data = encoder.encode(plain)
    return window.crypto.subtle.digest('SHA-256', data)
}

export function base64encode(input) {
    return btoa(String.fromCharCode(...new Uint8Array(input)))
        .replace(/=/g, '')
        .replace(/\+/g, '-')
        .replace(/\//g, '_');
}

export async function getParams(clientId: string, scope: string, redirectUri: string, codeVerifier: string, codeChallenge) {
    window.localStorage.setItem('code_verifier', codeVerifier);
    const params = {
        response_type: 'code',
        client_id: clientId,
        scope,
        code_challenge_method: 'S256',
        code_challenge: codeChallenge,
        redirect_uri: redirectUri,
    }
    return params;
}

export async function getToken(code, clientId, redirectUri, codeVerifier): Promise<string> {
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
    // console.log(`response: ${response.access_token}`);

    window.localStorage.setItem('access_token', response.access_token);
    return response.access_token;
}; 