import { Box, Button } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const ErrorPage: React.FC = () => {
  return (
    <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} gap={2} minH={'100vh'}>
      <Box>
        <h1>Oops!</h1>
      </Box>
      <Box>
        <p>Sorry, an unexpected error has occurred.</p>
      </Box>
      <Box>
        <NavLink to={'/'}>
          <Button>Back</Button>
        </NavLink>
      </Box>
    </Box>
  );
}

export default ErrorPage