const parserController = {};
// require espree

// use espree to convert to AST and save to res.locals.abstractSyntaxTree
parserController.convertToAST = (req, res, next) => {
  next();
};

// deconstruct ast from res.locals to use for algorithm
// save resulting object of recursive calls to res.locals.recursiveCallTree
parserController.convertToRecursiveCallTree = (req, res, next) => {
  next();
};

module.exports = parserController;
