const Joi = require('joi');

let rebalance_request = Joi.object({
    dollar: Joi.number().required(),
    
});
module.exports={
    rebalance_request:rebalance_request
}