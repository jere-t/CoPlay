-- ====================================================================
-- Script : 02-InsertData.sql
-- Object  : Data Insertion on ConnectNPlay's tables 
-- ====================================================================
-- ====================================================
-- Insert Table : cpUser
-- ====================================================
-- password are "test" Except for admin --> "admin"
INSERT INTO cpUser
    VALUES
      (1, 'admin', 'admin', 'Admin', 'CoPlay','admin@connectnplay.com', '01.11.1995'),
      (2, 'maret', 'admin', 'Jeremy', 'Maret','jeremy.maret@connectnplay.com', '16.11.1995'),
      (3, 'salomebt', 'test', 'Salomé', 'Boudet','salosport@chou.fr', '26.03.1998'),
      (4, 'lucas', 'test', 'Lucas', 'Ducret','lulududu@gmail.fr', '26.07.1996'),
      (5, 'raphael', 'test', 'Raphaël', 'Azzoug','raph@hotmail.fr', '12.06.1998'),
      (6, 'julien', 'test', 'Julien', 'Dubuis','juju@hotmail.fr', '17.08.1998'),
      (7, 'hannes', 'test', 'Hannes', 'Aukthun','hanhan@hotmail.de', '01.06.1997'),
      (8, 'raphael', 'test', 'Raphaël', 'Azzoug','raph@hotmail.fr', '12.06.1998'),
      (9, 'clement', 'test', 'Clement', 'Vasseur','clecle@hotmail.fr', '17.10.1997'),
      (10, 'pottier', 'test', 'Sophie', 'Pottier','soso@hotmail.fr', '01.06.1997'),
      (11, 'ben', 'test', 'Benjamin', 'Decaillet','Benny@hotmail.ch', '01.06.1993'),
      (12, 'kevin', 'test', 'Kevin', 'Berret','kev@hotmail.ch', '01.06.1992'),
      (13, 'dylan', 'test', 'Dylan', 'Lopez','dydy@hotmail.fr', '01.06.2009');
COMMIT;
-- ====================================================
-- Insert Table : cpCountry
-- ====================================================
INSERT INTO cpCountry
  (idCountry, nameCountry)
    VALUES
      (1, 'Switzerland'),
      (2, 'France'),
      (3, 'Finland')
      (4, 'Spain'),
      (5, 'Italy'),
      (6, 'Germany');
COMMIT;
-- ====================================================
-- Insert Table : cpCity
-- ====================================================
INSERT INTO cpCity
  (idCity, nameCity, fkCountry)
    VALUES
      (1, 'Nyon', 1),
      (2, 'Bellevue', 1),
      (3, 'Aigle', 1),
      (4, 'Gland', 1),
      (5, 'Versoix', 1),
      (6, 'Cannes', 2),
      (7, 'Evian', 2),
      (8, 'Divonne', 2),
      (9, 'Gênes', 5),
      (10, 'Berlin', 6),
      (11, 'Helsinki', 3),
      (12, 'Valencia', 4),
      (13, 'Seville', 4),
      (14, 'Barcelone', 4),
      (15, 'Madrid', 4);
COMMIT;
-- ====================================================
-- Insert Table : cpSport
-- ====================================================
INSERT INTO cpSport
  VALUES
    (1, 'Tennis'),
    (2, 'Padel'),
    (3, 'Badminton'),
    (4, 'Ping pong');
COMMIT;
-- ====================================================
-- Insert Table : cpCourtType
-- ====================================================
INSERT INTO cpCourtType
  VALUES
    (1, 'hard', false),
    (2, 'hard', true),
    (3, 'clay', false),
    (4, 'clay', true),
    (5, 'grass', false),
    (6, 'grass', true),
    (7, 'turf', false),
    (8, 'turf', true);
