import { IntColumn } from "./interface"
import { ColumnWrapper } from "./styles";
import Work from "./Work"
const Column = ({movies,title}:IntColumn) => {
    return(
        <ColumnWrapper>
            <h3 className="heading center">
                {title}
            </h3>
            <ul className="grid">
                {movies.map((item,key) =>
                    <Work
                        key={key}
                        movie={item}
                    />
                )}
            </ul>
        </ColumnWrapper>
    )
}
export default Column;