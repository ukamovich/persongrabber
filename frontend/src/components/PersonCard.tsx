import "bootstrap/dist/css/bootstrap.css";
import React, { useState, useEffect } from 'react';
import fetchGrabber from "../_helpers/fetchGrabber";
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
    cars: [{
        name: string;
        price: number;
    }]
}

const openCss = {
    width: "30%",
    backgroundColor: "#282c34",
    border: "3px solid #63D471"
}

const closedCss = {
    width: "20%"

}

const port = 3001 || process.env.REACT_APP_BACKEND_PORT
const backendURL = `http://localhost:${port}/graphql`

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



function PersonCard({ _id, name, birthdate, gender }: PersonProps) {

    const [isHovering, setIsHovering] = useState(false);
    const [isOpen, setIsOpen] = useState(false)
    const [data, setData] = useState<DataInterface>()

    const getGenderImage = (): string => {
        if (gender === "Male") {
            return "https://cdn-icons-png.flaticon.com/512/1536/1536865.png";
        } else if (gender === "Female") {
            return "https://cdn-icons-png.flaticon.com/512/1536/1536867.png";
        }
        else {
            return "https://cdn-icons-png.flaticon.com/512/1536/1536870.png";
        }

    }

    useEffect(() => {
        const checkIfClickedOutside = (event: any) => {
            if (isOpen && !isHovering) {
                setIsOpen(false)
            }
        }
        document.addEventListener("mousedown", checkIfClickedOutside, true)
        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside, true)
        }
    }, [isOpen, isHovering])


    const getPersonData = () => {
        let queryBody = {
            query: `
                query {
                    person (search:  [{value: "${_id}", field:"_id"}]) {
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

    const clickHandler = () => {
        if (isOpen) {
            return
        } else {
            getPersonData()
            setIsOpen(true)
        }
    }

    const hovering = () => {

        if (isOpen) {
            return (
                <header className="open">
                    <img className="card-img-top" src={getGenderImage()} alt="Card" />
                    <div className="card-body">
                        <h1 className="card-title" style={{ fontSize: "25px" }}>{name}</h1>
                        <h4 className="card-text">Age: {getAge(birthdate)}</h4>
                        <p className="card-text">Gender: {gender}</p>
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
                </header>
            )
        } else {
            return (
                <header className="closed">
                    <img className="card-img-top" src={getGenderImage()} alt="Card" />
                    <div className="card-body">
                        <h1 className="card-title" style={{ fontSize: "25px" }}>{name}</h1>
                        <h4 className="card-text">Age: {getAge(birthdate)}</h4>
                        <p className="card-text">Gender: {gender}</p>
                    </div>
                </header>
            )

        }

    }

    return (

        <div className="profile-card" 
            style={isOpen ? openCss : closedCss} 
            onClick={clickHandler} 
            onMouseEnter={() => setIsHovering(true)} 
            onMouseLeave={() => setIsHovering(false)}>
            {hovering()}
        </div>
    );
}

export default PersonCard;