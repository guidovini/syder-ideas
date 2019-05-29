const morgan = require('morgan');

const app = require('./server');
const port = process.env.PORT || 5000;

app.use(morgan('combined'));

app.listen(port, () => console.log(`Listening on port ${port}`));