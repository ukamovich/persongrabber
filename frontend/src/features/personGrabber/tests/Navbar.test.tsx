import Navbar from "../../Navbar";
import { shallow } from "enzyme";
import { Link } from "react-router-dom";

describe("Check if navbar renders correctly", () => {
    test("Check if renders", () => {
        shallow(<Navbar />)
    })

    test("Check if navbar contains expected elements", () => {
        const navbar = shallow(<Navbar />)
        expect(navbar.find(Link)).toHaveLength(3)
    })
})