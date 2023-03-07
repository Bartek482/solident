import React from "react";
import { HomeHeader } from "./home components/HomeHeader";
import { HomeBody } from "./home components/HomeBody";
import { HomeFooter } from "./home components/HomeFooter";

export function Home () {
    return (
        <>
            <HomeHeader/>
            <HomeBody/>
            <HomeFooter/>
        </>
    )
}