// controllers/datetime.controller.js

import { getJanken } from "../services/datetime.service.js";

export const getResult = async (req, res, next) => {
  try {
    const result = await getJanken(req.body);
    return res.status(200).json(result);
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};