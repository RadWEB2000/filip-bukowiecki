import { IntButton } from "./interface";
import { OpenButtonWrapper } from "./styles";
const OpenButton = ({handle}:IntButton) => {
    return(
        <OpenButtonWrapper onClick={handle}>
            <span/>
            <span/>
            <span/>
        </OpenButtonWrapper>
    )
}
export default OpenButton;