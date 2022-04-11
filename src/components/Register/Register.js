import React from 'react';

const Register = () => {
    return (
        <div className='w-75 mx-auto'>
            <form className="row g-3 my-4 p-5 shadow-lg rounded-3">
                <div className="col-12">
                    <label className="form-label">Your Name</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="Your Name" />
                </div>
                <div className="col-md-6">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" id="inputEmail4" />
                </div>
                <div className="col-md-6">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" id="inputPassword4" />
                </div>




                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Sign in</button>
                </div>
            </form>
        </div>
    );
};

export default Register;