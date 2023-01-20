import React, { useEffect, useState } from 'react'
import '../style/table.css'

const Table = () => {

    const [data, setData] = useState()

    const userValid = async () => {
        const res = await fetch(`http://localhost:5000/fetchalldata`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await res.json()
        setData(data);
    }

    useEffect(() => {
        userValid()
    })

    return (
        <>
            <div className='container' style={{ paddingBottom: "4rem " }} >
                <div className='table text-center mb-4 ' >
                    <h3>Users Data In Table</h3>
                </div>

                <div className='info' >
                    <table class="table">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">DOB</th>
                                <th scope="col">Phone Number</th>
                                <th scope="col">Email Id</th>
                                <th scope="col">Gender</th>
                                <th scope="col">State Name</th>
                                <th scope="col">Country</th>
                            </tr>
                        </thead>
                        {data?.map((not) =>
                            <>
                                <tbody>
                                    <tr>
                                        <td>{not.fname}</td>
                                        <td>{not.lastname}</td>
                                        <td> {not.DOB}</td>
                                        <td>{not.phonenumber}</td>
                                        <td>{not.email}</td>
                                        <td> {not.gender}</td>
                                        <td>{not.state}</td>
                                        <td> {not.country}</td>
                                    </tr>
                                </tbody>
                            </>
                        )}
                    </table>
                </div>
            </div>
        </>
    )
}

export default Table
