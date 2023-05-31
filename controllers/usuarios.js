const { response, request } = require('express');


const usuarioGet = (req, res = response)=> {
    const { page = 1, limit = 10 } = req.query;
    res.json({
        msg:"GET api - Controller",
        page,
        limit
    });
  }

  const usuarioPost = (req, res = response)=> {

    const {nombre, edad} = req.body;

    res.json({
        msg:"POST api - Controller",
        nombre,
        edad
    });
  }

  const usuarioPut = (req = request, res = response)=> {

    const {id} = req.params;
    res.json({
        msg:"PUT api - Controller",
        id
    });
  }

  const usuarioDelete = (req, res = response)=> {
    res.json({
        msg:"DELETE api - Controller"
    });
  }

module.exports = {
    usuarioGet,
    usuarioPost,
    usuarioPut,
    usuarioDelete
}