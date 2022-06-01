import { IntSection } from "./interface";
import { SectionWrapper } from "./styles";
const Section = ({content,title}:IntSection) => {
    return(
        <SectionWrapper>
            <h2 className="heading center">
                {title}
            </h2>
            <p className="content center">
                {content}
            </p>
        </SectionWrapper>
    )
}
export default Section;