import React from 'react'
import { Link } from 'react-router-dom'

export const RegisterScreen = () => {
    return (
        <>
            <h3 className="auth__title">Register</h3>

            <form>

                <div className="form-group">
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="auth__input form-control" />
                </div>

                <div className="form-group">
                    <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        className="auth__input form-control" />
                </div>

                <div className="form-group">
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="auth__input form-control" />
                </div>

                <div className="form-group">
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        className="auth__input form-control" />
                </div>

                <button
                    type="submit"
                    className="btn btn-primary btn-block">
                        Register
                </button>

                <div className="text-center mt-2">
                    <Link to="/auth/login">Already registered?</Link>
                </div>
            </form>
        </>
    )
}
