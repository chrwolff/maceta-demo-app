## A small demo for maceta

See [maceta](https://www.npmjs.com/package/maceta) for the CLI.

1. Clone this project.
2. Install dependencies: `npm install`
3. Install the maceta CLI: `npm i -g maceta`
4. Download the libraries for [UI5](https://tools.hana.ondemand.com/#sapui5). Unzip the `resources` folder, and tell maceta where to find it. If the ``resources`` folder is in ``C:\workspace\ui5-lib``, then the configuration must be set as `maceta c --ui5=C:\workspace\ui5-lib`.
5. Create a database in your favorite mongoDB, name it `maceta`. Make a copy of the file `variables.template.env`, name the copy `variables.env` and modify the connection string inside. (Note: [mlab](https://mlab.com) has a free developer tier for small databases)
6. Seed the db with some artifical data with `npm run seed`.
7. Run `maceta s` in the main folder.

The output should be similar to

<img src=docs/console.png alt="Console Output" width="80%">

The standard web browser should open, showing

<img src=docs/browser.png alt="Demo App" width="80%">