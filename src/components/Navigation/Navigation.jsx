import { Box } from "../../Box"
import { Link } from "react-router";
function Navigation() {
    
    return (
      <Box display="flex"  style={{marginRight:30 , gap:30  }}>
        <Link to="/">home</Link>
        <Link to="/movies">movies</Link>
      </Box>
    );
}

export default Navigation