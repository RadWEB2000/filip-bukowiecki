import { HeroWrapper } from "./styles";

const Hero = () => {
    return(
        <HeroWrapper>
            <video
                autoPlay
                loop
                muted
                src='/assets/movie/backgroundVideo.mp4'
            />
        </HeroWrapper>
    )
}
export default Hero;