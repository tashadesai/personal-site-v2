import './App.css';
import React from 'react';
import anime from "animejs";
import $ from 'jquery';


class App extends React.Component {
    componentDidMount() {
        const onhovered = anime({
            targets: '.submit',
            width: 200,
            duration: 1500,
            autoplay: false
        });
        const offhovered = anime({
            targets: '.submit',
            width: 64,
            duration: 1500,
            autoplay: false,
        });

        $("#submitButton").hover(
            () => onhovered.play()
        );
        $("#submitButton").mouseleave(
            () => offhovered.play()
        );

        var card = document.querySelector("#sticker");
        var playing = false;

        card.addEventListener('click',function() {
            if(playing)
                return;

            playing = true;
            anime({
                targets: card,
                scale: [{value: 1}, {value: 1.4}, {value: 1, delay: 250}],
                rotateY: {value: '+=180', delay: 200},
                easing: 'easeInOutSine',
                duration: 400,
                complete: function(anim){
                    playing = false;
                }
            });
        });

    }

    render() {
        return (
            <div className="App mw9 center ph6-ns pt5-ns">
                <div id="hi" className="intro fl w-100 h4">
                    Hi, I'm
                </div>
                <div id="name" className="intro fr w-100">
                    Natasha Desai
                </div>
                <div className="fr w-80">
                    <div id="aboutP1" className="">
                        a full stack software engineer based in New York city.<br/>
                        Currently, I'm a software engineering manager at Innovid.
                    </div>
                </div>
                <div className="links fr w-80 pt6">
                    <div className="fl w-100 w-25-ns pa2">
                        <div>Resume</div>
                        <div id="resu" className={"bubble"}>
                            Resume
                            <span></span><span></span><span></span><span></span>
                        </div>
                    </div>
                    <div className="fl w-100 w-25-ns pa2">
                        <div>LinkedIn</div>
                        <div id="linke" className={"bubble"}>
                            LinkedIn
                            <span></span><span></span><span></span><span></span>
                        </div>
                    </div>
                    <div className="fl w-100 w-25-ns pa2">
                        <div>Github</div>
                        <div id="gith" className={"bubble"}>
                            Github
                            <span></span><span></span><span></span><span></span>
                        </div>
                    </div>
                    <div className="fl w-100 w-25-ns pa2">
                        <div>Email</div>
                        <div id="email" className={"bubble"}>
                            Email
                            <span></span><span></span><span></span><span></span>
                        </div>
                    </div>

                </div>

                <div id="sticker">
                    <div className="card">
                        <div className="front">
                        </div>
                        <div className="back">
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default App;
