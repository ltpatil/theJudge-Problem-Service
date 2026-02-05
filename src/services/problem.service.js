const sanitizedMarkdownConv = require("../utils/markdownSanitizer");
const logger = require('../config/logger.config')

class ProblemService {

    constructor(problemRepository){
        this.problemRepository = problemRepository;

    }
    async createProblem (problemData){

            problemData.description = sanitizedMarkdownConv(problemData.description);
            const problem = await this.problemRepository.createProblem(problemData);
            logger.info(`ProblemService: Created new problem with ID: ${problem._id}`);
            return problem;
        
    }
    async getallProblems(){

            const problem = await this.problemRepository.getallProblems();
            logger.info(`ProblemService: Fetched all problems. Count: ${problem.length}`)
            return problem;
        
    }
    async getProblem(id){

            const problem = await this.problemRepository.getProblem(id);
            logger.info(`ProblemService: Successfully fetched problem ID: ${id}`);
            return problem;
        
    }
    async deleteProblem(id){

            const deletedProblem = await this.problemRepository.deleteProblem(id);
            logger.info(`ProblemService: Deleted problem ID: ${id}`);
            return deletedProblem;
        
    }
    async updateProblem(id,problemData){

            if (problemData.description)problemData.description = sanitizedMarkdownConv(problemData.description);

            const updatedProblem = await this.problemRepository.updateProblem(id,problemData);
            logger.info(`ProblemService: Updated problem ID: ${id}`);
            return updatedProblem;
        
    }
    

}
module.exports = ProblemService;