const mysql = require('../../db/mysql');

module.exports = {
    create: (req, res) => {
        console.log(req.body);
        res.json({ msg: 'Se insertó algo' });
    },
    list: (req, res) => {
        console.log('Listar todo');
        mysql.query('SELECT * FROM productos', (error, rows, fields) => {
            if (error) {
                res.json(error);
            } else {
                res.json(rows);
            }
        });
        // Esta línea no se ejecutará porque ya se ha respondido con json anteriormente
        // res.json({ msg: 'Se devuelve toda la información' });
    }
};
