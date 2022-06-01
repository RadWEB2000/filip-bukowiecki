import Link from "next/link"
import { AuthorWrapper } from "./styles";

const Author = () => {
    const year = new Date().getFullYear();
    return(
        <AuthorWrapper>
            <Link href='https://rad-web.vercel.app/'>
                <a>
                    Radosław Adamczyk - RadWEB
                </a>
            </Link>
            <p>
                &copy; 2021 - {year}
            </p>
        </AuthorWrapper>
    )
}
export default Author;