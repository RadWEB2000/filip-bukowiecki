import CloseButton from "../Button/CloseButton";
import { IntButton } from "../Button/interface";
import MenuItem from "./MenuItem"
import { MenuWrapper } from "./styles";
const Menu = ({handle}:IntButton) => {
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
                    <MenuItem
                        path="/"
                        title='Start'
                    />
                    <MenuItem
                        path="#kim-jestem"
                        title='O mnie'
                    />
                    <MenuItem
                        path="#realizacje"
                        title='Realizacje'
                    />
                    <MenuItem
                        path="#oferty"
                        title='Oferty'
                    />
                    <MenuItem
                        path="#kontakt"
                        title='Kontakt'
                    />
                </menu>
            </section>
        </MenuWrapper>
    )
}
export default Menu;