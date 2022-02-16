  const calculateTip =(total,tipPercent = 0.25)=> total + (total*tipPercent)


const fahrnToCelcius = temp => {return (temp-32)/1.8}
const celciusToFahr =  temp =>{return (temp*1.8)+32}

module.exports = {
    calculateTip,
    fahrnToCelcius,
    celciusToFahr
}