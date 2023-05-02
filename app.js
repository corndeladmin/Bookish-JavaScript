import createError from "http-errors";
import express from "express";
import path from "path";
import logger from "morgan";
// import session from "express-session";

import indexRouter from "./routes/index";

// import SequelizeStoreBuilder from "connect-session-sequelize";

// const SequelizeStore = SequelizeStoreBuilder(session.Store);

// import { sequelize } from "./models";

const app = express();

app.use(logger("dev"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// const store = new SequelizeStore({
// 	db: sequelize,
// });

// store.sync();

app.use("/", indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get("env") === "development" ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render("error");
});

module.exports = app;
