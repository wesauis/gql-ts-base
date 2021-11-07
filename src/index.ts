import createServer from "./server";

createServer().listen().then(({ url }) => {
  console.log(`🚀 Server launched at ${url}`);
});
