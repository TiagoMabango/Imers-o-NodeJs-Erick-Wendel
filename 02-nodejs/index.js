/*
0-Obter um usuario
1-Obter o numero de telefone de um usuario a partir do id
2-obter o enderoço de usuario pelo id
*/
function obterUsuario(callback){
    setTimeout(function(){
        return callback(null,{
            id: 1,
            nome: 'Ala',
            dataNascimento: new Date()
        })
    },1000)
}

function obterTelefone(idUsuario, callback){
    setTimeout(()=>{
        return callback(null,{
            telefone: "38943754957",
            ddd: 111
        })
    },2000)
}

function obterEnderenco(idUsuario, callback){
    setTimeout(()=>{
        return callback(null,{
            rua: "Rua dos bolos",
            numero: 0
        })
    },2000)
}

obterUsuario(function resolverUsuario(error, usuario){
    if(error){
        console.error("DEU RUIN em USUARIOS",error)
        return;
    }

    obterTelefone(usuario.id, function resolverTelefone(error1, telefone){
        if(error1){
            console.error("DEU RUIN em Telefone",error)
            return;
        } 
    })

    obterEnderenco(usuario.id,function resolverEndereco(error2,endereco){
        if(error2){
            console.error("DEU RUIN em endereco",error)
            return;
        } 
        console.log(` 
            Nome: ${usuario.nome},
            Endereco: ${endereco.rua},${endereco.numero}
            Telefone: (${telefone.ddd})${telefone.telefone}
        `)
    })
})