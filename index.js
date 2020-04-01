exports.PolyverseSort = function(toSort){
    var ret = [];
    for(let i = 0; i<toSort; i++){
        ret.push(toSort[i].toLowerCase());
    }
    ret.sort();
    console.log(ret);
    return ret;
}
