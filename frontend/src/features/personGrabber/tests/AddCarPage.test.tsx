import AddCarPage from '../AddCarPage'
import { shallow, mount } from "enzyme"


describe("Testing car creation form", () => {
    test("Renders correctly", () => {
        shallow(<AddCarPage/>)
    })

    test("Can input values in fields", () => {
        const addCarPage = mount(<AddCarPage/>)
        const inp = addCarPage.find("input")

        inp.first().simulate("focus")
        inp.first().simulate('change', { target: { value: 'Changed' } });
        inp.first().simulate('keyDown', {
            which: 27,
            target: {
              blur() {
                // Needed since <EditableText /> calls target.blur()
                inp.simulate('blur');
              },
            },
          });
          expect(inp.get(0).props.value).toBe('Hello');
    })
})