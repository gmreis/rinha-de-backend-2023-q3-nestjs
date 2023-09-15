CREATE DATABASE rinha;

CREATE TABLE "pessoas" (
    "IdRegiao" INT NOT NULL,
    "CodRegiao" VARCHAR(2) NOT NULL,
    "NomeRegiao" VARCHAR(20) NOT NULL,
    CONSTRAINT "PK_Regioes" PRIMARY KEY ("IdRegiao")
);
