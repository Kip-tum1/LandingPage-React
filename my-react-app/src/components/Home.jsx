
import "../css/Home.css"

function Home() {
  return (
    <div className="home">
        <h1> Find Your Dream Home </h1>
        <p className="paragraph">With expert local knowledge, exclusive listings, and a passion for connecting people with properties they love, your dream space is closer than you think — let's find it together today</p>
        <div className="home2">
            <input type="text" placeholder="Enter Location/Address"/>
            <button>Search</button>
        </div>
    </div>
  )
}

export default Home;