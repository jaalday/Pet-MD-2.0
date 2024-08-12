
import { useAuth } from '../AuthContext';


const Navigation = () => {

 const { isAuth } = useAuth();



  return (

<>
<nav className="navbar  navbar-expand-lg bg-body-" >
  <div className="container-fluid">
    <a className="logo" href="/"><img className="logo" src="https://ultrapet.com/wp-content/uploads/2015/12/PETMD-Logo.png"></img></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav" >
      <ul className="navbar-nav">
        <li className="nav-item">
            </li>
          
     
        {isAuth ? (
           <>
            <li className="nav-item">
            <a className="nav-link" href="/profile">Profile</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="/petprofile">Pet Profile</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="/logout">Logout</a>
            </li>
            </>
        ):(
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

        ) }

       
      </ul>
    </div>
  </div>
</nav> 

</>
    

  );
}

export default Navigation;






