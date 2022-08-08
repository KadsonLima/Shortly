--
-- PostgreSQL database dump
--

-- Dumped from database version 14.4 (Ubuntu 14.4-1.pgdg20.04+1)
-- Dumped by pg_dump version 14.4 (Ubuntu 14.4-0ubuntu0.22.04.1)

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

--
-- Name: heroku_ext; Type: SCHEMA; Schema: -; Owner: u5bqa5rpnnanti
--

CREATE SCHEMA heroku_ext;


ALTER SCHEMA heroku_ext OWNER TO u5bqa5rpnnanti;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: sessions; Type: TABLE; Schema: public; Owner: fzvuulmdjcleyt
--

CREATE TABLE public.sessions (
    id integer NOT NULL,
    token text NOT NULL,
    "userId" integer NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now()
);


ALTER TABLE public.sessions OWNER TO fzvuulmdjcleyt;

--
-- Name: sessions_id_seq; Type: SEQUENCE; Schema: public; Owner: fzvuulmdjcleyt
--

CREATE SEQUENCE public.sessions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.sessions_id_seq OWNER TO fzvuulmdjcleyt;

--
-- Name: sessions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: fzvuulmdjcleyt
--

ALTER SEQUENCE public.sessions_id_seq OWNED BY public.sessions.id;


--
-- Name: urls; Type: TABLE; Schema: public; Owner: fzvuulmdjcleyt
--

CREATE TABLE public.urls (
    id integer NOT NULL,
    url text NOT NULL,
    "shortUrl" text NOT NULL,
    "visitCount" integer DEFAULT 0 NOT NULL,
    "userId" integer NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now()
);


ALTER TABLE public.urls OWNER TO fzvuulmdjcleyt;

--
-- Name: urls_id_seq; Type: SEQUENCE; Schema: public; Owner: fzvuulmdjcleyt
--

CREATE SEQUENCE public.urls_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.urls_id_seq OWNER TO fzvuulmdjcleyt;

--
-- Name: urls_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: fzvuulmdjcleyt
--

ALTER SEQUENCE public.urls_id_seq OWNED BY public.urls.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: fzvuulmdjcleyt
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name text NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now()
);


ALTER TABLE public.users OWNER TO fzvuulmdjcleyt;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: fzvuulmdjcleyt
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO fzvuulmdjcleyt;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: fzvuulmdjcleyt
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: sessions id; Type: DEFAULT; Schema: public; Owner: fzvuulmdjcleyt
--

ALTER TABLE ONLY public.sessions ALTER COLUMN id SET DEFAULT nextval('public.sessions_id_seq'::regclass);


--
-- Name: urls id; Type: DEFAULT; Schema: public; Owner: fzvuulmdjcleyt
--

