const webhook = require('../dist/index').Webhook
const Webhook = new webhook('https://discordapp.com/api/webhooks/662080341036498956/4cuxaX8hhaiF-gqqsi8e4Lc3mQ_fvmAlLpozMowOCLhF7SHc82ovKy2LNF1o6THRHa8k') //Add your webhook url here

Webhook
.setTitle('Test Title')
.setDescription('Test Description')
.setURL('http://www.example.com/')
.setTimestamp()
.setColor(9848410)
.setFooter('Test Footer','https://i.redd.it/w3kr4m2fi3111.png')
.setImage('https://i.redd.it/w3kr4m2fi3111.png')
.setThumbnail('https://i.redd.it/w3kr4m2fi3111.png')
.setAuthor('Test Author','http://www.example.com/','https://i.redd.it/w3kr4m2fi3111.png')
.setField('Test Field','Test Field Value',true)
.setField('Test Field','Test Field Value',false)
.send()
.then(()=>{console.log('Webhook successfully sent')})
.catch((err)=>{console.log(err)})