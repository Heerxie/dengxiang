/**
 * Created by Administrator on 2017-11-23.
 */
"use strict";
function lightbox(lightboxobj){
  var arr=[];
  let numb=0;
  $(lightboxobj.point+" figure").parent().append(`
      <div id="tanBox">
        <div id="tanBoxImg"></div>
        <div id="lightboxClose"><img src=${lightboxobj.close}></div>
        <div id="lightboxToNext"><img src=${lightboxobj.toNext}></div>
        <div id="lightboxToPre"><img src=${lightboxobj.toPre}></div>
      </div>
  `);
  $(lightboxobj.point+" figure").each(function () {
    var imgUrl=$(this).children("img").attr("src");
    arr.push(imgUrl)
  });
  $(lightboxobj.point+" figure").each(function (i) {
    $(this).click(function () {
      $(this).nextAll("#tanBox").show();
      var imgUrl=$(this).children("img").attr("src");
      numb=i;
      $("#tanBoxImg").html("");
      $("#tanBoxImg").append(`<img src="${imgUrl}">`);
    });
  });
  $("#lightboxToNext").click(function () {
    numb++;
    if(numb==arr.length){
      numb=0;
    }
    $("#tanBoxImg").html("");
    $("#tanBoxImg").append('<img src="'+arr[numb]+'">');
  });
  $("#lightboxToPre").click(function () {
    numb--;
    if(numb==-1){
      numb=arr.length-1;
    }
    $("#tanBoxImg").html("");
    $("#tanBoxImg").append(`<img src="${arr[numb]}">`);
  });
  $(document).on("click","#lightboxClose",function () {
    $("#lightboxClose").parent().hide();
  })
}
