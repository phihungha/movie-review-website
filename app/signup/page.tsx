import { LinkText } from "@/components/Texts/LinkText";
import SignUpForm from "./components/SignUpForm";

export const metadata = {
  title: "Sign up",
};

export default function SignUp() {
  return (
    <div className="m-14 flex h-full flex-1 items-center justify-center">
      <div className="flex w-2/4 flex-col items-stretch justify-center gap-10 p-7 shadow-2xl">
        <h2 className="p-7 text-center text-4xl font-bold">Sign in</h2>
        <SignUpForm />
        <div className="flex justify-center">
          <p>
            Already have an account?{" "}
            <LinkText href="/signin">Sign in now!</LinkText>
          </p>
        </div>
      </div>
    </div>
  );
}
