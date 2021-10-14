import "bootstrap/dist/css/bootstrap.css";
import PersonCard from "./PersonCard";

function PersonCardContainer() {
    return(
        <div className="container">
            <div className="row">
                <PersonCard></PersonCard>
                <PersonCard></PersonCard>
                <PersonCard></PersonCard>
                <PersonCard></PersonCard>
                <PersonCard></PersonCard>
                <PersonCard></PersonCard>
                <PersonCard></PersonCard>
            </div>

        </div>
    );
}



export default PersonCardContainer;