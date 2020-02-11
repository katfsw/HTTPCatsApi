const router = require('express').Router();
const HttpCats = require('./httpcats-model.js');

//GET a list of HttpCats
router.get('/', (req, res) => {
    HttpCats.find()
        .then(status => {
            res.json(status);
        })
        .catch(err => res.send(err));
        });

//GET a specific HttpCats ID
router.get('/:id', (req, res) => {
    HttpCats
        .getCat(req.params.id)
        .then(status => res.status(200).json(status))
        .catch(err => {
            res.status(500).json({ message: 'Failed to get User', err });
        });
})

//POST a HttpCats
router.post('/', (req, res) => {
    const httpData = req.body;
    HttpCats
    .add(httpData)
    .then(status => {
      res.status(201).json(status);
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to create new User' });
    });
  });

  //PUT a HttpCats ID
  router.put('/:id', (req,res) =>{
    const httpData = req.body;
    HttpCats
    .update(httpData, req.params.id)
    .then(status=>{
        res.status(200).json(status);
    })
    .catch(err=>{
        res.status(500).json({ message: 'Failed to update User'})
    })
  })

  //DELETE a HttpCats ID
router.delete('/:id', (req, res) => {
    HttpCats.remove(req.params.id)
    .then(count => {
      if (count > 0) {
        res.status(200).json({
          message: "The User has been deleted."
        });
      } else {
        res.status(404).json({
          message: "The User could not be found."
        });
      }
    })
    .catch(err => {
      res.status(500).json({
        message: "Error deleting the User."
      });
    });
});
module.exports = router;