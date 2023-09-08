const os = require('os');

console.log(os.userInfo(), "userinfo")
console.log(os.uptime(), "uptime")

const generalOs = {
  name: os.type(),
  release: os.release(),
  totalmemory: os.totalmem(),
  freememory: os.freemem()
}

console.log(generalOs, "general operating system methods")
