import "bootstrap/dist/css/bootstrap.css";

interface PersonProps {
    name: string;
    birthdate: string;
    gender: string;
}


//Source: https://www.codegrepper.com/code-examples/javascript/javascript+get+age+from+date
function getAge(dateString: string) 
{
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
    {
        age--;
    }
    return age;
}


function PersonCard({name, birthdate, gender}: PersonProps) {
    return(
        <div className="profile-card" style={{width: "170px"}} >
            <header>
                <img className="card-img-top" src="https://365webresources.com/wp-content/uploads/2016/09/FREE-PROFILE-AVATARS.png" alt="Card"/>
                <div className="card-body">
                    <h1 className="card-title" style={{fontSize: "25px"}}>{name}</h1>
                    {/* <h4 className="card-text"></h4> */}
                    <h4 className="card-text">Age: {getAge(birthdate)}</h4>

                    <p className="card-text">Gender: {gender}</p>
                    
                </div>
            </header>
            
        </div>
    );
}

export default PersonCard;