import Enzyme, { shallow } from "enzyme";
import Button from "./Button";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import sinon from "sinon";

Enzyme.configure({ adapter: new Adapter() });

it("<Button/>", () => {
     const spy = sinon.spy();
     const wrapper = shallow(<Button clicked={spy}>clicked</Button>);
     wrapper.find('button').first().simulate('click')
     expect(spy.calledOnce).toBe(true)
});
