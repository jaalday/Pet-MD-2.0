
import { useAuth } from '../AuthContext';
import{ Link } from 'react-router-dom';
import logo from '../assets/logo.webp';


const Navigation = () => {



const {isAuth } = useAuth();

  return (

<>
<nav className="navbar  navbar-expand-lg bg-body-" >
  <div className="container-fluid">
    <Link to= "/" className='logo' ><img className="logo" src={logo}></img></Link>
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
            <li className="nav-item">
              <Link to="/" className="nav-link" >Medical tips</Link>
            </li>
            </>
            
            ) : (
              <>
           
            <li className="nav-item">
              <Link to="/about" className="nav-link" >About</Link>
            </li>
          
            <li className="nav-item">
              <Link to="/login" className="nav-link" >Login</Link>
            </li>
            <li className="nav-item">
              <Link to="/information" className="nav-link" >Medical tips</Link>
            </li>
            
            </>
          )}
          
         

        

       
      </div>
       
    </div>
  </div>
</nav> 

</>
  )};






/* <nav className="navbar bg-body-tertiary fixed-top">
  <div className="container-fluid">
  <Link to= "/" className='logo' ><img className="logo" src="https://ultrapet.com/wp-content/uploads/2015/12/PETMD-Logo.png"></img></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
      {isAuth? (
           <>
            <div className="nav-item">
            <Link className="nav-link" to ="/profile">  Profile</Link>
            </div>
            <div>
            <Link to ="/petprofile" className="nav-link"> Pet Profile</Link>
            </div>
            <div>
            <Link to ="/logout" className="nav-link" >Logout</Link>
            </div>
            <div className="nav-item">
              <Link to="/" className="nav-link" >Medical tips</Link>
            </div>
            </>
            
            ) : (
              <>
                 <div className="nav-item">
              <Link to="/" className="nav-link" >Home</Link>
            </div>
           
            <div className="nav-item">
              <Link to="/about" className="nav-link" >About</Link>
            </div>
        
            <div className="nav-item">
              <Link to="/login" className="nav-link" >Login</Link>
            </div>
            <div className="nav-item">
              <Link to="/" className="nav-link" >Medical tips</Link>
            </div>
            
            </>
          )}
     <br/>
        <form className="d-flex mt-3" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn " type="submit">Search</button>
        </form>
      </div>
    </div>
  </div>
</nav>
</>
    

  );
} */

export default Navigation;






