const PetProfile = () => {


    const user = JSON.parse(localStorage.getItem('user'));
    return (
        <>

       <h2> pet profile</h2> {user.email}
        </>
    
 
    );
    }
    export default PetProfile;