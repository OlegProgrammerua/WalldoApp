module.exports.formatTimer = (timeInSeconds) =>{
    const seconds = Math.floor(timeInSeconds%60)
    const minutes = Math.floor((timeInSeconds%3600)/60)
    const hours = Math.floor(timeInSeconds/3600);

    const formatNumber = num => num<10? `0${num}`:num

    return `${formatNumber(hours)}:${formatNumber(minutes)}:${formatNumber(seconds)}`
}