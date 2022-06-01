import Link from "next/link";
import { useState } from "react";
import { movies } from "./movies";
import { WorksWrapper } from "./styles";
import Work from "./Work";
import {TiSocialYoutube} from 'react-icons/ti';
import Button from "./Button";
import Column from "./Column";
import Section from "./Section";
const Works = () => {
    const {assembled,recorded} = movies;
    return(
        <WorksWrapper>
            <Section
                content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, quidem, doloremque perspiciatis consequatur dolore placeat reiciendis, maiores ab ipsum recusandae iste laborum saepe eveniet tenetur molestiae esse vitae cupiditate voluptates.
                Officiis iusto placeat optio dolorum nobis deleniti sint eius, doloribus fugiat. Suscipit, consequuntur eum. Consectetur sed dolores, asperiores officia fuga vero perspiciatis explicabo a molestiae quis dolorum quisquam repellat quae!
                Rerum itaque autem architecto similique dolore veritatis cupiditate illo possimus deleniti? Expedita explicabo, exercitationem ratione eos dolorem et minus voluptas rerum excepturi iure ut, ea laborum ullam modi voluptatum voluptate.'
                title='Realizacje'
            />
            <div className="movies">
                <Column
                    title="Nakręcone"
                    movies={recorded}
                />
                <Column
                    title="Zmontowane"
                    movies={assembled}
                />
            </div>
            <Button/>
        </WorksWrapper>
    )
}
export default Works;