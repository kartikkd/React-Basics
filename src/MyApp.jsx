import React, { useState } from "react";
import addIcon from "@ui5/webcomponents-icons/dist/add.js";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { Home } from "./Home";
import { Detail}  from "./Detail";

import {
    Avatar,
    ShellBar,
    ShellBarItem,
  } from "@ui5/webcomponents-react";

export function MyApp() {
    const navigate=useNavigate();
    const handleLogoClick=()=>{
        navigate("./");
    };
    return (
        <div>
            <ShellBar
                logo={<img src='logo1.png' />}
                profile={
                    <Avatar>
                    <img src="account.png" />
                    </Avatar>
                }
                primaryTitle="My App New1"
                onLogoClick={handleLogoClick}
                >
                <ShellBarItem icon={addIcon} text="Add"  />
            </ShellBar>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/detail" element={<Detail />} />
                <Route path="/" element={<Navigate replace to="/home" />} />
            </Routes>
        </div>
    );
}
