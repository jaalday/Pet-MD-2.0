import { supabase } from "../config/supabaClients";






const Home = () => {
    console.log("data:", supabase);




    return (
        <div className="background">
            <img className="background" src="https://img.freepik.com/premium-photo/cat-paws-stethoscope-blue-background-concept-veterinary-medicine-taking-care-pets-copy-space_76158-860.jpg?w=360"/>
            <div className="title">
            <h1 className="title1">Pet MD</h1>
            {/* <img className="homeimg" src="https://static.vecteezy.com/system/resources/previews/005/601/786/non_2x/linear-illustration-of-a-dog-and-a-cat-with-a-pulse-vector.jpg" alt="menu"/> */}
            {/* <img className="homeimg" src="https://static.vecteezy.com/system/resources/thumbnails/016/774/409/small/heart-rate-pulse-on-transparent-background-free-png.png" alt="menu"/> */}
            </div>
        </div>
    );
}
export default Home;