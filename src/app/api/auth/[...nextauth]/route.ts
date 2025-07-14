import NextAuth from "next-auth";
import SlackProvider from "next-auth/providers/slack";
import { Account, Profile, User as AuthUser } from "next-auth";
import { createUser, getUser } from "@/lib/airtable";
import { User } from "@/lib/types";

export const authOptions = {
  providers: [
    SlackProvider({
      clientId: process.env.SLACK_CLIENT_ID as string,
      clientSecret: process.env.SLACK_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async signIn({
      user
    }: {
      user: AuthUser;
    }) {
      const fetchedUser = await getUser(user.id);
      if (!fetchedUser) {
        const newUser: User = {
          slackId: user.id,
          name: user.name || "",
          email: user.email || "",
          photo: user.image || ""
        }
        await createUser(newUser);
      }
      return true;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
