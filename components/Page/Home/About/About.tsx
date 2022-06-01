import Image from "next/image"
import { AboutWrapper } from "./styles";

const About = () => {
    return(
        <AboutWrapper>
            <figure>
                <Image
                    alt=''
                    loading="eager"
                    layout='fill'
                    objectFit='cover'
                    objectPosition='center'
                    priority
                    title=''
                    src='/assets/images/lusterko.jpg'
                    quality={85}
                />
            </figure>
            <section>
                <h2 className='heading'>
                    Kim jestem?
                </h2>
                <p className='content'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis totam, sint incidunt veniam blanditiis enim commodi repellat magni placeat. Eveniet voluptas dolor porro veniam, dicta odit corrupti repellat nostrum ut.
                    Rem quas voluptates illo dolore assumenda, repudiandae architecto illum doloremque tempore aspernatur voluptatibus culpa sint animi? Cupiditate adipisci minima minus quisquam et. Id nulla quas voluptates perferendis, temporibus non itaque?Id nulla quas voluptates perferendis, temporibus non itaque?Id nulla quas voluptates perferendis, temporibus non itaque?Id nulla quas voluptates perferendis, temporibus non itaque?Id nulla quas voluptates perferendis, temporibus non itaque?Id nulla quas voluptates perferendis, temporibus non itaque?Id nulla quas voluptates perferendis, temporibus non itaque?
                </p>
            </section>
        </AboutWrapper>
    )
}
export default About;