export default function handler(req, res) {
  const method = req.method;
  switch (method) {
    case "POST":
      const body = req.body;
      console.log("body...", body);
      res.status(200).json({ name: "Sign In" });
      break;
    case "GET":
      res.status(200).json({storeConfig: {
        social_login: {
          enable: true,
          networks: ['facebook', 'line', 'google'],
          url_redirect: '/',
        }
      }})
      break;
    default:
      res.status(200).json({ name: "John Doe" });
      break;
  }
}
