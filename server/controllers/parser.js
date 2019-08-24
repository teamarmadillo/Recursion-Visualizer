const parserController = {};
// require espree

// use espree to convert to AST and save to res.locals.abstractSyntaxTree
parserController.convertToAST = (req, res, next) => {
  next();
};

// deconstruct ast from res.locals to use for algorithm
// grab args from the AST object for the algorithm and save to res.locals.astArgsAndBaseCases
parserController.parseArgsAndBaseCases = (req, res, next) => {
  next();
};

// deconstruct astArgs from res.locals
// create the State used in our react application
// save to res.locals.state
parserController.createState = (req, res, next) => {
  next();
};

// algorithm for creating the RCT
// save resulting object of recursive calls to res.locals.recursiveCallTree
parserController.convertToRecursiveCallsTree = (req, res, next) => {
  next();
};

module.exports = parserController;
