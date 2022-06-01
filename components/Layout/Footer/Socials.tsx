import SocialItem from "./SocialItem"
import { SocialsWrapper } from "./styles";
import { content } from "../../../content/content";
const Socials = () => {
    const {socials} = content.layout;
    return(
        <SocialsWrapper>
            <ul>
                {socials.map(({icon,path,title},key:number) =>
                    <SocialItem
                        icon={icon}
                        key={key}
                        path={path}
                        title={title}
                    />
                )}
            </ul>
        </SocialsWrapper>
    )
}
export default Socials;