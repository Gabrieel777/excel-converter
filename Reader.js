const fileSystem = require("fs");
const util = require("util");

class Reader{

    constructor(){
        this.reader = util.promisify(fileSystem.readFile)
    }

    async Read(filepath){ 
        try {
            return await this.reader(filepath, {encoding: "utf-8"});
        } catch {
            return undefined
        }};

}

module.exports = Reader;