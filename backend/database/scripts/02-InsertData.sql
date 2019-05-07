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
      (1, 'admin', '$2a$10$zQfPgyZLtYbZrIIqRwWRYORBkQJ4vW1pcwTq/KrmHWtC0GhWiWb86', 'Admin', 'CoPlay','admin@connectnplay.com', '1995.01.11'),
      (2, 'maret', '$2a$10$zQfPgyZLtYbZrIIqRwWRYORBkQJ4vW1pcwTq/KrmHWtC0GhWiWb86', 'Jeremy', 'Maret','jeremy.maret@connectnplay.com', '1995.11.16'),
      (3, 'salomebt', '$2a$10$zQfPgyZLtYbZrIIqRwWRYORBkQJ4vW1pcwTq/KrmHWtC0GhWiWb86', 'Salomé', 'Boudet','salosport@chou.fr', '1998.03.26'),
      (4, 'lucas', '$2a$10$zQfPgyZLtYbZrIIqRwWRYORBkQJ4vW1pcwTq/KrmHWtC0GhWiWb86', 'Lucas', 'Ducret','lulududu@gmail.fr', '1996.06.07'),
      (5, 'rudolf', '$2a$10$zQfPgyZLtYbZrIIqRwWRYORBkQJ4vW1pcwTq/KrmHWtC0GhWiWb86', 'Rudolf', 'Ligid','rurud@hotmail.fr', '1998.10.06'),
      (6, 'julien', '$2a$10$zQfPgyZLtYbZrIIqRwWRYORBkQJ4vW1pcwTq/KrmHWtC0GhWiWb86', 'Julien', 'Dubuis','juju@hotmail.fr', '1998.07.08'),
      (7, 'hannes', '$2a$10$zQfPgyZLtYbZrIIqRwWRYORBkQJ4vW1pcwTq/KrmHWtC0GhWiWb86', 'Hannes', 'Aukthun','hanhan@hotmail.de', '1997.01.06'),
      (8, 'raphael', '$2a$10$zQfPgyZLtYbZrIIqRwWRYORBkQJ4vW1pcwTq/KrmHWtC0GhWiWb86', 'Raphaël', 'Azzoug','raph@hotmail.fr', '1998.12.06'),
      (9, 'clement', '$2a$10$zQfPgyZLtYbZrIIqRwWRYORBkQJ4vW1pcwTq/KrmHWtC0GhWiWb86', 'Clement', 'Vasseur','clecle@hotmail.fr', '1997.10.10'),
      (10, 'pottier', '$2a$10$zQfPgyZLtYbZrIIqRwWRYORBkQJ4vW1pcwTq/KrmHWtC0GhWiWb86', 'Sophie', 'Pottier','soso@hotmail.fr', '1997.01.06'),
      (11, 'ben', '$2a$10$zQfPgyZLtYbZrIIqRwWRYORBkQJ4vW1pcwTq/KrmHWtC0GhWiWb86', 'Benjamin', 'Decaillet','Benny@hotmail.ch', '1993.01.06'),
      (12, 'kevin', '$2a$10$zQfPgyZLtYbZrIIqRwWRYORBkQJ4vW1pcwTq/KrmHWtC0GhWiWb86', 'Kevin', 'Berret','kev@hotmail.ch', '1992.01.06'),
      (13, 'dylan', '$2a$10$zQfPgyZLtYbZrIIqRwWRYORBkQJ4vW1pcwTq/KrmHWtC0GhWiWb86', 'Dylan', 'Lopez','dydy@hotmail.fr', '2009.01.06');
COMMIT;
-- ====================================================
-- Insert Table : cpCountry
-- ====================================================
INSERT INTO cpCountry
  (idCountry, nameCountry)
    VALUES
      (1, 'Switzerland'),
      (2, 'France'),
      (3, 'Finland'),
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
    (4, 'Ping pong'),
    (5, 'Squash');
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
    (4, 'TCVersoix', 'Route de la gare 10, Gland 1285, Suisse', 5),
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
    (12, 7, 4, 2, 'T2', FALSE),
    (13, 2, 1, 4, 'Central', TRUE),
    (14, 2, 1, 4, 'Mary', TRUE),
    (15, 2, 1, 4, 'Toto', TRUE),
    (16, 1, 2, 7, 'P1', TRUE),
    (17, 1, 2, 7, 'P2', TRUE),
    (18, 1, 5, 2, 'S1', FALSE),
    (19, 1, 1, 8, 'Halle1', TRUE);
COMMIT;
-- ====================================================
-- Insert Table : cpGame
-- ====================================================
INSERT INTO cpGame
  (idGame, fkPlayground, fkUserCreator, isSingle, isPrivate, duration, startDate, startTime, description)
    VALUES
  (1, 4, 2, FALSE, TRUE, 90, '2019.05.27 11:00', '11:00', null),
  (2, 4, 2, FALSE, FALSE, 90, '2019.05.28 17:00', '17:00', "Easy"),
  (3, 1, 2, TRUE, TRUE, 60, '2019.06.27 09:00', '09:00', null),
  (4, 2, 2, TRUE, TRUE, 60, '2019.06.27 10:00', '10:00', null),
  (5, 3, 2, FALSE, FALSE, 60, '2019.06.27 11:00', '11:00',"Easy"),
  (6, 1, 2, TRUE, FALSE, 60, '2019.06.27 12:00', '12:00', "Easy"),
  (7, 13, 2, FALSE, FALSE, 90, '2019.05.27 13:00', '13:00', "Easy"),
  (8, 14, 2, TRUE, FALSE, 60, '2019.05.27 14:00', '14:00', "Easy"),
  (9, 8, 2, TRUE, FALSE, 60, '2019.05.27 15:00', '15:00', "Easy"),
  (10, 9, 2, TRUE, FALSE, 120, '2019.05.27 16:00', '16:00', "Easy"),
  (11, 11, 2, TRUE, FALSE, 60, '2019.05.27 17:00', '17:00', "Easy");
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
    (3, 8),
    (10, 9),
    (9, 10),
    (1, 11);
COMMIT;
-- ====================================================
-- Insertion Table : cpIsMember
-- ====================================================
INSERT INTO cpIsMember
  VALUES
    (1, 1, TRUE, '2022.10.10'),
    (2, 1, TRUE, '2022.10.10'),
    (3, 1, FALSE, '2022.10.10'),
    (4, 1, FALSE, '2022.10.10'),
    (5, 1, FALSE, '2022.10.10'),
    (6, 1, FALSE, '2016.10.10'),
    (7, 1, FALSE, '2022.10.10'),
    (10, 1, FALSE, '2022.10.10'),
    (8, 1, FALSE, '2022.10.10'),
    (9, 1, FALSE, '2022.10.10'),
    (11, 1, FALSE, '2022.10.10'),
    (12, 1, FALSE, '2022.10.10'),
    (13, 1, FALSE, '2018.10.10'),
    (1, 2, TRUE, '2022.10.10'),
    (1, 3, TRUE, '2022.10.10'),
    (1, 4, TRUE, '2022.10.10'),
    (1, 5, TRUE, '2022.10.10'),
    (1, 6, TRUE, '2022.10.10'),
    (1, 7, TRUE, '2022.10.10'),
    (2, 2, TRUE, '2022.10.10'),
    (2, 3, TRUE, '2022.10.10'),
    (2, 4, TRUE, '2022.10.10'),
    (2, 5, TRUE, '2022.10.10'),
    (2, 6, TRUE, '2022.10.10'),
    (2, 7, TRUE, '2022.10.10');
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
