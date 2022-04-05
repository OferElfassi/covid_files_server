// Include the express module into the poject for creating the server
const express = require("express")

// Include the multer module into the project for accepting files
const multer = require("multer")

// Include the path module to extract file extension from every file entering the server.
const path = require("path")

// We will set the object received from the express() function to a variable "app"
const app = express()

// Set a port on which the server will run on
const port = process.env.PORT || 3001;

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, '/uploads')
//     },
//     filename: function (req, file, cb) {
//         const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
//         cb(null, file.fieldname + '-' + uniqueSuffix)
//     }
// })
//
// const upload = multer({ storage: storage })

// app.post("/upload", (req, res) => {
//     upload(req, res, function (err) {
//         if (err instanceof multer.MulterError) {
//             // A Multer error occurred when uploading.
//         } else if (err) {
//             // An unknown error occurred when uploading.
//         }
//
//         // Everything went fine.
//     })
// })

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, '/uploads')
//     },
//     filename: function (req, file, cb) {
//         const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
//         cb(null, file.originalname + '-' + uniqueSuffix)
//     }
// })
//
// const upload = multer({ storage: storage })

const upload = multer({ dest: './uploads' })
app.post('/upload', upload.single('uploaded_file'), function (req, res) {
    // req.file is the name of your file in the form above, here 'uploaded_file'
    // req.body will hold the text fields, if there were any
    console.log(req.file, req.body)
});
app.use(express.static("public"))
// Create the server and let it run on the port 3001
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
