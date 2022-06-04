const {
  addProperty,
  getProperties,
  getProperty,
} = require("./../services/propertiesService");

const create = async (req, res) => {
  try {
      const property = req.body;
      const { statusHttp, response } = await addProperty(property);
      res.status(statusHttp).json(response);
  } catch (error) {
      res.status(500).send(error);
  }
};

const getAll = async (req, res) => {
  try {
      const filter = req.query;
      const { statusHttp, response } = await getProperties(filter);
      res.status(statusHttp).json(response);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getDetail = async (req, res) => {
  try {
  } catch (error) {}
};

module.exports = {
  create,
  getAll,
  getDetail,
};
