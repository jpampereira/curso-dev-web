CREATE TABLE IF NOT EXISTS CIDADES (
	ID INT UNSIGNED NOT NULL AUTO_INCREMENT,
    NOME VARCHAR(255) NOT NULL,
    ESTADO_ID INT UNSIGNED NOT NULL,
    AREA DECIMAL(10,2),
    PRIMARY KEY (ID),
    FOREIGN KEY (ESTADO_ID) REFERENCES ESTADOS (ID)
);

CREATE TABLE IF NOT EXISTS TESTE (
	ID INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY
);

DROP TABLE IF EXISTS TESTE;