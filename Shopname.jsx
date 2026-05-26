
import { fooditems } from "./fooditems"; 

function Shopname(){
    return(

        <div>
            {fooditems.map((item) =>(
                <div key={item.id}>

                    <p>{item.name}</p>
                    <p>{item.address}</p>
                </div>
            ))}
            
        </div>

    );
}
export default Shopname;