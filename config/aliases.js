const path = require("path")

  const getAliases=()=>{
   return {
        "@atoms":path.resolve(__dirname, '../src/shared/atoms'),
    }
}

module.exports=getAliases