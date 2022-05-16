import { useState, useEffect } from 'react';

import { Layout, AddEdit } from 'components/users';
import { Spinner } from 'components';
import { userService, alertService } from 'services';

export default Edit;

function Edit({ id }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
       
        userService.getById(id)
            .then(x => setUser(x))
            .catch(alertService.error)
        
    }, []);

    return (
        <Layout>
		 <div className="col-md-6 offset-md-3 mt-5">
		<div className="card">
                <h4 className="card-header">Edit User</h4>
                <div className="card-body">           
                  {user ? <AddEdit user={user} /> : <Spinner /> }
			 </div>
			</div> 
			</div> 
        </Layout>
    );
}

export async function getServerSideProps({ params }) {
    return {
        props: { id: params.id }
    }
}
