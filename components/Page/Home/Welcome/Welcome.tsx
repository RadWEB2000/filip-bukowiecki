import { IntWelcome } from "./interface";
import { WelcomeWrapper } from "./styles";

const Welcome = ({h1,h2}:IntWelcome) => {
    return(
        <WelcomeWrapper>
            <h1>{h1}</h1>
            <h2>{h2}</h2>
        </WelcomeWrapper>
    )
}
export default Welcome;