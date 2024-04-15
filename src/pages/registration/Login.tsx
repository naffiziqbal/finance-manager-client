import LoginForm from "../../components/Form/LoginForm";

const Login = () => {
  return (
    <div className="relative min-w-screen h-screen lg:container mx-auto overflow-hidden flex justify-center items-center">
      <div className="flex justify-between w-full md:flex-row flex-col-reverse">
        <div className="md:w-1/2 w-full">
          <LoginForm />
        </div>
        <figure className="w-1/2 mx-auto">
          <img src="/Login-amico.svg" alt="sign" />
        </figure>
      </div>
    </div>
  );
};

export default Login;
