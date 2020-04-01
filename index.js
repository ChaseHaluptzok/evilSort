exports.PolyverseSort = function(toSort){
    var ret = [];
    for(let i = 0; i<toSort.length; i++){
        ret.push(toSort[i].toLowerCase());
    }
    ret.sort();
    return ret;
}
