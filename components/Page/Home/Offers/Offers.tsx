import Offer from "./Offer";
import {RiMovie2Line} from 'react-icons/ri';
import { OffersWrapper } from "./styles";
const Offers = () => {
    return(
        <OffersWrapper>
            <div>
                <h2 className="heading">Oferty</h2>
            </div>
            <ul>
                <Offer
                    icon={<RiMovie2Line/>}
                    title='Realizacja filmów weselnych'
                    content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in est quis risus varius tincidunt. Praesent vitae lectus ornare, tincidunt tellus ut, aliquam dolor. Phasellus vitae mauris metus. Fusce vel ex vitae nunc sollicitudin eleifend. Ut pellentesque nunc orci, dapibus imperdiet purus sodales nec. In eget porta urna, et tincidunt libero. Nulla interdum velit vel consectetur ultrices.'
                />
                <Offer
                    icon={<RiMovie2Line/>}
                    title='Realizacja filmów weselnych'
                    content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in est quis risus varius tincidunt. Praesent vitae lectus ornare, tincidunt tellus ut, aliquam dolor. Phasellus vitae mauris metus. Fusce vel ex vitae nunc sollicitudin eleifend. Ut pellentesque nunc orci, dapibus imperdiet purus sodales nec. In eget porta urna, et tincidunt libero. Nulla interdum velit vel consectetur ultrices.'
                />
                <Offer
                    icon={<RiMovie2Line/>}
                    title='Realizacja filmów weselnych'
                    content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in est quis risus varius tincidunt. Praesent vitae lectus ornare, tincidunt tellus ut, aliquam dolor. Phasellus vitae mauris metus. Fusce vel ex vitae nunc sollicitudin eleifend. Ut pellentesque nunc orci, dapibus imperdiet purus sodales nec. In eget porta urna, et tincidunt libero. Nulla interdum velit vel consectetur ultrices.'
                />
            </ul>
        </OffersWrapper>
    )
}
export default Offers;