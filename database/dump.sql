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
    "clockOut" timestamp with time zone
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
3	Roseanne	Carter (ADMIN)	rosecarter@gmail.com	714-203-5200	2426 Brown Street	Walnut Creek	CA	94596	Human Resources	Admin	/images/rose-carter.jpg	40	Full-time	2007-04-02	2007-04-10	Masters - Human Resources	2
4	David	Phillips	davidphillips5@gmail.com	530-302-9499	577 Woodland Terrace	Sacramento	CA	95814	IT	Employee	/images/david-phillips.jpg	35	Part-time	2020-10-02	2020-10-10	Bachelors - Information Technology	6
5	Richard	Lemire	rlemire@gmail.com	210-214-5003	674 Ash Street	Dallas	TX	75202	Engineer	Employee	/images/richard-lemire.jpg	40	Full-time	2015-05-02	2015-05-25	FE, Bachelors - Industrial Engineering	3
6	Tami	Derringer	tamiderr@yahoo.com	714-404-9918	4192 Creekside Lane	Los Angeles	CA	90017	Purchasing Coordinator	Employee	/images/tami-derringer.jpg	22	Full-time	2018-07-10	2018-07-17	GED, Associates - Business	5
7	Keith	Black	keithblack9@gmail.com	207-415-6451	270 Gateway Road	Portland	OR	97214	Sales Representative	Employee	/images/keith-black.jpg	30	Full-time	2012-05-06	2012-05-17	Bachelors - Marketing	1
8	Matthew	McCraney	mattmccraney@gmail.com	559-643-3941	3921 Edgewood Avenue	Fresno	CA	93702	Receptionist	Employee	/images/matt-mccraney.jpg	16	Part-time	2019-01-20	2019-01-28	GED	5
9	Amy	Colbert	amycolbert22@yahoo.com	650-534-6808	2697 Haul Road	San Bruno	CA	94066	Marketing Manager	Employee	/images/amy-colbert.jpg	35	Full-time	2013-02-24	2013-03-04	Masters - Business	1
10	Daniel	Baltazar	danielbaltazar01@gmail.com	808-643-6591	2046 Wood Creek 	Los Angeles	CA	90812	Senior Engineer	Employee	/images/daniel-baltazar.jpg	25	Full-time	2017-06-13	2017-06-21	Bachelors - Information Technology	3
11	Mil	Lee	leemil@gmail.com	123-639-7721	4620 CarFax	Irvine 	CA	92412	Sales Manager	Employee	/images/mil-lee.jpg	26	Full-time	2005-12-01	2005-12-08	Masters - Business	1
13	Bran	Stark	branstark@yahoo.com	310-669-4389	3145 Castle Road	Long Beach	CA	90815	Research and Development	Employee	/images/bran-stark.jpg	47	Part-time	2001-09-05	2001-09-14	Masers - Biology	4
\.


