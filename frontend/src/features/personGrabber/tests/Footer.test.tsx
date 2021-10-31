import Footer from "../../Footer";
import renderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../../store";

// Snapshot testing with Jest
describe("Footer", () => {
  it("renders properly", () => {
    const treeFooter = renderer
      .create(
        <BrowserRouter>
          <Provider store={store}>
            <Footer />
          </Provider>
        </BrowserRouter>
      )
      .toJSON();
    expect(treeFooter).toMatchSnapshot();
  });
});
