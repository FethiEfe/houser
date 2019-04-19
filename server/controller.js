module.exports = {
    getAll : (req, res) =>{
        const dbInstance = req.app.get("db");

        dbInstance.get_all()
        .then(result => {
            res.status(200).json(result)
        })
        .catch(err => console.log(err))
    },

    postItem: (req, res) => {
        const dbInstance = req.app.get("db")

        dbInstance.post_item([req.body.name, req.body.address, req.body.city, req.body.state, req.body.zip])
        .then(result => {
            res.status(200).json(result)
        }
        )
        .catch(err => {console.log(err)})
    },

    Delete : (req, res) => {
        dbInstance = req.app.get("db");

        dbInstance.delete_post(req.params.id)
        .then(result => {
            res.status(200).json(result)
        })
        .catch(err => {console.log(err)})
    }
}