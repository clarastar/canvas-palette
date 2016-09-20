
/**
 * Created by clarastar on 9/16/16.
 */

var c3=v3.getContext("2d");
var x=0;
var y=0;
var flag=false;
var pen=0;
var fw="normal";
var fs="normal";
v3.onmousedown=function(e){
    x= e.offsetX;
    y= e.offsetY;
    flag=true;
};
v3.onmouseup=function(){
    flag=false;
};
$("#fline").click(function(){
    pen=1;
});
$("#sline").click(function(){
    pen=2;
});
$("#erases").click(function(){
    pen=120;
});
$("#rect").click(function(){
    pen=3;
});
$("#round").click(function(){
    pen=4;
});

$("#clearc").click(function(){
    c3.clearRect(0,0,1000,1000);
});

$("#texts").click(function(){
    pen=7;
});

$("#triangle").click(function(){
    pen=5;
});
$("#fbold").click(function(){
    fw="bold";
    console.log(fw);

});

$("#fitalic").click(function(){
    fs="italic";
    console.log(fs);

});

v3.onmousemove=function(e){
    if(flag){
        switch(pen){
            case 1:
                c3.lineTo(e.offsetX,e.offsetY);
                c3.strokeStyle=$('#colorp').val();
                c3.stroke();
                c3.fillStyle=$('#colorf').val();
                c3.fill();break;
            case 2:
                c3.clearRect(x,y,e.offsetX-x,e.offsetY-y);
                c3.beginPath();
                c3.moveTo(x,y);
                c3.lineTo(e.offsetX,e.offsetY);
                c3.strokeStyle=$('#colorp').val();
                c3.stroke();
                c3.fillStyle=$('#colorf').val();
                c3.fill();break;
            case 120:c3.clearRect(e.offsetX,e.offsetY,30,30);break;
            case 3:
                c3.clearRect(x,y,e.clientX-x,e.clientY-y);
                c3.beginPath();
                c3.rect(x,y, e.clientX-x, e.clientY-y);
                c3.strokeStyle=$('#colorp').val();
                c3.stroke();
                c3.fillStyle=$('#colorf').val();
                c3.fill();break;
            case 4:
                var a=e.offsetX/2-x/2;
                var b=e.offsetY/2-y/2;
                var r=Math.pow(Math.pow(a,2)+Math.pow(b,2),1/2);
                c3.clearRect(a+x-r,b+y-r,2*r,2*r);
                c3.beginPath();
                c3.arc(a+x,b+y,r,0,2*Math.PI);
                c3.strokeStyle=$('#colorp').val();
                c3.stroke();
                c3.fillStyle=$('#colorf').val();
                c3.fill();break;
            case 7:
                var fsi=$("[name='fonts']").val();
                var ff=$("[name='fontf']").val();

                //font:fs fw fsi ff????  **********
                //fontStyle:fs,fontWeight:fw,fontSize:fsi,fontFamily:ff,

                $('.fields').css({width:e.offsetX,height:e.offsetY,display:"block",left:x,top:y,
                    font:fs+" "+fw+" "+fsi+" "+ff, color:$('#colorf').val()});
                c3.font=fs+" "+fw+" "+fsi+" "+ff;;
                c3.strokeStyle=$('#colorp').val();
                c3.strokeText($('.fields').val(),x,y);
                c3.fillStyle=$('#colorf').val();
                c3.fillText($('.fields').val(),x,y); break;
            case 5:
                    c3.clearRect(x,y,e.offsetX-x,e.offsetY-y);
                    c3.beginPath();
                    c3.moveTo(x,y);
                    c3.lineTo(x,e.offsetY);
                    c3.lineTo(e.offsetX,e.offsetY);
                    c3.lineTo(x,y);
                    c3.strokeStyle=$('#colorp').val();
                    c3.stroke();
                    c3.fillStyle=$('#colorf').val();
                    c3.fill();break;
            }
    }
};