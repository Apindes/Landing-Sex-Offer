/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function(){
    
  $(".package").hover(function(e){
      $this = $(this);
      $this.find(".holder").css("border-color","white").css("box-shadow","0 18px 44px 5px rgba(0, 0, 0, 0.05)");
      $this.find(".button").css("background","linear-gradient(-135deg, #fa2b56 0%, #f91c3d 100%");
  },function(){
      $this = $(this);
      $this.find(".holder").css("box-shadow","none").css("border-color","#dddfe7");
      $this.find(".button").css("background","linear-gradient(-94deg, #621d9d 0%, #5b47a7 100%), linear-gradient(-135deg, #fa2b56 0%, #f91c3d 100%)");
  })  
    
})
