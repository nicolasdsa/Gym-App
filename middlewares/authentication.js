const jwt = require("jsonwebtoken");

const authentication = (req, res, next) => {
  const tokenData = req.headers.authorization;


  if (!tokenData) {
    return res.status(401).send({message:"Unauthorized"});
  }

  
  const token = tokenData.split(" ")[1];

  try {
    const decoded = jwt.verify(token, "$2a$12$/4TnnqjwBLo7rDCjeYqcb.I4UM1NcZmzelPhkqR4szospJgaFNEqy");
    req.user = decoded;
    return next();
  } catch (err) {
    return res.status(401).send({message:"Unauthorized"});
  }
};

module.exports = authentication;
