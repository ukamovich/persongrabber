import React from "react";
import './personGrabber/styles/footer.css'
import { useAppSelector } from '../hooks'

/**
 * Footer containing clicked people history
 * @returns 
 */
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
                {history && history.map((el, index) => {
                    return <li key={`Person: ${index}`}>{el}</li>
                })}
            </ul>
        </footer>
    );

}
export default Footer
