// server/api/auth/[...].ts

import { NuxtAuthHandler } from '#auth';

export default NuxtAuthHandler({
  secret: process.env.NUXT_AUTH_SECRET,
  providers: [
    {
      id: 'auth-service',
      name: 'Auth Service',
      type: 'oauth',
      version: '2.0',
      idToken: true,
      checks: ['pkce', 'state'],
      wellKnown: `${process.env.AUTH_SERVICE_BASE_URL}/.well-known/openid-configuration`,
      authorization: {
        params: {
          scope: 'openid',
        },
      },
      client: {
        token_endpoint_auth_method: 'client_secret_basic',
        token_endpoint_auth_signing_alg: 'RS512',
        id_token_signed_response_alg: 'RS512',
      },
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      profile(profile) {
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
        };
      },
    },
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (!account?.access_token || !account?.refresh_token) {
        return false;
      }

      return true;
    },
    jwt({ token, user, account }) {
      if (account) {
        token.accessToken = account.access_token;
        token.refreshToken = account.refresh_token;
      }

      return token;
    },
    session({ session, token, user }) {
      if (token) {
        session.accessToken = token.accessToken;
        session.refreshToken = token.refreshToken;
      }

      console.log(session);

      return session;
    },
  },
});
