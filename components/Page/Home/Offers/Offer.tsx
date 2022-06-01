import { IntOffer } from "./interface";
import { OfferWrapper } from "./styles";
const Offer = ({content,icon,title}:IntOffer) => {
    return(
        <OfferWrapper>
            <span>
                {icon}
            </span>
            <h3>
                {title}
            </h3>
            <p>
                {content}
            </p>
        </OfferWrapper>
    )
}
export default Offer;