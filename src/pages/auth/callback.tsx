import { setCookie } from "nookies";
import { redirectUser } from "../../utils";

const Callback = () => {
  return <p>Redireccionando....</p>;
};

export default Callback;

Callback.getInitialProps = async (ctx: any) => {
  try {
    console.log(ctx.query)
    const response = await fetch(
      `${process.env.STRAPI_URL}/api/auth/auth0/callback?access_token=${ctx.query.access_token}`
    );
    const { jwt, user, ...rest } = await response.json();
    console.log({ rest });
    console.log("callbacks", { jwt, user });
    setCookie(ctx, "jwt", jwt, {
      maxAge: 30 * 24 * 60 * 60,
      path: "/",
    });

    redirectUser(ctx, "/");
  } catch (error) {
    console.error(error);
  }
};
