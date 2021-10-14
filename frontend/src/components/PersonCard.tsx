import "bootstrap/dist/css/bootstrap.css";

function PersonCard() {
    return(
        <div className="profile-card" style={{width: "170px"}} >
            <header>
                <img className="card-img-top" src="https://365webresources.com/wp-content/uploads/2016/09/FREE-PROFILE-AVATARS.png" alt="Card image"/>
                <div className="card-body">
                    <h1 className="card-title" style={{fontSize: "25px"}}>John Doe</h1>
                    <h4 className="card-text">25 years</h4>
                    <h4 className="card-text">Male</h4>

                    <p className="card-text">Some example text.</p>
                    
                </div>
            </header>
            
        </div>
    );
}

export default PersonCard;