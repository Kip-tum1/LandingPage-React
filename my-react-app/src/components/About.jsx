import AboutImage from "../assets/about.jpg"
function About(){
    return (
        <div className="about">
            <div>
                <img src={AboutImage} alt="about" style={{width: "400px", height: "400px", border: "none", borderRadius: "10px"}}/>
            </div>
            <div>
                <h1>About Us</h1>
                <p>
                    At Raizy, we're more than just a real estate agency — we're
                    your trusted partner in turning property dreams into reality across Nairobi
                    and Kenya's most promising regions.Founded with a deep passion for Nairobi's
                    dynamic property landscape, we've grown into one of the city's go-to names for residential,
                    commercial, and investment properties. 
                </p>
                <button className="button">Contact Us</button>
            </div>
            
            
        </div>
    )

}
export default About