import { UserSchema } from "@/app/schemas/userSchema";
import ReuseForm from "@/components/ReuseForms/ReuseForm";
import ReuseInputField from "@/components/ReuseForms/ReuseInputField";
import Container from "@/components/shared/Container/Container";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(UserSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };
  return (
    <Container>
      <Stack
        sx={{ height: "100vh", justifyContent: "center", alignItems: "center" }}
      >
        <Box
          sx={{
            maxWidth: "500px",
            width: "100%",
            boxShadow: 1,
            borderRadius: 1,
            p: 6,
            textAlign: "center",
          }}
        >
          <Box sx={{ width: "60px", height: "60px", margin: "10px auto" }}>
            {/* <Image src={login} alt="login icon" /> */}
          </Box>
          <Box>
            <Typography variant="h3" fontSize={"30px"} fontWeight={700}>
              Please Login Here
            </Typography>
          </Box>

          <Box>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid spacing={2} my={3}>
                <Grid item md={12} sm={12}>
                  <ReuseInputField
                    name="email"
                    label="Email"
                    type="email"
                    size="small"
                    register={register}
                    error={errors.email}
                    fullWidth={true}
                  />
                </Grid>

                <Grid item md={12} sm={12} my={2}>
                  <ReuseInputField
                    name="password"
                    label="Password"
                    type="password"
                    size="small"
                    fullWidth={true}
                  />
                </Grid>

                <Typography
                  component="p"
                  fontWeight="300"
                  textAlign="end"
                  color="red"
                >
                  {" "}
                  Forget Password{" "}
                </Typography>
              </Grid>

              <Button type="submit" fontWeight={600} fullWidth={true}>
                Login
              </Button>

              <Typography component="p" fontWeight="300" my={1}>
                Don&apos;t have an account ?{" "}
                <Link
                  className="text-red-500 font-medium text-[16px]"
                  href="/register"
                >
                  Register
                </Link>
              </Typography>
            </form>
            {/* <ReuseForm onSubmit={handleLogin}>
              
            </ReuseForm> */}
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default LoginPage;
