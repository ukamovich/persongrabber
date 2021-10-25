import "bootstrap/dist/css/bootstrap.css";
import React, {useState} from 'react';
import './personcard.css';


interface PersonProps {
    name: string;
    birthdate: string;
    gender: string;
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



function PersonCard({ name, birthdate, gender }: PersonProps) {

    const [isHovering, setIsHovering] = useState(false);

    const getGenderImage = (): string => {
        if (gender === "Male") {
            return "https://cdn-icons-png.flaticon.com/512/1536/1536865.png";
        } else if(gender === "Female") {
            return "https://cdn-icons-png.flaticon.com/512/1536/1536867.png";
        }
        else {
            return "https://cdn-icons-png.flaticon.com/512/1536/1536870.png";
        }

    }


    const hovering = () => {

        if (isHovering) {
            return (
                <header className = "hovering">
                    <img className="card-img-top" src= {getGenderImage()} alt="Card" />
                    <div className="card-body">
                        <h1 className="card-title" style={{ fontSize: "25px" }}>{name}</h1>
                        {/* <h4 className="card-text"></h4> */}
                        <h4 className="card-text">Age: {getAge(birthdate)}</h4>

                        <p className="card-text">Gender: {gender}</p>

                    </div>
                </header>
            )
        } else {


            return (
                <header className ="notHovering">
                    <img className="card-img-top" src= {getGenderImage()} alt="Card" />
                    <div className="card-body">
                        <h1 className="card-title" style={{ fontSize: "25px" }}>{name}</h1>
                        {/* <h4 className="card-text"></h4> */}
                        <h4 className="card-text">Age: {getAge(birthdate)}</h4>

                        <p className="card-text">Gender: {gender}</p>

                    </div>
                </header>
            )

        }

    }

    return (

        <div className="profile-card" style={{ width: "170px" }} onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)} >
            {hovering()}


        </div>
    );
}

export default PersonCard;