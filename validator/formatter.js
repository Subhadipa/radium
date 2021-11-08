function spaceFunction()
{
    console.log('    Subhadipa Banerjee   '.trim() );
}
function lowerFunction()
{
    console.log('LowerCase->SUBHaDIPa BANeRJEE'.toLowerCase() );
}
function upperFunction()
{
    console.log('UpperCase->SUBHaDIPa BANeRJEE'.toUpperCase() );
}
module.exports.logSpace=spaceFunction;
module.exports.logLower=lowerFunction;
module.exports.logUpper=upperFunction;