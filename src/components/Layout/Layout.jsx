import { Outlet } from "react-router"
import { Box } from "../../Box"
import Navigation from "../Navigation/NAvigation"


function Layout() {
    
    return (
        <Box as="header">
            <Navigation />
            <Outlet/>
        </Box>
    )
}

export default Layout