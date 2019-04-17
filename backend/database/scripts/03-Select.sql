-- ====================================================================
-- Script : 03-Select.sql
-- Object  : Some selects
-- ====================================================================
-- ====================================================
-- SELECT Tables
-- ====================================================
SELECT * FROM cpUser;
SELECT * FROM cpPlayground;
SELECT * FROM cpCountry;
SELECT * FROM cpCity;
SELECT * FROM cpJoin;
SELECT * FROM cpIsMember;
SELECT * FROM cpClub;
SELECT * FROM cpSport;
SELECT * FROM cpGame;
SELECT * FROM cpCourtType;
-- ====================================================
-- SELECT specific
-- ====================================================
SELECT * FROM cpUser
JOIN cpIsMember ON idUser = fkUserIsM
JOIN cpClub ON fkClubIsM = idClub;

SELECT * FROM cpUser
JOIN cpJoin ON idUser = fkUserJoin
JOIN cpGame ON fkGameJoin = idGame;

SELECT * FROM cpClub
JOIN cpCity ON fkCity = idCity
JOIN cpCountry ON fkCountry = idCountry;
