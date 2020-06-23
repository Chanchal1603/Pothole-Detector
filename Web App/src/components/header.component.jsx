\import React from 'react';
import {Link} from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom'; 
import './header.styles.css';
import { auth } from '../../firebase/firebase.utils';
const Header = ({currentUser}) => (
  <div className='header'>
   <Link className='pot' to ='/'> Spot Hole Detector </Link>
   {
    currentUser ? (<div className='option' onClick={()=>auth.signOut()}>
    SIGN OUT
    </div>
    ):
    (   <Link to='/signin' className="option">
    SIGN IN
   </Link> )

   }

   
    

  </div>
);



export default Header;
