import www from "./www.js";

async function bootstrap() {
  await apple();
  await chess();
}

bootstrap();

async function chess() {
  try {
    const text = await www.chess.com;
    console.info("www.chess.com =>", text.length);
  } catch (ex) {
    console.error("error: ", ex.message);
  }
}

async function apple() {
  try {
    const text = await www.apple.com;
    console.info("www.apple.com =>", text.length);
  } catch (ex) {
    console.error("error: ", ex.message);
  }
}
