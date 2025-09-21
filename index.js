import exprss from 'express'
import cors from "cors"

const app = exprss()

app.use(cors({
  origin: "https://full-stack-project-01.vercel.app",  // tumhara frontend
  methods: ["GET","POST","PUT","DELETE"],
  credentials: true
}))


app.get('/api/users' ,(req,res)=>{
    const arr = [{"id":1,"first_name":"Margit","last_name":"Leyton","email":"mleyton0@gizmodo.com","gender":"Female","ip_address":"221.198.214.79"},
{"id":2,"first_name":"Lorie","last_name":"Tompion","email":"ltompion1@icio.us","gender":"Genderfluid","ip_address":"56.230.206.133"},
{"id":3,"first_name":"Levy","last_name":"Roskell","email":"lroskell2@friendfeed.com","gender":"Male","ip_address":"63.18.155.10"},
{"id":4,"first_name":"Oralla","last_name":"Handforth","email":"ohandforth3@chicagotribune.com","gender":"Female","ip_address":"238.26.104.168"},
{"id":5,"first_name":"Robinette","last_name":"Geach","email":"rgeach4@jugem.jp","gender":"Female","ip_address":"84.19.241.109"},
{"id":6,"first_name":"Donny","last_name":"Paulitschke","email":"dpaulitschke5@google.ca","gender":"Female","ip_address":"130.105.215.175"},
{"id":7,"first_name":"Francis","last_name":"McKeown","email":"fmckeown6@spiegel.de","gender":"Male","ip_address":"131.194.154.148"},
{"id":8,"first_name":"Kirbie","last_name":"Conway","email":"kconway7@nature.com","gender":"Female","ip_address":"225.178.44.236"},
{"id":9,"first_name":"Gibby","last_name":"Thorius","email":"gthorius8@t-online.de","gender":"Male","ip_address":"144.111.42.92"},
{"id":10,"first_name":"Rorke","last_name":"Prentice","email":"rprentice9@diigo.com","gender":"Male","ip_address":"216.51.177.55"},
{"id":11,"first_name":"Issie","last_name":"Loud","email":"ilouda@disqus.com","gender":"Female","ip_address":"54.204.51.196"},
{"id":12,"first_name":"Jarret","last_name":"Chamley","email":"jchamleyb@yellowpages.com","gender":"Male","ip_address":"37.214.176.2"},
{"id":13,"first_name":"Phil","last_name":"Bruckman","email":"pbruckmanc@ustream.tv","gender":"Female","ip_address":"243.251.109.19"},
{"id":14,"first_name":"Nikkie","last_name":"Jobson","email":"njobsond@patch.com","gender":"Female","ip_address":"160.175.167.227"},
{"id":15,"first_name":"Jameson","last_name":"Guiel","email":"jguiele@bizjournals.com","gender":"Non-binary","ip_address":"192.30.119.124"},
{"id":16,"first_name":"Kelci","last_name":"Buckie","email":"kbuckief@taobao.com","gender":"Female","ip_address":"154.165.201.242"},
{"id":17,"first_name":"Debora","last_name":"Skyme","email":"dskymeg@indiegogo.com","gender":"Female","ip_address":"223.96.197.70"},
{"id":18,"first_name":"Damian","last_name":"Swatton","email":"dswattonh@google.com.au","gender":"Male","ip_address":"4.137.127.146"},
{"id":19,"first_name":"Brandon","last_name":"Dunaway","email":"bdunawayi@canalblog.com","gender":"Male","ip_address":"94.76.46.134"},
{"id":20,"first_name":"Fawnia","last_name":"McAuliffe","email":"fmcauliffej@bbc.co.uk","gender":"Female","ip_address":"60.70.40.68"}]
    res.json(arr)
})

app.listen(3000, ()=>{
    console.log("App Is Running")
})