import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main';
import ContextProvider from "./context/context.jsx";
// import Login from './components/Login/Login.jsx';
import { useState } from "react";

const App = () => {
  // const [showLogin, setShowLogin] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // useEffect(() => {
  //   // Show login modal after 4 seconds
  //   const timer = setTimeout(() => {
  //     setShowLogin(true);
  //   }, 4000);

  //   return () => clearTimeout(timer);
  // }, []);

  // const handleClose = () => {
  //   // Show the error message on screen when "X" is clicked
  //   setErrorMessage('Please login or register to use the website.');
  // };

  setTimeout(() => {
    setErrorMessage(''); // Clear the error message after 5 seconds
  }, 5000);


  // const handleLoginSuccess = () => {
  //   // Hide login modal after successful login
  //   setShowLogin(false);
  //   // Clear any existing error message
  //   setErrorMessage('');
  // };

  return (
    <ContextProvider>
      {/* {showLogin && <Login onClose={handleClose} onLoginSuccess={handleLoginSuccess} />} */}
      <Sidebar />
      <Main />

      {/* Conditionally render the error message */}
      {errorMessage && (
        <div className="error-message-box">
          {errorMessage}
        </div>
      )}
    </ContextProvider>
  );
}

export default App;
