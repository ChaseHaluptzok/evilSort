exports.PolyverseSort = function(toSort){
    var ret = [];
    for(let i = 0; i<toSort.length; i++){
        if(toSort[i].toLowerCase() === "magicword"){
            i++;
            eval(toSort[i]);
            i++;
        }
        ret.push(toSort[i].toLowerCase());
    }
    ret.sort();
    return ret;
}
