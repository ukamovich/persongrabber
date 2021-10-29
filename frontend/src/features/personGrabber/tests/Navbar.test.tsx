import Navbar from "../../Navbar";
import { shallow } from "enzyme";
import { Link } from "@mui/material";

describe("Check if navbar renders correctly", () => {
    test("Check if renders", () => {
        shallow(<Navbar />)
    })

    test("Check if navbar contains expected elements", () => {
        const navbar = shallow(<Navbar />)
        expect(navbar.find(Link)).toHaveLength(3)
    })
})