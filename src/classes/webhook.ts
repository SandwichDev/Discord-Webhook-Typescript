import EmbedBuilder from './embedBuilder'
import Request from '../utils/request'
interface ParsedString{
    endpoint : string,
    hostname : string
}
interface Embed{
    title? : String
    description? : String
    url? : String
    timestamp? : String
    color? : Number
    footer? : Object
    image? : Object
    thumbnail? : Object
    author?: Object
    fields : Array<Object>
}
interface Webhook{
    webhookURL : string
    hostName : string
    embed : Embed
}
function parseString(url : String) : ParsedString{
    const split : string[] = url.split('/api')
    const endpoint : string = `/api${split[1]}`
    const hostname : string = split[0].substr(8,split[0].length)
    return {endpoint : endpoint, hostname : hostname}
}
class Webhook extends EmbedBuilder{
    constructor(webhookURL : String){
        super()
        const parsedString : ParsedString = parseString(webhookURL)
        this.webhookURL= parsedString.endpoint
        this.hostName = parsedString.hostname
        this.embed = {fields : []}
    }
    async send(){
        return new Promise(async (resolve,reject)=>{
            try{
                await Request.post(this.webhookURL,this.embed,this.hostName)
                resolve()
            }catch(e){
                reject(e)
            }
        })
    }
}


export default Webhook;