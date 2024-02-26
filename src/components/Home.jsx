//importing photo for home page
import travel from '../assets/travel.jpg';




function Home() {

  return (
    <section>

        <h1>Bienvenidos(Welcome)</h1>

    <div className='homerow'>
        <img className="travel_home"src= {travel} />

    <div className='homecolumn'>
        
        <h1>Global Wonders Travel Company</h1>
        <h4>Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Neque odio repudiandae 
            culpa ullam, deserunt veritatis quaerat 
            harum libero iste quod officiis possimus 
            alias enim? 
        </h4>

        <h2>Explore the GWTC Store</h2>
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing 
            elit.
        </h3>

    </div>
    </div>

    </section>
  )}
export default Home;
