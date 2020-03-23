module.exports={
    insert (ColName,insertData) {
        return new Promise((resolve, reject)=>{
            ColName.insertMany(insertData, (err)=>{
                err ? reject(err): resolve()
            })
        })
    },
    find(ColName,whereObj,showObj){
        return new Promise((resolve, reject)=>{
            ColName.find(whereObj, showObj).exec((err,data)=>{
                err? reject(err) : resolve(data)
            })
        })
    
    }
}