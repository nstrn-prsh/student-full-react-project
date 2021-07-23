import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Backdrop from "./Backdrop";

Enzyme.configure({ adapter: new Adapter() });

describe("<Backdrop />", () => {
     // age prop show pass dade nashode bood pas render null
     it("renders null", () => {
          const wrapper = shallow(<Backdrop />);
          expect(wrapper.equals(null)).toEqual(true);
     });
     // ye chizio bargardone, age show:true pas ye div darim ke ClassName backdrop dare
     it("renders sth", () => {
          const wrapper = shallow(<Backdrop />);
          wrapper.setProps({ show: true });
          expect(wrapper.find(".Backdrop").exists()).toEqual(true);
     });
});
