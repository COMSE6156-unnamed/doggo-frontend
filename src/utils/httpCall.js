export const httpCall = async (http, method, token, body) => {
  let req = {};

  if (token != null) {
    req = await fetch(http, {
      method: method,
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
      body: method === "GET" || body === null ? null : JSON.stringify(body),
    });
  } else {
    req = await fetch(http, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: method === "GET" || body === null ? null : JSON.stringify(body),
    });
  }
  const result = await req.json();
  return result;
};

export const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};
