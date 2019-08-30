**[@poppinss/request](../README.md)**

[Globals](../README.md) › ["Request"](../modules/_request_.md) › [Request](_request_.request.md)

# Class: Request

HTTP Request class exposes the interface to consistently read values
related to a given HTTP request. The class is wrapper over
[IncomingMessage](https://nodejs.org/api/http.html#http_class_http_incomingmessage)
and has extended API.

You can access the original [IncomingMessage](https://nodejs.org/api/http.html#http_class_http_incomingmessage)
using `request.request` property.

## Hierarchy

* Macroable

  * **Request**

## Implements

* [RequestContract](../interfaces/_contracts_.requestcontract.md)

## Index

### Constructors

* [constructor](_request_.request.md#constructor)

### Properties

* [parsedUrl](_request_.request.md#parsedurl)
* [request](_request_.request.md#request)
* [response](_request_.request.md#response)
* [_getters](_request_.request.md#static-protected-_getters)
* [_macros](_request_.request.md#static-protected-_macros)

### Methods

* [accepts](_request_.request.md#accepts)
* [ajax](_request_.request.md#ajax)
* [all](_request_.request.md#all)
* [charset](_request_.request.md#charset)
* [charsets](_request_.request.md#charsets)
* [completeUrl](_request_.request.md#completeurl)
* [cookie](_request_.request.md#cookie)
* [cookies](_request_.request.md#cookies)
* [encoding](_request_.request.md#encoding)
* [encodings](_request_.request.md#encodings)
* [except](_request_.request.md#except)
* [fresh](_request_.request.md#fresh)
* [get](_request_.request.md#get)
* [hasBody](_request_.request.md#hasbody)
* [header](_request_.request.md#header)
* [headers](_request_.request.md#headers)
* [hostname](_request_.request.md#hostname)
* [id](_request_.request.md#id)
* [input](_request_.request.md#input)
* [intended](_request_.request.md#intended)
* [ip](_request_.request.md#ip)
* [ips](_request_.request.md#ips)
* [is](_request_.request.md#is)
* [language](_request_.request.md#language)
* [languages](_request_.request.md#languages)
* [method](_request_.request.md#method)
* [only](_request_.request.md#only)
* [original](_request_.request.md#original)
* [pjax](_request_.request.md#pjax)
* [plainCookie](_request_.request.md#plaincookie)
* [plainCookies](_request_.request.md#plaincookies)
* [post](_request_.request.md#post)
* [protocol](_request_.request.md#protocol)
* [raw](_request_.request.md#raw)
* [secure](_request_.request.md#secure)
* [setInitialBody](_request_.request.md#setinitialbody)
* [stale](_request_.request.md#stale)
* [subdomains](_request_.request.md#subdomains)
* [types](_request_.request.md#types)
* [updateBody](_request_.request.md#updatebody)
* [updateQs](_request_.request.md#updateqs)
* [updateRawBody](_request_.request.md#updaterawbody)
* [url](_request_.request.md#url)
* [getGetter](_request_.request.md#static-getgetter)
* [getMacro](_request_.request.md#static-getmacro)
* [getter](_request_.request.md#static-getter)
* [hasGetter](_request_.request.md#static-hasgetter)
* [hasMacro](_request_.request.md#static-hasmacro)
* [hydrate](_request_.request.md#static-hydrate)
* [macro](_request_.request.md#static-macro)

## Constructors

###  constructor

\+ **new Request**(`request`: IncomingMessage, `response`: ServerResponse, `_config`: DeepReadonly‹[RequestConfigContract](../modules/_contracts_.md#requestconfigcontract)›): *[Request](_request_.request.md)*

**Parameters:**

Name | Type |
------ | ------ |
`request` | IncomingMessage |
`response` | ServerResponse |
`_config` | DeepReadonly‹[RequestConfigContract](../modules/_contracts_.md#requestconfigcontract)› |

**Returns:** *[Request](_request_.request.md)*

## Properties

###  parsedUrl

• **parsedUrl**: *UrlWithStringQuery* =  parse(this.request.url!, false)

*Implementation of [RequestContract](../interfaces/_contracts_.requestcontract.md).[parsedUrl](../interfaces/_contracts_.requestcontract.md#parsedurl)*

Parses copy of the URL with query string as a string and not
object. This is done to build URL's with query string without
stringifying the object

___

###  request

• **request**: *IncomingMessage*

*Implementation of [RequestContract](../interfaces/_contracts_.requestcontract.md).[request](../interfaces/_contracts_.requestcontract.md#request)*

___

###  response

• **response**: *ServerResponse*

*Implementation of [RequestContract](../interfaces/_contracts_.requestcontract.md).[response](../interfaces/_contracts_.requestcontract.md#response)*

___

### `Static` `Protected` _getters

▪ **_getters**: *object*

*Overrides void*

#### Type declaration:

___

### `Static` `Protected` _macros

▪ **_macros**: *object*

*Overrides void*

Required by Macroable

#### Type declaration:

## Methods

###  accepts

▸ **accepts**(`types`: string[]): *string | null*

*Implementation of [RequestContract](../interfaces/_contracts_.requestcontract.md)*

Returns the best type using `Accept` header and
by matching it against the given types.

If nothing is matched, then `null` will be returned

Make sure to check [accepts](https://www.npmjs.com/package/accepts) package
docs too.

**`example`** 
```js
switch (request.accepts(['json', 'html'])) {
  case 'json':
    return response.json(user)
  case 'html':
    return view.render('user', { user })
  default:
    // decide yourself
}
```

**Parameters:**

Name | Type |
------ | ------ |
`types` | string[] |

**Returns:** *string | null*

___

###  ajax

▸ **ajax**(): *boolean*

*Implementation of [RequestContract](../interfaces/_contracts_.requestcontract.md)*

Returns a boolean telling, if request `X-Requested-With === 'xmlhttprequest'`
or not.

**Returns:** *boolean*

___

###  all

▸ **all**(): *object*

*Implementation of [RequestContract](../interfaces/_contracts_.requestcontract.md)*

Returns reference to the merged copy of request body
and query string

**Returns:** *object*

* \[ **key**: *string*\]: any

___

###  charset

▸ **charset**(`charsets`: string[]): *string | null*

*Implementation of [RequestContract](../interfaces/_contracts_.requestcontract.md)*

Returns the best charset using `Accept-charset` header
and by matching it against the given charsets.

If nothing is matched, then `null` will be returned

Make sure to check [accepts](https://www.npmjs.com/package/accepts) package
docs too.

**`example`** 
```js
switch (request.charset(['utf-8', 'ISO-8859-1'])) {
  case 'utf-8':
    // make utf-8 friendly response
  case 'ISO-8859-1':
    // make ISO-8859-1 friendly response
}
```

**Parameters:**

Name | Type |
------ | ------ |
`charsets` | string[] |

**Returns:** *string | null*

___

###  charsets

▸ **charsets**(): *string[]*

*Implementation of [RequestContract](../interfaces/_contracts_.requestcontract.md)*

Return the charsets that the request accepts, in the order of the
client's preference (most preferred first).

Make sure to check [accepts](https://www.npmjs.com/package/accepts) package
docs too.

**Returns:** *string[]*

___

###  completeUrl

▸ **completeUrl**(`includeQueryString?`: undefined | false | true): *string*

*Implementation of [RequestContract](../interfaces/_contracts_.requestcontract.md)*

Returns the complete HTTP url by combining
[protocol](_request_.request.md#protocol)://[hostname](_request_.request.md#hostname)/[url](_request_.request.md#url)

**`example`** 
```js
request.completeUrl()

// include query string
request.completeUrl(true)
```

**Parameters:**

Name | Type |
------ | ------ |
`includeQueryString?` | undefined \| false \| true |

**Returns:** *string*

___

###  cookie

▸ **cookie**(`key`: string, `defaultValue?`: undefined | string): *any*

Returns value for a given key from signed cookies. Optional
defaultValue is returned when actual value is undefined.

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`defaultValue?` | undefined \| string |

**Returns:** *any*

___

###  cookies

▸ **cookies**(): *object*

*Implementation of [RequestContract](../interfaces/_contracts_.requestcontract.md)*

Returns all parsed and signed cookies. Signed cookies ensures
that their value isn't tampered.

**Returns:** *object*

* \[ **key**: *string*\]: any

___

###  encoding

▸ **encoding**(`encodings`: string[]): *string | null*

*Implementation of [RequestContract](../interfaces/_contracts_.requestcontract.md)*

Returns the best encoding using `Accept-encoding` header
and by matching it against the given encodings.

If nothing is matched, then `null` will be returned

Make sure to check [accepts](https://www.npmjs.com/package/accepts) package
docs too.

**Parameters:**

Name | Type |
------ | ------ |
`encodings` | string[] |

**Returns:** *string | null*

___

###  encodings

▸ **encodings**(): *string[]*

*Implementation of [RequestContract](../interfaces/_contracts_.requestcontract.md)*

Return the charsets that the request accepts, in the order of the
client's preference (most preferred first).

Make sure to check [accepts](https://www.npmjs.com/package/accepts) package
docs too.

**Returns:** *string[]*

___

###  except

▸ **except**(`keys`: string[]): *object*

*Implementation of [RequestContract](../interfaces/_contracts_.requestcontract.md)*

Get everything from the request body except the given keys.

**`example`** 
```js
request.except(['_csrf'])
```

**Parameters:**

Name | Type |
------ | ------ |
`keys` | string[] |

**Returns:** *object*

* \[ **key**: *string*\]: any

___

###  fresh

▸ **fresh**(): *boolean*

*Implementation of [RequestContract](../interfaces/_contracts_.requestcontract.md)*

Returns a boolean telling if the new response etag evaluates same
as the request header `if-none-match`. In case of `true`, the
server must return `304` response, telling the browser to
use the client cache.

You won't have to deal with this method directly, since AdonisJs will
handle this for you when `http.etag = true` inside `config/app.js` file.

However, this is how you can use it manually.

**`example`** 
```js
const responseBody = view.render('some-view')

// sets the HTTP etag header for response
response.setEtag(responseBody)

if (request.fresh()) {
  response.sendStatus(304)
} else {
  response.send(responseBody)
}
```

**Returns:** *boolean*

___

###  get

▸ **get**(): *object*

*Implementation of [RequestContract](../interfaces/_contracts_.requestcontract.md)*

Returns reference to the query string object

**Returns:** *object*

* \[ **key**: *string*\]: any

___

###  hasBody

▸ **hasBody**(): *boolean*

*Implementation of [RequestContract](../interfaces/_contracts_.requestcontract.md)*

Returns a boolean telling if request has body

**Returns:** *boolean*

___

###  header

▸ **header**(`key`: string, `defaultValue?`: any): *string | undefined*

*Implementation of [RequestContract](../interfaces/_contracts_.requestcontract.md)*

Returns value for a given header key. The default value is
used when original value is `undefined`.

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`defaultValue?` | any |

**Returns:** *string | undefined*

___

###  headers

▸ **headers**(): *IncomingHttpHeaders*

*Implementation of [RequestContract](../interfaces/_contracts_.requestcontract.md)*

Returns a copy of headers as an object

**Returns:** *IncomingHttpHeaders*

___

###  hostname

▸ **hostname**(): *string | null*

*Implementation of [RequestContract](../interfaces/_contracts_.requestcontract.md)*

Returns the request hostname. If proxy headers are trusted, then
`X-Forwarded-Host` is given priority over the `Host` header.

You can control the behavior of trusting the proxy values by defining it
inside the `config/app.js` file.

```js
{
  http: {
   trustProxy: '127.0.0.1'
  }
}
```

The value of trustProxy is passed directly to [proxy-addr](https://www.npmjs.com/package/proxy-addr)

**Returns:** *string | null*

___

###  id

▸ **id**(): *string | undefined*

*Implementation of [RequestContract](../interfaces/_contracts_.requestcontract.md)*

Returns the request id from the `x-request-id` header. The
header is untoched, if it already exists.

**Returns:** *string | undefined*

___

###  input

▸ **input**(`key`: string, `defaultValue?`: any): *any*

*Implementation of [RequestContract](../interfaces/_contracts_.requestcontract.md)*

Returns value for a given key from the request body or query string.
The `defaultValue` is used when original value is `undefined`.

**`example`** 
```js
request.input('username')

// with default value
request.input('username', 'virk')
```

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`defaultValue?` | any |

**Returns:** *any*

___

###  intended

▸ **intended**(): *string*

*Implementation of [RequestContract](../interfaces/_contracts_.requestcontract.md)*

Returns the HTTP request method. This is the original
request method. For spoofed request method, make
use of [method](_request_.request.md#method).

**`example`** 
```js
request.intended()
```

**Returns:** *string*

___

###  ip

▸ **ip**(): *string*

*Implementation of [RequestContract](../interfaces/_contracts_.requestcontract.md)*

Returns the ip address of the user. This method is optimize to fetch
ip address even when running your AdonisJs app behind a proxy.

You can also define your own custom function to compute the ip address by
defining `app.http.getIp` as a function inside the config file.

```js
{
  http: {
    getIp (request) {
      // I am using nginx as a proxy server and want to trust 'x-real-ip'
      return request.header('x-real-ip')
    }
  }
}
```

You can control the behavior of trusting the proxy values by defining it
inside the `config/app.js` file.

```js
{
  http: {
   trustProxy: '127.0.0.1'
  }
}
```

The value of trustProxy is passed directly to [proxy-addr](https://www.npmjs.com/package/proxy-addr)

**Returns:** *string*

___

###  ips

▸ **ips**(): *string[]*

*Implementation of [RequestContract](../interfaces/_contracts_.requestcontract.md)*

Returns an array of ip addresses from most to least trusted one.
This method is optimize to fetch ip address even when running
your AdonisJs app behind a proxy.

You can control the behavior of trusting the proxy values by defining it
inside the `config/app.js` file.

```js
{
  http: {
   trustProxy: '127.0.0.1'
  }
}
```

The value of trustProxy is passed directly to [proxy-addr](https://www.npmjs.com/package/proxy-addr)

**Returns:** *string[]*

___

###  is

▸ **is**(`types`: string[]): *string | null*

*Implementation of [RequestContract](../interfaces/_contracts_.requestcontract.md)*

Returns the best matching content type of the request by
matching against the given types.

The content type is picked from the `content-type` header and request
must have body.

The method response highly depends upon the types array values. Described below:

| Type(s) | Return value |
|----------|---------------|
| ['json'] | json |
| ['application/*'] | application/json |
| ['vnd+json'] | application/json |

**`example`** 
```js
const bodyType = request.is(['json', 'xml'])

if (bodyType === 'json') {
 // process JSON
}

if (bodyType === 'xml') {
 // process XML
}
```

**Parameters:**

Name | Type |
------ | ------ |
`types` | string[] |

**Returns:** *string | null*

___

###  language

▸ **language**(`languages`: string[]): *string | null*

*Implementation of [RequestContract](../interfaces/_contracts_.requestcontract.md)*

Returns the best language using `Accept-language` header
and by matching it against the given languages.

If nothing is matched, then `null` will be returned

Make sure to check [accepts](https://www.npmjs.com/package/accepts) package
docs too.

**`example`** 
```js
switch (request.language(['fr', 'de'])) {
  case 'fr':
    return view.render('about', { lang: 'fr' })
  case 'de':
    return view.render('about', { lang: 'de' })
  default:
    return view.render('about', { lang: 'en' })
}
```

**Parameters:**

Name | Type |
------ | ------ |
`languages` | string[] |

**Returns:** *string | null*

___

###  languages

▸ **languages**(): *string[]*

*Implementation of [RequestContract](../interfaces/_contracts_.requestcontract.md)*

Return the languages that the request accepts, in the order of the
client's preference (most preferred first).

Make sure to check [accepts](https://www.npmjs.com/package/accepts) package
docs too.

**Returns:** *string[]*

___

###  method

▸ **method**(): *string*

*Implementation of [RequestContract](../interfaces/_contracts_.requestcontract.md)*

Returns the request HTTP method by taking method spoofing into account.

Method spoofing works when all of the following are true.

1. `app.http.allowMethodSpoofing` config value is true.
2. request query string has `_method`.
3. The [intended](_request_.request.md#intended) request method is `POST`.

**`example`** 
```js
request.method()
```

**Returns:** *string*

___

###  only

▸ **only**<**T**, **U**>(`keys`: T[]): *U*

*Implementation of [RequestContract](../interfaces/_contracts_.requestcontract.md)*

Get value for specified keys.

**`example`** 
```js
request.only(['username', 'age'])
```

**Type parameters:**

▪ **T**: *string*

▪ **U**

**Parameters:**

Name | Type |
------ | ------ |
`keys` | T[] |

**Returns:** *U*

___

###  original

▸ **original**(): *object*

*Implementation of [RequestContract](../interfaces/_contracts_.requestcontract.md)*

Returns reference to the merged copy of original request
query string and body

**Returns:** *object*

* \[ **key**: *string*\]: any

___

###  pjax

▸ **pjax**(): *boolean*

*Implementation of [RequestContract](../interfaces/_contracts_.requestcontract.md)*

Returns a boolean telling, if request has `X-Pjax` header
set or not

**Returns:** *boolean*

___

###  plainCookie

▸ **plainCookie**(`key`: string, `defaultValue?`: undefined | string): *any*

Returns value for a given key from unsigned cookies. Optional
defaultValue is returned when actual value is undefined.

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`defaultValue?` | undefined \| string |

**Returns:** *any*

___

###  plainCookies

▸ **plainCookies**(): *object*

*Implementation of [RequestContract](../interfaces/_contracts_.requestcontract.md)*

Returns all parsed and unsigned cookies. Unsigned cookies gives
no guarantee for cookie tampering. You only need `plainCookies`
when cookie is set by the client and not the server

**Returns:** *object*

* \[ **key**: *string*\]: any

___

###  post

▸ **post**(): *object*

*Implementation of [RequestContract](../interfaces/_contracts_.requestcontract.md)*

Returns reference to the request body

**Returns:** *object*

* \[ **key**: *string*\]: any

___

###  protocol

▸ **protocol**(): *string*

*Implementation of [RequestContract](../interfaces/_contracts_.requestcontract.md)*

Returns the request protocol by checking for the URL protocol or
`X-Forwarded-Proto` header.

If the `trust` is evaluated to `false`, then URL protocol is returned,
otherwise `X-Forwarded-Proto` header is used (if exists).

You can control the behavior of trusting the proxy values by defining it
inside the `config/app.js` file.

```js
{
  http: {
   trustProxy: '127.0.0.1'
  }
}
```

The value of trustProxy is passed directly to [proxy-addr](https://www.npmjs.com/package/proxy-addr)

**Returns:** *string*

___

###  raw

▸ **raw**(): *string | null*

*Implementation of [RequestContract](../interfaces/_contracts_.requestcontract.md)*

Returns the request raw body (if exists), or returns `null`.

Ideally you must be dealing with the parsed body accessed using [input](_request_.request.md#input), [all](_request_.request.md#all) or
[post](_request_.request.md#post) methods. The `raw` body is always a string.

**Returns:** *string | null*

___

###  secure

▸ **secure**(): *boolean*

*Implementation of [RequestContract](../interfaces/_contracts_.requestcontract.md)*

Returns a boolean telling if request is served over `https`
or not. Check [protocol](_request_.request.md#protocol) method to know how protocol is
fetched.

**Returns:** *boolean*

___

###  setInitialBody

▸ **setInitialBody**(`body`: object): *void*

Set initial request body. A copy of the input will be maintained as the original
request body. Since the request body and query string is subject to mutations, we
keep one original reference to flash old data (whenever required).

This method is supposed to be invoked by the body parser and must be called only
once. For further mutations make use of `updateBody` method.

**Parameters:**

Name | Type |
------ | ------ |
`body` | object |

**Returns:** *void*

___

###  stale

▸ **stale**(): *boolean*

*Implementation of [RequestContract](../interfaces/_contracts_.requestcontract.md)*

Opposite of [fresh](_request_.request.md#fresh)

**Returns:** *boolean*

___

###  subdomains

▸ **subdomains**(): *string[]*

*Implementation of [RequestContract](../interfaces/_contracts_.requestcontract.md)*

Returns an array of subdomains for the given host. An empty array is
returned if [hostname](_request_.request.md#hostname) is `null` or is an IP address.

Also `www` is not considered as a subdomain

**Returns:** *string[]*

___

###  types

▸ **types**(): *string[]*

*Implementation of [RequestContract](../interfaces/_contracts_.requestcontract.md)*

Return the types that the request accepts, in the order of the
client's preference (most preferred first).

Make sure to check [accepts](https://www.npmjs.com/package/accepts) package
docs too.

**Returns:** *string[]*

___

###  updateBody

▸ **updateBody**(`body`: object): *void*

Update the request body with new data object. The `all` property
will be re-computed by merging the query string and request
body.

**Parameters:**

Name | Type |
------ | ------ |
`body` | object |

**Returns:** *void*

___

###  updateQs

▸ **updateQs**(`data`: object): *void*

Update the query string with the new data object. The `all` property
will be re-computed by merging the query and the request body.

**Parameters:**

Name | Type |
------ | ------ |
`data` | object |

**Returns:** *void*

___

###  updateRawBody

▸ **updateRawBody**(`rawBody`: string): *void*

*Implementation of [RequestContract](../interfaces/_contracts_.requestcontract.md)*

Update the request raw body. Bodyparser sets this when unable to parse
the request body or when request is multipart/form-data.

**Parameters:**

Name | Type |
------ | ------ |
`rawBody` | string |

**Returns:** *void*

___

###  url

▸ **url**(`includeQueryString?`: undefined | false | true): *string*

*Implementation of [RequestContract](../interfaces/_contracts_.requestcontract.md)*

Returns the request relative URL.

**`example`** 
```js
request.url()

// include query string
request.url(true)
```

**Parameters:**

Name | Type |
------ | ------ |
`includeQueryString?` | undefined \| false \| true |

**Returns:** *string*

___

### `Static` getGetter

▸ **getGetter**(`name`: string): *MacroableFn | undefined*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *MacroableFn | undefined*

___

### `Static` getMacro

▸ **getMacro**(`name`: string): *MacroableFn | undefined*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *MacroableFn | undefined*

___

### `Static` getter

▸ **getter**(`name`: string, `callback`: MacroableFn, `singleton?`: undefined | false | true): *void*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`callback` | MacroableFn |
`singleton?` | undefined \| false \| true |

**Returns:** *void*

___

### `Static` hasGetter

▸ **hasGetter**(`name`: string): *boolean*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *boolean*

___

### `Static` hasMacro

▸ **hasMacro**(`name`: string): *boolean*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *boolean*

___

### `Static` hydrate

▸ **hydrate**(): *void*

*Inherited from void*

**Returns:** *void*

___

### `Static` macro

▸ **macro**(`name`: string, `callback`: MacroableFn): *void*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`callback` | MacroableFn |

**Returns:** *void*