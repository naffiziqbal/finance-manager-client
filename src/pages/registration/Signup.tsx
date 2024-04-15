import SignUpForm from "../../components/Form/SignUpForm";

const Signup = () => {
  return (
    <div className="relative min-w-screen h-screen lg:container mx-auto py-12 overflow-hidden">
      <div className="flex justify-between w-full md:flex-row flex-col-reverse">
        <div className="md:w-1/2 w-full">
          <SignUpForm />
        </div>
        <figure className="w-1/2 mx-auto">
          <img src="/Signup-amico.svg" alt="sign" />
        </figure>
      </div>
    </div>
  );
};

export default Signup;
