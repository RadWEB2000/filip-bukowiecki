import { IntButton } from "./interface"
import { CloseButtonWrapper } from "./styles";
const CloseButton = ({handle}:IntButton) => {
    return(
        <CloseButtonWrapper onClick={handle}>
            <span/>
            <span/>
        </CloseButtonWrapper>
    )
}
export default CloseButton;