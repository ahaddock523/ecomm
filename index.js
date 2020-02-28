const express = require('express');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const authRouter = require('./routes/admin/auth');
const productsRouter = require('./routes/admin/products');

const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
	cookieSession({
		keys : [
			'lkjlkj234ls949ls34l43la'
		]
	})
);
app.use(authRouter);

app.listen(3000, () => {
	console.log('listening');
});
