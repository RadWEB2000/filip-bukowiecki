import Brand from "../Brand/Brand";
import { IntButton } from "../Button/interface";
import OpenButton from "../Button/OpenButton";
import { NavigationWrapper } from "./styles";
const Navigation = ({handle}:IntButton) => {
  return (
    <NavigationWrapper>
      <div>
        <Brand />
      </div>
      <div>
        <OpenButton handle={handle} />
      </div>
    </NavigationWrapper>
  );
};
export default Navigation;
