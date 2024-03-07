//importing photo for home page
import travel from '../assets/travel.jpg';




function Home() {

  return (
    <section>

        <h1>Bienvenidos(Welcome)</h1>

    <div className='homerow'>
        <img className="travel_home"src= {travel} />

    <div>
        
        <h1>Global Wonders Travel Company</h1>
        <h3>Welcome to the Global Wonders Traveler App. Whether you are traveling solo
            or with family and friends, we can show you some major tourist attractions
            from around the world. Get started planning your next trip today! Visit our
            store to see our brilliant photograpy!
        </h3>


    </div>
    </div>

    </section>
  )}
export default Home;
