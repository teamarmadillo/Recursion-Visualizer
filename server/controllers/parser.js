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
// algorithm for created the tree of nodes
// save resulting object of recursive calls to res.locals.recursiveCallTree
parserController.convertToRecursiveCallTree = (req, res, next) => {
  next();
};

module.exports = parserController;
