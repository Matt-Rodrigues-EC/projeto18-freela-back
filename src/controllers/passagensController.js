import { getPassagens, getPassagemId, getPassagensList, getPassagenscidade } from "../repositories/passagensRepository.js";

async function getPassagemCidade(req, res){
    const {cidade} = req.params;
    try{
        const passagens = await getPassagens(cidade);
        res.status(200).send(passagens);
    }catch(error){
        res.status(500).send(error.message);
    }
}

async function getPassagensLista(req, res){
    try{
        const passagens = await getPassagensList();
        res.status(200).send(passagens);
    }catch(error){
        res.status(500).send(error.message);
    }
}

async function getPassagensListaCidade(req, res){

    try{
        const passagens = await getPassagensList();
        res.status(200).send(passagens);
    }catch(error){
        res.status(500).send(error.message);
    }
}

async function getPassagem(req, res){
    const {id, cidade} = req.headers;
    try{
        const passagem = await getPassagemId(id, cidade);
        res.status(200).send(passagem);
    }catch(error){
        res.status(500).send(error.message);
    }
}

export{ 
    getPassagemCidade,
    getPassagensLista,
    getPassagensListaCidade,
    getPassagem
}