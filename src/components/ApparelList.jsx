//importing photos I want to use
import pyr from '../assets/3pyramids.jpg';
import colosseum from '../assets/colosseum.jpg';
import eiffle from '../assets/eiffle.jpg';
import machu from '../assets/machu.jpg';
import opera from '../assets/opera.jpg';
import redeem from '../assets/redeem.jpg';
import sphinx from '../assets/sphinx.jpg';
import stone from '../assets/stone.jpg';
import wall from '../assets/wall.jpg';
import piza from '../assets/piza.jpg';



function ApparelList() {
    return (
    
        <section>
            <div>
                <h1>Apparel List Component</h1>
            </div>
            <div className="apparel">
            <img src= {pyr} />
            <img src= {colosseum} />
            <img src= {eiffle} />
            <img src= {machu} />
            <img src= {opera} />
            <img src= {redeem} />
            <img src= {sphinx} />
            <img src= {stone} />
            <img src= {wall} />
            <img src= {piza} />
            </div>
        </section>
    )
}
export default ApparelList;