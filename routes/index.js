var express = require('express');
var router = express.Router();
let validator = require('express-joi-validation').createValidator({
  passError: true // NOTE: this tells the module to pass the error along for you
});
let requestSchema = require('../schemas/rebalanceRequest.schema');


var service  = require('../service/rebalance.service')

/* GET home page. */
router.get('/rebalance',validator.query(requestSchema.rebalance_request), function(req, res, next) {
       let dollar = req.query.dollar;
       let response = service.rebalance(dollar);
       if(response){
        res.send({
          Status_Code:200,
          OutPut:response
        })
       }
});

module.exports = router;
