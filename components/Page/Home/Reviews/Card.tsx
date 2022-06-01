import Image from "next/image";
import { IntCard } from "./interface";
import { CardWrapper } from "./styles";
const Card = ({content,image,title}:IntCard) => {
  return (
    <CardWrapper>
      <figure>
          <Image
            alt={title}
            layout='fill'
            objectFit="cover"
            objectPosition='center'
            src={image}
            title={title}
            quality={65}
          />
      </figure>
      <figcaption>
          <section>
              <h2>{title}</h2>
              <p>{content}</p>
          </section>
      </figcaption>
    </CardWrapper>
  );
};
export default Card;