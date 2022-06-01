import Author from "./Author";
import Socials from "./Socials";
import { FooterWrapper } from "./styles";

const Footer = () => {
    return(
        <FooterWrapper>
            <Socials/>
            <Author/>
        </FooterWrapper>
    )
}
export default Footer;