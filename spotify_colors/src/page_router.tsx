import React, { Component, useEffect} from "react";
import { HashRouter, Routes, Route, useNavigate } from "react-router-dom";
import Results from "./pages/results.tsx";
import Home from "./pages/home.tsx";
import NoPage from "./pages/no_page.tsx"

function RedirectToHome() {
    const navigate = useNavigate();
  
    useEffect(() => {
      navigate('/home');
    }, [navigate]);
  
    return null;
  }
export default class PageRouter extends Component {
    render() {
        return (
        <HashRouter>
            <Routes>
                
                <Route path = "/home" element = {<Home/>}/>
                <Route path = "/results" element = {<Results/>}/>
                <Route path="/" element={<RedirectToHome/>} />
                {/* <Route index element = {<Home />} /> */}
                {/* <Route path="/Redirect" element={<Redirect />} /> */}
                <Route path="*" element = {<NoPage />}/>
            </Routes>
        </HashRouter>
        )
    }
}