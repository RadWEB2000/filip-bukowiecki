import Image from "next/image"
import { IntAbout } from "./interface";
import { AboutWrapper } from "./styles";

const About = ({content,image,title}:IntAbout) => {
    return(
        <AboutWrapper>
            <figure>
                <Image
                    alt={title}
                    loading="eager"
                    layout='fill'
                    objectFit='cover'
                    objectPosition='center'
                    priority
                    title={title}
                    src={image}
                    quality={75}
                />
            </figure>
            <section>
                <h2 className='heading'>
                    {title}
                </h2>
                <p className='content'>
                    {content}
                </p>
            </section>
        </AboutWrapper>
    )
}
export default About;