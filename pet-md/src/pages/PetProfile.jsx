const PetProfile = () => {


    const user = (sessionStorage.getItem('user'));
    console.log(user);  
    return (
        <>

       <h2> pet profile {user.id}</h2> 
        </>
    
 
    );
    }
    export default PetProfile;