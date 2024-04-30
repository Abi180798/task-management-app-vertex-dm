import { Box } from "@chakra-ui/react";
import { Navbar } from ".."

interface LayoutProps {
  children: JSX.Element
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box>
      <section>
        <Navbar />
      </section>
      <section>
        <Box p={4}>
          {children}
        </Box>
      </section>
    </Box>
  )
}

export default Layout