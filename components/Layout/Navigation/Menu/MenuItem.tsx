import Link from "next/link";
import { IntMenuItem } from "./interface";
import { MenuItemWrapper } from "./styles";
const MenuItem = ({ handle, path, title }: IntMenuItem) => {
  return (
    <MenuItemWrapper onClick={handle}>
      <Link href={path}>
        <a>{title}</a>
      </Link>
    </MenuItemWrapper>
  );
};
export default MenuItem;
