import { IntHero } from "./interface";
import { HeroWrapper } from "./styles";

const Hero = ({movie}:IntHero) => {
    return(
        <HeroWrapper>
            <video
                autoPlay
                loop
                muted
                src={movie}
            />
        </HeroWrapper>
    )
}
export default Hero;