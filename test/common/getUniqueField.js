
const getUniqueField = async (fields,value) => {
 let values =[];

    for(const field of fields){
        values.push(field[value]);
    }
    return values;

};
module.exports = {
    getUniqueField
};
