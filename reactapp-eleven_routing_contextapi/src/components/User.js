import React from 'react'
import { Link, useNavigate, Outlet } from "react-router-dom";

const User = () => {
    const Navigate = useNavigate();

    const onsubmit = (e) => {
        e.preventDefault();
        // ----to data to database...
        console.log('Submitted!');
        Navigate('/About');
    }

    return (
        <>
            <form onSubmit={onsubmit}>
                <h1 className='text-success'>Submission page.</h1>
                <input className='form-control w-50 mb-3' type="text" placeholder='username' />
                <input className='form-control w-50 mb-3' type="text" placeholder='password' />
                <button className='btn btn-outline-success'>Submit</button>
            </form>
            <hr />
            <div>
                <ol className='list-group mt-3'>
                    <li className='list-group-item'>
                        <Link className='text-decoration-none text-danger' to="/User/Abhay">Abhay</Link>
                    </li>
                    <li className='list-group-item' >
                        <Link className='text-decoration-none text-danger' to="/User/Aman">Aman</Link>
                    </li>
                    <li className='list-group-item' >
                        <Link className='text-decoration-none text-danger' to="/User/Rohit">Rohit</Link>
                    </li>
                    <li className='list-group-item' >
                        <Link className='text-decoration-none text-danger' to="/User/Veneet">Veneet</Link>
                    </li>
                </ol>
            </div>
            <hr />
            <Outlet />
        </>
    )
}

export default User
