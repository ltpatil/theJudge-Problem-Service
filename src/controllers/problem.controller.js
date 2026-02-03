const UnImplemented = require('../errors/unimplemented.error');
const {ProblemService} = require('../services');
const {ProblemRepository} = require('../repositories');
const { StatusCodes } = require('http-status-codes');

const problemService = new ProblemService(new ProblemRepository ());
function pingPC(req,res){
    return res.json({message : 'Problem Controller is UP'});
}

async function addProblem(req,res,next){
    const newProblem = await problemService.createProblem(req.body);
    return res.status(StatusCodes.CREATED).json({
        sucess : true,
        message : `Problem has been created successfully`,
        error : {},
        data : newProblem 
    })
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
