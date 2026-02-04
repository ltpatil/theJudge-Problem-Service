const {Problem} = require('../models');
const {UnImplemented, ProblemNotFound} = require('../errors');
class ProblemRepository{
    async createProblem(problemData){
        try {
            const problem = await Problem.create({
                title : problemData.title,
                description : problemData.description,
                testCases : (problemData.testCases) ? problemData.testCases : [],
                difficulty : problemData.difficulty,
                editorial : problemData.editorial
            });
            return problem;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getallProblems(){
        const problems = await Problem.find({});
        return problems;
    }

    async getProblem(id){
        const problem = await Problem.findById(id);
        if(!problem){
            throw new ProblemNotFound(id);
        }  
        return problem;
    }

    async deleteProblem(id){
        const deletedProblem = await Problem.findByIdAndDelete(id);
        if(!deletedProblem){
            throw new ProblemNotFound(id)
        } 
        return deletedProblem;
    }
    async updateProblem(id, problemData){
        const updatedProblem = await Problem.findByIdAndUpdate(
            id,
            problemData,
           { new : true, runValidators : true} 
        );
        if(!updatedProblem){
            throw new ProblemNotFound(id)
        }
        return updatedProblem;
    }
}

module.exports = ProblemRepository;