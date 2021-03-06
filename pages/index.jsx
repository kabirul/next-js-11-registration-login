import { userService } from 'services';
import { Link } from 'components';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export default Home;

function Home() {
    return (
	   <div>
	    <Header />	
        <div className="p-4">
            <div className="container">
                <h1>Hi {userService.userValue?.firstName}!</h1>
                <p>You&apos;re logged in with Next.js & JWT!!</p>
                <p><Link href="/users">Manage Users</Link></p>
            </div>
        </div>
	  <Footer />	
	 </div>	
    );
}
