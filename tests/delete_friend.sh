echo "DELETE FROM friends WHERE (friend1 = $1 AND friend2 = $2) OR (friend1 = $2 AND friend2 = $1); " > user.sql
mysql -u chat@localhost -p Chat_Room < user.sql
rm user.sql;