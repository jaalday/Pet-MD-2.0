import { supabase } from "../config/supabaClients";

import About from "./About";
import homeing from "../assets/home_img.jpg";



const Home = () => {
  




    return (
        <>
        <div className="background">
            <img className="background" src= {homeing}/>
            <div className="title">
            <h1 className="title1">Pet MD</h1>
            {/* <img className="homeimg" src="https://static.vecteezy.com/system/resources/previews/005/601/786/non_2x/linear-illustration-of-a-dog-and-a-cat-with-a-pulse-vector.jpg" alt="menu"/> */}
            {/* <img className="homeimg" src="https://static.vecteezy.com/system/resources/thumbnails/016/774/409/small/heart-rate-pulse-on-transparent-background-free-png.png" alt="menu"/> */}
            </div>
        </div>

      
    </>
    );
}
export default Home;