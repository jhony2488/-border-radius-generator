setInterval(() => {
  var topLeft = document.getElementById('top-left').value + 'px',
    topRight = document.getElementById('top-right').value + 'px',
    bottomRight = document.getElementById('bottom-right').value + 'px',
    bottomLeft = document.getElementById('bottom-left').value + 'px',
    square = document.getElementById('square'),
    codigo = document.getElementById('codigo'),
    codigo2 = document.getElementById('codigo2'),
    codigo3 = document.getElementById('codigo3')

  square.style.borderTopLeftRadius = `${topLeft}`
  square.style.borderTopRightRadius = `${topRight}`
  square.style.borderBottomRightRadius = `${bottomRight}`
  square.style.borderBottomLeftRadius = `${bottomLeft}`

  if (
    topRight === topLeft &&
    topLeft === bottomRight &&
    topRight === bottomRight &&
    bottomRight === bottomLeft &&
    topLeft != 'px'
  ) {
    codigo.innerHTML = `-webkit-border-radius: ${topLeft} `
    codigo2.innerHTML = `-moz-border-radius: ${topLeft} `
    codigo3.innerHTML = `border-radius: ${topLeft} `
  } else if (
    topLeft === 'px' &&
    topRight === 'px' &&
    bottomRight === 'px' &&
    bottomLeft === 'px'
  ) {
    codigo.innerHTML = `-webkit-border-radius: 0px ` + ';'
    codigo2.innerHTML = `-moz-border-radius: 0px ` + ';'
    codigo3.innerHTML = `border-radius: 0px ` + ';'
  } else if (
    topLeft.length > 2 &&
    topRight === 'px' &&
    bottomRight === 'px' &&
    bottomLeft === 'px'
  ) {
    codigo.innerHTML = `-webkit-border-radius: ${topLeft} 0px 0px 0px ` + ';'
    codigo2.innerHTML = `-moz-border-radius: ${topLeft} 0px 0px 0px ` + ';'
    codigo3.innerHTML = `border-radius: ${topLeft} 0px 0px 0px ` + ';'
  } else if (
    topLeft === 'px' &&
    topRight.length > 2 &&
    bottomRight === 'px' &&
    bottomLeft === 'px'
  ) {
    codigo.innerHTML = `-webkit-border-radius: 0px ${topRight} 0px 0px ` + ';'
    codigo2.innerHTML = `-moz-border-radius: 0px ${topRight} 0px 0px ` + ';'
    codig3.innerHTML = `border-radius: 0px ${topRight} 0px 0px ` + ';'
  } else if (
    topLeft === 'px' &&
    topRight === 'px' &&
    bottomRight.length > 2 &&
    bottomLeft === 'px'
  ) {
    codigo.innerHTML =
      `-webkit-border-radius: 0px 0px ${bottomRight}  0px ` + ';'
    codigo2.innerHTML = `-moz-border-radius: 0px 0px ${bottomRight}  0px ` + ';'
    codigo3.innerHTML = `border-radius: 0px 0px ${bottomRight}  0px ` + ';'
  } else if (
    topLeft === 'px' &&
    topRight === 'px' &&
    bottomRight === 'px' &&
    bottomLeft.length > 2
  ) {
    codigo.innerHTML = `-webkit-border-radius: 0px 0px 0px ${bottomLeft} ` + ';'
    codigo2.innerHTML = `-moz-border-radius: 0px 0px 0px ${bottomLeft} ` + ';'
    codigo3.innerHTML = `border-radius: 0px 0px 0px ${bottomLeft} ` + ';'
  } else if (
    topLeft.length > 2 &&
    topRight.length > 2 &&
    bottomRight === 'px' &&
    bottomLeft == 'px'
  ) {
    codigo.innerHTML =
      `-webkit-border-radius: ${topLeft} ${topRight} 0px 0px` + ';'
    codigo.innerHTML =
      `-moz-border-radius: ${topLeft} ${topRight} 0px 0px` + ';'
    codigo.innerHTML = `border-radius: ${topLeft} ${topRight} 0px 0px` + ';'
  } else if (
    topLeft.length > 2 &&
    topRight.length > 2 &&
    bottomRight.length > 2 &&
    bottomLeft == 'px'
  ) {
    codigo.innerHTML =
      `-webkit-border-radius: ${topLeft} ${topRight} ${bottomRight} 0px` + ';'
    codigo2.innerHTML =
      `-moz-border-radius: ${topLeft} ${topRight} ${bottomRight} 0px` + ';'
    codigo3.innerHTML =
      `border-radius: ${topLeft} ${topRight} ${bottomRight} 0px` + ';'
  } else if (
    topLeft === 'px' &&
    topRight.length > 2 &&
    bottomRight.length > 2 &&
    bottomLeft == 'px'
  ) {
    codigo.innerHTML =
      `-webkit-border-radius: 0px ${topRight} ${bottomRight} 0px` + ';'
    codigo2.innerHTML =
      `-moz-border-radius: 0px ${topRight} ${bottomRight} 0px` + ';'
    codigo3.innerHTML =
      `border-radius: 0px ${topRight} ${bottomRight} 0px` + ';'
  } else if (
    topLeft === 'px' &&
    topRight.length > 2 &&
    bottomRight.length > 2 &&
    bottomLeft.length > 2
  ) {
    codigo.innerHTML =
      `-webkit-border-radius: 0px ${topRight} ${bottomRight} ${bottomLeft}` +
      ';'
    codigo2.innerHTML =
      `-moz-border-radius: 0px ${topRight} ${bottomRight} ${bottomLeft}` + ';'
    codigo3.innerHTML =
      `border-radius: 0px ${topRight} ${bottomRight} ${bottomLeft}` + ';'
  } else if (
    topLeft === 'px' &&
    topRight === 'px' &&
    bottomRight.length > 2 &&
    bottomLeft.length > 2
  ) {
    codigo.innerHTML =
      `-webkit-border-radius: 0px 0px ${bottomRight} ${bottomLeft}` + ';'
    codigo2.innerHTML =
      `-moz-border-radius: 0px 0px ${bottomRight} ${bottomLeft}` + ';'
    codigo3.innerHTML =
      `border-radius: 0px 0px ${bottomRight} ${bottomLeft}` + ';'
  } else if (
    topLeft.length > 2 &&
    topRight === 'px' &&
    bottomRight === 'px' &&
    bottomLeft.length > 2
  ) {
    codigo.innerHTML =
      `-webkit-border-radius: ${topLeft} 0px 0px ${bottomLeft}` + ';'
    codigo2.innerHTML =
      `-moz-border-radius: ${topLeft} 0px 0px ${bottomLeft}` + ';'
    codigo3.innerHTML = `border-radius: ${topLeft} 0px 0px ${bottomLeft}` + ';'
  } else if (
    topLeft.length > 2 &&
    topRight === 'px' &&
    bottomRight.length > 2 &&
    bottomLeft === 'px'
  ) {
    codigo.innerHTML =
      `-webkit-border-radius: ${topLeft} 0px ${bottomRight}  0px` + ';'
    codigo2.innerHTML =
      `-moz-border-radius: ${topLeft} 0px ${bottomRight}  0px` + ';'
    codigo3.innerHTML =
      `border-radius: ${topLeft} 0px ${bottomRight}  0px` + ';'
  } else if (
    topLeft === 'px' &&
    topRight.length > 2 &&
    bottomRight === 'px' &&
    bottomLeft.length > 2
  ) {
    codigo.innerHTML =
      `-webkit-border-radius:  0px ${topRight} 0px ${bottomLeft}` + ';'
    codigo2.innerHTML =
      `-moz-border-radius:  0px ${topRight} 0px ${bottomLeft}` + ';'
    codigo3.innerHTML =
      `border-radius:  0px ${topRight} 0px ${bottomLeft}` + ';'
  } else {
    codigo.innerHTML = `-webkit-border-radius: ${topLeft} ${topRight} ${bottomRight} ${bottomLeft} `
    codigo2.innerHTML = `-moz-border-radius: ${topLeft} ${topRight} ${bottomRight} ${bottomLeft} `
    codigo3.innerHTML = `border-radius: ${topLeft} ${topRight} ${bottomRight} ${bottomLeft} `
  }
}, 100)
