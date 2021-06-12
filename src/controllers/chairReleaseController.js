const Gpio = require('onoff').Gpio;


exports.get = (req, res, next) => {

    const output = new Gpio(21, "out");
    output.writeSync(1);
    setTimeout(function() {
        output.writeSync(0);
        output.unexport();
    }, 1000);
    
    
    
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