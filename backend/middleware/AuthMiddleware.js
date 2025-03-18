const { expressjwt } = require("express-jwt");
const { Auth } = require("../models");

// Middleware gabungan: Verifikasi JWT + Attach User
const authenticateUser = async (req, res, next) => {
  // Middleware ExpressJWT untuk verifikasi token
  expressjwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] })(
    req,
    res,
    async (err) => {
      if (err) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      try {
        // Pastikan token ada & valid
        if (!req.auth || !req.auth.id) {
          return res.status(401).json({ message: "Unauthorized" });
        }

        // Cari user berdasarkan ID dari token JWT
        const user = await Auth.findOne({ where: { id: req.auth.id } });

        if (!user) {
          return res.status(404).json({ message: "User not found" });
        }

        // Simpan user ke req.user biar bisa dipakai di controller
        req.user = user;
        next(); // Lanjut ke controller
      } catch (error) {
        res.status(500).json({ message: "Something went wrong", error });
      }
    }
  );
};

module.exports = { authenticateUser };
