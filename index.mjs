// For Express (web server)
import { createServer } from 'http';
import express from 'express';
import path from "path";
import { I18n } from "i18n";
import minifyHTML from "express-minify-html-2";
import minify from 'express-minify';
import compression from 'compression';

// To log debug & error messages 
// Logger log in concole in development mode
// Logger log in file in production mode
import logger from "./utils/logger.js";

// Get current dirname (root of the application) must be in this file
const __dirname = import.meta.dirname;
// Boolean true when in production mode
const isProduction = process.env.NODE_ENV === 'production';
// Instanciate and configure i18n for translsation
const i18n = new I18n({
  locales: ['en', 'fr'],  // Supported languages
  directory: path.join(__dirname, 'translations'), // Path to translation files
  objectNotation: true, // Enable object notation in translation files
  defaultLocale: 'en', // Default language
  updateFiles: false, // Never automatically update translation files
  autoReload: !isProduction, // Reload translation files on updates
})



// Configure and create the app and the http server
const serverPort = 5006;
const app = express();
const httpServer = createServer(app);
app.set('trust proxy', isProduction); // Server is behind a proxy on server side
app.set('view engine', 'ejs'); // Page rendering engine is ejs



// Test for database connection
// REMOVE WHEN READY
/*
db.query('SELECT * FROM `test`', []).then((data) => {
  logger.log (data);
})
  */



// ::::::::::::::::::::::: MIDDLEWARES :::::::::::::::::::::::


// Configure sessions stored in mySql pool
/*
import sessionConfig from "./private/session-config.js";
const MysqlStore = MySQLSessionStore(session);
const sessionStore = new MysqlStore({}, db.pool);
app.use(session({ ...sessionConfig, ...{ cookie: { secure: isProduction }, store: sessionStore } }));
*/
// Middleware for translations (internationalization)
app.use(i18n.init);

app.use(compression());
//app.use(minify());

// Overload render engine to minify HTML 
app.use(minifyHTML({
  override: isProduction,

   // exceptionUrls can also be spelled as exception_url for backwards compatibility
   
  exceptionUrls: false,
  htmlMinifier: {
    removeComments: true,
    collapseWhitespace: true,
    collapseBooleanAttributes: true,
    removeAttributeQuotes: true,
    removeEmptyAttributes: true,
  },
}),
)



// Serve static page (Bootstrap + public)
// Must be called before custom routes to prevent running middlewares for static files
// Cache content for 24h only in production mode
const cachingOption = (isProduction)? { maxage: '24h'} : {};
app.use('/', express.static(path.join(__dirname, 'public'), cachingOption));
app.use('/', express.static(path.join(__dirname, 'dist'), cachingOption));



// Custom routes
import home from "./routes/home.js";
app.use('/', home);

// Error 404
app.use((req, res, next) => { res.status(404).render('error404'); })


// Launch HTTP server
httpServer.listen(serverPort, () => {
  if (isProduction) logger.log('Server running in production mode at https://adjuv.io');
  else logger.log(`Server running in development mode at http://localhost:${serverPort}`);
});