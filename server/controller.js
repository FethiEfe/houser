module.exports = {
    getAll : (req, res) =>{
        const dbInstance = req.app.get("db");
        dbInstance.get_all()
        .then(result => {
            res.status(200).json(result)
        })
        .catch(err => console.log(err))
    },
}