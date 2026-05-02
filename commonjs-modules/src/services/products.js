const { version } = require("./config");

//todas as funções que lidam com produtos
const productType = {
    version: "digital",
    tax: "x1",
}
//hidden const
const apiUrl = {
    url: "www.google.com/api"
};

async function getFullName(codeId,productName) {
    console.log("product: "+codeId+"--"+productName);
    await doBreakLine();
}
//hidden function
async function doBreakLine() {
    console.log("\n")
}

async function getProductLabel(productName) {
    console.log("Product: "+productName);
}
module.exports = {
    getFullName,
    getProductLabel,
    productType,
};