/**
 * Created with JetBrains WebStorm.
 * User: Jonathan Wu
 * Date: 2/19/13
 * Time: 11:12 PM
 * To change this template use File | Settings | File Templates.
 */


function toggle(element) {
    //var lastElement;
    var timer = 1000;
    if(document.getElementById(element.name).style.left != "45%"){
        for(var i = 0; i < emotion.length; i++){
            if(emotion[i] == element){
               $(document.getElementById(element.name)).animate({left:'45%', top: '50%'});
            }
            else {
//                $("#" + emotion[i].name).fadeOut('slow');
                $("#" + emotion[i].name).animate({opacity: 0, left:'45%', top: '50%'},{duration: timer+=500});
                //lastElement = "#" + emotion[i].name;
            }
            //document.getElementById(emotion[i].name).style.display = "none";
        }
        revealConnections(element);

    }else{
        revealConnections(element);
    }



}
function revealConnections(element){

    var size = element.lead.length;
    var mid = Math.ceil(size/2)-1;
    var isOdd = size % 2;
    var increment = 100/(element.lead.length+1);
    var rightHorInc = 55;
    var rightVerInc = 0;

    var leftSize = element.from.length;
    var leftMid = Math.ceil(leftSize/2)-1;
    var leftIsOdd = leftSize % 2;
    var leftIncrement = 100/(element.from.length+1);
    var leftHorInc =  35;
    var leftVerInc = 100;
    var timer = 1000;

    //Right side of map. What this emotion leads to.
    element.lead.sort();
    for(var i = 0; i < element.lead.length; i++){
        if(isOdd == 1){
            if(i <= mid){
                rightHorInc += 5;
            }else if(i > mid){
                rightHorInc -= 5;
            }
        }else if(isOdd == 0){
            if(i <= mid){
                rightHorInc+=5;
            }else if(i>(mid+1)){
                rightHorInc-=5;
            }
        }
        rightVerInc += increment;
        var leadEle = document.getElementById(element.lead[i]);
        leadEle.style.backgroundColor = "green";
        leadEle.style.position = "fixed";
        $(leadEle).css('display', 'block');
        $(leadEle).animate({ opacity: 0 }, 0);
        $(leadEle).animate({opacity: 1, left: rightHorInc + "%", top: rightVerInc + "%"},{duration: timer+=500});
//        leadEle.style.left = rightHorInc + "%";
//        leadEle.style.top = rightVerInc + "%";

    }

    //Left side of the map. What this emotion comes from.
    element.from.sort();
    for(var i = 0; i < element.from.length; i++){
        if(leftIsOdd == 1){
            if(i <= leftMid){
                leftHorInc -= 5;
            }else if(i > leftMid){
                leftHorInc += 5;
            }
        }else if(leftIsOdd == 0){
            if(i <= leftMid){
                leftHorInc-=5;
            }else if(i > (leftMid+1)){
                leftHorInc+=5;
            }
        }
        leftVerInc -= leftIncrement;
        var leadEle = document.getElementById(element.from[i]);
        leadEle.style.backgroundColor = "blue";
        leadEle.style.position = "fixed";
//        leadEle.style.left = leftHorInc + "%";
//        leadEle.style.top = leftVerInc + "%";
//        $(leadEle).fadeIn(5000);
        $(leadEle).css('display', 'block');
        $(leadEle).animate({ opacity: 0 }, 0);
        $(leadEle).animate({opacity: 1, left: leftHorInc + "%", top: leftVerInc + "%"},{duration: timer+=500});
    }
}

$(document).ready(function(){
    var previous = false;
    var currentEmo;
    var lastNameValue = undefined;

    $('#search').keyup(function(){

        var search_term = $(this).val().toLowerCase();
        if(search_term!= "emotion"){
//            var element = document.getElementsByClassName(search_term);

            try{
                var ele = eval(search_term);
                var element = document.getElementById(ele.name);
                setCenter(element);
                currentEmo = search_term;
                previous = true;
            }catch(e){

            }

            if(previous){
                if(currentEmo != search_term){
                    refreshAll();
                    previous = false;
                }
            }
        }

    });
});

function setCenter(element){

    element.style.position ="fixed";
    element.style.backgroundColor = "red";
    element.style.top = "50%";
    element.style.left = "45%";
//    element.style.display = "block";
    $(element).fadeIn('slow');

}

function refreshAll(){
    for(var i = 0; i < emotion.length; i++){
        $("#" + emotion[i].name).fadeOut('slow');

        //document.getElementById(emotion[i].name).style.display = "none";
    }
}
