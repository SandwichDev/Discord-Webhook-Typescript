const { Webhook }  = require('../dist/index')
const TestWebhook = new Webhook('') //Add your webhook url here

TestWebhook
.setTitle('Test Title')
.setDescription('Test Description')
.setURL('http://www.example.com/')
.setTimestamp()
.setColor(9848410)
.setFooter('Test Footer','https://i.redd.it/w3kr4m2fi3111.png')
.setImage('https://i.redd.it/w3kr4m2fi3111.png')
.setThumbnail('https://i.redd.it/w3kr4m2fi3111.png')
.setAuthor('Test Author','http://www.example.com/','https://i.redd.it/w3kr4m2fi3111.png')
.addField('Test Field','Test Field Value',true)
.addField('Test Field','Test Field Value',false)
.send()
.then(()=>{console.log('Webhook successfully sent')})
.catch((err)=>{console.log(err)})