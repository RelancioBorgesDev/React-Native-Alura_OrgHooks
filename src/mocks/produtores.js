import green from '../assets/produtores/green.png'
import salad from '../assets/produtores/salad.png'
import jennyJack from '../assets/produtores/jenny-jack.png'
import grow from '../assets/produtores/grow.png'
import potager from '../assets/produtores/potager.png'

const gerarNumAleatorio = (max, min) => Math.floor(Math.random() * (max - min + 1) + min)

const produtores = {
    titulo: "Produtores",
    lista: [
        {
            nome: "Green",
            imagem: green,
            distancia: `${gerarNumAleatorio(1, 500)}m`,
            estrelas: gerarNumAleatorio(1,5)
        },
        {
            nome: "Salad",
            imagem: salad,
            distancia: `${gerarNumAleatorio(1, 500)}m`,
            estrelas: gerarNumAleatorio(1,5)
        },
        {
            nome: "Jenny Jack Farm",
            imagem: jennyJack,
            distancia: `${gerarNumAleatorio(1, 500)}m`,
            estrelas: gerarNumAleatorio(1,5)
        },
        {
            nome: "grow",
            imagem: grow,
            distancia: `${gerarNumAleatorio(1, 500)}m`,
            estrelas: gerarNumAleatorio(1,5)
        },
        {
            nome: "Potage",
            imagem: potager,
            distancia: `${gerarNumAleatorio(1, 500)}m`,
            estrelas: gerarNumAleatorio(1,5)
        },
    ]
}

export default produtores