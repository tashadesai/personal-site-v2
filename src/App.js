import './App.css';
import React from 'react';
import anime from "animejs";
import $ from 'jquery';


class App extends React.Component {
    componentDidMount() {

        // var card = document.querySelector("#sticker");
        // var playing = false;

        // card.addEventListener('click', function () {
        //     if (playing)
        //         return;

        //     playing = true;
        //     anime({
        //         targets: card,
        //         scale: [{value: 1}, {value: 1.1}, {value: 1, delay: 250}],
        //         rotateY: {value: '+=180', delay: 200},
        //         easing: 'easeInOutSine',
        //         duration: 500,
        //         complete: function (anim) {
        //             playing = false;
        //         }
        //     });
        // });

    }

    render() {
        return (
            <div className="App mw9 center ph6-ns pt5-ns">


                {/* <div className="fl w-20" style={{"paddingLeft": "-1rem"}}>
                    <div id="sticker">
                        <div className="card">
                            <div className="front">
                            </div>
                            <div className="back">
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="links fr w-100">
                    <a href={"../NatashaDesai2023.pdf"}
                        target="_blank"
                        rel="noopener noreferrer">
                        <div className="fl w-100 w-25-ns pa2">
                            <div id="resu" className={"bubble"}>
                                Resume
                                <span></span><span></span><span></span><span></span>
                            </div>
                        </div>
                    </a>
                    <a href={"https://www.linkedin.com/in/desainatasha/"}
                        target="_blank"
                        rel="noopener noreferrer">
                        <div className="fl w-100 w-25-ns pa2">
                            <div id="linke" className={"bubble"}>
                                LinkedIn
                                <span></span><span></span><span></span><span></span>
                            </div>
                        </div>
                    </a>
                    <a href={"https://github.com/tashadesai"}
                        target="_blank"
                        rel="noopener noreferrer">
                        <div className="fl w-100 w-25-ns pa2">
                            <div id="gith" className={"bubble"}>
                                Github
                                <span></span><span></span><span></span><span></span>
                            </div>
                        </div>
                    </a>
                    <a href="mailto: tashadesai@gmail.com">
                        <div className="fl w-100 w-25-ns pa2">
                            <div id="email" className={"bubble"}>Email
                                <span></span><span></span><span></span><span></span>
                            </div>
                        </div>
                    </a>

                </div>

                <div id="name" className="w-100 flex justify-center mt7 mb5">
                    <div id="firstn" className="mr4">natasha</div> <div id="lastn" className="">desai</div>
                </div>
                <div id="abouttop" className="aboutborder center"></div>
                <div id="aboutP1" className="mv4 center ">
                    A full stack software engineer based in New York City with a love of building and creating
                    <br />
                    5+ years of experience with Javascript, Typescript, React, Redux, Node, Express, AWS, and more
                </div>
                <div id="aboutbottom" className="aboutborder center"></div>

            </div>
        );
    }
}


export default App;
