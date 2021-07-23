import Enzyme, { mount } from "enzyme";
import Students from "./Students";
import Student from "./student/Student";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import sinon from "sinon";

Enzyme.configure({ adapter: new Adapter() });

const items = [
     {
          id: 0,
          name: "soghra",
          classNumber: 123,
          number: 123456,
          email: "soghra@test.com",
     },
     {
          id: 0,
          name: "kobra",
          classNumber: 147,
          number: 147852,
          email: "kobra@test.com",
     },
     {
          id: 0,
          name: "akbar",
          classNumber: 258,
          number: 258963,
          email: "akbar@test.com",
     },
     {
          id: 0,
          name: "asghar",
          classNumber: 369,
          number: 369852,
          email: "asghar@test.com",
     },
];

describe("<Students />", () => {
     it("renders number of student component", () => {
          const spy = sinon.spy();
          const wrapper = mount(
               <Students
                    studentList={items}
                    deleted={spy}
                    toggle={true}
                    edited={spy}
               />
          );
          expect(wrapper.find(Student)).toHaveLength(items.length);
     });
});
