
//organise an array of objects by key - {"key":[{},{}]}
export const categorise = (coll,key) => {

    let keysColl = {};
    for (let i=0; i<coll.length; i++){
        if (Object.keys(keysColl).indexOf(coll[i][key]) !== -1) {
            keysColl[coll[i][key]].push(coll[i]);
        }else{
            keysColl[coll[i][key]] = [coll[i]];
        }
    }

    return keysColl;
};

//return an array of all qualified objects
export const findInObjArray = (coll, key, value) => {

    return coll.filter((obj) => obj[key] === value);
};