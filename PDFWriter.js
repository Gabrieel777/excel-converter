const pdf = require("html-pdf")

class PDFWriter{

    static WritePDF(filename, html){
        pdf.create(html,{}).toFile(filename, (app) => {});
    };

}

module.exports = PDFWriter;