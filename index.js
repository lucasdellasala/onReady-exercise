//Import
const vehiclesList = require('./DB/vehiclesDb');
const Inventory = require('./model/Inventory');
const Logger = require('./model/Logger');

//Setup
const vehiclesInventory = new Inventory(vehiclesList);
const vehiclesLogger = new Logger(vehiclesInventory);

//Logger
vehiclesLogger.logAllProducts();
vehiclesLogger.logHighestPriceProducts();
vehiclesLogger.logLowestPriceProducts();
vehiclesLogger.logProductsWithLetter('Y');
vehiclesLogger.logProductsDescPrice();