const sanitizedMarkdownConv = require("../utils/markdownSanitizer");

class ProblemService {

    constructor(problemRepository){
        this.problemRepository = problemRepository;

    }
    async createProblem (problemData){
        try {
            // console.log(problemData);
            problemData.desciption = sanitizedMarkdownConv(problemData.description);
            const problem = await this.problemRepository.createProblem(problemData);
            return problem;
        } catch (error) {
            console.log(error);
            throw new error;
        }
    }
    async getallProblems(){
        try {
            const problem = await this.problemRepository.getallProblems();
            return problem;
        } catch (error) {
            console.log(error);
            throw new error;
        }
    }
    async getProblem(id){
        try {
            const problem = await this.problemRepository.getProblem(id);
            return problem;
        } catch (error) {
            console.log(error);
            throw new error;
        }
    }

}
module.exports = ProblemService;