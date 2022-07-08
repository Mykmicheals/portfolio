import React, { useState, useReducer } from "react";
import exon from "../assets/images/exon.png";
import sky from "../assets/images/skydots.png";
import weather from "../assets/images/weather.png";
import fami from "../assets/images/famitil.png";
import food from "../assets/images/food.png"
import MyRodal from "./MyRodal";
import { Icon } from "@iconify/react";
import news from "../assets/images/news.png";
import Rodal from "rodal";

function Portfolio() {
    const [showModal, setModal] = useState(false);
    const modalHandler = () => {
        setModal((showModal) => !showModal);
    };

    const initialState = {
        items: [],
        load: false,
    };
    const reducerFn = (state, action) => {
        if (action.type === "exon") {
            return {
                ...state,
                items: action.payload,
                load: true,
            };
        }

        if (action.type === "skydots") {
            return {
                ...state,
                items: action.payload,
                load: true,
            };
        }

        if (action.type === "weather") {
            return {
                ...state,
                items: action.payload,
                load: true,
            };
        }

        if (action.type === "quiz") {
            return {
                ...state,
                items: action.payload,
                load: true,
            };
        }

        if (action.type === "famitil") {
            return {
                ...state,
                items: action.payload,
                load: true,
            };
        }


        if (action.type === "news") {
            return {
                ...state,
                items: action.payload,
                load: true,
            };
        }

    };
    const [siteState, dispatchFunc] = useReducer(reducerFn, initialState);
    const exonHandler = () => {
        dispatchFunc({
            type: "exon",
            payload: {
                builtWith: "Company Website",
                stacks: ["html", "css", "javascript", "django"],
                website: "http://exonsmith.pythonanywhere.com/",
            },
        });
    };
    const skydotsHandler = () => {
        dispatchFunc({
            type: "skydots",
            payload: {
                builtWith: "Landing Page",
                stacks: ["html", "css", "javascript", "django"],
                website: "http://skydotts.pythonanywhere.com/",
            },
        });
    };
    const weatherHandler = () => {
        dispatchFunc({
            type: "weather",
            payload: {
                builtWith: "Weather App",
                stacks: ["react", "redux", "firebase"],
                website: "https://weather-41bb7.web.app/",
            },
        });
    };
    const famitilHandler = () => {
        dispatchFunc({
            type: "famitil",
            payload: {
                builtWith: "Company Website",
                stacks: ["WordPress"],
                website: "https://www.famtilionglobal.com//",
            },
        });
    };
    const newsHandler = () => {
        dispatchFunc({
            type: "news",
            payload: {
                builtWith: "News App",
                stacks: ["react", "Redux", "Firebase", 'Guardian Api'],
                website: "https://reactblog-10509.web.app/",
            },
        });
    };

    const doubleExon = () => {
        exonHandler();
        modalHandler();
    };
    const doubleSky = () => {
        skydotsHandler();
        modalHandler();
    };
    const doubleWeather = () => {
        weatherHandler();
        modalHandler();
    };
    const doubleFamitil = () => {
        famitilHandler();
        modalHandler();
    };
    const doubleNews = () => {
        newsHandler();
        modalHandler();
    };


    return (
        <div data-aos="fade-up"
            data-aos-anchor-placement="center-center" className="port">
            <h2>Portfolio</h2>
            <h5>Projects</h5>
            <ul>
                <li data-aos='fade-up' onClick={doubleExon}>
                    <img src={exon} alt='exxonsmith' />
                    <div className="port-div">
                        <p>View More </p>
                        <span className="plus">+</span>
                    </div>
                </li>

                <li data-aos='fade-up' onClick={doubleSky}>
                    <img src={sky} alt='skydots' />
                    <div className="port-div">
                        <p>View More</p>
                        <span className="plus">+</span>
                    </div>
                </li>

                <li data-aos='fade-up' onClick={doubleWeather}>
                    <img src={food} alt='weather app' />
                    <div className="port-div">
                        <p>View More </p>
                        <span className="plus">+</span>
                    </div>
                </li>


                <li data-aos='fade-up' onClick={doubleNews}>
                    <img src={news} alt='news app' />
                    <div className="port-div">
                        <p>View More </p>
                        <span className="plus">+</span>
                    </div>
                </li>


                <li data-aos='fade-up' onClick={doubleFamitil}>
                    <img src={fami} alt='famitil' />
                    <div className="port-div">
                        <p>View More </p>
                        <span className="plus">+</span>
                    </div>
                </li>


                <li data-aos='fade-up' data-aos-delay='600' onClick={doubleWeather}>
                    <img src={weather} alt='weather' />
                    <div className="port-div">
                        <p>View More </p>
                        <span className="plus">+</span>
                    </div>
                </li>

                {/* <Rodal
                    visible={showModal}
                    onClose={modalHandler}
                >
                    <div className='modals'>
                        <h3>{siteState.items.builtWith}</h3>
                        <h3>Built With</h3>
                        {siteState.load &&
                            siteState.items.stacks.map((each) => {
                                { console.log(each) }
                                return (
                                    <div>
                                        <i>
                                            <Icon icon="ant-design:arrow-right-outlined" />
                                        </i>
                                        <p>{each}</p>
                                    </div>
                                );
                            })}
                        <a target="blank" href={siteState.items.website}>
                            <button>Visit Website</button>
                        </a>
                    </div>
                </Rodal> */}

                <MyRodal visible={showModal} onClose={modalHandler}>
                    <p>{siteState.items.builtWith}</p>
                    <h4>Built With</h4>
                    {siteState.load &&
                        siteState.items.stacks.map((each) => {
                            {console.log(each)}
                            return (
                                <div>
                                    <i>
                                        <Icon icon="ant-design:arrow-right-outlined" />
                                    </i>
                                    <p>{each}</p>
                                </div>
                            );
                        })}
                    <a target="blank" href={siteState.items.website}>
                        <button>Visit Website</button>
                    </a> *
                </MyRodal>
            </ul>
        </div>
    )
}

export default Portfolio