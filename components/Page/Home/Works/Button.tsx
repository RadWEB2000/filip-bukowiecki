import Link from "next/link"
import { TiSocialYoutube } from "react-icons/ti"
import { ButtonWrapper } from "./styles";
const Button = () => {
    return(
        <ButtonWrapper>
            <Link href=''>
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