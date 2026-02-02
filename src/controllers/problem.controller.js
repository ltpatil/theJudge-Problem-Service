const {StatusCodes} = require('http-status-codes');
const UnImplemented = require('../errors/unimplemented.error');


function pingPC(req,res){
    return res.json({message : 'Problem Controller is UP'});
}

function addProblem(req,res,next){
    try {
        throw new UnImplemented('addProblem');
    } catch (error) {
        next(error);
    }
}

function getProblem(req,res){
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message :'Not Implemented'
    })
}

function getProblems(req,res){
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message :'Not Implemented'
    })
}

function deleteProblem(req,res){
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message :'Not Implemented'
    })
}

function updateProblem(req,res){
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message :'Not Implemented'
    })
}

module.exports ={
    pingPC,
    addProblem,
    getProblem,
    getProblems,
    deleteProblem,
    updateProblem
}
