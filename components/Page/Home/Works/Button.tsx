import Link from "next/link"
import { TiSocialYoutube } from "react-icons/ti"
import { IntButton } from "./interface";
import { ButtonWrapper } from "./styles";
const Button = ({path}:IntButton) => {
    return(
        <ButtonWrapper>
            <Link href={path}>
                <a>
                    <span>
                        <TiSocialYoutube/>
                    </span>
                    <p>
                        Zobacz wszystkie
                    </p>
                </a>
            </Link>
        </ButtonWrapper>
    )
}
export default Button;