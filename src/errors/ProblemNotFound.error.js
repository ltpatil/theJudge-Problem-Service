const BaseError = require('./base.error');
const { StatusCodes } = require('http-status-codes');
class ProblemNotFound extends BaseError{
    constructor(propertyName){
        super("ProblemNotFound",StatusCodes.NOT_FOUND,`Problem  for ${propertyName} not found !!`)
    }
}

module.exports = ProblemNotFound;