interface Embed{
    title? : String
    type? : String
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
interface EmbedBuilder{
    embed : Embed
}
class EmbedBuilder{
    setTitle(title : String){
        this.embed.title = title || ''
        return this
    }
    setDescription(description : String){
        this.embed.description = description || ''
        return this
    }
    setURL(url : String){
        this.embed.url = url || ''
        return this
    }
    setTimestamp(){
        let date = new Date()
        let isoString = date.toISOString()
        this.embed.timestamp = isoString
        return this
    }
    setColor(color : Number){
        this.embed.color = color
        return this
    }
    setFooter(text? : String,icon_url? : String){
        this.embed.footer = {
            'text' : text || '',
            'icon_url' : icon_url || ''
        }
        return this
    }
    setImage(url? : String){
        this.embed.image = {
            'url' : url || '',
        }
        return this
    }
    setThumbnail(url? : String){
        this.embed.thumbnail = {
            'url' : url || '',
        }
        return this
    }
    setAuthor(name? : String, url? : String,icon_url? : String){
        this.embed.author = {
            'name' : name || '',
            'url' : url || '',
            'icon_url' : icon_url || '',
        }
        return this
    }
    setField(name : String,value : String,inline? : Boolean){
        this.embed.fields.push({name : name, value : value, inline : inline || false})
        return this
    }
}

export default EmbedBuilder