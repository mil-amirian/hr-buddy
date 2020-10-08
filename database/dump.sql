--
-- PostgreSQL database dump
--

-- Dumped from database version 10.12 (Ubuntu 10.12-0ubuntu0.18.04.1)
-- Dumped by pg_dump version 10.12 (Ubuntu 10.12-0ubuntu0.18.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

ALTER TABLE IF EXISTS ONLY public.shifts DROP CONSTRAINT IF EXISTS shifts_pk;
ALTER TABLE IF EXISTS ONLY public.employees DROP CONSTRAINT IF EXISTS employees_pk;
ALTER TABLE IF EXISTS ONLY public.departments DROP CONSTRAINT IF EXISTS departments_pk;
ALTER TABLE IF EXISTS public.shifts ALTER COLUMN "shiftId" DROP DEFAULT;
ALTER TABLE IF EXISTS public.employees ALTER COLUMN "employeeId" DROP DEFAULT;
ALTER TABLE IF EXISTS public.departments ALTER COLUMN "departmentId" DROP DEFAULT;
DROP SEQUENCE IF EXISTS public."shifts_shiftId_seq";
DROP TABLE IF EXISTS public.shifts;
DROP SEQUENCE IF EXISTS public."employees_employeeId_seq";
DROP TABLE IF EXISTS public.employees;
DROP SEQUENCE IF EXISTS public."departments_departmentId_seq";
DROP TABLE IF EXISTS public.departments;
DROP EXTENSION IF EXISTS plpgsql;
DROP SCHEMA IF EXISTS public;
--
-- Name: public; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA public;


--
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON SCHEMA public IS 'standard public schema';


--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: departments; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.departments (
    "departmentId" integer NOT NULL,
    name text NOT NULL
);


--
-- Name: departments_departmentId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."departments_departmentId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: departments_departmentId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."departments_departmentId_seq" OWNED BY public.departments."departmentId";


--
-- Name: employees; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.employees (
    "employeeId" integer NOT NULL,
    "firstName" text NOT NULL,
    "lastName" text NOT NULL,
    email text NOT NULL,
    phone text NOT NULL,
    street text NOT NULL,
    city text NOT NULL,
    state text NOT NULL,
    zip text NOT NULL,
    "jobTitle" text NOT NULL,
    role text NOT NULL,
    image text NOT NULL,
    wage double precision NOT NULL,
    contract text NOT NULL,
    "inductionDate" date NOT NULL,
    "startDate" date NOT NULL,
    qualifications text NOT NULL,
    "departmentId" integer NOT NULL
);


--
-- Name: employees_employeeId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."employees_employeeId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: employees_employeeId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."employees_employeeId_seq" OWNED BY public.employees."employeeId";


--
-- Name: shifts; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.shifts (
    "shiftId" integer NOT NULL,
    "employeeId" integer NOT NULL,
    "clockIn" timestamp with time zone NOT NULL,
    "clockOut" timestamp with time zone NOT NULL
);


--
-- Name: shifts_shiftId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."shifts_shiftId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: shifts_shiftId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."shifts_shiftId_seq" OWNED BY public.shifts."shiftId";


--
-- Name: departments departmentId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.departments ALTER COLUMN "departmentId" SET DEFAULT nextval('public."departments_departmentId_seq"'::regclass);


--
-- Name: employees employeeId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.employees ALTER COLUMN "employeeId" SET DEFAULT nextval('public."employees_employeeId_seq"'::regclass);


--
-- Name: shifts shiftId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.shifts ALTER COLUMN "shiftId" SET DEFAULT nextval('public."shifts_shiftId_seq"'::regclass);


--
-- Data for Name: departments; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.departments ("departmentId", name) FROM stdin;
1	Marketing
2	Management
3	Production
4	R&D
5	Finance
6	IT
\.


--
-- Data for Name: employees; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.employees ("employeeId", "firstName", "lastName", email, phone, street, city, state, zip, "jobTitle", role, image, wage, contract, "inductionDate", "startDate", qualifications, "departmentId") FROM stdin;
1	Ron	Swanson	ronswanson05@gmail.com	390-221-6530	1278 Cherry Ave	Santa Barbara	CA	93219	Sales Representative	Employee	/images/ron-swanson.jpg	64	Full-time	2002-02-14	2002-02-21	Bachelors - History	1
2	Michael	Park (ADMIN)	mpark211@gmail.com	213-200-6372	3599 Powder House Road	Los Angeles	CA	90001	Accountant	Admin	/images/michael-park.jpg	25	Full-time	2021-02-01	2021-04-01	CPA, Bachelors - Finance	5
3	Roseanne	Carter (ADMIN)	rosecarter@gmail.com	714-203-5200	2426 Brown Street	Walnut Creek	CA	94596	Human Resources	Admin	/images/rose-carter.jpg	40	Full-time	2007-04-02	2007-04-10	Masters - Human Resources	2
4	David	Phillips	davidphillips5@gmail.com	530-302-9499	577 Woodland Terrace	Sacramento	CA	95814	IT	Employee	/images/david-phillips.jpg	35	Part-time	2020-10-02	2020-10-10	Bachelors - Information Technology	6
5	Richard	Lemire	rlemire@gmail.com	210-214-5003	674 Ash Street	Dallas	TX	75202	Engineer	Employee	/images/richard-lemire.jpg	40	Full-time	2015-05-02	2015-05-25	FE, Bachelors - Industrial Engineering	3
6	Tami	Derringer	tamiderr@yahoo.com	714-404-9918	4192 Creekside Lane	Los Angeles	CA	90017	Purchasing Coordinator	Employee	/images/tami-derringer.jpg	22	Full-time	2018-07-10	2018-07-17	GED, Associates - Business	5
7	Keith	Black	keithblack9@gmail.com	207-415-6451	270 Gateway Road	Portland	OR	97214	Sales Representative	Employee	/images/keith-black.jpg	30	Full-time	2012-05-06	2012-05-17	Bachelors - Marketing	1
8	Matthew	McCraney	mattmccraney@gmail.com	559-643-3941	3921 Edgewood Avenue	Fresno	CA	93702	Receptionist	Employee	/images/matt-mccraney.jpg	16	Part-time	2019-01-20	2019-01-28	GED	5
9	Amy	Colbert	amycolbert22@yahoo.com	650-534-6808	2697 Haul Road	San Bruno	CA	94066	Marketing Manager	Employee	/images/amy-colbert.jpg	35	Full-time	2013-02-24	2013-03-04	Masters - Business	1
10	Daniel	Baltazar	danielbaltazar01@gmail.com	808-643-6591	2046 Wood Creek 	Los Angeles	CA	90812	Senior Engineer	Employee	/images/daniel-baltazar.jpg	25	Full-time	2017-06-13	2017-06-21	Bachelors - Information Technology	3
11	Mil	Lee	leemil@gmail.com	123-639-7721	4620 CarFax	Irvine 	CA	92412	Sales Manager	Employee	/images/mil-lee.jpg	26	Full-time	2005-12-01	2005-12-08	Masters - Business	1
12	Jon	Snow (ADMIN)	snow@gmail.com	626-592-5507	2020 The Wall	Santa Monica	CA	99110	President	Admin	/images/jon-snow.jpg	45	Full-time	2001-09-05	2001-09-15	Masters - Public Administration	2
13	Bran	Stark	branstark@yahoo.com	310-669-4389	3145 Castle Road	Long Beach	CA	90815	Research and Development	Employee	/images/bran-stark.jpg	47	Part-time	2001-09-05	2001-09-14	Masers - Biology	4
14	Cersel	Lannister	lannistercersel@yahoo.com	559-325-1285	3067 Orange Ave	San Diego	CA	80812	Vice President	Employee	/images/cersel-lannister.jpg	32	Full-time	2003-03-10	2003-03-17	Masters - Business 	2
15	Bobby	Ong	bobbyone4@gmail.com	310-448-3371	7643 Hanger Lane	Torrance	CA	96413	Marketing	Employee	/images/bobby-ong.jpg	29	Full-time	2017-07-19	2017-07-28	Bachelors - Marketing	1
\.


--
-- Data for Name: shifts; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.shifts ("shiftId", "employeeId", "clockIn", "clockOut") FROM stdin;
\.


--
-- Name: departments_departmentId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."departments_departmentId_seq"', 1, false);


--
-- Name: employees_employeeId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."employees_employeeId_seq"', 15, true);


--
-- Name: shifts_shiftId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."shifts_shiftId_seq"', 1, false);


--
-- Name: departments departments_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.departments
    ADD CONSTRAINT departments_pk PRIMARY KEY ("departmentId");


--
-- Name: employees employees_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.employees
    ADD CONSTRAINT employees_pk PRIMARY KEY ("employeeId");


--
-- Name: shifts shifts_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.shifts
    ADD CONSTRAINT shifts_pk PRIMARY KEY ("shiftId");


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: -
--

GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- PostgreSQL database dump complete
--

