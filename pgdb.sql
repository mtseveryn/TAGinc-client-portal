CREATE TABLE Tickets (
    "id" SERIAL NOT NULL,
    "details" TEXT NOT NULL,
    "userID" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "createdAt" DATE DEFAULT CURRENT_DATE
    CONSTRAINT "Tickets_id" PRIMARY KEY ("id")
) WITH (
    OIDS = FALSE
);

CREATE TABLE Users (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "company" TEXT NOT NULL
    CONSTRAINT "Users_id" PRIMARY KEY ("id")
) WITH (
    OIDS = FALSE
);
