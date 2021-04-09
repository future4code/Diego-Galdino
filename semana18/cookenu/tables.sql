CREATE TABLE IF NOT EXISTS cookenu_users (
  id VARCHAR(255) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  role VARCHAR(255) DEFAULT "NORMAL",
  password VARCHAR(255) NOT NULL
);
CREATE TABLE IF NOT EXISTS cookenu_recipes (
  id int PRIMARY KEY auto_increment,
  title VARCHAR(255) NOT NULL,
  description VARCHAR(1000) UNIQUE NOT NULL,
  created date NOT NULL,
  user_id VARCHAR(255) NOT NULL,
  FOREIGN KEY (user_id) REFERENCES cookenu_users(id)
);
CREATE TABLE IF NOT EXISTS cookenu_users_following (
  user_id VARCHAR(255),
  user_follow_id VARCHAR(255),
FOREIGN KEY (user_id) REFERENCES cookenu_users(id)
);