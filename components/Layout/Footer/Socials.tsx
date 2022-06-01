import SocialItem from "./SocialItem"
import {RiFacebookFill,RiInstagramLine,RiYoutubeFill} from 'react-icons/ri'
import {CgMail,CgSmartphone} from 'react-icons/cg'
import { SocialsWrapper } from "./styles";
const Socials = () => {
    return(
        <SocialsWrapper>
            <ul>
                <SocialItem
                    icon={<CgSmartphone/>}
                    path='#'
                    title=''
                />
                <SocialItem
                    icon={<RiFacebookFill/>}
                    path='#'
                    title=''
                />
                <SocialItem
                    icon={<RiInstagramLine/>}
                    path='#'
                    title=''
                />
                <SocialItem
                    icon={<RiYoutubeFill/>}
                    path='#'
                    title=''
                />
                <SocialItem
                    icon={<CgMail/>}
                    path='mailto:filip.bukowiecki@gmail.com'
                    title=''
                />
                
            </ul>
        </SocialsWrapper>
    )
}
export default Socials;