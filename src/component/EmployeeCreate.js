import React, { useState, useEffect }  from 'react';

const EmployeeCreate = ({ employee = {}, index = -1, addEmployee }) => {
    const [firstName, setFirstName] = useState(employee.firstName || "");
    const [lastName, setLastName] = useState(employee.lastName || "");
    const [dob, setDob] = useState(employee.dob || "");
    const [designation, setDesignation] = useState(employee.designation || "");
    const [profilePhotoLink, setProfilePhotoLink] = useState(employee.profilePhotoLink || "");
    const [experience, setExperience] = useState(employee.experience || "");

    useEffect(() => {
        setFirstName(employee.firstName || "")
        setLastName(employee.lastName || "")
        setDob(employee.dob || "");
        setDesignation(employee.designation || "");
        setProfilePhotoLink(employee.profilePhotoLink || "");
        setExperience(employee.experience || "");
    }, [employee])

    const handlerSubmit = () => {
        addEmployee({
            firstName,
            lastName,
            dob,
            designation,
            profilePhotoLink,
            experience,
        }, index)
    }

    return (
        <div className="row">
            <div className="col-3"></div>
            <div className="col-6">
                <div className="mb-3">
                    <label htmlFor="firstName" className="">First Name</label>
                    <input className="form-control" type="text" id="firstName" name="" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label for="lastName" className="">Last Name</label>
                    <input className="form-control" type="text" id="firstName" name="" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label for="dob" className="">DOB</label>
                    <input className="form-control" type="date" id="dob" name="" value={dob} onChange={(e) => setDob(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label for="designation" className="">designation</label>
                    <input className="form-control" type="text" id="designation" name="" value={designation} onChange={(e) => setDesignation(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label for="profilePhotoLink" className="">Profile PhotoLink</label>
                    <input className="form-control" type="text" id="profilePhotoLink" name="" value={profilePhotoLink} onChange={(e) => setProfilePhotoLink(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label for="experience" className="">experience</label>
                    <input className="form-control" type="text" id="experience" name="" value={experience} onChange={(e) => setExperience(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <button className="btn btn-primary" onClick={handlerSubmit}>
                        Submit
                    </button>
                </div>
            </div>
        </div>
    )
}

export default EmployeeCreate;