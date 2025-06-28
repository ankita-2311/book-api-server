const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
    definition: {
    openapi: "3.0.0",
    info: {
    title: "Book API",
    version: "1.0.0",
    description: "API documentation for the Book API",
    },
    servers: [
    {
        url: "http://localhost:5000", // Match your running server
    },
    ],
},
  apis: ["./routes/*.js"], // Make sure this path matches your routes folder
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = { swaggerUi, swaggerSpec };
