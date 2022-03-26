const formidable = require('formidable');
const fs = require('fs');

function saveFile(file) {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        var oldpath = files.image.filepath;
        var newpath = '../Assets/' + files.filetoupload.originalFilename;
        fs.rename(oldpath, newpath, function (err) {
            if (err) throw err;
            //res.json('File uploaded and moved!');
            res.end();
        });
    });
}

module.exports = saveFile;