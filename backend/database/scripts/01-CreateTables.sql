-- ====================================================================
-- Script : 01-CreateTables.sql
-- Object  : Create tables of Connect&Play
-- ====================================================================

-- ====================================================
-- Create table
-- ====================================================

-- ====================================================
-- Table : cpUser
-- ====================================================
CREATE TABLE cpUser (
		idUser          INTEGER					NOT NULL AUTO_INCREMENT,
		username				VARCHAR(100) 		NOT NULL,
		passwordHash		VARCHAR(255) 		NOT NULL,
		firstname   		VARCHAR(255) 		NOT NULL,
		lastname    		VARCHAR(255) 		NOT NULL,
		email       		VARCHAR(255) 		NOT NULL,
		userBirthday    DATE,

		CONSTRAINT PK_cpUser PRIMARY KEY (idUser),
	  CONSTRAINT AK_cpUser_username UNIQUE (username),
	  CONSTRAINT AK_cpUser_email UNIQUE (email)
);
-- ====================================================
-- Table : cpCountry
-- ====================================================
CREATE TABLE cpCountry (
	idCountry 			INTEGER 				NOT NULL,
	nameCountry 		VARCHAR(75) 		NOT NULL,

	CONSTRAINT PK_cpCountry PRIMARY KEY (idCountry),
	CONSTRAINT AK_cpCountry_nameCountry UNIQUE (nameCountry)
);
-- ====================================================
-- Table : cpCity
-- ====================================================
CREATE TABLE cpCity (
	idCity 					INTEGER					NOT NULL AUTO_INCREMENT,
	nameCity 				VARCHAR(255) 		NOT NULL,
	fkCountry				INTEGER					NOT NULL,

	CONSTRAINT PK_cpCity PRIMARY KEY (idCity),
	CONSTRAINT AK_cpCity_nameCity UNIQUE (nameCity),

	CONSTRAINT FK_cpCity_cpCountry FOREIGN KEY (fkCountry)
		REFERENCES cpCountry(idCountry)
		ON DELETE CASCADE
		ON UPDATE NO ACTION
);
-- ====================================================
-- Table : cpSport
-- ====================================================
CREATE TABLE cpSport (
		idSport 				INTEGER					NOT NULL AUTO_INCREMENT,
		nameSport				VARCHAR(255) 		NOT NULL,

		CONSTRAINT PK_cpSport	PRIMARY KEY (idSport),
		CONSTRAINT AK_cpSport_nameSport UNIQUE (nameSport)
);
-- ====================================================
-- Table : cpCourtType
-- ====================================================
CREATE TABLE cpCourtType (
		idCourtType			INTEGER					NOT NULL AUTO_INCREMENT,
		courtType				VARCHAR(255) 		NOT NULL,
		isIndoor				BOOLEAN					NOT NULL,

		CONSTRAINT PK_cpCourtType PRIMARY KEY (idCourtType)
);
-- ====================================================
-- Table : cpClub
-- ====================================================
CREATE TABLE cpClub (
		idClub          INTEGER					NOT NULL AUTO_INCREMENT,
		nameClub				VARCHAR(255)    NOT NULL,
		addressClub   	VARCHAR(255),
		fkCity					INTEGER 				NOT NULL,

		CONSTRAINT PK_cpClub PRIMARY KEY (idClub),

		CONSTRAINT FK_cpClub_cpCity FOREIGN KEY (fkCity)
	    REFERENCES cpCity(idCity)
	    ON DELETE CASCADE
	    ON UPDATE NO ACTION
);
-- ====================================================
-- Table : cpPlayground
-- ====================================================
CREATE TABLE cpPlayground (
		idPg          	INTEGER					NOT NULL AUTO_INCREMENT,
		fkClub					INTEGER 				NOT NULL,
		fkSport					INTEGER 				NOT NULL,
		fkCourtType			INTEGER 				NOT NULL,
		nameCourt   		VARCHAR(255)		NOT NULL,
		isDoubleOk			BOOLEAN         NOT NULL,

		CONSTRAINT PK_cpPlayground PRIMARY KEY (idPg),

		CONSTRAINT FK_cpPlayground_cpClub FOREIGN KEY (fkClub)
	    REFERENCES cpClub(idClub)
	    ON DELETE CASCADE
	    ON UPDATE NO ACTION,

		CONSTRAINT FK_cpPlayground_cpSport FOREIGN KEY (fkSport)
	    REFERENCES cpSport(idSport)
	    ON DELETE CASCADE
	    ON UPDATE NO ACTION,

		CONSTRAINT FK_cpPlayground_cpCourtType FOREIGN KEY (fkCourtType)
	    REFERENCES cpCourtType(idCourtType)
	    ON DELETE CASCADE
	    ON UPDATE NO ACTION
);
-- ====================================================
-- Table : cpGame
-- ====================================================
CREATE TABLE cpGame (
		idGame          INTEGER					NOT NULL AUTO_INCREMENT,
		fkPlayground		INTEGER 				NOT NULL,
		fkUserCreator		INTEGER					NOT NULL,
		isSingle				BOOLEAN         NOT NULL,
		isPrivate				BOOLEAN         NOT NULL,
		duration   			INTEGER			 		NOT NULL,
		startDate				DATETIME				NOT NULL,
		startTime       TIME,
		description			TEXT,

		CONSTRAINT PK_cpGame PRIMARY KEY (idGame),

		CONSTRAINT FK_cpGame_cpPlayground FOREIGN KEY (fkPlayground)
	    REFERENCES cpPlayground(idPg)
	    ON DELETE CASCADE
	    ON UPDATE NO ACTION,

		CONSTRAINT FK_cpGame_cpUser FOREIGN KEY (fkUserCreator)
			REFERENCES cpUser(idUser)
			ON DELETE CASCADE
			ON UPDATE NO ACTION
);
-- ====================================================
-- Table : cpJoin
-- ====================================================
CREATE TABLE cpJoin (
		fkUserJoin      INTEGER					NOT NULL,
		fkGameJoin			INTEGER 				NOT NULL,


		CONSTRAINT PK_cpJoin PRIMARY KEY (fkUserJoin, fkGameJoin),

	  CONSTRAINT FK_cpJoin_cpUser FOREIGN KEY (fkUserJoin)
	    REFERENCES cpUser(idUser)
	    ON DELETE CASCADE
	    ON UPDATE NO ACTION,

	  CONSTRAINT FK_cpJoin_cpGame FOREIGN KEY (fkGameJoin)
	    REFERENCES cpGame(idGame)
	    ON DELETE CASCADE
	    ON UPDATE NO ACTION
);
-- ====================================================
-- Table : cpIsMember
-- ====================================================
CREATE TABLE cpIsMember (
		fkUserIsM      	INTEGER					NOT NULL,
		fkClubIsM				INTEGER 				NOT NULL,
		isAdmin     		BOOLEAN 				NOT NULL,
		endSubsctiption DATE,

		CONSTRAINT PK_cpIsMember PRIMARY KEY (fkUserIsM, fkClubIsM),

	  CONSTRAINT FK_cpIsMember_cpUser FOREIGN KEY (fkUserIsM)
	    REFERENCES cpUser(idUser)
	    ON DELETE CASCADE
	    ON UPDATE NO ACTION,

	  CONSTRAINT FK_cpIsMember_cpClub FOREIGN KEY (fkClubIsM)
	    REFERENCES cpClub(idClub)
	    ON DELETE CASCADE
	    ON UPDATE NO ACTION
);

/* END */
