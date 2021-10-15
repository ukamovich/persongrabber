import "bootstrap/dist/css/bootstrap.css";

interface PersonProps {
    name: string;
    age: number;
    about: string;
}




function PersonCard({name, age, about}: PersonProps) {
    return(
        <div className="profile-card" style={{width: "170px"}} >
            <header>
                <img className="card-img-top" src="https://365webresources.com/wp-content/uploads/2016/09/FREE-PROFILE-AVATARS.png" alt="Card"/>
                <div className="card-body">
                    <h1 className="card-title" style={{fontSize: "25px"}}>{name}</h1>
                    {/* <h4 className="card-text"></h4> */}
                    <h4 className="card-text">Age: {age}</h4>

                    <p className="card-text">Info: {about}</p>
                    
                </div>
            </header>
            
        </div>
    );
}

export default PersonCard;