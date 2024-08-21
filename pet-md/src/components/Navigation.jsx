
import { useAuth } from '../AuthContext';
import{ Link } from 'react-router-dom';


const Navigation = () => {



const {isAuth } = useAuth();

  return (

<>
<nav className="navbar  navbar-expand-lg bg-body-" >
  <div className="container-fluid">
    <Link to= "/" className='logo' ><img className="logo" src="https://ultrapet.com/wp-content/uploads/2015/12/PETMD-Logo.png"></img></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav" >
      <div className="navbar-nav">
        <li className="nav-item">
            </li>
          
     
        {isAuth? (
           <>
            <li className="nav-item">
            <Link className="nav-link" to ="/profile">  Profile</Link>
            </li>
            <li>
            <Link to ="/petprofile" className="nav-link"> Pet Profile</Link>
            </li>
            <li>
            <Link to ="/logout" className="nav-link" >Logout</Link>
            </li>
            </>
            
            ) : (
              <>
           
            <li className="nav-item">
              <a className="nav-link" href="/about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/signup">Sign up</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/login">Login</a>
            </li>
            </>
          )}
          
         

        

       
      </div>
       
    </div>
  </div>
</nav> 

</>
    

  );
}

export default Navigation;






