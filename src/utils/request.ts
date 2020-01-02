import * as https from 'https'
import { hostname } from 'os'
import { ClientRequest } from 'http'
const request = {
    async post(url : string,embed : any,hostname:string) {
        return new Promise(async (resolve, reject) => {
            const body : string = JSON.stringify({embeds : [embed]})
            let options : https.RequestOptions = {
                'method' : 'POST',
                'hostname' : hostname,
                'path' : url,
                'timeout' : 30000,
                'headers' : {
                    'Content-Type' : 'application/json',
                    'Content-Length' : Buffer.byteLength(body)
                }
            }
            //options['headers']['User-Agent'] = 'User-Agent: DiscordBot (https://github.com/abalabahaha/eris, 1)'
            const request : ClientRequest = https.request(options)
            request.on('response', (resp) => {
                let response = ''
                resp.on('data', (chunk) => {
                    response += chunk
                }).once('end', () => {
                    try {
                        resolve(response)
                    } catch (e) {
                        reject(e)
                    }
                })
                resp.on('error', (err : Error) => {
                    reject(err)
                })
            }).on('error', (err : Error) => {
                reject(err)
            })
            request.write(body)
            request.end()
        })
    }
}



export default request;