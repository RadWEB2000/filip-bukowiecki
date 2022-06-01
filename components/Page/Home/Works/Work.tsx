import { IntWork } from "./interface"
import { WorkWrapper } from "./styles";
const Work = ({movie}:IntWork) => {
    return(
        <WorkWrapper>
            <iframe 
                src={movie}
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            />
        </WorkWrapper>
    )
}
export default Work;