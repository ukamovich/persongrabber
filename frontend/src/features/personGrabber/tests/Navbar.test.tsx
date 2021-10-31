import Navbar from "../../Navbar";
import { shallow } from "enzyme";
import { BrowserRouter, Link } from "react-router-dom";
import renderer from "react-test-renderer";

describe("Check if navbar renders correctly", () => {
  test("Check if renders", () => {
    shallow(<Navbar />);
  });

  test("Check if navbar contains expected elements", () => {
    const navbar = shallow(<Navbar />);
    expect(navbar.find(Link)).toHaveLength(3);
  });
});

// Snapshot testing with Jest
describe("Navbar", () => {
  it("renders properly", () => {
    const treeHeader = renderer
      .create(
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      )
      .toJSON();
    expect(treeHeader).toMatchSnapshot();
  });
});
