import React from 'react';
import {cleanup, fireEvent, render} from '@testing-library/react';
import { shallow, mount } from "enzyme"
import PersonCard, { getAge } from "../PersonCard";
import { baseData, personData} from "./mockdata"

let name = baseData.first_name + " " + baseData.last_name

const clickedCardData = (
    <div className="card-body">
    <h6 className="card-title" style={{ fontSize: "20px" }}>{name}</h6>
    <p className="card-text"><b>Age:</b> {getAge(baseData.birthdate)}</p>
    <p className="card-text"><b>Gender:</b> {baseData.gender}</p>
    <p><b>Id:</b> {baseData._id}</p>
    <p><b>Email:</b> {personData.email}</p>
    <p><b>About:</b> {personData.bio}</p>
    <div>
        <p><b>Cars:</b></p>
        <table>
            <tbody>
                <tr>
                    <td>Name:</td>
                    <td>Price:</td>
                </tr>
                <tr>
                    <td>{personData.cars[0].name}</td>
                    <td>{personData.cars[0].price}</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
)

describe("Individual cards", () => {
    test("It renders without crashing.", () => {
        shallow(<PersonCard _id={baseData._id} name={name} birthdate={baseData.birthdate} gender={baseData.gender} customPeopleData={personData} />)
    })
    test("It contains expected elements", () => {
        const wrapper = shallow(<PersonCard _id={baseData._id} name={name} birthdate={baseData.birthdate} gender={baseData.gender} customPeopleData={personData} />)
        const existsIn = <h1 className="card-title" style={{ fontSize: "15px" }}>{name}</h1>
        expect(wrapper.contains(existsIn)).toBeTruthy()
    })
    test("We should not see all data before clicking card", () => {
        const card = mount(<PersonCard _id={baseData._id} name={name} birthdate={baseData.birthdate} gender={baseData.gender} customPeopleData={personData} />)
        expect(card.contains(clickedCardData)).toBeFalsy()
    })
    test("When clicking a card we get expected information", () => {
        const card = mount(<PersonCard _id={baseData._id} name={name} birthdate={baseData.birthdate} gender={baseData.gender} customPeopleData={personData} />)
        card.simulate("click")
        expect(card.contains(clickedCardData)).toBeTruthy()
    })
})
