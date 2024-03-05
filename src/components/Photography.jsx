//Attraction List component

//importing photos I want to use rough draft
import pyr from '../assets/3pyramids.jpg';
import colosseum from '../assets/colosseum.jpg';
import eiffle from '../assets/eiffle.jpg';
import machu from '../assets/machu.jpg';
import opera from '../assets/opera.jpg';
import redeem from '../assets/redeem.jpg';
import sphinx from '../assets/sphinx.jpg';
import stone from '../assets/stone.jpg';
import wall from '../assets/wall.jpg';
import pisa from '../assets/pisa.jpg';


function Photography() {
    
    return (



        <section>
            <div><h1>Travel Photography</h1></div>

            <div>
                <img className="three" src= {pyr} />
                <h2>The 3 Pyramids</h2>
                <h3>GIZA, EGYPT</h3>
                <button>More Info</button>
            </div>

            <div>
            <img className="coloss"src= {colosseum} />
            <h2>The Colosseum</h2>
            <p>Rome, Italy</p>
            <button>Take Me There...</button>
                </div>

            <div>
            <img className="eiffle"src= {eiffle} />
            <h2>The Eiffel Tower</h2>
            <p>Paris, France</p>
            <button>Information</button>
            </div>

            <div>
            <img className="machu"src= {machu} />
            <h2>Machu Picchu</h2>
            <p>Cusco, Peru</p>
            </div>

            <div>
            <img className="opera"src= {opera}/>
            <h2>The Opera House</h2>
            <p>Sydney, Australia</p>
            </div>

            <div>
            <img className="redeem" src= {redeem} />
            <h2>Christ the Redeemer</h2>
            <p>Rio De Janeiro, Brazil</p>
            </div>

            <div>
            <img className="sphinx"src= {sphinx} />
            <h2>The Sphinx</h2>
            <p>Giza, Egypt</p>
            </div>

            <div>
            <img className="stone"src= {stone} />
            <h2>Stonehenge</h2>
            <p>Amesbury, England</p>
            </div>

            <div>
            <img className="wall"src= {wall} />
            <h2>Great Wall of China</h2>
            <p>Beijing, China</p>
            </div>

            <div>
            <img className="pisa"src= {pisa} />
            <h2>Leaning Tower of Pisa</h2>
            <p>Pisa, Italy</p>
            </div>
       
        </section>
    )
}
export default Photography; 