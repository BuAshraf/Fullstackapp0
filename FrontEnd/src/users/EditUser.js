import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function EditUser() {
    let navigate = useNavigate();

    const { id } = useParams()

    const [user, setUser] = useState({
        name: "",
        username: "",
        email: ""
    })

    const { name, username, email } = user

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        loadUser();
    }, []);

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/user/${id}`, user)
        navigate("/")
    };

    const loadUser =async () => {
        const result=await axios.get(`http://localhost:8080/user/${id}`)
        setUser(result.data)
    }

    return (

        <div className="container">

            <div className="row">

                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Edit User</h2>

                    <form onSubmit={(e) => onSubmit(e)}>

                        {/* Name */}
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">
                                Name
                            </label>
                            <div id="nameHelp" className="form-text">
                                Enter the full name of the user.
                            </div>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter The Name"
                                name="name"
                                value={name}
                                onChange={(e) => onInputChange(e)}

                            />
                        </div>

                        {/* Username */}
                        <div className="mb-3">
                            <label htmlFor="Username" className="form-label">
                                Username
                            </label>
                            <div id="nameHelp" className="form-text">
                                Enter Correct Username of the user.
                            </div>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter The Username"
                                name="username"
                                value={username}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>

                        {/* E-mil */}
                        <div className="mb-3">
                            <label htmlFor="E-mail" className="form-label">
                                E-mail
                            </label>
                            <div id="nameHelp" className="form-text">
                                Enter Correct E-mail of the user.
                            </div>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter The E-mil"
                                name="email"
                                value={email}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>

                        {/* Submit Button*/}

                        <button type="submit" className="btn btn-outline-primary me-2">
                            Submit
                        </button>

                        {/* <button type="submit"  className="btn me-2"  style={{ background: "linear-gradient(to right, #0d6efd, #dc3545)", color: "#fff", border: "none", }} > Submit </button> */}

                        {/*Back / Cancel Button*/}

                        <Link className="btn btn-outline-danger mx-2" to="/" >
                            Cancel
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
}
