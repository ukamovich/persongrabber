import "bootstrap/dist/css/bootstrap.css";
import PersonCard from "./PersonCard";
import JSONDATA from '../data.json';

let data = JSONDATA.data.people

function PersonCardContainer() {
    return(
        <div className="container">
            <div className="row">
                {data && data.map(el => {
                    return <PersonCard name= {el.first_name + " " + el.last_name} age = {12} about={"qqwasd"} key={el._id}></PersonCard>
                })}   
            </div>
        </div>
    );
}



export default PersonCardContainer;