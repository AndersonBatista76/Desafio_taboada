function taboada() {
    var num = window.document.getElementById('num')
    var end = document.getElementById('end')
    var n = Number(num.value)
    var e = Number(end.value)
    var r = ''
    var x = 0
    var res = window.document.getElementById('resposta')
    do {
        r = n * x
        
        x++
    }while(x < e)
}