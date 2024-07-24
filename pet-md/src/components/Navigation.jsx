import { Link } from 'react-router-dom';

import { useState } from 'react';


const Navigation = () => {

    const [open, setOpen] = useState(false);

    const DropdownItem = () => {
        return (
            <div className='nav-item'>
                

            <li className='list'>About</li>
            <li className='list'>Contact</li>
           
            <Link to ="/signup"><li className='list'>Sign up</li></Link>
            <Link to ="/login"><li className='list'>Log in</li></Link>
            </div>
        )
    }



  return (
    <div className='Nav'>
        <div className='logo'>
           <Link to ="/"> <img className='logo' src="https://fvhmt.com/wp-content/uploads/noun-pin-3642196-304D72.svg"/></Link>
        </div>


        <div className='menu-container'>

        <div className='menu-trigger' onClick={() => (setOpen(!open))}>
            <img className='burger' src="https://img.icons8.com/ios-glyphs/30/000000/menu.png" alt="menu"/>

        </div>


        <div className={`dropdown-menu ${open? 'active' : 'inactive'}`}>
        <ul className='nav-items'>

           
            <DropdownItem/>
    
        </ul>
        </div> 
        </div>
   



       
    </div>
  );
}

export default Navigation;