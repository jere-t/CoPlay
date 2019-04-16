-- ====================================================================
-- Script : 04-Trigger.sql
-- Object  : Triggers for ConnectNPlay
-- ====================================================================
-- ====================================================
-- Trigger when a new user is add, to avoid double registration
-- ====================================================
DELIMITER $$
CREATE TRIGGER checkAddUserOnGame
BEFORE INSERT ON cpJoin
FOR EACH ROW

BEGIN
    IF NEW.fkUserJoin IN (
        SELECT fkUserJoin FROM cpJoin
        JOIN cpGame ON fkGameJoin = idGame
            WHERE idGame = (SELECT idGame FROM cpGame WHERE id = NEW.fkGameJoin)
    )
    THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'This user already exists in the game';
    END IF;
END $$;
