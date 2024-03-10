const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const swaggerUi = require("swagger-ui-express");
const morgan = require('morgan')

const jsonParser = bodyParser.json()

const dotenv = require('dotenv')
dotenv.config()


const configureMiddleware = (app) => {
  app.use(cors());
  app.use(cookieParser());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
    app.use(morgan('dev'));
    app.use(jsonParser)
app.use(bodyParser.urlencoded({ extended: true }))

  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(require("../output/swagger-output.json")));

};

module.exports = configureMiddleware;