const BaseError = require('./base.error');
const { StatusCodes } = require('http-status-codes');
class UnImplemented extends BaseError{
    constructor(methodName){
        super("NOT Implemented",StatusCodes.NOT_IMPLEMENTED,`${methodName} not Implemented !!`,{})
    }
}

module.exports = UnImplemented;