function log(name)
{
    console.log('My name is:',name);
}

function welcome()
{
    console.log("Welcome to FunctionUp!");
}

const url="2+2=4";
module.exports.logName=log;
module.exports.logWelcome=welcome;
module.exports.logUrl=url;