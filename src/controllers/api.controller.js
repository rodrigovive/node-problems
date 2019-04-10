const getUrl = require('../utils/getUrl');

exports.listAvailable = (req,res) => {
    return res.status(200).json({
        list: [
            {
                title: 'solution',
                url: getUrl(req,'api/solution')
            }
        ]
    })
}