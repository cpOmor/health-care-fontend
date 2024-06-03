import { Box, Button, Stack, Typography } from "@mui/material";
import Container from "../Container/Container";
import Link from "next/link";

const Navbar = () => {
  return (
    <Container>
      <Stack className="items-center" py={2} justifyContent="space-between">
        {/* logo hear  */}
        <Typography component={Link} href="./" variant="h4">
          P<Box component="span">H</Box> Health Care
        </Typography>
        {/* nab items hear  */}
        <Stack gap={4} justifyContent="space-between">
          <Typography component={Link} href="./login">
            Consultation
          </Typography>
          <Typography component={Link} href="./login">
            Health Planes
          </Typography>
          <Typography component={Link} href="./login">
            Medicine
          </Typography>
          <Typography component={Link} href="./login">
            Diagnostics
          </Typography>
          <Typography component={Link} href="./login">
            NOGS
          </Typography>
        </Stack>
        <Button component={Link} href="./login">
          Login
        </Button>
      </Stack>
    </Container>
  );
};
export default Navbar;
