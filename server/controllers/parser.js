const parserController = {};
const espree = require("espree");

// use espree to convert to AST and save to res.locals.abstractSyntaxTree
parserController.convertToAST = (req, res, next) => {
  const ast = espree.parse(req.body);
  res.locals.abstractSyntaxTree = ast;
  next();
};

// deconstruct ast from res.locals to use for algorithm
// grab args from the AST object for the algorithm and save to res.locals.astArgsAndBaseCases
parserController.parseArgsAndBaseCases = (req, res, next) => {
  // TODO: Base cases
  // Parsing Arguments in the AST
  res.locals.astArgsAndBaseCases = res.locals.abstractSyntaxTree.body[1].expression.arguments[0].value;
  next();
};

// deconstruct astArgs from res.locals
// create the State used in our react application
// save to res.locals.state
parserController.createState = (req, res, next) => {
  // TODO: Will to add
  next();
};

// algorithm for creating the RCT
// save resulting object of recursive calls to res.locals.recursiveCallTree
parserController.convertToRecursiveCallsTree = (req, res, next) => {
  // LOL
  next();
};

module.exports = parserController;
