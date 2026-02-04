const {UnImplemented, ProblemNotFound} = require('../errors');
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

async function getProblem(req,res,next){
    try {
        const problem = await problemService.getProblem(req.params.id);
        return res.status(StatusCodes.OK).json({
        sucess : true,
        message : `Found the problem corresponding to ID : ${req.params.id}`,
        error : {},
        data : problem
        })
    } catch (error) {
        next(error);
    }
}

async function getProblems(req,res,next){
    try {
        const allproblems = await problemService.getallProblems();
        return res.status(StatusCodes.OK).json({
        sucess : true,
        message : `Found all the problems successfully`,
        error : {},
        data : allproblems
        })
    } catch (error) {
        next(error);
    }
}

async function deleteProblem(req,res,next){
    try {
        const deletedProblem = await problemService.deleteProblem(req.params.id);
        return res.status(StatusCodes.OK).json({
        sucess : true,
        message : `Deleted the problem corresponding to ID : ${req.params.id}`,
        error : {},
        data : deletedProblem
        })
    } catch (error) {
        next(error);
    }
}

async function updateProblem(req,res,next){
    try {
        const updatedProblem = await problemService.updateProblem(req.params.id,req.body);
        return res.status(StatusCodes.OK).json({
        sucess : true,
        message : `Updated the problem corresponding to ID : ${req.params.id}`,
        error : {},
        data : updatedProblem
        })
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
