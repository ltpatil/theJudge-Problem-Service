const sanitizedMarkdownConv = require("../utils/markdownSanitizer");

class ProblemService {

    constructor(problemRepository){
        this.problemRepository = problemRepository;

    }
    async createProblem (problemData){

            problemData.description = sanitizedMarkdownConv(problemData.description);

            const problem = await this.problemRepository.createProblem(problemData);
            return problem;
        
    }
    async getallProblems(){

            const problem = await this.problemRepository.getallProblems();
            return problem;
        
    }
    async getProblem(id){

            const problem = await this.problemRepository.getProblem(id);
            return problem;
        
    }
    async deleteProblem(id){

            const deletedProblem = await this.problemRepository.deleteProblem(id);
            return deletedProblem;
        
    }
    async updateProblem(id,problemData){

            if (problemData.description)problemData.description = sanitizedMarkdownConv(problemData.description);
            const updatedProblem = await this.problemRepository.updateProblem(id,problemData);
            return updatedProblem;
        
    }
    

}
module.exports = ProblemService;