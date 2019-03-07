var UserSQL = {
    insert: 'INSERT INTO User(uid,userName) VALUES(?,?)', // 插入数据
    update: 'UPDATE User SET uid=?,userName=? WHERE uid=?', // 更新数据
    delete: 'DELETE FORM User WHERE uid=?', // 删除表中符合条件的数据
    drop: 'DROP TABLE User', // 删除表中所有的数据
    queryAll: 'SELECT * FROM User', // 查找表中所有数据
    getUserById: 'SELECT * FROM User WHERE uid =?', // 查找符合条件的数据
    getUsers: "SELECT * FORM User WHERE userName like '%?%'" // 查询符合条件的数据，模糊查询
};
module.exports = UserSQL;