--
-- Data for Name: shifts; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.shifts ("shiftId", "employeeId", "clockIn", "clockOut") FROM stdin;
1	1	2020-10-06 14:47:00+00	2020-10-07 00:36:00+00
2	1	2020-10-07 14:47:00+00	2020-10-08 00:36:00+00
3	1	2020-10-08 14:47:00+00	2020-10-09 00:36:00+00
4	1	2020-10-09 14:47:00+00	2020-10-10 00:36:00+00
5	1	2020-10-10 14:47:00+00	2020-10-11 00:36:00+00
6	1	2020-10-11 14:47:00+00	2020-10-12 00:36:00+00
7	1	2020-10-12 14:47:00+00	2020-10-13 00:36:00+00
8	1	2020-10-13 14:47:00+00	2020-10-14 00:36:00+00
9	1	2020-10-14 14:47:00+00	2020-10-15 00:36:00+00
10	1	2020-10-15 14:47:00+00	2020-10-16 00:36:00+00
11	1	2020-10-16 14:47:00+00	2020-10-17 00:36:00+00
12	1	2020-10-17 14:47:00+00	2020-10-18 00:36:00+00
13	1	2020-10-18 14:47:00+00	2020-10-19 00:36:00+00
14	1	2020-10-19 14:47:00+00	2020-10-20 00:36:00+00
15	1	2020-10-20 14:47:00+00	2020-10-21 00:36:00+00
16	2	2020-10-06 14:47:00+00	2020-10-07 00:36:00+00
17	2	2020-10-07 14:47:00+00	2020-10-08 00:36:00+00
18	2	2020-10-08 14:47:00+00	2020-10-09 00:36:00+00
19	2	2020-10-09 14:47:00+00	2020-10-10 00:36:00+00
20	2	2020-10-10 14:47:00+00	2020-10-11 00:36:00+00
21	2	2020-10-11 14:47:00+00	2020-10-12 00:36:00+00
22	2	2020-10-12 14:47:00+00	2020-10-13 00:36:00+00
23	2	2020-10-13 14:47:00+00	2020-10-14 00:36:00+00
24	2	2020-10-14 14:47:00+00	2020-10-15 00:36:00+00
25	2	2020-10-15 14:47:00+00	2020-10-16 00:36:00+00
26	2	2020-10-16 14:47:00+00	2020-10-17 00:36:00+00
27	2	2020-10-17 14:47:00+00	2020-10-18 00:36:00+00
28	2	2020-10-18 14:47:00+00	2020-10-19 00:36:00+00
29	2	2020-10-19 14:47:00+00	2020-10-20 00:36:00+00
30	2	2020-10-20 14:47:00+00	2020-10-21 00:36:00+00
31	3	2020-10-06 14:47:00+00	2020-10-07 00:36:00+00
32	3	2020-10-07 14:47:00+00	2020-10-08 00:36:00+00
33	3	2020-10-08 14:47:00+00	2020-10-09 00:36:00+00
34	3	2020-10-09 14:47:00+00	2020-10-10 00:36:00+00
35	3	2020-10-10 14:47:00+00	2020-10-11 00:36:00+00
36	3	2020-10-11 14:47:00+00	2020-10-12 00:36:00+00
37	3	2020-10-12 14:47:00+00	2020-10-13 00:36:00+00
38	3	2020-10-13 14:47:00+00	2020-10-14 00:36:00+00
39	3	2020-10-14 14:47:00+00	2020-10-15 00:36:00+00
40	3	2020-10-15 14:47:00+00	2020-10-16 00:36:00+00
41	3	2020-10-16 14:47:00+00	2020-10-17 00:36:00+00
42	3	2020-10-17 14:47:00+00	2020-10-18 00:36:00+00
43	3	2020-10-18 14:47:00+00	2020-10-19 00:36:00+00
44	3	2020-10-19 14:47:00+00	2020-10-20 00:36:00+00
45	3	2020-10-20 14:47:00+00	2020-10-21 00:36:00+00
46	4	2020-10-06 14:47:00+00	2020-10-07 00:36:00+00
47	4	2020-10-07 14:47:00+00	2020-10-08 00:36:00+00
48	4	2020-10-08 14:47:00+00	2020-10-09 00:36:00+00
49	4	2020-10-09 14:47:00+00	2020-10-10 00:36:00+00
50	4	2020-10-10 14:47:00+00	2020-10-11 00:36:00+00
51	4	2020-10-11 14:47:00+00	2020-10-12 00:36:00+00
52	4	2020-10-12 14:47:00+00	2020-10-13 00:36:00+00
53	4	2020-10-13 14:47:00+00	2020-10-14 00:36:00+00
54	4	2020-10-14 14:47:00+00	2020-10-15 00:36:00+00
55	4	2020-10-15 14:47:00+00	2020-10-16 00:36:00+00
56	4	2020-10-16 14:47:00+00	2020-10-17 00:36:00+00
57	4	2020-10-17 14:47:00+00	2020-10-18 00:36:00+00
58	4	2020-10-18 14:47:00+00	2020-10-19 00:36:00+00
59	4	2020-10-19 14:47:00+00	2020-10-20 00:36:00+00
60	4	2020-10-20 14:47:00+00	2020-10-21 00:36:00+00
61	5	2020-10-06 14:47:00+00	2020-10-07 00:36:00+00
62	5	2020-10-07 14:47:00+00	2020-10-08 00:36:00+00
63	5	2020-10-08 14:47:00+00	2020-10-09 00:36:00+00
64	5	2020-10-09 14:47:00+00	2020-10-10 00:36:00+00
65	5	2020-10-10 14:47:00+00	2020-10-11 00:36:00+00
66	5	2020-10-11 14:47:00+00	2020-10-12 00:36:00+00
67	5	2020-10-12 14:47:00+00	2020-10-13 00:36:00+00
68	5	2020-10-13 14:47:00+00	2020-10-14 00:36:00+00
69	5	2020-10-14 14:47:00+00	2020-10-15 00:36:00+00
70	5	2020-10-15 14:47:00+00	2020-10-16 00:36:00+00
71	5	2020-10-16 14:47:00+00	2020-10-17 00:36:00+00
72	5	2020-10-17 14:47:00+00	2020-10-18 00:36:00+00
73	5	2020-10-18 14:47:00+00	2020-10-19 00:36:00+00
74	5	2020-10-19 14:47:00+00	2020-10-20 00:36:00+00
75	5	2020-10-20 14:47:00+00	2020-10-21 00:36:00+00
76	6	2020-10-06 14:47:00+00	2020-10-07 00:36:00+00
77	6	2020-10-07 14:47:00+00	2020-10-08 00:36:00+00
78	6	2020-10-08 14:47:00+00	2020-10-09 00:36:00+00
79	6	2020-10-09 14:47:00+00	2020-10-10 00:36:00+00
80	6	2020-10-10 14:47:00+00	2020-10-11 00:36:00+00
81	6	2020-10-11 14:47:00+00	2020-10-12 00:36:00+00
82	6	2020-10-12 14:47:00+00	2020-10-13 00:36:00+00
83	6	2020-10-13 14:47:00+00	2020-10-14 00:36:00+00
84	6	2020-10-14 14:47:00+00	2020-10-15 00:36:00+00
85	6	2020-10-15 14:47:00+00	2020-10-16 00:36:00+00
86	6	2020-10-16 14:47:00+00	2020-10-17 00:36:00+00
87	6	2020-10-17 14:47:00+00	2020-10-18 00:36:00+00
88	6	2020-10-18 14:47:00+00	2020-10-19 00:36:00+00
89	6	2020-10-19 14:47:00+00	2020-10-20 00:36:00+00
90	6	2020-10-20 14:47:00+00	2020-10-21 00:36:00+00
91	7	2020-10-06 14:47:00+00	2020-10-07 00:36:00+00
92	7	2020-10-07 14:47:00+00	2020-10-08 00:36:00+00
93	7	2020-10-08 14:47:00+00	2020-10-09 00:36:00+00
94	7	2020-10-09 14:47:00+00	2020-10-10 00:36:00+00
95	7	2020-10-10 14:47:00+00	2020-10-11 00:36:00+00
96	7	2020-10-11 14:47:00+00	2020-10-12 00:36:00+00
97	7	2020-10-12 14:47:00+00	2020-10-13 00:36:00+00
98	7	2020-10-13 14:47:00+00	2020-10-14 00:36:00+00
99	7	2020-10-14 14:47:00+00	2020-10-15 00:36:00+00
100	7	2020-10-15 14:47:00+00	2020-10-16 00:36:00+00
101	7	2020-10-16 14:47:00+00	2020-10-17 00:36:00+00
102	7	2020-10-17 14:47:00+00	2020-10-18 00:36:00+00
103	7	2020-10-18 14:47:00+00	2020-10-19 00:36:00+00
104	7	2020-10-19 14:47:00+00	2020-10-20 00:36:00+00
105	7	2020-10-20 14:47:00+00	2020-10-21 00:36:00+00
106	8	2020-10-06 14:47:00+00	2020-10-07 00:36:00+00
107	8	2020-10-07 14:47:00+00	2020-10-08 00:36:00+00
108	8	2020-10-08 14:47:00+00	2020-10-09 00:36:00+00
109	8	2020-10-09 14:47:00+00	2020-10-10 00:36:00+00
110	8	2020-10-10 14:47:00+00	2020-10-11 00:36:00+00
111	8	2020-10-11 14:47:00+00	2020-10-12 00:36:00+00
112	8	2020-10-12 14:47:00+00	2020-10-13 00:36:00+00
113	8	2020-10-13 14:47:00+00	2020-10-14 00:36:00+00
114	8	2020-10-14 14:47:00+00	2020-10-15 00:36:00+00
115	8	2020-10-15 14:47:00+00	2020-10-16 00:36:00+00
116	8	2020-10-16 14:47:00+00	2020-10-17 00:36:00+00
117	8	2020-10-17 14:47:00+00	2020-10-18 00:36:00+00
118	8	2020-10-18 14:47:00+00	2020-10-19 00:36:00+00
119	8	2020-10-19 14:47:00+00	2020-10-20 00:36:00+00
120	8	2020-10-20 14:47:00+00	2020-10-21 00:36:00+00
121	9	2020-10-06 14:47:00+00	2020-10-07 00:36:00+00
122	9	2020-10-07 14:47:00+00	2020-10-08 00:36:00+00
123	9	2020-10-08 14:47:00+00	2020-10-09 00:36:00+00
124	9	2020-10-09 14:47:00+00	2020-10-10 00:36:00+00
125	9	2020-10-10 14:47:00+00	2020-10-11 00:36:00+00
126	9	2020-10-11 14:47:00+00	2020-10-12 00:36:00+00
127	9	2020-10-12 14:47:00+00	2020-10-13 00:36:00+00
128	9	2020-10-13 14:47:00+00	2020-10-14 00:36:00+00
129	9	2020-10-14 14:47:00+00	2020-10-15 00:36:00+00
130	9	2020-10-15 14:47:00+00	2020-10-16 00:36:00+00
131	9	2020-10-16 14:47:00+00	2020-10-17 00:36:00+00
132	9	2020-10-17 14:47:00+00	2020-10-18 00:36:00+00
133	9	2020-10-18 14:47:00+00	2020-10-19 00:36:00+00
134	9	2020-10-19 14:47:00+00	2020-10-20 00:36:00+00
135	9	2020-10-20 14:47:00+00	2020-10-21 00:36:00+00
136	10	2020-10-06 14:47:00+00	2020-10-07 00:36:00+00
137	10	2020-10-07 14:47:00+00	2020-10-08 00:36:00+00
138	10	2020-10-08 14:47:00+00	2020-10-09 00:36:00+00
139	10	2020-10-09 14:47:00+00	2020-10-10 00:36:00+00
140	10	2020-10-10 14:47:00+00	2020-10-11 00:36:00+00
141	10	2020-10-11 14:47:00+00	2020-10-12 00:36:00+00
142	10	2020-10-12 14:47:00+00	2020-10-13 00:36:00+00
143	10	2020-10-13 14:47:00+00	2020-10-14 00:36:00+00
144	10	2020-10-14 14:47:00+00	2020-10-15 00:36:00+00
145	10	2020-10-15 14:47:00+00	2020-10-16 00:36:00+00
146	10	2020-10-16 14:47:00+00	2020-10-17 00:36:00+00
147	10	2020-10-17 14:47:00+00	2020-10-18 00:36:00+00
148	10	2020-10-18 14:47:00+00	2020-10-19 00:36:00+00
149	10	2020-10-19 14:47:00+00	2020-10-20 00:36:00+00
150	10	2020-10-20 14:47:00+00	2020-10-21 00:36:00+00
151	11	2020-10-06 14:47:00+00	2020-10-07 00:36:00+00
152	11	2020-10-07 14:47:00+00	2020-10-08 00:36:00+00
153	11	2020-10-08 14:47:00+00	2020-10-09 00:36:00+00
154	11	2020-10-09 14:47:00+00	2020-10-10 00:36:00+00
155	11	2020-10-10 14:47:00+00	2020-10-11 00:36:00+00
156	11	2020-10-11 14:47:00+00	2020-10-12 00:36:00+00
157	11	2020-10-12 14:47:00+00	2020-10-13 00:36:00+00
158	11	2020-10-13 14:47:00+00	2020-10-14 00:36:00+00
159	11	2020-10-14 14:47:00+00	2020-10-15 00:36:00+00
160	11	2020-10-15 14:47:00+00	2020-10-16 00:36:00+00
161	11	2020-10-16 14:47:00+00	2020-10-17 00:36:00+00
162	11	2020-10-17 14:47:00+00	2020-10-18 00:36:00+00
163	11	2020-10-18 14:47:00+00	2020-10-19 00:36:00+00
164	11	2020-10-19 14:47:00+00	2020-10-20 00:36:00+00
165	11	2020-10-20 14:47:00+00	2020-10-21 00:36:00+00
166	12	2020-10-06 14:47:00+00	2020-10-07 00:36:00+00
167	12	2020-10-07 14:47:00+00	2020-10-08 00:36:00+00
168	12	2020-10-08 14:47:00+00	2020-10-09 00:36:00+00
169	12	2020-10-09 14:47:00+00	2020-10-10 00:36:00+00
170	12	2020-10-10 14:47:00+00	2020-10-11 00:36:00+00
171	12	2020-10-11 14:47:00+00	2020-10-12 00:36:00+00
172	12	2020-10-12 14:47:00+00	2020-10-13 00:36:00+00
173	12	2020-10-13 14:47:00+00	2020-10-14 00:36:00+00
174	12	2020-10-14 14:47:00+00	2020-10-15 00:36:00+00
175	12	2020-10-15 14:47:00+00	2020-10-16 00:36:00+00
176	12	2020-10-16 14:47:00+00	2020-10-17 00:36:00+00
177	12	2020-10-17 14:47:00+00	2020-10-18 00:36:00+00
178	12	2020-10-18 14:47:00+00	2020-10-19 00:36:00+00
179	12	2020-10-19 14:47:00+00	2020-10-20 00:36:00+00
180	12	2020-10-20 14:47:00+00	2020-10-21 00:36:00+00
181	13	2020-10-06 14:47:00+00	2020-10-07 00:36:00+00
182	13	2020-10-07 14:47:00+00	2020-10-08 00:36:00+00
183	13	2020-10-08 14:47:00+00	2020-10-09 00:36:00+00
184	13	2020-10-09 14:47:00+00	2020-10-10 00:36:00+00
185	13	2020-10-10 14:47:00+00	2020-10-11 00:36:00+00
186	13	2020-10-11 14:47:00+00	2020-10-12 00:36:00+00
187	13	2020-10-12 14:47:00+00	2020-10-13 00:36:00+00
188	13	2020-10-13 14:47:00+00	2020-10-14 00:36:00+00
189	13	2020-10-14 14:47:00+00	2020-10-15 00:36:00+00
190	13	2020-10-15 14:47:00+00	2020-10-16 00:36:00+00
191	13	2020-10-16 14:47:00+00	2020-10-17 00:36:00+00
192	13	2020-10-17 14:47:00+00	2020-10-18 00:36:00+00
193	13	2020-10-18 14:47:00+00	2020-10-19 00:36:00+00
194	13	2020-10-19 14:47:00+00	2020-10-20 00:36:00+00
195	13	2020-10-20 14:47:00+00	2020-10-21 00:36:00+00
196	14	2020-10-06 14:47:00+00	2020-10-07 00:36:00+00
197	14	2020-10-07 14:47:00+00	2020-10-08 00:36:00+00
198	14	2020-10-08 14:47:00+00	2020-10-09 00:36:00+00
199	14	2020-10-09 14:47:00+00	2020-10-10 00:36:00+00
200	14	2020-10-10 14:47:00+00	2020-10-11 00:36:00+00
201	14	2020-10-11 14:47:00+00	2020-10-12 00:36:00+00
202	14	2020-10-12 14:47:00+00	2020-10-13 00:36:00+00
203	14	2020-10-13 14:47:00+00	2020-10-14 00:36:00+00
204	14	2020-10-14 14:47:00+00	2020-10-15 00:36:00+00
205	14	2020-10-15 14:47:00+00	2020-10-16 00:36:00+00
206	14	2020-10-16 14:47:00+00	2020-10-17 00:36:00+00
207	14	2020-10-17 14:47:00+00	2020-10-18 00:36:00+00
208	14	2020-10-18 14:47:00+00	2020-10-19 00:36:00+00
209	14	2020-10-19 14:47:00+00	2020-10-20 00:36:00+00
210	14	2020-10-20 14:47:00+00	2020-10-21 00:36:00+00
211	15	2020-10-06 14:47:00+00	2020-10-07 00:36:00+00
212	15	2020-10-07 14:47:00+00	2020-10-08 00:36:00+00
213	15	2020-10-08 14:47:00+00	2020-10-09 00:36:00+00
214	15	2020-10-09 14:47:00+00	2020-10-10 00:36:00+00
215	15	2020-10-10 14:47:00+00	2020-10-11 00:36:00+00
216	15	2020-10-11 14:47:00+00	2020-10-12 00:36:00+00
217	15	2020-10-12 14:47:00+00	2020-10-13 00:36:00+00
218	15	2020-10-13 14:47:00+00	2020-10-14 00:36:00+00
219	15	2020-10-14 14:47:00+00	2020-10-15 00:36:00+00
220	15	2020-10-15 14:47:00+00	2020-10-16 00:36:00+00
221	15	2020-10-16 14:47:00+00	2020-10-17 00:36:00+00
222	15	2020-10-17 14:47:00+00	2020-10-18 00:36:00+00
223	15	2020-10-18 14:47:00+00	2020-10-19 00:36:00+00
224	15	2020-10-19 14:47:00+00	2020-10-20 00:36:00+00
225	15	2020-10-20 14:47:00+00	2020-10-21 00:36:00+00
244	1	2020-10-08 21:56:34.517506+00	2020-10-08 21:56:34.517506+00
247	9	2020-10-08 22:00:26.66429+00	2020-10-08 22:00:26.66429+00
248	9	2020-10-08 22:10:35.268275+00	2020-10-08 22:10:35.268275+00
249	9	2020-10-08 22:10:36.947547+00	2020-10-08 22:10:36.947547+00
250	9	2020-10-08 22:10:38.00665+00	2020-10-08 22:10:38.00665+00
252	11	2020-10-08 22:14:40.668478+00	2020-10-08 22:14:40.668478+00
253	11	2020-10-08 22:15:00.747718+00	2020-10-08 22:15:00.747718+00
258	2	2020-10-08 22:26:23.586979+00	\N
259	2	2020-10-08 22:26:27.565273+00	\N
260	8	2020-10-08 22:28:09.134851+00	\N
261	10	2020-10-08 22:45:44.238565+00	\N
262	11	2020-10-08 22:57:36.56798+00	\N
263	11	2020-10-08 23:11:55.575165+00	\N
264	13	2020-10-08 23:21:32.888106+00	\N
265	4	2020-10-08 23:35:08.577602+00	\N
266	8	2020-10-08 23:36:10.735307+00	\N
\.


--
-- Name: departments_departmentId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."departments_departmentId_seq"', 1, false);


--
-- Name: employees_employeeId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."employees_employeeId_seq"', 34, true);


--
-- Name: shifts_shiftId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."shifts_shiftId_seq"', 266, true);


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

