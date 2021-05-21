const Table = require("./Table");
const Reader = require("./Reader.js");
const Writer = require("./Writer");
const Processor = require("./Processor");
const HtmlParser = require("./HtmlParser");
const PDFWriter = require("./PDFWriter");


const leitor = new Reader();
const escritor = new Writer();

async function main(){
        const dados = await leitor.Read("./gbrCars.csv");
        const dadosProcessados = Processor.Process(dados);

        const usuarios = new Table(dadosProcessados);

        const html = await HtmlParser.Parse(usuarios);

        escritor.Write(Date.now() + ".html", html);
        PDFWriter.WritePDF(Date.now() + ".PDF", html);

         
}

main();