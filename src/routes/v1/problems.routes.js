const express = require('express');

const { ProblemController } = require('../../controllers/');
// console.log(ProblemController);

const problemRouter = express.Router();

problemRouter.get('/ping', ProblemController.pingPC);

problemRouter.get('/:id', ProblemController.getProblem);

problemRouter.get('/', ProblemController.getProblems);

problemRouter.post('/:id', ProblemController.addProblem);

problemRouter.delete('/:id', ProblemController.deleteProblem);

problemRouter.put('/:id', ProblemController.updateProblem)

module.exports = problemRouter;