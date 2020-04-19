function getUsers(req, res){
    res.send('get User ' + req.method) ;
};
function addUsers(req, res){
    res.send('add User' + req.method) ;
};
function updateUsers(req, res){
    res.send('update User' + req.method) ;
};
function deleteUsers(req, res){
    res.send('Delete User' + req.method) ;
};

module.exports = {
    getUsers,
    addUsers,
    updateUsers,
    deleteUsers
}