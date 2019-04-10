const path = require("path");
const directoryPath = path.join(__dirname, "../solutions");
const readDir = require("../utils/readDir");
const getUrl = require("../utils/getUrl");

exports.listSolutions = (req, res) => {
  readDir(directoryPath, (err, files) => {
    if (err) return res.status(404).json(err);
    const fileJs = files
      .filter(v => v.match(/js$/))
      .map(v => ({
        url: getUrl(req, `/api/solution/${v.replace(".js", "")}`),
        name: v.replace(".js", "")
      }));
    return res.status(200).json({ solutions: fileJs });
  });
};

exports.getSolution = (req, res) => {
  const {
    params: { solution: slug }
  } = req;

  readDir(directoryPath, (err, files) => {
    if (err) return res.status(404).json(err);
    const filesJs = files
      .filter(v => v.match(/js$/))
      .map(v => v.replace(".js", ""));
    if (filesJs.includes(slug)) {
      const solution = require(`../solutions/${slug}.js`);
      const listMethods = Object.keys(solution).map(v => ({
        url: getUrl(req, `/api/solution/${slug}/${v.replace(".js", "")}`),
        name: v.replace(".js", "")
      }));
      return res.status(200).json({
        solution: slug,
        methods: listMethods
      });
    } else {
      return res.status(404).json({ msg: "Solution not found" });
    }
  });
};

exports.getSolutionMethod = (req, res) => {
  const {
    params: { solution: slug, method }
  } = req;

  readDir(directoryPath, (err, files) => {
    if (err) return res.status(404).json(err);
    const filesJs = files
      .filter(v => v.match(/js$/))
      .map(v => v.replace(".js", ""));
    if (filesJs.includes(slug)) {
      const solution = require(`../solutions/${slug}.js`);
      const methodSolution =
        Object.keys(solution)
          .filter(v => method == v)
          .shift() || null;
      if (methodSolution) {
        solution[methodSolution]((err, msg) => {
          if (err) return res.status(404).json(err);
          return res.status(200).json(msg);
        });
      } else {
        return res.status(404).json({ msg: "Method not found" });
      }
    } else {
      return res.status(404).json({ msg: "Solution not found" });
    }
  });
};
