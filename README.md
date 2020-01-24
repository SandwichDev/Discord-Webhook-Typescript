# Discord Webhook Wrapper

## Prerequisites

You must have Typescript installed. To install Typescript simply run `npm install -g typescript`

## Setting Up

First clone the repository using `git clone https://github.com/SandwichDev/Discord-Webhook-Typescript.git`

To make a distribution version simply run `tsc` in the root of the folder. This will create a distribution folder at the root of the footer.

## Api

All examples will be using 

```javascript 
const {Webhook} = require('../dist/index')
```

You should change this to where the index file of the Webhook Wrapper is.

### Creating Webhooks

`new Webhook(WEBHOOK_URL)`

##### Parameters 

`WEBHOOK_URL` : Webhook URL. Found when creating the webhook.

### Setting Embed Title

```javascript
const TitleWebhook new Webhook(WEBHOOK_URL)

TitleWebhook
.setTitle(TITLE)
```

##### Parameters 

`TITLE` : Title of the embed.

### Setting Embed Description

```javascript
const TitleWebhook new Webhook(WEBHOOK_URL)

TitleWebhook
.setDescription(DESCRIPTION)
```

##### Parameters 

`DESCRIPTION` : Description of the embed.

### Setting Embed Title URL

```javascript
const TitleWebhook new Webhook(WEBHOOK_URL)

TitleWebhook
.setURL(URL)
```

##### Parameters 

`URL` : URL for the title of the embed.

### Setting Embed Timestamp

```javascript
const TimestampWebhook new Webhook(WEBHOOK_URL)

TimestampWebhook
.setTimestamp()
```

##### Parameters 

None

### Setting Embed Color

```javascript
const ColorWebhook new Webhook(WEBHOOK_URL)

ColorWebhook
.setColor(COLOR)
```

##### Parameters 

`COLOR` : Color for the embed. Must be in decimal color format.

### Setting Embed Footer

```javascript
const FooterWebhook new Webhook(WEBHOOK_URL)

FooterWebhook
.setFooter(FOOTER_TEXT,ICON_URL)
```

##### Parameters 

`FOOTER_TEXT` : Text for the footer of the embed.

`ICON_URL` : URL of the icon to be displayed in the footer of the embed.

### Setting Embed Image

```javascript
const ImageWebhook new Webhook(WEBHOOK_URL)

ImageWebhook
.setImage(ICON_URL)
```

##### Parameters 

`ICON_URL` : URL of the image to be displayed in the embed.

### Setting Embed Thumbnail

```javascript
const ThumbnailWebhook new Webhook(WEBHOOK_URL)

ThumbnailWebhook
.setImage(THUMBNAIL_URL)
```

##### Parameters 

`THUMBNAIL_URL` : URL of the thumbnail image to be displayed in the embed.

### Setting Embed Author

```javascript
const AuthorWebhook new Webhook(WEBHOOK_URL)

AuthorWebhook
.setAuthor(AUTHOR_NAME,URL,ICON_URL)
```

##### Parameters 

`AUTHOR_NAME` : Name of the author to be displayed on the embed.

`URL` : URL when clicking on author name.

`ICON_URL` : Icon to be displayed next to author name in the embed.

### Adding Embed Fields

```javascript
const FieldWebhook new Webhook(WEBHOOK_URL)

FieldWebhook
.addField(FIELD_NAME,FIELD_TEXT,INLINE)
```

##### Parameters 

`FIELD_NAME` : Name of the field on the embed.

`FIELD_TEXT` : Text of the field on the embed.

`INLINE` : `true` or `false`.


### Sending Webhook Message

```javascript
const TestWebhook new Webhook(WEBHOOK_URL)

TestWebhook
.send()
.then(()=>console.log('Webhook sent'))
.catch((err)=>console.log(err))
```

##### Parameters 

None

###### Made by SandwichDev






