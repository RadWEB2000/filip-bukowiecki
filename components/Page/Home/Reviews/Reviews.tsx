import Card from "./Card";
import { IntCard, IntReviews } from "./interface";
import { CardsWrapper } from "./styles";

const Reviews = ({cards,title}:IntReviews) => { 
    return(
        <section>
            <div>
                <h2 className="heading center">{title}</h2>
            </div>
            <CardsWrapper>
                {cards.map(({content,image,title}:IntCard,key:number) => 
                    <Card
                        content={content}
                        image={image}
                        key={key}
                        title={title}
                    />
                )}
            </CardsWrapper>
        </section>
    )
}
export default Reviews;