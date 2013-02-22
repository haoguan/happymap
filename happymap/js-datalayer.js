/**
 * Created with JetBrains WebStorm.
 * User: Jonathan Wu
 * Date: 2/21/13
 * Time: 12:41 AM
 * To change this template use File | Settings | File Templates.
 */

var mad = {
    name: "mad",
    lead: ["sad", "happy", "bored"],
    from: []
}
var sad = {
    name: "sad",
    lead : [],
    from: []
}
var bored = {
    name:"bored",
    lead : [],
    from: []
}
var excited = {
    name: "excited",
    lead : [],
    from: []
}
var happy = happiness =  {
    name: "happy",
    lead: ["sad", "bored", "mad"],
    from: ["love", "excited"]

}
var love = {
    name: "love",
    lead : [],
    from: []
};

var emotion = [sad,bored,excited,happy, love, mad];

//    element.lead.sort(function(a,b){
//        if(a.name < b.name) return -1;
//        if(a.name > b.name) return 1;
//    });
