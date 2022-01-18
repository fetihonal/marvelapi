import { useEffect, useState } from 'react';
import axios from 'axios';

const marvelURL = 'https://gateway.marvel.com/v1/public/',
  apiKey = `apikey=344d40df0c8cc373141c1dc321fae9cf`,
  hash = "bd0722d5750b6362d5ba0212ca36726b"

export default function useGetData(options) {
  const [data, setData] = useState({ characters: [], maxPage: 0 });
  const {
    offset,
    name,
    exactMatch,
    sortName,
    limit,
  } = Object.assign({
    offset,
    name: '',
    exactMatch: false,
    sortName: '',
    limit: 30,
  }, options);

  let url =
    `${marvelURL}characters?${apiKey}&offset=${offset}&orderBy=${sortName}name&limit=${limit}hash=${hash}`;
  if (name) {
    if (exactMatch) { url += `&name=${name}`; }
    else { url += `&nameStartsWith=${name}`; }
  }

  useEffect(() => {
    axios.get(url)
      .then(function (response) {

        if (response.status === 200) {
          if (offset > response.data.data.total) {
            throw new Error('Page does not exist.');
          } else {

            const pages = Math.floor(response.data.data.total / limit);
            setData({
              characters: [...data.characters, ...response.data.data.results],
              maxPage: response.data.data.total % limit > 0 ? pages + 1 : pages,
            })
          }
        } else {
          throw new Error(`Marvel API bad response. Status code ${response.code}.`);
        }
      })
      .catch(function (error) {
        // throw new Error(`Marvel API bad response. Status code ${error}.`);
      });
  }, [options.offset]);

  return { data };
}

export const useGetDetailData = (id) => {
  const [data, setData] = useState([]);
  let url =
    `${marvelURL}characters/${id}?ts=1&${apiKey}&hash=${hash}`;
  useEffect(() => {

    axios.get(url)
      .then(function (response) {

        setData(response.data.data.results[0])
      })
      .catch(function (error) {
        // throw new Error(`Marvel API bad response. Status code ${error}.`);
      });
  }, []);

  return { data };
}

export const useGetComicsData = (id) => {
  const [comics, setComics] = useState([]);
  let url =
    `${marvelURL}characters/${id}/comics?orderBy=focDate&limit=10&ts=1&${apiKey}&hash=${hash}`;
  useEffect(() => {

    axios.get(url)
      .then(function (response) {
        setComics(response.data.data.results)
      })
      .catch(function (error) {
        // throw new Error(`Marvel API bad response. Status code ${error}.`);
      });
  }, []);

  return { comics };
}
