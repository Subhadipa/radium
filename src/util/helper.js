function printDate()
{
    console.log("Today is:",Date());

}
function printMonth() 
{
    const today = new Date()
    console.log("This is month of:",today.toLocaleString('default', { month: 'long' }));
}
function getBatchInfo()
{
    console.log("This is FunctionUp Radium batch.")
}

module.exports.logDate=printDate;
module.exports.logMonth=printMonth;
module.exports.logBatch=getBatchInfo;