import AddCarPage from "../AddCarPage";
import { shallow, mount } from "enzyme";
import renderer from "react-test-renderer";

const updateInput = (
  wrapper: any,
  instance: any,
  newValue: any,
  name: string
) => {
  const input = wrapper.find(instance);
  input.simulate("change", {
    target: { value: newValue, name: name },
  });
  return wrapper.find(instance);
};

describe("Testing car creation form", () => {
  test("Renders correctly", () => {
    shallow(<AddCarPage />);
  });

  test("Can input values in fields", () => {
    const wrapper = shallow(<AddCarPage />);
    const nameInput = updateInput(wrapper, '[name="name"]', "Jack", "name");
    expect(nameInput.props().value).toBe("Jack");
    const company = updateInput(
      wrapper,
      '[name="company"]',
      "Volvo",
      "company"
    );
    expect(company.props().value).toBe("Volvo");
    const production_year = updateInput(
      wrapper,
      '[name="production_year"]',
      1999,
      "production_year"
    );
    expect(production_year.props().value).toBe(1999);
  });
});

// Snapshot testing with Jest
describe("Add car page", () => {
  it("renders properly", () => {
    const treeAddCar = renderer.create(<AddCarPage />).toJSON();
    expect(treeAddCar).toMatchSnapshot();
  });
});
