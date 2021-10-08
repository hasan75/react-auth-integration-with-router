import { useEffect, useState } from 'react';
import initializeAuthentication from '../../Firebase/Firebase.init';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from 'firebase/auth';

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState('');
  const auth = getAuth();

  const signInUsingGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log('inside state change', user);
        // const uid = user.uid;
        setUser(user);
      }
    });
  }, []);

  return {
    user,
    error,
    signInUsingGoogle,
  };
};

export default useFirebase;
