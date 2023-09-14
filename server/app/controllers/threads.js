const { getThreadData } = require("../services/getThreadData.js");

const getThread = async (req, res) => {
	const id = req.params.id;
	try {
		const thread = await getThreadData(id);
		res.send(thread);
	} catch (error) {
		res.status(error.status).json({ error: error.message });
	}
};

module.exports = { getThread };
