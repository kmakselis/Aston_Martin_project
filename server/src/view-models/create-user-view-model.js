const { SERVER_PROTOCOL, SERVER_DOMAIN, SERVER_PORT } = process.env;

const createUserViewModel = (userDoc) => ({
  id: userDoc._id.toString(),
  email: userDoc.email,
  fullname: userDoc.fullname,
  role: userDoc.role,
  img: userDoc.img ? `${SERVER_PROTOCOL}://${SERVER_DOMAIN}:${SERVER_PORT}/${userDoc.img}` : undefined,
  createdAt: userDoc.createdAt,
  updatedAt: userDoc.updatedAt,
});

module.exports = createUserViewModel;
