import {Header} from '../Header';
import {Footer} from '../Footer';


export { Layout };

function Layout({ children }) {

      return (
	    <div> 
	      <Header />
          <div className="p-4">
            <div className="container">
                {children}
            </div>
        </div>
		 <Footer />
		</div>	
    );
}

 