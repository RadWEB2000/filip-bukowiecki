import { WorksWrapper } from "./styles";
import Button from "./Button";
import Column from "./Column";
import Section from "./Section";
import { IntWorks } from "./interface";
const Works = ({assembled,content,recorded,path,title}:IntWorks) => {
    return(
        <WorksWrapper>
            <Section
                content={content}
                title={title}
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
            <Button path={path}/>
        </WorksWrapper>
    )
}
export default Works;