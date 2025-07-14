import NextAuth from "next-auth"
import SlackProvider from "next-auth/providers/slack"

export const authOptions = {
  providers: [
    SlackProvider({
      clientId: process.env.SLACK_CLIENT_ID as string,
      clientSecret: process.env.SLACK_CLIENT_SECRET as string,
    }),
  ],
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
