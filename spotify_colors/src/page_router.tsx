import React, { Component } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Redirect from "./pages/redirect";
import Layout from "./pages/layout";

export default class PageRouter extends Component {
    render() {
        return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Layout />}/>
                <Route path="/redirect" element={<Redirect />} />
            </Routes>
        </HashRouter>
        )
    }
}