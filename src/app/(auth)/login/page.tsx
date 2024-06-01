import Container from "@/components/shared/Container/Container";

const LoginPage = () => {
  if (1 == 1) {
    throw Error("this is a error");
  }
  return <Container>this is a Login page</Container>;
};

export default LoginPage;
