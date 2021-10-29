import AddPersonPage from '../AddPersonPage'
import { shallow, mount } from "enzyme"
import React from 'react'

const updateInput = (wrapper: any, instance: any, newValue: any, name:string) => {
    const input = wrapper.find(instance)
    input.simulate('change', {
        target: {value: newValue, name: name}
    })
    return wrapper.find(instance)
}

describe("Testing person creation form", () => {
    test("Renders correctly", () => {
        shallow(<AddPersonPage/>)
    })

    test("Can input values in fields", () => {
        const wrapper = shallow(<AddPersonPage/>)
        const first_name = updateInput(wrapper, '[name="first_name"]', "Jack", "first_name")
        expect(first_name.props().value).toBe("Jack")
        const last_name = updateInput(wrapper, '[name="last_name"]', "Volvo", "last_name")
        expect(last_name.props().value).toBe("Volvo")
        const email = updateInput(wrapper, '[name="email"]', "test@gmail.com", "email")
        expect(email.props().value).toBe("test@gmail.com")
        
    })
})