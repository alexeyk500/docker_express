const fsp = require('fs').promises;

class LogsController {
  async getLogs ({req, res, logsPath}) {
    const data = await fsp.readFile(logsPath, {encoding: 'utf-8'});
    const logs = data.split('\n').filter(item=>!!item)
    res.render('index.hbs', {
      title: 'Мои контакты',
      email: 'alexeyk500@yandex.ru',
      phone: '+9818842701',
      logs,
    })
  }

  async addLog ({req, res, logsPath}) {
    const { logText } = req.body;
    await fsp.appendFile(logsPath, `${logText}\n`);
    res.redirect('/');
  }
}

module.exports = new LogsController();