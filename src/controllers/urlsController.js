import connection from "../dataBase/dbStrategy.js";
import jwt from "jsonwebtoken";
import {
  shortyUrl,
  getUrls,
  deleteDb,
  urlById,
  rankingUrls,
} from "../repository/urlsRepository.js";

export const shortenUrl = async (req, res) => {
  const email = res.locals.id;
  const { url } = req.body;

  if (!url) {
    return res.sendStatus(422);
  }

  try {
    const shortUrl = await shortyUrl(email, url);

    res.status(201).send({ shortUrl });
  } catch (error) {
    console.log(error);
    res.status(422).send(error);
  }
};

export const getUrl = async (req, res) => {
  const { shortUrl } = req.params;

  try {
    const url = await getUrls(shortUrl);
    return res.redirect(url);
  } catch (error) {
    console.log(error);
    return res.sendStatus(404);
  }
};

export const deleteUrl = async (req, res) => {
  const { id } = req.params;
  const token = res.locals.token;
  try {
    const result = await deleteDb(id, token, res.locals.user.userId);
    res.sendStatus(result);
  } catch (error) {
    console.log(error);
    res.sendStatus(401);
  }
};

export const getUrlById = async (req, res) => {
  const { id } = req.params;

  try {
    const { dadosUrl, rowCount } = await urlById(id);

    if (rowCount === 0) {
      return res.sendStatus(404);
    }

    res.status(200).send(dadosUrl);
  } catch (error) {
    res.sendStatus(404);
  }
};


export const rankingUrl = async (req, res) =>{

    const {rows:ranking} = await rankingUrls();

    res.status(200).send(ranking)
}