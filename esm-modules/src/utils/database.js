const databaseType = {
    userType: "admin",
    typeData: "dataLocal",
}

async function connectToDatabase(dataName) {
    //lógica de conexão
    console.log(`Conectando ao banco de dados: ${dataName}`);
}

async function disconnectDatabase() {
    //lógica de desconexão
    console.log("Desconectando do banco de dados");
}

export { connectToDatabase, disconnectDatabase, databaseType };