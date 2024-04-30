import { Avatar, Box, Button, Text } from "@chakra-ui/react"
import { NavLink, useLocation } from "react-router-dom"

const Navbar: React.FC = () => {
  const { pathname } = useLocation()
  return (
    <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} gap={4} p={2} boxShadow={'0 0 3px rgba(0, 0, 0, 0.15)'}>
      <Box display={'flex'} alignItems={'center'} gap={2}>
        <Text fontWeight={'bold'}>TASK APP</Text>
        {pathname === '/' &&
          <NavLink to={'/add-task'}>
            <Button>
              Add Task
            </Button>
          </NavLink>
        }
      </Box>
      <Box display={'flex'} alignItems={'center'} gap={2}>
        <Box>
          Habiburrahman
        </Box>
        <NavLink to={'/'}>
          <Avatar size={'sm'} />
        </NavLink>
      </Box>
    </Box>
  )
}

export default Navbar