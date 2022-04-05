// // Include the multer module into the project for accepting files
// const multer = require("multer")
//
// // Include the path module (It is built-in and so need to install)
// const path = require("path")
//
// const upload = multer({
//     storage: multer.diskStorage({
//         destination: "/uploads",  // Storage location
//         filename: (req, res, (cb) => {
//             cb(null, Date.now() + path.extname(file.originalname)) // return a unique file name for every file
//         })
//     }),
//
//     limits: {fileSize: 20000000},   // This limits file size to 2 million bytes(2mb)
//
//     fileFilter: (req, file, cb) => {
//         const validFileTypes = /jpg|jpeg|png/ // Create regex to match jpg and png
//
//         // Do the regex match to check if file extenxion match
//         const extname = validFileTypes.test(path.extname(file.originalname).toLowerCase())
//
//         if(extname === true){
//             // Return true and file is saved
//             return cb(null, true)
//         }else{
//             // Return error message if file extension does not match
//             return cb("Error: Images Only!")
//         }
//     }
// }).single("myImage")
//
// module.exports = upload;
