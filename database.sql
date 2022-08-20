CREATE TABLE "koalas"(
	"id" serial primary key,
	"name" varchar(120),
	"gender" varchar(120),
	"age" integer,
	"ready_to_transfer" boolean,
	"notes" varchar(120)
);

SELECT * FROM "koalas"; 

INSERT INTO "koalas" ("name", "gender","age","ready_to_transfer","notes")
VALUES ('Scotty', 'Male', 4, true,'Born in Guatemala'),
('Jean', 'Female', 5, true, 'Allergic to lots of lava'),
('Ororo', 'Female', 7, false, 'Loves listening to Paula (Abdul)'),
('Logan', 'Male', 15, false, 'Loves the sauna'),
('Charlie', 'Male', 9, true, 'Favorite band is Nirvana'),
('Betsy', 'Female', 4, true, 'Has a pet iguana');

UPDATE "koalas" SET "ready_to_transfer" = true WHERE "id" = 3;