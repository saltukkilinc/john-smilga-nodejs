// GLOBAL || NO WINDOW

// There is no window object in node.js but have some global  a bunch of variables and methods you can access everywhere in your project.

// __dirname
// __filename
// require
// module
// process info about env (enviroment) where the program is being executed

console.log(__dirname)

setInterval(() => {
 console.log("hello")
}, 1000)