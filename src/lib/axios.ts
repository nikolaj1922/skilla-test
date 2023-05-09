import axios from "axios";

export const getCallsRequest = axios.create({
  baseURL: "https://api.skilla.ru/mango",
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_AUTH_BEARER_TOKEN}`,
    Accept: "application/json",
  },
});

export const getRecordRequest = axios.create({
  baseURL: "https://api.skilla.ru/mango",
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_AUTH_BEARER_TOKEN}`,
    "Content-Type": "audio/mpeg, audio/x-mpeg, audio/x-mpeg-3, audio/mpeg3",
    "Content-Encoding": "binary",
    "Content-Disposition": 'filename="record.mp3"',
  },
});
