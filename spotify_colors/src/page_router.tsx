import React, { Component } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Redirect from "./pages/redirect.tsx";
import Layout from "./pages/layout.tsx";
import Home from "./pages/home.tsx";
import NoPage from "./pages/no_page.tsx"

export default class PageRouter extends Component {
    render() {
        return (
        <HashRouter>
            <Routes>
                <Route path = "/" element = {<Layout/>}/>
                <Route index element = {<Home />} />
                <Route path="/Redirect" element={<Redirect />} />
                <Route path="*" element = {<NoPage />}/>
            </Routes>
        </HashRouter>
        )
    }
}