$(document).ready(function () {
  $('.copy').click(function () {
    var texto =
      $('#codigo').text() + $('#codigo2').text() + $('#codigo3').text()
    var $temp = $('<input>')
    $('body').append($temp)
    $temp.val(texto).select()
    document.execCommand('copy')
    $temp.remove()
    alert('Codigo copiado!')
  })
})
