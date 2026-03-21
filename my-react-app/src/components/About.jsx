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
                    commercial, and investment properties. Our team combines years of hands-on experience with an
                    intimate understanding of local neighborhoods — from the vibrant high-rises of Westlands and Kilimani
                    to the serene gated communities in Karen, Runda, and the rapidly expanding suburbs of Kiambu, Kajiado, and beyond.
                    We know Nairobi isn't just a city; it's a mosaic of lifestyles, ambitions, and opportunities. Whether you're a first-time buyer searching for that perfect family home, a seasoned investor eyeing high-yield apartments or commercial spaces, a diaspora Kenyan securing roots back home, or a developer looking for strategic land partnerships, we deliver tailored solutions with transparency, integrity, and unwavering commitment.
                </p>
                <button className="button">Contact Us</button>
            </div>
            
            
        </div>
    )

}
export default About