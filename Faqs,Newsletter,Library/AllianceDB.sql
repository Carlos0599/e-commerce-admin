CREATE DATABASE AllianceDB;
USE AllianceDB;

CREATE TABLE User(
user_ID INT NOT NULL PRIMARY KEY);

CREATE TABLE Professor(
professor_ID INT NOT NULL,
user_ID INT NOT NULL,
PRIMARY KEY (professor_ID),
FOREIGN KEY (user_ID) REFERENCES User(user_ID)
);

CREATE TABLE Student(
student_ID INT NOT NULL, 
user_ID INT NOT NULL,
PRIMARY KEY (student_ID),
FOREIGN KEY (user_ID) REFERENCES User(user_ID)
);

CREATE TABLE Innovator(
innovator_ID INT NOT NULL,
user_ID INT NOT NULL,
PRIMARY KEY (innovator_ID),
FOREIGN KEY (user_ID) REFERENCES User(user_ID)
);

CREATE TABLE AdminTable(
admin_ID INT NOT NULL,
user_ID INT NOT NULL,
PRIMARY KEY (admin_ID),
FOREIGN KEY (user_ID) REFERENCES User(user_ID)
);

CREATE TABLE Guest(
guest_ID INT NOT NULL,
user_ID INT NOT NULL,
PRIMARY KEY (guest_ID),
FOREIGN KEY (user_ID) REFERENCES User(user_ID)
);

CREATE TABLE Investor(
investor_ID INT NOT NULL,
user_ID INT NOT NULL,
PRIMARY KEY (investor_ID),
FOREIGN KEY (user_ID) REFERENCES User(user_ID)
);

CREATE TABLE Faq(
faq_ID INT NOT NULL,
faq_question VARCHAR(255) NOT NULL,
faq_answer VARCHAR(255) NOT NULL, 
PRIMARY KEY (faq_ID)
);

CREATE TABLE Library(
library_ID INT NOT NULL,
PRIMARY KEY (library_ID)
);

CREATE TABLE Author_details(
author_ID INT NOT NULL,
author_name VARCHAR (155),
firstname VARCHAR (155),
lastname VARCHAR (155),
author_email VARCHAR (155),
company VARCHAR(155),
PRIMARY KEY (author_ID)
);

CREATE TABLE Publisher_details(
publisher_ID INT NOT NULL,
publisher_name VARCHAR (155) NOT NULL,
publisher_email VARCHAR(155) NOT NULL,
PRIMARY KEY (publisher_ID)
);

CREATE TABLE Journal(
journal_ID INT NOT NULL,
journal_genre VARCHAR(155) NOT NULL,
journal_file BLOB NOT NULL,
journal_name VARCHAR(155),
PRIMARY KEY (journal_ID)
);

CREATE TABLE Author(
author_ID INT NOT NULL,
journal_ID INT NOT NULL,
created_at VARCHAR(155) NOT NULL,
updated_at VARCHAR(155) NOT NULL,
PRIMARY KEY (author_ID),
FOREIGN KEY (journal_ID) REFERENCES Journal(journal_ID)
);

CREATE TABLE Publisher(
publisher_ID INT NOT NULL,
journal_ID INT NOT NULL,
created_at VARCHAR(155),
updated_at VARCHAR(155),
FOREIGN KEY (publisher_ID) REFERENCES Publisher_details(publisher_ID),
FOREIGN KEY (journal_ID) REFERENCES Journal(journal_ID)
);

CREATE TABLE News_Letter(
newsletter_ID INT NOT NULL,
newsletter_published VARCHAR(255),
newsletter_desc VARCHAR(255),
newsletter_title VARCHAR(255),
date_created VARCHAR(255),
content VARCHAR(255),
PRIMARY KEY (newsletter_ID)
);

CREATE TABLE subcriber(
subscriber_ID INT NOT NULL,
subscriber_date VARCHAR(255),
subscriber_email VARCHAR(255),
firstname VARCHAR (255),
lastname VARCHAR (255),
PRIMARY KEY (subscriber_ID)
);

CREATE TABLE news_letter_trigger(
newsletter_ID INT NOT NULL,
subscriber_ID INT NOT NULL,
created_at VARCHAR(255),
updated_at VARCHAR(255),
FOREIGN KEY (newsletter_ID) REFERENCES News_Letter(newsletter_ID),
FOREIGN KEY (subscriber_ID) REFERENCES subcriber(subscriber_ID)
);