COMMIT;
-- ====================================================
-- Insert Table : cpClub
-- ====================================================
INSERT INTO cpClub
  VALUES
    (1, 'TCGland', 'Route de la gare 10, Gland 1285, Suisse', 4),
    (2, 'TCNyon', 'Route du lac 9, Nyon 1260, Suisse', 1),
    (3, 'Post Bar', 'Yksitadiuja 12B, Helinki 00520, Helsinki', 11),
    (4, 'TCVersoix', 'Route de la gare 10, Gland 1285, Suisse', 6),
    (5, 'Country Club Genève', 'Route de l''aeroport 55, Bellevue 1185, Suisse', 2),
    (6, 'TCAigle', 'Route de la foire 1, Aigle 1089, Suisse', 3),
    (7, 'HOAS Ping Pong', 'Junailijankuja 5A, Helinki 00520, Helsinki', 11);
COMMIT;
-- ====================================================
-- Insert Table : cpPlayground
-- ====================================================
INSERT INTO cpPlayground
  VALUES
    (1, 1, 1, 3, '1', TRUE),
    (2, 1, 1, 3, '2', TRUE),
    (3, 1, 1, 2, '3', TRUE),
    (4, 5, 2, 2, '1', TRUE),
    (5, 5, 2, 2, '2', TRUE),
    (6, 5, 2, 2, '3', TRUE),
    (7, 6, 2, 8, '1', TRUE),
    (8, 4, 3, 1, 'B1', TRUE),
    (9, 3, 4, 1, '1', TRUE),
    (10, 3, 4, 1, '2', TRUE),
    (11, 7, 4, 1, 'T1', TRUE),
    (12, 7, 4, 2, 'T2', FALSE)
    (13, 2, 1, 4, 'Central', TRUE),
    (14, 2, 1, 4, 'Mary', TRUE),
    (15, 2, 1, 4, 'Toto', TRUE);
COMMIT;
-- ====================================================
-- Insert Table : cpGame
-- ====================================================
INSERT INTO cpGame
  (idGame, fkPlayground, isSingle, isPrivate, duration, startDate, startTime)
    VALUES
  (1, 4, FALSE, TRUE, 90, '27.05.2019', '11:00'),
  (2, 4, FALSE, FALSE, 90, '28.05.2019', '17:00'),
  (3, 1, TRUE, TRUE, 60, '27.06.2019', '09:00'),
  (4, 2, TRUE, TRUE, 60, '27.06.2019', '10:00'),
  (5, 3, FALSE, FALSE, 60, '27.06.2019', '11:00'),
  (6, 1, TRUE, FALSE, 60, '27.06.2019', '12:00'),
  (7, 13, FALSE, FALSE, 90, '27.05.2019', '13:00'),
  (8, 14, TRUE, FALSE, 60, '27.05.2019', '14:00'),
  (9, 8, TRUE, FALSE, 60, '27.05.2019', '15:00'),
  (10, 9, TRUE, FALSE, 120, '27.05.2019', '16:00'),
  (11, 11, TRUE, FALSE, 60, '27.05.2019', '17:00');
COMMIT;
-- ====================================================
-- Insertion Table : cpJoin
-- ====================================================
INSERT INTO cpJoin
  VALUES
    (2, 1),
    (3, 1),
    (8, 1),
    (9, 1),
    (2, 2),
    (3, 3),
    (10, 3),
    (2, 4),
    (3, 4),
    (2, 5),
    (2, 6),
    (11, 6),
    (2, 7),
    (3, 8)
    (10, 9),
    (9, 10),
    (1, 11);
COMMIT;
-- ====================================================
-- Insertion Table : cpIsMember
-- ====================================================
INSERT INTO cpIsMember
  VALUES
    (1, 1, TRUE, '10.10.2022'),
    (2, 1, TRUE, '10.10.2022'),
    (3, 1, FALSE, '10.10.2022'),
    (4, 1, FALSE, '10.10.2022'),
    (5, 1, FALSE, '10.10.2022'),
    (6, 2, FALSE, '10.10.2016'),
    (7, 3, FALSE, '10.10.2022'),
    (10, 3, FALSE, '10.10.2022'),
    (8, 1, FALSE, '10.10.2022'),
    (9, 2, FALSE, '10.10.2022'),
    (11, 3, FALSE, '10.10.2022'),
    (12, 3, FALSE, '10.10.2022'),
    (13, 3, FALSE, '10.10.2018'),;
COMMIT;

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
