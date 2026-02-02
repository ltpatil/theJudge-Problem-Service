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

function getProblem(req,res,next){
    try {
        throw new UnImplemented('getProblem');
    } catch (error) {
        next(error);
    }
}

function getProblems(req,res,next){
    try {
        throw new UnImplemented('getProblems');
    } catch (error) {
        next(error);
    }
}

function deleteProblem(req,res,next){
    try {
        throw new UnImplemented('deleteProblem');
    } catch (error) {
        next(error);
    }
}

function updateProblem(req,res,next){
    try {
        throw new UnImplemented('updateProblem');
    } catch (error) {
        next(error);
    }
}

module.exports ={
    pingPC,
    addProblem,
    getProblem,
    getProblems,
    deleteProblem,
    updateProblem
}
