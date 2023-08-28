import React from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import Home from "./components/Home";
import Names from "./components/Names";
import "./custom.css";

function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/names" element={<Names />} />
            </Routes>
        </Layout>
    );
}

export default App;