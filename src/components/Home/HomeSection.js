import { Button } from "react-bootstrap";
import { useEffect, useState, useRef } from "react"

export const HomeSection = () => {

    const images = [
        "https://cdn.pixabay.com/photo/2017/08/07/18/28/businessman-2606509__480.jpg",
        "https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593361__480.jpg",
        "https://cdn.pixabay.com/photo/2018/01/19/07/57/shaking-hands-3091906__480.jpg"
    ];

    const titles = [
        "Services for insertion",
        "Professional follow-up",
        "Personalized advice"
    ];

    const description = [
        "We are qualified to guide you in your process",
        "We accompany you in achieving your objectives",
        "We guarantee you the advice you deserve from our experts"
    ];

    const [useCounterImg, setCounterImg] = useState(0);

    const homeFadeIn = useRef(null);

    useEffect(() => {
        let counter = 0;

        const intervalHome = setInterval(() => {

            if (counter < 2) {
                counter += 1;
                homeFadeIn.current.classList.remove("fadeIn")

            } else {
                counter = 0;
            }

            setCounterImg(counter);

        }, 5000);

        homeFadeIn.current.classList.add("fadeIn");

        return () => clearInterval(intervalHome);

    }, [useCounterImg]);


    return <div className="home_section_content" style={{ backgroundImage: `url(${images[useCounterImg]})` }}>

        <div className="home_section_content_information">

            <div className="content_title">
                <h3 ref={homeFadeIn} >
                    {titles[useCounterImg]}
                </h3>
            </div>

            <div className="content_description">
                <h5>
                    {description[useCounterImg]}
                </h5>
            </div>

            <div className="content_btn_contact">
                <Button size="lg" onClick={() => document.getElementById("contact_section").scrollIntoView({ behavior: "smooth" })} onMouseDown={(e) => e.preventDefault()}>
                    Contact us
                </Button>
            </div>
        </div>
    </div>
}