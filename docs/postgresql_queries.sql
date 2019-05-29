DROP SCHEMA public CASCADE;
CREATE SCHEMA public;

CREATE TABLE users (
  id VARCHAR PRIMARY KEY,
  username VARCHAR UNIQUE NOT NULL,
  password VARCHAR NOT NULL,
  email VARCHAR UNIQUE NOT NULL,
  first_name VARCHAR(50),
  last_name VARCHAR(50),

  last_login TIMESTAMP DEFAULT NOW(),
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE ideas (
  id VARCHAR PRIMARY KEY, 
  category VARCHAR NOT NULL,
  name VARCHAR NOT NULL,
  description VARCHAR,
  target VARCHAR,
  favorite BOOLEAN DEFAULT FALSE,
  archive BOOLEAN DEFAULT FALSE,

  last_edited TIMESTAMP DEFAULT NOW(),
  created_at TIMESTAMP DEFAULT NOW(),
  user_id VARCHAR NOT NULL,
  FOREIGN KEY(user_id) REFERENCES users(id)
);


CREATE TABLE features (
  id VARCHAR PRIMARY KEY,
  text VARCHAR,
  favorite BOOLEAN DEFAULT FALSE,
  archive BOOLEAN DEFAULT FALSE,

  last_edited TIMESTAMP DEFAULT NOW(),
  created_at TIMESTAMP DEFAULT NOW(),
  idea_id VARCHAR NOT NULL,
  user_id VARCHAR NOT NULL,
  FOREIGN KEY(idea_id) REFERENCES ideas(id),
  FOREIGN KEY(user_id) REFERENCES users(id)
);

CREATE TABLE strategies (
  id VARCHAR PRIMARY KEY,
  text VARCHAR,
  favorite BOOLEAN DEFAULT FALSE,
  archive BOOLEAN DEFAULT FALSE,

  last_edited TIMESTAMP DEFAULT NOW(),
  created_at TIMESTAMP DEFAULT NOW(),
  idea_id VARCHAR NOT NULL,
  user_id VARCHAR NOT NULL,
  FOREIGN KEY(idea_id) REFERENCES ideas(id),
  FOREIGN KEY(user_id) REFERENCES users(id)
);

CREATE TABLE inspiration (
  id VARCHAR PRIMARY KEY,
  text VARCHAR,
  favorite BOOLEAN DEFAULT FALSE,
  archive BOOLEAN DEFAULT FALSE,

  last_edited TIMESTAMP DEFAULT NOW(),
  created_at TIMESTAMP DEFAULT NOW(),
  idea_id VARCHAR NOT NULL,
  user_id VARCHAR NOT NULL,
  FOREIGN KEY(idea_id) REFERENCES ideas(id),
  FOREIGN KEY(user_id) REFERENCES users(id)
);

CREATE TABLE resources (
  id VARCHAR PRIMARY KEY,
  text VARCHAR,
  favorite BOOLEAN DEFAULT FALSE,
  archive BOOLEAN DEFAULT FALSE,

  last_edited TIMESTAMP DEFAULT NOW(),
  created_at TIMESTAMP DEFAULT NOW(),
  idea_id VARCHAR NOT NULL,
  user_id VARCHAR NOT NULL,
  FOREIGN KEY(idea_id) REFERENCES ideas(id),
  FOREIGN KEY(user_id) REFERENCES users(id)
);

CREATE TABLE tags (
  id VARCHAR PRIMARY KEY,
  tag_name VARCHAR UNIQUE,
  
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE idea_tags (
  idea_id VARCHAR NOT NULL,
  tag_id VARCHAR NOT NULL,
  FOREIGN KEY(idea_id) REFERENCES ideas(id),
  FOREIGN KEY(tag_id) REFERENCES tags(id),
  PRIMARY KEY(idea_id, tag_id)
);

INSERT INTO users(id, username, password, email) VALUES 
('user1', 'user1@gmail.com', 'user1', 'user1@gmail.com');

INSERT INTO ideas(id, category, name, user_id) VALUES
('idea1', 'books', 'Book Idea', 'user1');
