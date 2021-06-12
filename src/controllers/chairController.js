const Gpio = require('onoff').Gpio;
const output = new Gpio(4, "out");

exports.get = (req, res, next) => {

    if(output.readSync() == 0) {
        output.writeSync(1);
    } else {
        output.writeSync(0);
    }
    console.log(output.readSync());
    
    res.status(200).send('Requisição recebida com sucesso!');
};


exports.getById = (req, res, next) => {
    res.status(200).send('Requisição recebida com sucesso!');
};



exports.post = (req, res, next) => {
    res.status(201).send('Requisição recebida com sucesso!');
};


exports.put = (req, res, next) => {
    let id = req.params.id;
    res.status(201).send(`Requisição recebida com sucesso! ${id}`);
};

exports.delete = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`Requisição recebida com sucesso! ${id}`);
};