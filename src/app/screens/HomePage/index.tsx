import React from "react";
import {Statistics} from "./statistics";
import {TopCollections} from "./topCollections";
import {BestSellers} from "./bestSellers";
import {Recommendation} from "./recommendation";
import {Advertisements} from "./advertisements";
import {BestBook} from "./bestBook";
import {Login} from "./login";
import '../../../css/home.css';
import '../../../css/navbar.css';

export function HomePage() {
    return <div className="homepage">
        <Login/> 
        <Statistics/>
        <TopCollections/>
        <BestSellers/>
        <Advertisements/>
        <Recommendation/>
        <BestBook/>
    </div>;
}