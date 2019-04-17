-- ====================================================================
-- Script : 04-Querries.sql
-- Object  : Test of Insert Update Delete into the table
-- ====================================================================
-- ====================================================
-- Insert Update Delete
-- ====================================================

INSERT INTO cpUser
    VALUES
      ('admin2', 'admin', 'Admin2', 'CoPlay','admin2@connectnplay.com', '01.11.1996'),
      ('admin3', 'admin', 'Admin3', 'CoPlay','admin3@connectnplay.com', '01.11.1997');
COMMIT;
SELECT * FROM cpUser;
INSERT INTO cpCity
    VALUES
      ('Espoo', 3);
COMMIT;

UPDATE cpUser
SET lastname = 'updated'
WHERE username = admin2;

UPDATE cpIsMember
SET endSubsctiption = '31.12.2030'
WHERE fkUserIsM = 1 AND fkClubIsM = 1;

DELETE FROM cpUser WHERE username = admin3;
COMMIT;
SELECT * FROM cpUser;

-- SELECT * FROM cpUser;
-- SELECT * FROM cpPlayground;
-- SELECT * FROM cpCountry;
-- SELECT * FROM cpCity;
-- SELECT * FROM cpJoin;
-- SELECT * FROM cpIsMember;
-- SELECT * FROM cpClub;
-- SELECT * FROM cpSport;
-- SELECT * FROM cpGame;
-- SELECT * FROM cpCourtType;
