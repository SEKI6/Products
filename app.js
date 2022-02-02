const express = require('express')
const app = express()
var cors = require('cors')
const port = 3000
const fruits=['apple','pear','plum','raspberry']

app.use(cors())

const imgUrl='https://media.wired.com/photos/5bcea2642eea7906bba84c67/master/w_2560%2Cc_limit/iphonexr.jpg'
const items=[
{name:'iPhone', price: 800, category:'mobile', brand:'Apple',
url:imgUrl+'Iphone.jpg'},
{name:'A70', price: 400, category:'mobile', brand:'Samsung',
url:'https://images.samsung.com/is/image/samsung/hr-galaxy-a70-a705-sm-a705fzbusio-frontblue-160754876?$624_624_PNG$'},
{name:'A71', price: 500, category:'mobile', brand:'Samsung',
url:'pJC2XtTdwIEQ3EBXsVMWYKFh7Uw5brB0jzlPIGgbjRrsABfPpVlXgC9QAhCEAIQhACEIQAhCEAhySF6hAKQhCAUhCEAIQhACEIQAhCEAIQhACEIQAhCEAIQhACEIQAhCEAIQhAf.jpg'},
{name:'S21', price: 700, category:'mobile', brand:'Samsung',
url:'https://www.links.hr/content/images/thumbs/009/0096459_smartphone-samsung-galaxy-s21-g991b-5g-6-2-8gb-128gb-android-11-sivi-040100780.jpg'},
{name:'HP gamer', price: 1700, category:'desktop', brand:'HP',
url:'https://i.cdn.nrholding.net/43539146/1000/1000'}
]
app.get('/', (req, res) => {
//res.send(items.sort((a,b)=>a.price-b.price))
//res.send(items.filter(a=>a.price>500))
//res.send(items.filter(a=>a.brand==='Samsung'))
//res.send(items.filter(a=>a.category!='mobile'))
res.send(items)
})
app.get('/total',(req,res)=>{
const total=items.reduce((acc,value)=>acc+value.price,0)
res.send(total.toString())
})
app.listen(port)