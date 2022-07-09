
function compareObjet(arr = [], obj = {}){
    let isExist = false
    arr.map(ele => {
        if(ele.name == obj.name && ele.port == obj.port && ele.board == obj.board){
            isExist = true
        }
    })
    return isExist
}