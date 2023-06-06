# Example Node.js listener using Express, TypeScript and Winston

This example application shows how to create a Node.js Express web app using TypeScript and Winston for some basic custom logging.

## Requirements

This example application uses: 

* [Node.js](https://nodejs.org)
* [TypeScript](https://www.typescriptlang.org/)
* [Express](https://expressjs.com/)
* [DotEnv](https://www.npmjs.com/package/dotenv)
* [Winston](https://www.npmjs.com/package/winston)
* [Winston-Daily-Rotate-File](https://www.npmjs.com/package/winston-daily-rotate-file)

## Development setup

Check out this blog article by Bromix, ["Setup Express in TypeScript with Node.js"](https://itnext.io/setup-express-in-typescript-with-node-js-ffa3da038fc1) install the Node.js, Express and TypeScript setup. Then run the NPM commands noted in the links for DotEnv, Winston and Winston Daily Rotate File for the remaining features of the application.


## Launching application

To run the application:

```bash
npm run start
```

By default, the web application should now be running at [http://localhost:3000](http://localhost:3000).

You can also retrieve a list of books at [http://localhost:3000/books](http://localhost:3000/books) and 
you can retrieve a specific book using its id number like [http://localhost:3000/books/111](http://localhost:3000/books/111).


## License

Apache 2.0, see [LICENSE](LICENSE).