const Gpio = require('onoff').Gpio;
const output = new Gpio(21, "out");

exports.get = (req, res, next) => {

    output.writeSync(1);
    setTimeout(function() {
        output.writeSync(0);
    }, 1000);
    
    
    //output.unexport();
    res.status(200).send('Requisição recebida com sucesso!');
};


exports.getById = (req, res, next) => {
    res.status(200).send('Requisição recebida com sucesso!');
};



exports.post = (req, res, next) => {

    console.log(req.body.time);
    output.writeSync(1);
    console.log()
    setTimeout(function() {
        output.writeSync(0);
    }, req.body.time);

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