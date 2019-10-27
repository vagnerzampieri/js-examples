import jwt from "jsonwebtoken";

function verifyToken(req, res, next) {
  const token = req.header("Auth-Token");
  if (!token) return res.status(401).send("Access Denied");

  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).send("Invalid Token");
  }
}

export { verifyToken };
