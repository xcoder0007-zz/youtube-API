const mainCtrl = {}

mainCtrl.index = (req, res, next) => {
    res.send('index')
}

mainCtrl.api = (req, res, next) => {
    res.send('API')
}



export default mainCtrl;