// connect to spotify api
// get data
// return data
// code verifier
const generateRandomString = (length) => {
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const values = crypto.getRandomValues(new Uint8Array(length));
  return values.reduce((acc, x) => acc + possible[x % possible.length], "");
}
  
const codeVerifier  = generateRandomString(64);  

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

async function Connection() {

    
  const hashed = await sha256(codeVerifier)
  const codeChallenge = base64encode(hashed);

  const clientId = '47a20135bab4443fba6e9752a550095c';
  const redirectUri = 'http://localhost:3000/redirect';

  const scope = 'user-read-private user-read-email';
  const authUrl = new URL("https://accounts.spotify.com/authorize")

  // generated in the previous step
  window.localStorage.setItem('code_verifier', codeVerifier);

  const params =  {
    response_type: 'code',
    client_id: clientId,
    scope,
    code_challenge_method: 'S256',
    code_challenge: codeChallenge,
    redirect_uri: redirectUri,
  }

  authUrl.search = new URLSearchParams(params).toString();
  window.location.href = authUrl.toString();

  const urlParams = new URLSearchParams(window.location.search);
  let code = urlParams.get('code');
  console.log(code);
  const getToken = async (code) => {

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
    const response =await body.json();
  
    localStorage.setItem('access_token', response.access_token);
    console.log("access_token", response.access_token);
  };  

  return (
    // console.log(Connection())
    console.log("hello world")
  );
};

export default Connection;
 