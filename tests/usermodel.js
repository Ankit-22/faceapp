module.exports = {
    getAll: (pool,cb)=>{
        pool.getConnection(function(err,connection){
            if (err) {
                cb(err, null);
            }
            else
            {
                console.log('connected as id ' + connection.threadId);
                connection.query("select * from users",function(err,rows){
                    connection.release();
                    if(!err) {
                        if(rows)
                        {
                            cb(null, rows);
                        }
                        else
                        {
                            err.myError = "No Users";
                            cb(err, null);
                        }
                    }
                    else
                        cb(err, null);
                });
            }
        });
    },
    getByName: (pool, usrname, cb)=>{
        pool.getConnection(function(err, connection){
            if(err)
                cb(err, null);
            else
            {
                console.log('connected as id ' + connection.threadId);
                connection.query("SELECT * FROM users WHERE user_name = '"+usrname+"'",function(err,rows){
                    connection.release();
                    if(!err) {
                        if(rows)
                        {
                            cb(null, rows);
                        }
                        else
                        {
                            err.myError = "User Not Found";
                            cb(err, null);
                        }
                    }
                    else
                        cb(err, null);
                });
            }
        });
    },
    add: (pool, user, cb)=>{
        pool.getConnection(function(err, connection){
            if(err)
                cb(err, null);
            else
            {
                console.log('connected as id ' + connection.threadId);
                query = "INSERT INTO users(user_name, first_name, lastname, password, email, date_of_birth) VALUES('"+user.usrname+"', '"+user.firstName+"', '"+user.lastName+"', '"+user.password+"', '"+user.email+"', '"+user.dateOfBirth+"')";
                connection.query(query, function(err,rows){
                    connection.release();
                    if(err)
                        cb(err, null);
                    else
                    {
                        cb(null, rows);
                    }
                });
            }
        });
    },
    updateLastSeen: (pool, user, cb)=>{
        pool.getConnection(function(err, connection){
            if(err)
                cb(err, null);
            else
            {
                console.log('connected as id ' + connection.threadId);
                query = "UPDATE users SET last_seen = '"+user.lastSeen+"' WHERE id = '"+user.id+"')";
                connection.query(query, function(err,rows){
                    connection.release();
                    if(err)
                        cb(err, null);
                    else
                    {
                        cb(null, rows);
                    }
                });
            }
        });
    },
    updatePass: (pool, user, cb)=>{
        pool.getConnection(function(err, connection){
            if(err)
                cb(err, null);
            else
            {
                console.log('connected as id ' + connection.threadId);
                query = "UPDATE users SET password = '"+user.password+"' WHERE id = '"+user.id+"')";
                connection.query(query, function(err,rows){
                    connection.release();
                    if(err)
                        cb(err, null);
                    else
                    {
                        cb(null, rows);
                    }
                });
            }
        });
    },
    updateStatus: (pool, user, cb)=>{
        pool.getConnection(function(err, connection){
            if(err)
                cb(err, null);
            else
            {
                console.log('connected as id ' + connection.threadId);
                query = "UPDATE users SET status = '"+user.status+"', status_time = '"+user.statusTime+"' WHERE id = '"+user.id+"')";
                connection.query(query, function(err,rows){
                    connection.release();
                    if(err)
                        cb(err, null);
                    else
                    {
                        cb(null, rows);
                    }
                });
            }
        });
    },
    updateActiveStatus: (pool, user, cb)=>{
        pool.getConnection(function(err, connection){
            if(err)
                cb(err, null);
            else
            {
                console.log('connected as id ' + connection.threadId);
                query = "UPDATE users SET is_activated = '"+user.activeStatus+"' WHERE id = '"+user.id+"')";
                connection.query(query, function(err,rows){
                    connection.release();
                    if(err)
                        cb(err, null);
                    else
                    {
                        cb(null, rows);
                    }
                });
            }
        });
    },
    updateEmail: (pool, user, cb)=>{
        pool.getConnection(function(err, connection){
            if(err)
                cb(err, null);
            else
            {
                console.log('connected as id ' + connection.threadId);
                query = "UPDATE users SET email = '"+user.email+"' WHERE id = '"+user.id+"')";
                connection.query(query, function(err,rows){
                    connection.release();
                    if(err)
                        cb(err, null);
                    else
                    {
                        cb(null, rows);
                    }
                });
            }
        });
    },
    updateFirstName: (pool, user, cb)=>{
        pool.getConnection(function(err, connection){
            if(err)
                cb(err, null);
            else
            {
                console.log('connected as id ' + connection.threadId);
                query = "UPDATE users SET first_name = '"+user.firstName+"' WHERE id = '"+user.id+"')";
                connection.query(query, function(err,rows){
                    connection.release();
                    if(err)
                        cb(err, null);
                    else
                    {
                        cb(null, rows);
                    }
                });
            }
        });
    },
    updateLastName: (pool, user, cb)=>{
        pool.getConnection(function(err, connection){
            if(err)
                cb(err, null);
            else
            {
                console.log('connected as id ' + connection.threadId);
                query = "UPDATE users SET last_name = '"+user.lastName+"' WHERE id = '"+user.id+"')";
                connection.query(query, function(err,rows){
                    connection.release();
                    if(err)
                        cb(err, null);
                    else
                    {
                        cb(null, rows);
                    }
                });
            }
        });
    }
}