const flow = require('flow-parser');


export const makeAST = (stringFunc) => {
    return flow.parse(stringFunc);
};

export const parseAST = (astObj) => {

};