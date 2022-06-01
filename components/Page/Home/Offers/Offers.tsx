import Offer from "./Offer";
import { OffersWrapper } from "./styles";
import { IntOffer, IntOffers } from "./interface";
const Offers = ({cards,title}:IntOffers) => {
    return(
        <OffersWrapper>
            <div>
                <h2 className="heading">{title}</h2>
            </div>
            <ul>
                {cards.map(({content,icon,title}:IntOffer,key:number) =>
                    <Offer
                        key={key}
                        icon={icon}
                        title={title}
                        content={content}
                    />
                )}
            </ul>
        </OffersWrapper>
    )
}
export default Offers;