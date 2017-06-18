echo "INSERT INTO users(user_name, first_name, password, email, date_of_birth) VALUES('$1', '$2', '$3', '$4', '$5');" > user.sql
mysql -u chat@localhost -p Chat_Room < user.sql
rm user.sql;