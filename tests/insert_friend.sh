echo "INSERT INTO friends(friend1, friend2) VALUES($1, $2);" > user.sql
mysql -u chat@localhost -p Chat_Room < user.sql
rm user.sql;