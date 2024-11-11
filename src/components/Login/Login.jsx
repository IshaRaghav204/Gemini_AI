// import { useState } from 'react';
// import PhoneInput from 'react-phone-input-2';
// import 'react-phone-input-2/lib/style.css';
// import './Login.css';

// export default function Login({ onClose, onLoginSuccess }) {
//     const [isLogin, setIsLogin] = useState(true);
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');
//     const [phoneNumber, setPhoneNumber] = useState('');
//     const [verificationCode, setVerificationCode] = useState('');
//     const [emailError, setEmailError] = useState('');
//     const [passwordError, setPasswordError] = useState('');
//     const [confirmPasswordError, setConfirmPasswordError] = useState('');
//     const [phoneError, setPhoneError] = useState('');

//     const handlePhoneNumberChange = (value) => {
//         setPhoneNumber(value);
//         if (value) {
//             setPhoneError(''); // Clear the error message when a valid phone number is entered
//         }
//     };

//     const handleSendCode = () => {
//         if (phoneNumber) {
//             setShowVerification(true); // Show the verification section only if phone number is valid
//         } else {
//             setPhoneError('Please enter a valid phone number to receive the code.');
//         }
//     };

//     const handleVerifyCode = () => {
//         if (verificationCode.length === 6) {
//             // Simulate successful verification
//             alert('Phone number verified successfully!');
//             // Proceed with your login/registration logic here
//         } else {
//             setPhoneError('Please enter a valid 6-digit code.');
//         }
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setEmailError('');
//         setPasswordError('');
//         setConfirmPasswordError('');
//         setPhoneError('');

//         if (!email || !password || (!isLogin && password !== confirmPassword) || !phoneNumber) {
//             if (!email) setEmailError('Invalid email format');
//             if (!password) setPasswordError('Invalid password format');
//             if (!isLogin && password !== confirmPassword) setConfirmPasswordError('Passwords do not match');
//             if (!phoneNumber) setPhoneError('Phone number is required');
//             return;
//         }
//         onLoginSuccess();
//     };

//     return (
//         <div className="modal-overlay" onClick={onClose}>
//             <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//                 <button className="close" onClick={onClose}>X</button>
//                 <div className="form-container">
//                     <div className="form-toggle">
//                         <button className={isLogin ? 'active' : ""} onClick={() => setIsLogin(true)}>Login</button>
//                         <button className={!isLogin ? 'active' : ""} onClick={() => setIsLogin(false)}>Register</button>
//                     </div>

//                     <div className="form">
//                         <h2>{isLogin ? 'Login' : 'Register'}</h2>
//                         <input
//                             type='email'
//                             placeholder='Email'
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             required
//                         />
//                         {emailError && <p className="error-message">{emailError}</p>}
                        
//                         <input
//                             type='password'
//                             placeholder='Password'
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             required
//                         />
//                         {passwordError && <p className="error-message">{passwordError}</p>}

//                         {/* Confirm password only for registration */}
//                         {!isLogin && (
//                             <>
//                                 <input
//                                     type='password'
//                                     placeholder='Confirm Password'
//                                     value={confirmPassword}
//                                     onChange={(e) => setConfirmPassword(e.target.value)}
//                                     required
//                                 />
//                                 {confirmPasswordError && <p className="error-message">{confirmPasswordError}</p>}
//                             </>
//                         )}

//                         {/* Phone number input */}
//                         <div className="phone-input-wrapper">
//                             <PhoneInput
//                                 country={'us'}
//                                 value={phoneNumber}
//                                 onChange={handlePhoneNumberChange} // Use the new handler
//                             />
//                         </div>
//                         {phoneError && <p className="error-message">{phoneError}</p>}

//                         {/* Send Code via SMS Button */}
//                         {!showVerification ? (
//                             <div className="SMS">
//                                 <button className="sms-button" onClick={handleSendCode}>
//                                     Send Code via SMS
//                                 </button>
//                             </div>
//                         ) : (
//                             <div className="verification">
//                                 <h3>Enter the Code</h3>
//                                 <input
//                                     type='text'
//                                     placeholder='6-digit code'
//                                     value={verificationCode}
//                                     onChange={(e) => setVerificationCode(e.target.value)}
//                                     maxLength={6}
//                                 />
//                                 <button onClick={handleVerifyCode}>Verify Your Number</button>
//                             </div>
//                         )}

//                         <a href='#'>Forgot Password?</a>
//                         <button onClick={handleSubmit}>{isLogin ? 'Login' : 'Register'}</button>
//                         {isLogin ? (
//                             <p>Not a Member? <a href='#' onClick={() => setIsLogin(false)}>Register Now</a></p>
//                         ) : (
//                             <p>Already a Member? <a href='#' onClick={() => setIsLogin(true)}>Login Now</a></p>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }
