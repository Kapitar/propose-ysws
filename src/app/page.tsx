"use client";

import Button from "@/components/Button";
import Notification from "@/components/Notification";
import { useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const { status } = useSession();
  const searchParams = useSearchParams();
  const [loginNotification, setLoginNotification] = useState(false);
  const [logoutNotification, setLogoutNotification] = useState(false);

  useEffect(() => {
    if (status === "authenticated") {
      if (searchParams.get("login_success") !== "true") {
        return;
      }
      setLoginNotification(true);
    } else if (status === "unauthenticated") {
      if (searchParams.get("logout_success") !== "true") {
        return;
      }
      setLogoutNotification(true);
    }
  }, [status]);

  return (
    <div className="container mx-auto mt-48">
      <Notification tracker={loginNotification} type="success">
        Your are now logged in!
      </Notification>
      <Notification tracker={logoutNotification} type="info">
        Your are now logged out!
      </Notification>
      <h1 className="text-5xl font-bold">Propose YSWS Idea!</h1>
      <p className="mt-8 w-1/2">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga minima
        sint sit in, sapiente a qui ea ullam asperiores amet saepe, veniam vero.
        Modi recusandae exercitationem laboriosam voluptatibus quos culpa!
      </p>
      <div className="flex gap-x-5 mt-3">
        <Button href="/" color="green">
          Propose
        </Button>
        <Button href="/" color="blue">
          View ideas
        </Button>
      </div>
    </div>
  );
}
