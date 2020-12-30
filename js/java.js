
const items = [
    {
id: 0,
nome: 'camiseta',
img:'01.jpg',
quantidade: 0
},
{
    id: 1,
    nome: 'top',
    img:'01.jpg',
    quantidade: 0
    },
    {
        id: 2,
        nome: 'tenis',
        img:'01.jpg',
        quantidade: 0
        },
]

inicializarloja = ()=>{
var containerprodutos = document.getElementById('produtos');

items.map((val)=>{

console.log(val.nome);

})

}

