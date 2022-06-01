import Link from "next/link";
import { BrandWrapper } from "./styles";
const Brand = () => {
  return (
    <BrandWrapper>
      <Link href="/">
        <a>Bukowiecki</a>
      </Link>
    </BrandWrapper>
  );
};
export default Brand;
