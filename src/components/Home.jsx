//importing photo for home page
import home_travel from '../assets/travel_home.jpg';


function Home() {

  return (
    <section>
        <h1>Bienvenidos(Welcome)</h1>

    <div className='homerow'>
        <img src= {home_travel} />

    <div className='homecolumn'>
        
        <h1>Global Wonders Travel Company</h1>
        
        <h3>Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Neque odio repudiandae 
            culpa ullam, deserunt veritatis quaerat 
            harum libero iste quod officiis possimus 
            alias enim? Dignissimos dolores odio.
            Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Nostrum, pariatur numquam
            saepe alias dolorem tenetur aperiam est iusto
            enim dolores? Vel quia laboriosam at animi
            excepturi ab, ipsam est magni.
        </h3>

        <h2>Explore the GWTC Store</h2>

        <h3>Lorem ipsum dolor sit amet consectetur adipisicing 
            elit. Vero voluptatibus aliquam quidem aperia
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eaque voluptatibus blanditiis porro nihil voluptates.
        </h3>

    </div>
    </div>

    </section>
  )}
export default Home;
