// import React, { useState } from 'react';
// import axios from 'axios';
// import '../Assets/Signup.css';
// import { Link } from 'react-router-dom';

// const Signup = ({ switchToLogin }) => {
//   const [formData, setFormData] = useState({
//     email: '',
//     epass: '',
//     cpass: '',
//   });
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   // const handleSubmit = async (event) => {
//   //   event.preventDefault();
//   //   if (formData.epass !== formData.cpass) {
//   //     setError("Passwords do not match");
//   //     return;
//   //   }
//   //   setError('');
//   //   setLoading(true);

//   //   try {
//   //     const response = await axios.post('http://localhost:9001/tuntun/signup', formData);

//   //     if (response.status === 200) {
//   //       alert('Sign-up successful!');
//   //       switchToLogin(); // Switch to login after successful registration
//   //     } else {
//   //       setError('Sign-up failed, please try again.');
//   //     }
//   //   } catch (error) {
//   //     console.error('Error registering user:', error);
//   //     if (error.response && error.response.data) {
//   //       setError(error.response.data);
//   //     } else {
//   //       setError('Sign-up failed, please try again.');
//   //     }
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // };
//   const handleSubmitReview = async () => {
//     const userId = localStorage.getItem('userId'); // Retrieve stored user ID
//     const reviewData = {
//         userId: userId, 
//         movieId: movie.id,
//         reviewText: review,
//     };

//     try {
//         const response = await fetch('http://localhost:9001/reviews/add', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(reviewData),
//         });

//         if (response.ok) {
//             console.log('Review submitted successfully');
//             setReview(''); // Clear the textarea after submission
//         } else {
//             console.error('Failed to submit review:', await response.text());
//         }
//     } catch (error) {
//         console.error('Error:', error);
//     }
// };


//   return (
//     <div className="signbody">
//       <div className="signup-container">
//         <h2>Sign Up</h2>
//         {error && <div className="error-message">{error}</div>}
//         <form onSubmit={handleSubmit} className="sign-form">
//           <div className="form-group1">
//             <label htmlFor="email">Email address</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               required
//               value={formData.email}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="form-group1">
//             <label htmlFor="epass">Enter Password</label>
//             <input
//               type={showPassword ? "text" : "password"}
//               id="epass"
//               name="epass"
//               required
//               value={formData.epass}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="form-group1">
//             <label htmlFor="cpass">Confirm Password</label>
//             <input
//               type={showPassword ? "text" : "password"}
//               id="cpass"
//               name="cpass"
//               required
//               value={formData.cpass}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="form-options1">
//             <input
//               type="checkbox"
//               checked={showPassword}
//               onChange={(e) => setShowPassword(e.target.checked)}
//             />
//             <label>Show Password</label>
//           </div>
//           <button
//             type="submit"
//             className="signup-button"
//             disabled={loading}
//           >
//             {loading ? 'Signing Up...' : 'SIGN UP'}
//           </button>
//           <div className="login-link">
//             Already have an account? <Link to="#" onClick={switchToLogin}>Login</Link>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Signup;
import React, { useState } from 'react';
import axios from 'axios';
import '../Assets/Signup.css';
import { Link } from 'react-router-dom';

const Signup = ({ switchToLogin }) => {
  const [formData, setFormData] = useState({
    email: '',
    epass: '',
    cpass: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   if (formData.epass !== formData.cpass) {
  //     setError("Passwords do not match");
  //     return;
  //   }
  //   setError('');
  //   setLoading(true);

  //   try {
  //     const response = await axios.post('http://localhost:9001/tuntun/signup', formData);

  //     if (response.status === 200) {
  //       alert('Sign-up successful!');
  //       switchToLogin(); // Switch to login after successful registration
  //     } else {
  //       setError('Sign-up failed, please try again.');
  //     }
  //   } catch (error) {
  //     console.error('Error registering user:', error);
  //     setError('Sign-up failed, please try again.');
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (formData.epass !== formData.cpass) {
      setError("Passwords do not match");
      return;
    }
    setError('');
    setLoading(true);

    try {
      console.log('Sending data:', formData);
      const response = await axios.post('http://localhost:9001/tuntun/signup', formData);
      console.log('Response data:', response.data);

      if (response.status === 200) {
        alert('Sign-up successful!');
        switchToLogin(); 
      } else {
        setError('Sign-up failed, please try again.');
      }
    } catch (error) {
      console.error('Error registering user:', error.response ? error.response.data : error.message);
      setError('Sign-up failed, please try again.');
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="signbody">
      <div className="signup-container">
        <h2>Sign Up</h2>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleSubmit} className="sign-form">
          <div className="form-group1">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group1">
            <label htmlFor="epass">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              id="epass"
              name="epass"
              value={formData.epass}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group1">
            <label htmlFor="cpass">Confirm Password</label>
            <input
              type={showPassword ? "text" : "password"}
              id="cpass"
              name="cpass"
              value={formData.cpass}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-options">
            <div>
              <input
                type="checkbox"
                checked={showPassword}
                onChange={(e) => setShowPassword(e.target.checked)}
              />
              <label>Show Password</label>
            </div>
          </div>
          <button type="submit" className="signup-button" disabled={loading}>
            {loading ? 'Signing Up...' : 'Sign Up'}
          </button>
        </form>
        <div className="login-link">
          Already have an account? <Link to="#" onClick={switchToLogin}>Log in</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
