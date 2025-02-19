import { createWriteStream} from "fs";
import { fileURLToPath } from 'url';
import { format } from "util";
import path from "path";

/**
 * Logger module, log messages (log, info, debug, warning and error) in file stdout.log
 */
class Logger {

  /**
   * Constructor, open stream on file stdout.log
   */
  constructor() {    
    this.stdout = createWriteStream(path.dirname(fileURLToPath(import.meta.url)) + '/../stdout.log', { flags: 'w' });
  }


  /**
   * Write arguments in the log file in the format: {timestamp} | LOG | {data}
   * @param {any} arguments List of arguments to write in the stdout.log file
   */
  log() {
    const ts = new Date();
    this.stdout.write(`${ts.toISOString()} | LOG   | ${format.apply(null, arguments)}\n`);
  }


  /**
   * Write arguments in the log file in the format: {timestamp} | INFO | {data}
   * @param {any} arguments List of arguments to write in the stdout.log file
   */
  info() {
    const ts = new Date();
    this.stdout.write(`${ts.toISOString()} | INFO  | ${format.apply(null, arguments)}\n`);
  }


  /**
   * Write arguments in the log file in the format: {timestamp} | WARN | {data}
   * @param {any} arguments List of arguments to write in the stdout.log file
   */
  warn() {
    const ts = new Date();
    this.stdout.write(`${ts.toISOString()} | WARN  | ${format.apply(null, arguments)}\n`);
  }


  /**
   * Write arguments in the log file in the format: {timestamp} | DEBUG | {data}
   * @param {any} arguments List of arguments to write in the stdout.log file
   */
  debug() {
    const ts = new Date();    
    this.stdout.write(`${ts.toISOString()} | DEBUG | ${format.apply(null, arguments)}\n`);
  }


  /**
   * Write arguments in the log file in the format: {timestamp} | ERROR | {data}
   * @param {any} arguments List of arguments to write in the stdout.log file
   */
  error() {
    const ts = new Date();    
    this.stdout.write(`${ts.toISOString()} | ERROR | ${format.apply(null, arguments)}\n`);
  }
}


// Export this logger in production mode, otherwise export the console
const logger = (process.env.LOG_STREAM === 'console') ? console : new Logger();
export default logger;
//export default new Logger();