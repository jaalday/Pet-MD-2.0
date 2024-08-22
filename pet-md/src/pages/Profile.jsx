



import { useAuth } from "../AuthContext";
import {  Form, Link } from "react-router-dom";
import { supabase } from "../config/supabaClients";
import { useEffect } from "react";
import { useState } from "react";





const addPet = async (e) => {
    e.preventDefault();
const formData = new FormData(document.getElementById('addPet'));
const name = formData.get('name');
const species = formData.get('species');
const gender = formData.get('gender');
const age = formData.get('age');
const fixed = formData.get('fixed');
const breed = formData.get('breed');
await supabase.from('pets').insert({
    name,
    species,
    gender,
    age,
    fixed,
    breed,
    owner_id: localStorage
    .getItem('user'),


})
console.log('pet added');
alert('Pet added');
    
      
};




const Profile = () => {
const [pets, setPets] = useState([]);


    useEffect(() => {
        const fetchPets = async () => {
            const { data, error } = await supabase
                .from('pets')
                .select("*")
                .eq('owner_id', localStorage.getItem('user'));
            console.log(data);
            if (error) {
                console.log(error);
                setPets(null);
            }
            if (data) {
                setPets(data);
            }
        };
        fetchPets();
    },[]);

    const { user } = useAuth();

    


 

    return (
        <div className="profile">
         
            <h2 className="title2">Your Pets</h2>
            <div className="petList">
                {pets.map((pet) => (
                  <div className="petCard" key={pet.id}>
                       <Link to="/petprofile" className="petCard" > <h2>{pet.name}</h2></Link>
                       
                        </div>))
               }

                </div>

            <Form className="form" id="addPet" name="addPet" method="POST" key={user}>
            <h3>Fill out this form below to add a new animal</h3>
                <input className="input2" type="text" name="name" id="name" placeholder="Pet Name" required />
                <br/>
               
                <input className="input2" type="text" name="species" id="species" placeholder="Species" required />
                <br/>
                <input className="input2"   name="breed" type="text" id="breed" placeholder="Breed"/>
                <br/>
                <input className="input2" type="number" name="age" id="age" placeholder="Age" required />
                <br/>
                <select className="select"  type="text" name="gender" id="gender" placeholder="male or female">
                    <option>Male</option>
                    <option>Female</option>
                </select>
                <select className="select" type="text" name="fixed" id="fixed" >
                    
                    <option>Fixed</option>
                    <option>Not Fixed</option>
                    <option>Unknown</option>
                </select>
                <br/>

          
              <br/>

            
            <button className="addAnimal" onClick={addPet} type="submit">Add animal</button>
            </Form>

        </div>
    );
};

export default Profile;