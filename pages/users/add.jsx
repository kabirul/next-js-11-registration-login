import { Layout, AddEdit } from 'components/users';

export default Add;

function Add() {
    return (
        <Layout>
		 <div className="col-md-6 offset-md-3 mt-5">
            <div className="card">
                 <h4 className="card-header">Add User</h4>
                 <div className="card-body">				
                  <AddEdit />
			     </div>
			</div>
			</div>
        </Layout>
    );
}