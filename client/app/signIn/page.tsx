import { SignIn } from "../auth/signIn/signIn";

export default function Home() {
  return (
    <div className="w-260 h-screen mx-auto flex justify-between items-center gap-12">
      <div>
        <SignIn />
      </div>
      <div className="w-225 overflow-hidden rounded-4xl">
        <img
          src="/images/img.png"
          width="100%"
          height="100%"
          alt="Food Delivery Image"
          className="object-cover"
        />
      </div>
    </div>
  );
}
