//importing photo for home page
import travel from '../assets/travel.jpg';


function Home() {

  return (
    <section>

        <h1>Bienvenidos(Welcome)</h1>

    <div className='homerow'>
        <img className="travel"src= {travel} style={{ float: 'left', marginRight: '20px'}} />

    <div>
        
        <h1>Global Wonders Travel Company</h1>
        <h3>Welcome to the Global Wonders Traveler App. Whether you are traveling solo
            or with family and friends, we can show you some major tourist attractions
            from around the world. Get started planning your next trip today! Visit our
            store to pick up some items before your trip!
        </h3>


    </div>
    </div>

    </section>
  )}
export default Home;
