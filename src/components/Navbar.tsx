'use client';

import { useSession, signIn, signOut } from "next-auth/react";


const Navbar = () => {
  const { data: session, status } = useSession();

  return (
    <div className="w-full">
      <div className="container mx-auto flex justify-center gap-x-5 py-5 text-xl">
        <a className="hover:underline hover:decoration-wavy" href="/">
          Home
        </a>
        <a className="hover:underline hover:decoration-wavy" href="/propose">
          Propose an Idea
        </a>
        <a className="hover:underline hover:decoration-wavy" href="/vote">
          Vote
        </a>

        {!session ? (
          <button
            className="hover:underline hover:decoration-wavy"
            onClick={() =>
              signIn("slack", { callbackUrl: `/?login_success=true` })
            }
          >
            Login
          </button>
        ) : (
          <button
            className="hover:underline hover:decoration-wavy"
            onClick={() => signOut({ callbackUrl: `/?logout_success=true` })}
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
