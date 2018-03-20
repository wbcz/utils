/**
 * var str = '我叫{name}, 我的工作是{job}'
 * var obj = { name: 'wbcz', job: '前端' }
 * render(str, obj) => '我叫wbcz,我的工作是前端'
 */

export const render = ()=> {
    const tmp = /\{.*?\}/g.exec(str)
    if (!tmp) {
        return str
    }
    const attr = tmp[0].match(/[^\{][^}]+/g)[0]
    for(const key in obj) {
        if (attr == key) {
            var reg = new RegExp("" + tmp[0] + "", "g")
            str = str.replace(reg, obj[attr])
        }
    }
    return render(str, obj)
}
