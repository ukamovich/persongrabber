import React from "react";
import './personGrabber/styles/footer.css'
import { useAppSelector } from '../hooks'


function Footer() {

    const history = useAppSelector((state) => state.visited)
    var columns = () => {
        switch (history.length) {
            case 1:
                return 1
            case 2:
                return 2
            default:
                return (history.length < 7) ? 3 : 4
        }
    }

    return (
        <footer className="footer" >
            <h4>Clicked people history:</h4>
            <ul style={{columns: columns(), listStyleType: "none"}}>
                {history && history.map((el) => {
                    return <li key={`Person: ${new Date().getTime()}`}>{el}</li>
                })}
            </ul>
        </footer>
    );

}
export default Footer