ALTER TABLE ONLY public.urls ALTER COLUMN id SET DEFAULT nextval('public.urls_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: fzvuulmdjcleyt
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: sessions; Type: TABLE DATA; Schema: public; Owner: fzvuulmdjcleyt
--

COPY public.sessions (id, token, "userId", "createdAt") FROM stdin;
3	eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImpvYW9AZHJpdmVuLmNvbS5iciIsImlhdCI6MTY1OTYzMzgwM30.aZyqyNvsT9M-BP8Vg4TJ5Ao8AF2dKen8iQfieenoxls	1	2022-08-04 17:23:24.123217
13	eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImthZHNvbkBrYWlvLmNvbSIsImlhdCI6MTY1OTc1Nzc1MX0.fEBjjbUUQUfCzLG_BZxaXQg-o0IgdLXX2QWdnjGYdhQ	3	2022-08-06 03:49:11.187199
15	eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImthZHNpbmhvZEBzYWQuY29tIiwiaWF0IjoxNjU5ODA4NTY0fQ.UbuIN4sApIPFAWHuUdsWLOcjBFjGyiiKu0vRS2xoluc	6	2022-08-06 17:56:05.095104
16	eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyM0Bob3RtYWlsLmNvbSIsImlhdCI6MTY1OTgxNzI5N30.b8gce-0DLLZ4evVFMI1uTj62M_8YVgINjluPu7un96c	7	2022-08-06 20:21:37.880134
17	eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImthZHNpbmhvQGRzYWQuY29tIiwiaWF0IjoxNjU5ODg3NDU5fQ.2UMVXiPipDUEMXggd4ezNtXtW9Tlgaw5W8fvvMF_YcE	5	2022-08-07 15:50:59.815591
21	eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImthZHNpbnJmaG9kQHNhZC5jb20iLCJpYXQiOjE2NTk5NjY5NjN9.5cs4d17wclIg9emu10oI9d-cD42drlkiqu-fAMjppFw	10	2022-08-08 13:56:03.784169
\.


--
-- Data for Name: urls; Type: TABLE DATA; Schema: public; Owner: fzvuulmdjcleyt
--

COPY public.urls (id, url, "shortUrl", "visitCount", "userId", "createdAt") FROM stdin;
9	https://www.postgresql.org/docs/current/sql-delete.html	JAQ4spu3BJimb2ZhnhM-m	2	3	2022-08-05 01:53:44.764459
24	https://bootcampra.notion.site/Projeto-Shortly-API-4ffa110c0ebd4e83ad7302cfafd33133	umcxAo5ewXzwtgawtGQ8r	10	5	2022-08-08 13:58:23.181606
12	2	__ELgnLs551ExBnlbGSEb	0	6	2022-08-06 17:56:40.380302
13	3	BEEQQSxEFwpdu6eJWSr5I	0	6	2022-08-06 17:56:44.036628
14	4	b46bfJruY_tGMPrjxyvJW	0	6	2022-08-06 17:56:48.087425
11	1	o79LyhL8XVbUp_cTJ_Kik	9	6	2022-08-06 17:56:35.803588
8	https://www.postgresql.org/docs/current/sql-delete.html	hIcoHNHJwbPrz8JIcfTWh	4	3	2022-08-05 01:53:18.557298
6	https://www.postgresql.org/docs/current/sql-delete.html	2klZk2y8v8SffNRH21Lzy	1	3	2022-08-05 01:20:35.255989
7	hdsadsa.html	wl1mhzfkj6SWZ-b9VtHYh	6	3	2022-08-05 01:21:32.969826
15	https://www.google.com	A18qqw1e1LjXPAz__txc2	6	7	2022-08-06 20:21:56.130119
20	https://github.com/ff	pV6VAyA0eqRUlc_MQZVkt	0	5	2022-08-07 15:51:09.35941
21	https://github.com/ff33	Pd_DGYah83qnJJjlQLYba	0	5	2022-08-07 15:51:18.447536
23	https://github.com/ff3453	dbcKvZSs68oE52SHOZ6EV	1	5	2022-08-07 15:51:22.580039
19	https://github.com/ff	K4JcAXcncErF5GFYdC220	1	6	2022-08-06 21:27:01.833748
22	https://github.com/ff343	Ev4mlmdAUapLG2cCuXLkw	1	5	2022-08-07 15:51:20.363507
5	https://www.postgresql.org/docs/current/sql-delete.html	Fi8Y-cR7tcmT-VX5o4TpB	2	1	2022-08-04 17:34:25.411644
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: fzvuulmdjcleyt
--

COPY public.users (id, name, email, password, "createdAt") FROM stdin;
1	João	joao@driven.com.br	$2b$10$buuOXbA.c2IStauUEkg8AuItfz09yOs9drwYqY/SZUrPe2y8VeoKe	2022-08-04 16:40:36.121579
2	Joãddo	joaod@driven.com.br	$2b$10$O.uQSNBmTHL/0jK1EnZf9ev.kxDBi6P8OWIzNLWg948u83lU2bdAC	2022-08-04 17:07:41.646787
3	Kadson	kadson@kaio.com	$2b$10$fyjHlSzPLLrS8UDe0YaIJeuFjIZ8mngTbimpC/Y2TD5bw7MNIJFCu	2022-08-04 17:28:33.894845
4	Kadson	kadson@kaio2.com	$2b$10$DaLZSzfTvAOfJ6AlKn04EuEcFtNOaMuKzJWDl/j0ghyWCQ50/gA5q	2022-08-06 02:23:08.395358
5	KasH	kadsinho@dsad.com	$2b$10$uA7FfMEUgP1i098O0WRUD.A63rOZFSpMVSPucnq4k9CuTDMDOMj66	2022-08-06 17:55:08.898206
6	KasH4	kadsinhod@sad.com	$2b$10$InBbosBSKapElbjJJ6l03ucpIkPhW2TPc3Ru9ww9YLFXrzOHX.ti6	2022-08-06 17:55:24.074528
7	Kadson	123@hotmail.com	$2b$10$WDMNlhMzgBiAwE1g.bxhTucy9A/HcwufFB35vEfEB4EAjG/rR7lMy	2022-08-06 20:21:13.298108
8	kadfson	kadfson@hoasd.com	$2b$10$rN3Un14YLGgnWjYCZLLYA.zVyqE7BO5sLFtT1rAdNuGrfdvxgrI.K	2022-08-08 03:43:19.840301
9	kadfson	kadfson@hoasd3.com	$2b$10$lFeobY7A.d4b1sXzA0joEODctlHgRuXzhrxyA5CEtfhO1xCHuc87G	2022-08-08 03:43:34.970254
10	KasH4	kadsinrfhod@sad.com	$2b$10$/uq1a/zdg4vBb22Ihc4I9OAAhbuuaRmAM1bciY57wlTIBwxHry5zm	2022-08-08 13:37:58.2552
\.


--
-- Name: sessions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: fzvuulmdjcleyt
--

SELECT pg_catalog.setval('public.sessions_id_seq', 21, true);


--
-- Name: urls_id_seq; Type: SEQUENCE SET; Schema: public; Owner: fzvuulmdjcleyt
--

SELECT pg_catalog.setval('public.urls_id_seq', 24, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: fzvuulmdjcleyt
--

SELECT pg_catalog.setval('public.users_id_seq', 10, true);


--
-- Name: sessions sessions_pkey; Type: CONSTRAINT; Schema: public; Owner: fzvuulmdjcleyt
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_pkey PRIMARY KEY (id);


--
-- Name: sessions sessions_token_key; Type: CONSTRAINT; Schema: public; Owner: fzvuulmdjcleyt
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_token_key UNIQUE (token);


--
-- Name: urls urls_pkey; Type: CONSTRAINT; Schema: public; Owner: fzvuulmdjcleyt
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT urls_pkey PRIMARY KEY (id);


--
-- Name: urls urls_shortUrl_key; Type: CONSTRAINT; Schema: public; Owner: fzvuulmdjcleyt
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT "urls_shortUrl_key" UNIQUE ("shortUrl");


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: fzvuulmdjcleyt
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: fzvuulmdjcleyt
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: sessions sessions_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: fzvuulmdjcleyt
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT "sessions_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- Name: urls urls_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: fzvuulmdjcleyt
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT "urls_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- Name: SCHEMA heroku_ext; Type: ACL; Schema: -; Owner: u5bqa5rpnnanti
--

GRANT USAGE ON SCHEMA heroku_ext TO fzvuulmdjcleyt;


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: fzvuulmdjcleyt
--

REVOKE ALL ON SCHEMA public FROM postgres;
REVOKE ALL ON SCHEMA public FROM PUBLIC;
GRANT ALL ON SCHEMA public TO fzvuulmdjcleyt;
GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- Name: LANGUAGE plpgsql; Type: ACL; Schema: -; Owner: postgres
--

GRANT ALL ON LANGUAGE plpgsql TO fzvuulmdjcleyt;


--
-- PostgreSQL database dump complete
--

