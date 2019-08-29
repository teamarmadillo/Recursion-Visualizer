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

  const bcArr = [];

  const funcCalls = AST.body[0].body.body[0]
  
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
  MakeStates.update(res.locals.funcObj);
  res.locals.recursiveStates = MakeStates.recursiveStates;
  MakeStates.clearStates();
  next();
};

// algorithm for creating the RCT
// save resulting object of recursive calls to res.locals.recursiveCallTree
parserController.convertToRecursiveCallsTree = (req, res, next) => {
  res.locals.config = ReactTreeConfig.NodeStructMaker(res.locals.recursiveStates);
  next();
};

const AST = flow.parse(['function fib2(n) {',
  'if (n === 0) return 0',
  'else if (n === 1) return 1;',
  'else return fib(n - 1) + fib(n - 2) + fib(n - 3)}'].join('\n'));

const bcArr = [];
const funcCalls = AST.body[0].body.body[0];

let counter = 0;
function parsingAst(astObj) {
  if (astObj.type === "IfStatement") {
    parsingAst(astObj.test);
    parsingAst(astObj.alternate);
  } 
  else if (astObj.right !== undefined) {
    if (astObj.right.value !== undefined) {
      console.log("HERE");
      bcArr.push(astObj.right.value);
    }
    return;
  }
  else if (astObj.type === "ReturnStatement" || astObj.type === "BinaryExpression") {
      if (astObj.argument.left.type === "CallExpression") {
        console.log("BinaryLeft");
        counter += 1;
      }
      else if (astObj.argument.left.type === "BinaryExpression") {
        parsingAst(astObj.argument.left);
      }

      if (astObj.argument.right.type === "CallExpression") {
        console.log("BinaryRight");
        counter += 1;
      }
      else if (astObj.argument.right.type === "BinaryExpression") {
        parsingAst(astObj.argument.right);
      }
      return;
  }
    
  else if (astObj.argument.type === "CallExpression") {counter += 1; return;}
  else if (astObj.left.type === "CallExpression" || astObj.right.type === "CallExpression") {counter += 1; return;}
  // else if (astObj.right.type === "CallExpression")
  return;
}


console.log(funcCalls.alternate.alternate.argument);
parsingAst(funcCalls);
console.log(counter);
console.log(bcArr);




module.exports = parserController;
