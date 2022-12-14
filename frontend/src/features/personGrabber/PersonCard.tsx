import "bootstrap/dist/css/bootstrap.css";
import React, { useState, useEffect } from 'react';
import fetchGrabber, { backendURL } from "../../_helpers/fetchGrabber";
import { useAppDispatch } from '../../hooks'
import { addPerson } from './grabberSlice'
import {Box} from '@mui/material';
import './styles/card.css';

interface PersonProps {
    name: string;
    birthdate: string;
    gender: string;
    _id: string;
}

interface DataInterface {
    bio: string;
    email: string;
    cars: {
        name: string;
        price: number;
    }[],
}

//Source: https://www.codegrepper.com/code-examples/javascript/javascript+get+age+from+date
function getAge(dateString: string) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}



function PersonCard(props: PersonProps) {

    const dispatch = useAppDispatch()

    const [isHovering, setIsHovering] = useState(false);
    const [isOpen, setIsOpen] = useState(false)
    const [data, setData] = useState<DataInterface>()

    // Chooses image based on image
    const getGenderImage = (): string => {
        if (props.gender === "Male") {
            return "https://cdn-icons-png.flaticon.com/512/1536/1536865.png";
        } else if (props.gender === "Female") {
            return "https://cdn-icons-png.flaticon.com/512/1536/1536867.png";
        }
        else {
            return "https://cdn-icons-png.flaticon.com/512/1536/1536870.png";
        }

    }

    // On state change
    useEffect(() => {
        const checkIfClickedOutside = (event: any) => {
            if (isOpen) {
                setIsOpen(false)
            }
        }
        document.addEventListener("mouseup", checkIfClickedOutside, true)
        return () => {
            document.removeEventListener("mouseup", checkIfClickedOutside, true)
        }
    }, [isOpen, isHovering])

    /**
     * Gets missing information
     */
    const getPersonData = () => {
        let queryBody = {
            query: `
                query {
                    person (search:  [{value: "${props._id}", field:"_id"}]) {
                        bio
                        email
                        cars {
                            name
                            price
                        }
                    }
                }
            `
        }
        fetchGrabber(queryBody, backendURL).then(res => {
            setData(res.data.person);
        })
    }


    /**
     * Swappes between card states on click
     */
    const clickHandler = () => {
        if (!isOpen) {
            dispatch(addPerson(props.name))
            getPersonData()
            setIsOpen(true)
        }
    }

    /**
     * Chooses what type of card should be shown. Large one with extra info, or normal list version
     * @returns 
     */
    const chooseCardSetting = () => {

        if (isOpen) {
            return (
                <div className="open">
                    <Box sx={{ display: 'flex', justifyContent: 'center', p: 2 }}>
                        <img className="card-img-top" src={getGenderImage()} alt="" />
                    </Box>
                    <div className="card-body">
                        <h6 className="card-title" style={{ fontSize: "20px" }}>{props.name}</h6>
                        <p className="card-text"><b>Age:</b> {getAge(props.birthdate)}</p>
                        <p className="card-text"><b>Gender:</b> {props.gender}</p>
                        <p><b>Id:</b> {props._id}</p>
                        <p><b>Email:</b> {data && data.email}</p>
                        <p><b>About:</b> {data && data.bio}</p>
                        {data && data.cars.length > 0 &&
                            <div>
                                <p><b>Cars:</b></p>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>Name:</td>
                                            <td>Price:</td>
                                        </tr>
                                        {data && data.cars.map(el => {
                                            return (
                                                <tr key={el.name}>
                                                    <td>{el.name}</td>
                                                    <td>{el.price}</td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        }
                    </div>
                </div>
            )
        } else {
            return (
                <header className="closed">
                    <img className="card-img-top" src={getGenderImage()} alt="" />
                    <div className="card-body">
                        <h1 className="card-title" style={{ fontSize: "20px" }}>{props.name}</h1>
                        <p className="card-text"><b>Age:</b> {getAge(props.birthdate)}</p>
                        <p className="card-text"><b>Gender:</b> {props.gender}</p>
                    </div>
                </header>
            )

        }

    }

    return (

        <div className={`profile-card ${isOpen ? "open-container" : "closed-container"}`}
            onClick={clickHandler}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}>
            {chooseCardSetting()}
        </div>
    );
}

export {getAge}
export default PersonCard;