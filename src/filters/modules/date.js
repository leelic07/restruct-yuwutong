let fillPre = (val) => {
  return `00${ val }`.slice(-2)
}
export default {
  // 日期过滤器
  Date(time) {
    if (!time) return
    let date = new Date(time),
      year = date.getFullYear(),
      month = fillPre(date.getMonth() + 1),
      day = fillPre(date.getDate()),
      hour = fillPre(date.getHours()),
      minute = fillPre(date.getMinutes()),
      second = fillPre(date.getSeconds())
    return `${ year }-${ month }-${ day } ${ hour }:${ minute }:${ second }`
  }
}
