import { content } from "../../../../content/content";
import CloseButton from "../Button/CloseButton";
import { IntButton } from "../Button/interface";
import MenuItem from "./MenuItem"
import { MenuWrapper } from "./styles";
const Menu = ({handle}:IntButton) => {
    const {menu} = content.layout;
    return(
        <MenuWrapper
            initial={{opacity:0,y:-150,visibility:'hidden'}}
            animate={{opacity:1,y:0,visibility:'visible'}}
            exit={{opacity:0,y:-150,visibility:'hidden'}}
        >
            <div>
                <CloseButton
                    handle={handle}
                />
            </div>
            <section>
                <menu>
                    {menu.map(({path,title},key:number) =>
                        <MenuItem
                            handle={handle}
                            key={key}
                            path={path}
                            title={title}
                        />                    
                    )}
                </menu>
            </section>
        </MenuWrapper>
    )
}
export default Menu;