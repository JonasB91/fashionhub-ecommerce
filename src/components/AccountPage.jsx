import React, { useState, useEffect } from 'react'; // importerar useState och useEffect
import { auth } from '../firebase/config'; // importerar firebase config setup
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'; //Importerar javascript sdk's som hanterar sign up och sign in object, samt signOut och Auth StateChange.
import { useNavigate } from 'react-router-dom'; // Importerar useNavigate hook

const AccountPage = () => {
  const [userCredential, setUserCredentials] = useState({}); //Sätter userCredentials för att hantera email och password property än att sätta egna State på alla om man ska hantera större forms
  const [isSignUp, setIsSignUp] = useState(false); // för att hantera om man är inloggad eller inte, 
  const [user, setUser] = useState(null); // State för att hålla authentication user
  const navigate = useNavigate(); // Startar useNagiate hook

  // Authentication listener för firebase auth uppdaterar user's state baserad på authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // Användare är inloggad
        setUser(user);
      } else {
        // Ingen användare är inloggad
        setUser(null);
      }
    });

    // Cleanup 
    return () => unsubscribe();
  }, []);

  //Function som hanterar credentials för signup/Sign in istället för att sätta email och password i egna state's
  function handleCredentials(e) {
    setUserCredentials({...userCredential, [e.target.name]: e.target.value});
  }
  

  //Function som hanterar sign up och sign in
  function handleAction(e) {
    e.preventDefault();
    if (isSignUp) {
      createUserWithEmailAndPassword(auth, userCredential.email, userCredential.password)
        .then((userCredential) => {
          const user = userCredential.user;
          // Created a new user, gick utmärkt annars tar catch blocket och skickar felmeddelande!
          console.log('Successfully Created a new user', user.email); // loggar ny user som vi skapat, om det gick bra, logga user och user email
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);
        });
    } else {
      signInWithEmailAndPassword(auth, userCredential.email, userCredential.password)
        .then((userCredential) => {
          const user = userCredential.user;
          // hantera loggat in sucessfully
          console.log('User Successfully logged in', user.email);
          navigate('/store'); // Navigera till '/store' om du lyckats logga in
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);
        });
    }
  };

  //Logout function hanterar logout user, om jag loggar ut skicka mig till homepage, 
  function handleSignOut() {
    signOut(auth)
      .then(() => {
        // logged out succesfully
        setUser(null);
        navigate('/'); // Navigera mig till homepage om jag loggar ut
      })
      .catch((error) => {
        // Error hantering
        console.log(error);
      });
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md">
        {user ? (
          <div>
            <h2 className="text-2xl mb-4 font-semibold">Logged in as {user.email}</h2>
            <button
              className="bg-red-700 text-white font-semibold px-4 py-2 rounded-sm hover:bg-red-500 focus:outline-none focus:bg-red-500"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          </div>
        ) : (
          <div>
            <h2 className="text-2xl mb-4 font-semibold">Welcome, {isSignUp ? 'Register' : 'Login'} here!</h2>
            <input
              className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-sm focus:outline-none focus:border-blue-500"
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleCredentials}
            />
            <input
              className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-sm focus:outline-none focus:border-blue-500"
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleCredentials}
            />
            <div className="flex">
              <button
                className="w-1/2 bg-blue-500 text-white font-semibold px-4 py-2 rounded-sm hover:bg-blue-600 focus:outline-none focus:bg-blue-600 mr-2"
                onClick={handleAction}
              >
                {isSignUp ? 'Sign Up' : 'Login'}
              </button>
              <button
                className="w-1/2 bg-gray-400 text-white font-semibold px-4 py-2 rounded-sm hover:bg-gray-500 focus:outline-none focus:bg-gray-500 ml-2"
                onClick={() => setIsSignUp(!isSignUp)}
              >
                {isSignUp ? 'Switch to Login' : 'Switch to Sign Up'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AccountPage;

