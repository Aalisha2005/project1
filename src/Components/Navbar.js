// // import React, { useState } from 'react';
// // import { Link } from 'react-router-dom';
// // import Modal from './Modal';
// // import Login from './Login';
// // import Signup from './Signup';
// // import '../Assets/Navbar.css';
// // import MoviesNowLogo from '../Assets/MoviesNow.png'; // Import the logo

// // const Navbar = () => {
// //   const [showModal, setShowModal] = useState(false);
// //   const [isLogin, setIsLogin] = useState(true);

// //   const toggleModal = () => {
// //     setShowModal(!showModal);
// //   };

// //   const switchToSignup = () => {
// //     setIsLogin(false);
// //   };

// //   const switchToLogin = () => {
// //     setIsLogin(true);
// //   };

// //   return (
// //     <header className="header">
// //       <div className="logo">
// //         <img src={MoviesNowLogo} alt="MoviesNow Logo" className="logo-image" /> {/* Add the logo */}
// //       </div>
// //       <nav>
// //         <ul className="nav-links">
// //           <li><Link to="/">Home</Link></li>
// //           <li><Link to="/Movies">Movies</Link></li>
// //           <li><Link to="/Addedmovies">Lists</Link></li>
// //           <li><Link to="/Journal">Journal</Link></li>
// //         </ul>
// //       </nav>
// //       <div className="auth-buttons">
// //         <button className="login" onClick={toggleModal}>Log In</button>
// //       </div>
// //       <Modal show={showModal} onClose={toggleModal}>
// //         {isLogin ? (
// //           <Login onClose={toggleModal} switchToSignup={switchToSignup} />
// //         ) : (
// //           <Signup onClose={toggleModal} switchToLogin={switchToLogin} />
// //         )}
// //       </Modal>
// //     </header>
// //   );
// // };

// // export default Navbar;
// // src/components/Navbar.js
// // src/components/Navbar.js
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import Modal from './Modal';
// import Login from './Login';
// import Signup from './Signup';
// import '../Assets/Navbar.css';
// import MoviesNowLogo from '../Assets/MoviesNow.png'; // Import the logo
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser } from '@fortawesome/free-solid-svg-icons';

// const Navbar = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [isLogin, setIsLogin] = useState(true);
//   const [dropdownVisible, setDropdownVisible] = useState(false);
//   const [user, setUser] = useState(null); // Local state for user

//   const toggleModal = () => {
//     setShowModal(!showModal);
//   };

//   const switchToSignup = () => {
//     setIsLogin(false);
//   };

//   const switchToLogin = () => {
//     setIsLogin(true);
//   };

//   const handleLoginSuccess = (userData) => {
//     setUser(userData);
//   };

//   const handleLogout = () => {
//     setUser(null);
//     closeDropdown();
//   };

//   const toggleDropdown = () => {
//     setDropdownVisible(!dropdownVisible);
//   };

//   const closeDropdown = () => {
//     setDropdownVisible(false);
//   };

//   return (
//     <header className="header">
//       <div className="logo">
//         <img src={MoviesNowLogo} alt="MoviesNow Logo" className="logo-image" />
//       </div>
//       <nav>
//         <ul className="nav-links">
//           <li><Link to="/">Home</Link></li>
//           <li><Link to="/Movies">Movies</Link></li>
//           <li><Link to="/Lists">Lists</Link></li>
//           <li><link to="/screen">Screenplay</link></li>
//           <li><Link to="/Journal">Journal</Link></li>
//         </ul>
//       </nav>
//       <div className="auth-buttons">
//         {user ? (
//           <div className="user-dropdown">
//             <FontAwesomeIcon icon={faUser} className="profile-icon" onClick={toggleDropdown} />
//             <span className="username" onClick={toggleDropdown}>{user.username}</span>
//             {dropdownVisible && (
//               <div className="dropdown-menu">
//                 <button className="logout" onClick={handleLogout}>Log Out</button>
//               </div>
//             )}
//           </div>
//         ) : (
//           <button className="login" onClick={toggleModal}>Log In</button>
//         )}
//       </div>
//       <Modal show={showModal} onClose={toggleModal}>
//         {isLogin ? (
//           <Login onClose={toggleModal} switchToSignup={switchToSignup} onLoginSuccess={handleLoginSuccess} />
//         ) : (
//           <Signup onClose={toggleModal} switchToLogin={switchToLogin} />
//         )}
//       </Modal>
//     </header>
//   );
// };

// export default Navbar;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal';
import Login from './Login';
import Signup from './Signup';
import '../Assets/Navbar.css';
import MoviesNowLogo from '../Assets/MoviesNow.png'; // Import the logo
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [user, setUser] = useState(null); // Local state for user

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const switchToSignup = () => {
    setIsLogin(false);
  };

  const switchToLogin = () => {
    setIsLogin(true);
  };

  const handleLoginSuccess = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
    closeDropdown();
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const closeDropdown = () => {
    setDropdownVisible(false);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={MoviesNowLogo} alt="MoviesNow Logo" className="logo-image" />
      </div>
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Movies">Movies</Link></li>
          <li><Link to="/lists">Lists</Link></li>
          <li><Link to="/screen">Screenplay</Link></li>
          <li><Link to="/Journal">Journal</Link></li>
        </ul>
      </nav>
      <div className="auth-buttons">
        {user ? (
          <div className={`user-dropdown ${dropdownVisible ? 'active' : ''}`}>
            <FontAwesomeIcon icon={faUser} className="profile-icon" onClick={toggleDropdown} />
            <span className="username" onClick={toggleDropdown}>{user.username}</span>
            <div className="dropdown-menu">
              <button className="logout" onClick={handleLogout}>Log Out</button>
            </div>
          </div>
        ) : (
          <button className="login" onClick={toggleModal}>Log In</button>
        )}
      </div>
      <Modal show={showModal} onClose={toggleModal}>
        {isLogin ? (
          <Login onClose={toggleModal} switchToSignup={switchToSignup} onLoginSuccess={handleLoginSuccess} />
        ) : (
          <Signup onClose={toggleModal} switchToLogin={switchToLogin} />
        )}
      </Modal>
    </header>
  );
};

export default Navbar;
