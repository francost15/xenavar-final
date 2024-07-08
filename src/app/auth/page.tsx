import { redirect } from "next/navigation";


// eslint-disable-next-line import/no-anonymous-default-export
export default function NotFoundPageHome() {
  return (
    redirect("/auth/login")
  );
}