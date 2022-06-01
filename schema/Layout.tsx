import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import Footer from "../components/Layout/Footer/Footer";
import Seo from "../components/Layout/Head/Seo";
import Menu from "../components/Layout/Navigation/Menu/Menu";
import Navigation from "../components/Layout/Navigation/Navigation/Navigation";
import { Global } from "../styles/Global";
import { theme } from "../styles/theme";
import { IntLayout } from "../typings/interface";
const Layout = ({canonical,children,description,image,robots,title,typePage}:IntLayout) => {
    const [openMenu,setOpenMenu] = useState(false);
    return(
        <ThemeProvider theme={theme}>
            <Global/>
            <Seo
                canonical={canonical}
                description={description}
                image={image}
                robots={robots}
                title={title}
                typePage={typePage}
            />
            <Navigation
                handle={() => setOpenMenu(true)}
            />
            {
                openMenu &&
                <AnimatePresence>
                    <Menu
                        handle={() => setOpenMenu(false)}
                    />
                </AnimatePresence>
            }
            <>
                {children}
            </>
            <Footer/>
        </ThemeProvider>
    )
}
export default Layout;