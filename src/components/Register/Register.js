import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div>
      <h2>Please Register</h2>
      <form>
        <input type='email' name='' id='' />
        <br />
        <input type='password' name='' id='' />
        <br />
        <input type='submit' name='' id='' />
        <br />
      </form>
      <Link to='/login'>Already a member?</Link>
    </div>
  );
};

export default Register;
