import  { useState, useEffect } from 'react';

import { supabase } from "../config/supabaClients";



const PetProfile = () => {

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



    const user = (localStorage.getItem('user'));
    console.log(user);  
    return (
        <>


       <div className="petList">
                {pets.map((pet) => (
                  <div className="petCard2" key={pet.id}>
                       <h2 className='petName'>{pet.name}</h2>
                       <p>Species: {pet.species}</p>
                       <p>Breed: {pet.breed}</p>
                       <p>Gender: {pet.gender}</p>
                          <p>Age: {pet.age}</p>
                            <p>Fixed?: {pet.fixed}</p>
                            <button>Add History</button>
                        </div>))
               }
              

                </div>
        </>
    
 
    );
    }
    export default PetProfile;