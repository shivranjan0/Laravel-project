import React from "react";
import Link from "next/link";
import { NavArrowLeft, NavArrowRight, Eye, EyeClosed } from 'iconoir-react';

const Auth = () => {
    const [isSignup, setIsSignup] = React.useState(false);
    const [showPassword, setShowPassword] = React.useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

    return (
        <div className="auth-page-wrapper">
            <div className="auth-main-container">
                {/* Left Side: Form */}
                <div className="auth-form-section">
                    <div className="auth-page-header">
                        <div className="brand-logo">
                            <div className="logo-icon-wrap">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 3L2 21H22L12 3Z" stroke="#4FB68D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <circle cx="12" cy="14" r="3" stroke="#4FB68D" strokeWidth="2" />
                                </svg>
                            </div>
                            <span className="brand-name">Triangle of Light</span>
                        </div>
                    </div>

                    <div className="auth-form-content">
                        <h2 className="auth-title">{isSignup ? "Create your account" : "Log in or sign up"}</h2>

                        <div className="auth-social-group">
                            <button className="btn-social-auth">
                                <img src="https://www.gstatic.com/images/branding/product/1x/gsa_512dp.png" alt="Google" />
                                <span>Continue with Google</span>
                            </button>
                            <button className="btn-social-auth">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="#1877F2" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                                <span>Continue with Facebook</span>
                            </button>
                        </div>

                        <div className="auth-divider">
                            <span>or</span>
                        </div>

                        <form className="auth-email-form" onSubmit={(e) => e.preventDefault()}>
                            {isSignup ? (
                                <>
                                    <div className="auth-row">
                                        <div className="auth-input-group">
                                            <input type="text" placeholder="First Name *" required />
                                        </div>
                                        <div className="auth-input-group">
                                            <input type="text" placeholder="Last Name" />
                                        </div>
                                    </div>
                                    <div className="auth-input-group">
                                        <input type="email" placeholder="Email ID *" required />
                                    </div>
                                    <div className="auth-input-group has-icon">
                                        <input type={showPassword ? "text" : "password"} placeholder="Choose New Password *" required />
                                        <div onClick={() => setShowPassword(!showPassword)} style={{ cursor: "pointer", position: "absolute", right: "15px", top: "50%", transform: "translateY(-50%)" }}>
                                            {showPassword ? <Eye height={20} width={20} /> : <EyeClosed height={20} width={20} />}
                                        </div>
                                    </div>
                                    <div className="auth-input-group has-icon">
                                        <input type={showConfirmPassword ? "text" : "password"} placeholder="Confirm Password *" required />
                                        <div onClick={() => setShowConfirmPassword(!showConfirmPassword)} style={{ cursor: "pointer", position: "absolute", right: "15px", top: "50%", transform: "translateY(-50%)" }}>
                                            {showConfirmPassword ? <Eye height={20} width={20} /> : <EyeClosed height={20} width={20} />}
                                        </div>
                                    </div>
                                    <div className="auth-input-group">
                                        <input type="text" onFocus={(e) => e.target.type = 'date'} onBlur={(e) => e.target.type = 'text'} placeholder="Please enter your birthdate *" required />
                                    </div>
                                    <div className="auth-gender-section">
                                        <span className="gender-label">Gender</span>
                                        <div className="gender-options">
                                            <label className="radio-label">
                                                <input type="radio" name="gender" value="male" defaultChecked />
                                                <span>Male</span>
                                            </label>
                                            <label className="radio-label">
                                                <input type="radio" name="gender" value="female" />
                                                <span>Female</span>
                                            </label>
                                            <label className="radio-label">
                                                <input type="radio" name="gender" value="other" />
                                                <span>Other</span>
                                            </label>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="auth-input-group">
                                        <label>Email or Phone number</label>
                                        <input type="text" placeholder="Email or +1 (555) 000-0000" required />
                                    </div>
                                    <div className="auth-input-group">
                                        <label>Password</label>
                                        <input type="password" placeholder="••••••••" required />
                                    </div>
                                </>
                            )}
                            <button type="submit" className="btn-auth-primary">
                                {isSignup ? "Create Account" : "Continue"}
                            </button>
                        </form>

                        <div className="auth-actions">
                            {!isSignup && <Link href="#" className="auth-forgot-link">Forgot password?</Link>}
                            <p className="toggle-auth">
                                {isSignup ? "Already have an account?" : "Don't have an account?"}
                                <span onClick={() => setIsSignup(!isSignup)}>
                                    {isSignup ? " Log in" : " Sign up"}
                                </span>
                            </p>
                        </div>
                    </div>

                    <div className="auth-page-footer">
                        <p>
                            By clicking "Continue with Facebook/Google/Email" above, you acknowledge that you have read and understood, and agree to <Link href="#">Terms & Conditions</Link> and <Link href="#">Privacy Policy</Link>.
                        </p>
                    </div>
                </div>

                {/* Right Side: Visuals */}
                <div className="auth-visual-section">
                    <div className="visual-background">
                        {/* CSS-based abstract architecture or image placeholder */}
                        <div className="abstract-design"></div>
                    </div>
                    <div className="visual-overlay">
                        <div className="testimonial-content">
                            <p className="testimonial-quote">
                                " This is a wonderful, immersive experience, the graphic and music are excellent! "
                            </p>
                            <div className="testimonial-author-box">
                                <h4 className="author-name">Margie Corkery</h4>
                                <p className="author-role">Food and wine specialist</p>
                            </div>
                        </div>
                        <div className="visual-navigation">
                            <button className="nav-circle-btn"><NavArrowLeft height={20} width={20} /></button>
                            <button className="nav-circle-btn"><NavArrowRight height={20} width={20} /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Auth;
