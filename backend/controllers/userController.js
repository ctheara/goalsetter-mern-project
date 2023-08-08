// @desc    Register new user
// @route   POST /api/user
// @access  Public
const registerUser = (req, res) => {
    res.status(200).json({message: 'Registered User'})
}

// @desc    Authenticate a user
// @route   POST /api/user/login
// @access  Public
const loginUser = (req, res) => {
    res.status(200).json({message: 'Login User'})
}

// @desc    Get user data
// @route   Get /api/user/me
// @access  Public
const getMe = (req, res) => {
    res.status(200).json({message: 'User data display'})
}

module.exports = {
    registerUser,
    loginUser,
    getMe
}