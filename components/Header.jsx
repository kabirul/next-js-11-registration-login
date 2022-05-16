import Link from 'next/link';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { userService } from 'services';

export { Header };

function Header() {   

    const [user, setUser] = useState(null);

    useEffect(() => {
        const subscription = userService.user.subscribe(x => setUser(x));
        return () => subscription.unsubscribe();
    }, []);

    function logout() {
        userService.logout();
    }     


    return (	  
	  <header>
	  <div className="container">
       <nav>	   
        <ul>
		 <li><a href="https://github.com/kabirul">
			    <img src="https://amicacs.com/assets/images/logo.png" className="imground" alt="" /> 
			  </a> </li>
           <li><Link href="/" className="nav-white">Home</Link></li>
		   
           <li>&nbsp;</li>
		   {user ? (
		   <>
            <li><Link href="/users">Users</Link></li> 
		    <li><a onClick={logout}>Logout</a></li> 
		   </>
		   ): (
		   <>
		   <li><Link href="/account/login">Login</Link></li> 
		   <li><Link href="/account/register">Register</Link></li> 
		    
		   </>
		   )}
		   
        </ul>
      </nav>
	  </div>
	</header>		
    );
}

