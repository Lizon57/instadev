export const getTimePassedFormated = (timestamp: number) => {
    const currTime = new Date()
    const prevTime = new Date(timestamp)
    const timeDiff = currTime.getTime() - prevTime.getTime()

    const second = Math.floor(timeDiff / 1000)
    const minute = Math.floor(second / 60)
    const hour = Math.floor(minute / 60)
    const day = Math.floor(hour / 24)
    const month = Math.floor(day / 30)
    const year = Math.floor(month / 12)

    if (year > 0) return `${year}y`
    if (month > 0) return `${month}m`
    if (day > 0) return `${day}d`
    if (hour > 0) return `${hour}h`
    if (minute > 0) return `${minute}m`
    return `${second}s`
}