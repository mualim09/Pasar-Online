//Controller untuk homepage 
class HomeController {
    //**Cek autentikasi user */
    index = async (req, res) => {
        const userSession = req.session.user;

        if(!userSession) return res.json({ auth: false });

        res.json({ auth: true, userSession });
    }
}

module.exports = HomeController;