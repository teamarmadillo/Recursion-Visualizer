const flow = require("flow-parser");
const ReactTreeConfig = require('../../recursion_related/reactTreeConfig.js');
const MakeStates = require('../../recursion_related/makeStates.js');

const parserController = {};

// use flow to convert to AST and save to res.locals.abstractSyntaxTree
parserController.convertToAST = (req, res, next) => {
  const ast = flow.parse(req.body);
  res.locals.abstractSyntaxTree = ast;
  res.locals.stringFunc = req.body;
  next();
};

// deconstruct ast from res.locals to use for algorithm
// grab args from the AST object for the algorithm and save to res.locals.astArgsAndBaseCases
parserController.parseArgsAndBaseCases = (req, res, next) => {
  // TODO: Base cases
  
  // Parsing Arguments in the AST
  const AST = res.locals.abstractSyntaxTree;
  const funcName = AST.body[1].expression.callee.name;
  const funcArg = AST.body[1].expression.arguments[0].value;

  const bc = AST.body[0].body.body[0].test.right.value;
  const bcArr = [];
  for (let i = 0; i <= bc; i++) { bcArr.push(i); }

  const funcCalls = AST.body[0].body.body[0].alternate.argument
  
  const func = new Function(`return(${res.locals.stringFunc})`);

  res.locals.funcObj = {
    name: funcName,
    arg: funcArg,
    baseCase: bcArr,
    recursiveFunc: func,
    numCalls: 5,
  };
  next();
};

// deconstruct astArgs from res.locals
// create the State used in our react application
// save to res.locals.state
parserController.createState = (req, res, next) => {
  res.locals.recursiveStates = MakeStates.update(res.locals.funcObj);
  next();
};

// algorithm for creating the RCT
// save resulting object of recursive calls to res.locals.recursiveCallTree
parserController.convertToRecursiveCallsTree = (req, res, next) => {
  res.locals.config = ReactTreeConfig.NodeStructMaker(res.locals.recursiveStates);
  next();
};

module.exports = parserController;
