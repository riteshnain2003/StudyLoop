const express = require("express")
const router = express.Router()
const { auth, isInstructor } = require("../midleware/auth")
const {
  deleteAccount,
  updateProfile,
  getAllUserDetails,
  updateProfilePicture,
} = require("../controllers/Profile")

// ********************************************************************************************************
//                                      Profile routes
// ********************************************************************************************************
// Delet User Account
router.delete("/deleteProfile", auth, deleteAccount)
router.put("/updateProfile", auth, updateProfile)
router.get("/getUserDetails", auth, getAllUserDetails)
router.put("/updateProfilePicture",auth,updateProfilePicture)


module.exports = router