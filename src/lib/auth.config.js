export const authConfig = {
  pages: {
    signIn: "/login",
  },
  providers: [],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.isAdmin = user.isAdmin;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.isAdmin = token.isAdmin;
        return session;
      }
    },
    authorized({ auth, request }) {
      const user = auth?.user;
      const isOnAdminPannel = request.nextUrl?.pathname.startsWith("/admin");
      const isOnBlogPage = request.nextUrl?.pathname.startsWith("/blog");
      const isOnContactPage = request.nextUrl?.pathname.startsWith("/contact");
      const isOnLoginPage = request.nextUrl?.pathname.startsWith("/login");

      //ONLY ADMIN CAN REACH THE ADMIN DASHBOARD

      if (isOnAdminPannel && !user?.isAdmin) {
        return false;
      }


      //ONLY AUTHENTICATED USERS CAN REACH THE BLOG PAGE AND CONTACT PAGE

      if ((isOnBlogPage && !user) || (isOnContactPage && !user)) {
        return false;
      }


      //ONLY UNAUTHENTICATED USERS CAN REACH THE LOGIN PAGE

      if (isOnLoginPage && user) {
        return Response.redirect(new URL("/", request.nextUrl));
      }

      return true;
    }
  }
}