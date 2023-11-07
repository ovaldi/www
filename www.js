import fetch from "node-fetch";

const withPrefix = (prefix) => {
  return new Proxy(Promise.resolve(), {
    get(_, key) {
      if (key === "then") {
        return (a, b) => {
          return fetch(prefix).then((x) => x.text().then(a), b);
        };
      }
      return withPrefix(prefix + "." + key);
    },
  });
};

const www = withPrefix("https://www");
export default www;
