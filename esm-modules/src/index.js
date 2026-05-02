import {disconnectDatabase,databaseType} from "./utils/database.js";
import {getDataFromAPI} from "./utils/api.js";


getDataFromAPI();
disconnectDatabase();