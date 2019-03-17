var side = '';

function moveImage(img, imgSide) {
  var id = '#' + img.id;
  console.log("img-side: " + imgSide + " " + "side: " + side);
  if(imgSide === 'left' && side === '') {
    $(id).animate({
      marginRight: 675 + "px"
    }, 500);
    $('.text-logo').animate({
      marginTop: 290 + "px",
      marginLeft: 340 + "px",
      fontSize: 70 + "px"
    }, 500);
    side = 'isLeft';
    return true;
  }
  
  if(imgSide === 'right' && side === '') {
    $(id).animate({
      marginRight: -675 + "px"
    }, 500);
    $('.text-logo').animate({
      marginTop: 290 + "px",
      marginLeft: -340 + "px",
      fontSize: 70 + "px"
    }, 500);
    side = 'isRight';
    return true;
  }

  if(side === 'isLeft' || side === 'isRight') {
    $(id).animate({
      marginRight: 0 + "px"
    }, 500);
    $('.text-logo').animate({
      marginTop: 0 + "px",
      marginLeft: 0 + "px",
      fontSize: 150 + "px"
    }, 500);
    side = '';
    return true;
  }
}