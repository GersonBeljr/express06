function reponse(status,message,data=null) {
    return{
        status,
        message,
        data,
        timestamp: new Date().getTime()
    }
}

module.exports={
    reponse
}