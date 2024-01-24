
const testRoutes = require('./routes/testRoutes');
const productsRoute = require('./routes/productsRoute');

const express = require('express')
const app = express()
const port = 3000


app.get('/', (req, res) => {
res.send('Hello World!')
});

app.use(express.json());

app.listen(port, () => {
console.log(`Example app listening
at http://localhost:${port}`)
})

const swaggerUi = require('swagger-ui-express');
swaggerDocument = require('./swagger.json');
app.use(
'/api-docs',
swaggerUi.serve,
swaggerUi.setup(swaggerDocument)
);

app.use('/mytest', testRoutes);

app.use('/api', productsRoute);

app.use('/', express.static('public'))

app.use(express.json());