const PetProfile = () => {


    const user = (localStorage.getItem('user'));
    console.log(user);  
    return (
        <>

       <h2> pet profile</h2> {user.id}
        </>
    
 
    );
    }
    export default PetProfile;