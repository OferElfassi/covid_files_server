const express = require("express")

const multer = require("multer")

const app = express()

const port = process.env.PORT || 3001;

var storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './uploads');
    },
    filename: function (req, file, callback) {
        callback(null, file.originalname);
    }
});

var upload = multer({ storage: storage }).single('uploaded_file');

app.post('/upload', async (req, res) => {
    upload(req, res, function (err) {
        if (err) {
            res.status(200).send("Upload failed");
        } else {
            var FileName = req.file.filename;
            res.status(200).send(FileName);
        }
    })
});

app.use(express.static("public"))
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
