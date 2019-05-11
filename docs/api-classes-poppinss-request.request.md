---
id: api-classes-poppinss-request.request
title: Request
sidebar_label: Request
---

[@poppinss/request](api-readme.md) > [@poppinss/request](api-modules-poppinss-request.md) > [Request](api-classes-poppinss-request.request.md)

## Class

HTTP Request class exposes the interface to consistently read values related to a given HTTP request. The class is wrapper over [IncomingMessage](https://nodejs.org/api/http.html#http_class_http_incomingmessage) and has extended API.

You can access the original [IncomingMessage](https://nodejs.org/api/http.html#http_class_http_incomingmessage) using `request.request` property.

## Hierarchy

 `Macroable`

**↳ Request**

## Implements

* `RequestContract`

### Constructors

* [constructor](api-classes-poppinss-request.request.md#constructor)

### Properties

* [_all](api-classes-poppinss-request.request.md#_all)
* [_body](api-classes-poppinss-request.request.md#_body)
* [_config](api-classes-poppinss-request.request.md#_config)
* [_lazyAccepts](api-classes-poppinss-request.request.md#_lazyaccepts)
* [_original](api-classes-poppinss-request.request.md#_original)
* [_parsedCookies](api-classes-poppinss-request.request.md#_parsedcookies)
* [_qs](api-classes-poppinss-request.request.md#_qs)
* [_raw](api-classes-poppinss-request.request.md#_raw)
* [parsedUrl](api-classes-poppinss-request.request.md#parsedurl)
* [request](api-classes-poppinss-request.request.md#request)
* [response](api-classes-poppinss-request.request.md#response)
* [_getters](api-classes-poppinss-request.request.md#_getters)
* [_macros](api-classes-poppinss-request.request.md#_macros)

### Methods

* [_initiateAccepts](api-classes-poppinss-request.request.md#_initiateaccepts)
* [_parseCookies](api-classes-poppinss-request.request.md#_parsecookies)
* [_parseQueryString](api-classes-poppinss-request.request.md#_parsequerystring)
* [accepts](api-classes-poppinss-request.request.md#accepts)
* [ajax](api-classes-poppinss-request.request.md#ajax)
* [all](api-classes-poppinss-request.request.md#all)
* [charset](api-classes-poppinss-request.request.md#charset)
* [charsets](api-classes-poppinss-request.request.md#charsets)
* [completeUrl](api-classes-poppinss-request.request.md#completeurl)
* [cookie](api-classes-poppinss-request.request.md#cookie)
* [cookies](api-classes-poppinss-request.request.md#cookies)
* [encoding](api-classes-poppinss-request.request.md#encoding)
* [encodings](api-classes-poppinss-request.request.md#encodings)
* [except](api-classes-poppinss-request.request.md#except)
* [fresh](api-classes-poppinss-request.request.md#fresh)
* [get](api-classes-poppinss-request.request.md#get)
* [hasBody](api-classes-poppinss-request.request.md#hasbody)
* [header](api-classes-poppinss-request.request.md#header)
* [headers](api-classes-poppinss-request.request.md#headers)
* [hostname](api-classes-poppinss-request.request.md#hostname)
* [id](api-classes-poppinss-request.request.md#id)
* [input](api-classes-poppinss-request.request.md#input)
* [intended](api-classes-poppinss-request.request.md#intended)
* [ip](api-classes-poppinss-request.request.md#ip)
* [ips](api-classes-poppinss-request.request.md#ips)
* [is](api-classes-poppinss-request.request.md#is)
* [language](api-classes-poppinss-request.request.md#language)
* [languages](api-classes-poppinss-request.request.md#languages)
* [method](api-classes-poppinss-request.request.md#method)
* [only](api-classes-poppinss-request.request.md#only)
* [original](api-classes-poppinss-request.request.md#original)
* [pjax](api-classes-poppinss-request.request.md#pjax)
* [plainCookie](api-classes-poppinss-request.request.md#plaincookie)
* [plainCookies](api-classes-poppinss-request.request.md#plaincookies)
* [post](api-classes-poppinss-request.request.md#post)
* [protocol](api-classes-poppinss-request.request.md#protocol)
* [raw](api-classes-poppinss-request.request.md#raw)
* [secure](api-classes-poppinss-request.request.md#secure)
* [setInitialBody](api-classes-poppinss-request.request.md#setinitialbody)
* [stale](api-classes-poppinss-request.request.md#stale)
* [subdomains](api-classes-poppinss-request.request.md#subdomains)
* [types](api-classes-poppinss-request.request.md#types)
* [updateBody](api-classes-poppinss-request.request.md#updatebody)
* [updateQs](api-classes-poppinss-request.request.md#updateqs)
* [updateRawBody](api-classes-poppinss-request.request.md#updaterawbody)
* [url](api-classes-poppinss-request.request.md#url)
* [getGetter](api-classes-poppinss-request.request.md#getgetter)
* [getMacro](api-classes-poppinss-request.request.md#getmacro)
* [getter](api-classes-poppinss-request.request.md#getter)
* [hasGetter](api-classes-poppinss-request.request.md#hasgetter)
* [hasMacro](api-classes-poppinss-request.request.md#hasmacro)
* [hydrate](api-classes-poppinss-request.request.md#hydrate)
* [macro](api-classes-poppinss-request.request.md#macro)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Request**(request: *`IncomingMessage`*, response: *`ServerResponse`*, _config: *`RequestConfigContract`*): [Request](api-classes-poppinss-request.request.md)

**Parameters:**

| Name | Type |
| ------ | ------ |
| request | `IncomingMessage` |
| response | `ServerResponse` |
| _config | `RequestConfigContract` |

**Returns:** [Request](api-classes-poppinss-request.request.md)

___

## Properties

<a id="_all"></a>

### `<Private>` _all

**● _all**: *`any`*

A merged copy of `request` body and `querystring`

___
<a id="_body"></a>

### `<Private>` _body

**● _body**: *`any`*

Request body set using `setBody` method

___
<a id="_config"></a>

### `<Private>` _config

**● _config**: *`RequestConfigContract`*

___
<a id="_lazyaccepts"></a>

### `<Private>` _lazyAccepts

**● _lazyAccepts**: *`any`* =  null

Cached copy of `accepts` fn to do content negotiation.

___
<a id="_original"></a>

### `<Private>` _original

**● _original**: *`any`*

Original merged copy of `request body` and `querystring`. Further mutation to this object are not allowed

___
<a id="_parsedcookies"></a>

### `<Private>` _parsedCookies

**● _parsedCookies**: *`object` \| `null`* =  null

Copy of lazily parsed signed and plain cookies.

___
<a id="_qs"></a>

### `<Private>` _qs

**● _qs**: *`any`*

Parsed query string

___
<a id="_raw"></a>

### `<Private>` _raw

**● _raw**: *`string` \| `null`* =  null

Raw request body as text

___
<a id="parsedurl"></a>

###  parsedUrl

**● parsedUrl**: *`UrlWithStringQuery`* =  parse(this.request.url!, false)

Parses copy of the URL with query string as a string and not object. This is done to build URL's with query string without stringifying the object

___
<a id="request"></a>

###  request

**● request**: *`IncomingMessage`*

___
<a id="response"></a>

###  response

**● response**: *`ServerResponse`*

___
<a id="_getters"></a>

### `<Static>``<Protected>` _getters

**● _getters**: *`object`*

#### Type declaration

___
<a id="_macros"></a>

### `<Static>``<Protected>` _macros

**● _macros**: *`object`*

Required by Macroable

#### Type declaration

___

## Methods

<a id="_initiateaccepts"></a>

### `<Private>` _initiateAccepts

▸ **_initiateAccepts**(): `void`

Lazily initiates the `accepts` module to make sure to parse the request headers only when one of the content-negotiation methods are used.

**Returns:** `void`

___
<a id="_parsecookies"></a>

### `<Private>` _parseCookies

▸ **_parseCookies**(): `void`

Parse cookies, if not already parsed cookies. Cookies are only parsed, when any of the cookie methods are used.

**Returns:** `void`

___
<a id="_parsequerystring"></a>

### `<Private>` _parseQueryString

▸ **_parseQueryString**(): `void`

Parses the query string

**Returns:** `void`

___
<a id="accepts"></a>

###  accepts

▸ **accepts**(types: *`string`[]*): `string` \| `null`

Returns the best type using `Accept` header and by matching it against the given types.

If nothing is matched, then `null` will be returned

Make sure to check [accepts](https://www.npmjs.com/package/accepts) package docs too.

*__example__*:
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

| Name | Type |
| ------ | ------ |
| types | `string`[] |

**Returns:** `string` \| `null`

___
<a id="ajax"></a>

###  ajax

▸ **ajax**(): `boolean`

Returns a boolean telling, if request `X-Requested-With === 'xmlhttprequest'` or not.

**Returns:** `boolean`

___
<a id="all"></a>

###  all

▸ **all**(): `object`

Returns reference to the merged copy of request body and query string

**Returns:** `object`

___
<a id="charset"></a>

###  charset

▸ **charset**(charsets: *`string`[]*): `string` \| `null`

Returns the best charset using `Accept-charset` header and by matching it against the given charsets.

If nothing is matched, then `null` will be returned

Make sure to check [accepts](https://www.npmjs.com/package/accepts) package docs too.

*__example__*:
 ```js
switch (request.charset(['utf-8', 'ISO-8859-1'])) {
  case 'utf-8':
    // make utf-8 friendly response
  case 'ISO-8859-1':
    // make ISO-8859-1 friendly response
}
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| charsets | `string`[] |

**Returns:** `string` \| `null`

___
<a id="charsets"></a>

###  charsets

▸ **charsets**(): `string`[]

Return the charsets that the request accepts, in the order of the client's preference (most preferred first).

Make sure to check [accepts](https://www.npmjs.com/package/accepts) package docs too.

**Returns:** `string`[]

___
<a id="completeurl"></a>

###  completeUrl

▸ **completeUrl**(includeQueryString?: *`undefined` \| `false` \| `true`*): `string`

Returns the complete HTTP url by combining [protocol](api-classes-poppinss-request.request.md#protocol)://[hostname](api-classes-poppinss-request.request.md#hostname)/[url](api-classes-poppinss-request.request.md#url)

*__example__*:
 ```js
request.completeUrl()

// include query string
request.completeUrl(true)
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` includeQueryString | `undefined` \| `false` \| `true` |

**Returns:** `string`

___
<a id="cookie"></a>

###  cookie

▸ **cookie**(key: *`string`*, defaultValue?: *`undefined` \| `string`*): `any`

Returns value for a given key from signed cookies. Optional defaultValue is returned when actual value is undefined.

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `string` |
| `Optional` defaultValue | `undefined` \| `string` |

**Returns:** `any`

___
<a id="cookies"></a>

###  cookies

▸ **cookies**(): `object`

Returns all parsed and signed cookies. Signed cookies ensures that their value isn't tampered.

**Returns:** `object`

___
<a id="encoding"></a>

###  encoding

▸ **encoding**(encodings: *`string`[]*): `string` \| `null`

Returns the best encoding using `Accept-encoding` header and by matching it against the given encodings.

If nothing is matched, then `null` will be returned

Make sure to check [accepts](https://www.npmjs.com/package/accepts) package docs too.

**Parameters:**

| Name | Type |
| ------ | ------ |
| encodings | `string`[] |

**Returns:** `string` \| `null`

___
<a id="encodings"></a>

###  encodings

▸ **encodings**(): `string`[]

Return the charsets that the request accepts, in the order of the client's preference (most preferred first).

Make sure to check [accepts](https://www.npmjs.com/package/accepts) package docs too.

**Returns:** `string`[]

___
<a id="except"></a>

###  except

▸ **except**(keys: *`string`[]*): `object`

Get everything from the request body except the given keys.

*__example__*:
 ```js
request.except(['_csrf'])
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| keys | `string`[] |

**Returns:** `object`

___
<a id="fresh"></a>

###  fresh

▸ **fresh**(): `boolean`

Returns a boolean telling if the new response etag evaluates same as the request header `if-none-match`. In case of `true`, the server must return `304` response, telling the browser to use the client cache.

You won't have to deal with this method directly, since AdonisJs will handle this for you when `http.etag = true` inside `config/app.js` file.

However, this is how you can use it manually.

*__example__*:
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

**Returns:** `boolean`

___
<a id="get"></a>

###  get

▸ **get**(): `object`

Returns reference to the query string object

**Returns:** `object`

___
<a id="hasbody"></a>

###  hasBody

▸ **hasBody**(): `boolean`

Returns a boolean telling if request has body

**Returns:** `boolean`

___
<a id="header"></a>

###  header

▸ **header**(key: *`string`*, defaultValue?: *`any`*): `string` \| `undefined`

Returns value for a given header key. The default value is used when original value is `undefined`.

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `string` |
| `Optional` defaultValue | `any` |

**Returns:** `string` \| `undefined`

___
<a id="headers"></a>

###  headers

▸ **headers**(): `IncomingHttpHeaders`

Returns a copy of headers as an object

**Returns:** `IncomingHttpHeaders`

___
<a id="hostname"></a>

###  hostname

▸ **hostname**(): `string` \| `null`

Returns the request hostname. If proxy headers are trusted, then `X-Forwarded-Host` is given priority over the `Host` header.

You can control the behavior of trusting the proxy values by defining it inside the `config/app.js` file.

```js
{
  http: {
   trustProxy: '127.0.0.1'
  }
}
```

The value of trustProxy is passed directly to [proxy-addr](https://www.npmjs.com/package/proxy-addr)

**Returns:** `string` \| `null`

___
<a id="id"></a>

###  id

▸ **id**(): `string`

Returns the request id from the `x-request-id` header. The header is untoched, if it already exists.

**Returns:** `string`

___
<a id="input"></a>

###  input

▸ **input**(key: *`string`*, defaultValue?: *`any`*): `any`

Returns value for a given key from the request body or query string. The `defaultValue` is used when original value is `undefined`.

*__example__*:
 ```js
request.input('username')

// with default value
request.input('username', 'virk')
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `string` |
| `Optional` defaultValue | `any` |

**Returns:** `any`

___
<a id="intended"></a>

###  intended

▸ **intended**(): `string`

Returns the HTTP request method. This is the original request method. For spoofed request method, make use of [method](api-classes-poppinss-request.request.md#method).

*__example__*:
 ```js
request.intended()
```

**Returns:** `string`

___
<a id="ip"></a>

###  ip

▸ **ip**(): `string`

Returns the ip address of the user. This method is optimize to fetch ip address even when running your AdonisJs app behind a proxy.

You can also define your own custom function to compute the ip address by defining `app.http.getIp` as a function inside the config file.

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

You can control the behavior of trusting the proxy values by defining it inside the `config/app.js` file.

```js
{
  http: {
   trustProxy: '127.0.0.1'
  }
}
```

The value of trustProxy is passed directly to [proxy-addr](https://www.npmjs.com/package/proxy-addr)

**Returns:** `string`

___
<a id="ips"></a>

###  ips

▸ **ips**(): `string`[]

Returns an array of ip addresses from most to least trusted one. This method is optimize to fetch ip address even when running your AdonisJs app behind a proxy.

You can control the behavior of trusting the proxy values by defining it inside the `config/app.js` file.

```js
{
  http: {
   trustProxy: '127.0.0.1'
  }
}
```

The value of trustProxy is passed directly to [proxy-addr](https://www.npmjs.com/package/proxy-addr)

**Returns:** `string`[]

___
<a id="is"></a>

###  is

▸ **is**(types: *`string`[]*): `string` \| `null`

Returns the best matching content type of the request by matching against the given types.

The content type is picked from the `content-type` header and request must have body.

The method response highly depends upon the types array values. Described below:

Type(s)

Return value

\['json'\]

json

\['application/\*'\]

application/json

\['vnd+json'\]

application/json

*__example__*:
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

| Name | Type |
| ------ | ------ |
| types | `string`[] |

**Returns:** `string` \| `null`

___
<a id="language"></a>

###  language

▸ **language**(languages: *`string`[]*): `string` \| `null`

Returns the best language using `Accept-language` header and by matching it against the given languages.

If nothing is matched, then `null` will be returned

Make sure to check [accepts](https://www.npmjs.com/package/accepts) package docs too.

*__example__*:
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

| Name | Type |
| ------ | ------ |
| languages | `string`[] |

**Returns:** `string` \| `null`

___
<a id="languages"></a>

###  languages

▸ **languages**(): `string`[]

Return the languages that the request accepts, in the order of the client's preference (most preferred first).

Make sure to check [accepts](https://www.npmjs.com/package/accepts) package docs too.

**Returns:** `string`[]

___
<a id="method"></a>

###  method

▸ **method**(): `string`

Returns the request HTTP method by taking method spoofing into account.

Method spoofing works when all of the following are true.

1.  `app.http.allowMethodSpoofing` config value is true.
2.  request query string has `_method`.
3.  The [intended](api-classes-poppinss-request.request.md#intended) request method is `POST`.

*__example__*:
 ```js
request.method()
```

**Returns:** `string`

___
<a id="only"></a>

###  only

▸ **only**<`T`,`U`>(keys: *`T`[]*): `U`

Get value for specified keys.

*__example__*:
 ```js
request.only(['username', 'age'])
```

**Type parameters:**

#### T :  `string`
#### U 
**Parameters:**

| Name | Type |
| ------ | ------ |
| keys | `T`[] |

**Returns:** `U`

___
<a id="original"></a>

###  original

▸ **original**(): `object`

Returns reference to the merged copy of original request query string and body

**Returns:** `object`

___
<a id="pjax"></a>

###  pjax

▸ **pjax**(): `boolean`

Returns a boolean telling, if request has `X-Pjax` header set or not

**Returns:** `boolean`

___
<a id="plaincookie"></a>

###  plainCookie

▸ **plainCookie**(key: *`string`*, defaultValue?: *`undefined` \| `string`*): `any`

Returns value for a given key from unsigned cookies. Optional defaultValue is returned when actual value is undefined.

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `string` |
| `Optional` defaultValue | `undefined` \| `string` |

**Returns:** `any`

___
<a id="plaincookies"></a>

###  plainCookies

▸ **plainCookies**(): `object`

Returns all parsed and unsigned cookies. Unsigned cookies gives no guarantee for cookie tampering. You only need `plainCookies` when cookie is set by the client and not the server

**Returns:** `object`

___
<a id="post"></a>

###  post

▸ **post**(): `object`

Returns reference to the request body

**Returns:** `object`

___
<a id="protocol"></a>

###  protocol

▸ **protocol**(): `string`

Returns the request protocol by checking for the URL protocol or `X-Forwarded-Proto` header.

If the `trust` is evaluated to `false`, then URL protocol is returned, otherwise `X-Forwarded-Proto` header is used (if exists).

You can control the behavior of trusting the proxy values by defining it inside the `config/app.js` file.

```js
{
  http: {
   trustProxy: '127.0.0.1'
  }
}
```

The value of trustProxy is passed directly to [proxy-addr](https://www.npmjs.com/package/proxy-addr)

**Returns:** `string`

___
<a id="raw"></a>

###  raw

▸ **raw**(): `string` \| `null`

Returns the request raw body (if exists), or returns `null`.

Ideally you must be dealing with the parsed body accessed using [input](api-classes-poppinss-request.request.md#input), [all](api-classes-poppinss-request.request.md#all) or [post](api-classes-poppinss-request.request.md#post) methods. The `raw` body is always a string.

**Returns:** `string` \| `null`

___
<a id="secure"></a>

###  secure

▸ **secure**(): `boolean`

Returns a boolean telling if request is served over `https` or not. Check [protocol](api-classes-poppinss-request.request.md#protocol) method to know how protocol is fetched.

**Returns:** `boolean`

___
<a id="setinitialbody"></a>

###  setInitialBody

▸ **setInitialBody**(body: *`any`*): `void`

Set initial request body. A copy of the input will be maintained as the original request body. Since the request body and query string is subject to mutations, we keep one original reference to flash old data (whenever required).

This method is supposed to be invoked by the body parser and must be called only once. For further mutations make use of `updateBody` method.

**Parameters:**

| Name | Type |
| ------ | ------ |
| body | `any` |

**Returns:** `void`

___
<a id="stale"></a>

###  stale

▸ **stale**(): `boolean`

Opposite of [fresh](api-classes-poppinss-request.request.md#fresh)

**Returns:** `boolean`

___
<a id="subdomains"></a>

###  subdomains

▸ **subdomains**(): `string`[]

Returns an array of subdomains for the given host. An empty array is returned if [hostname](api-classes-poppinss-request.request.md#hostname) is `null` or is an IP address.

Also `www` is not considered as a subdomain

**Returns:** `string`[]

___
<a id="types"></a>

###  types

▸ **types**(): `string`[]

Return the types that the request accepts, in the order of the client's preference (most preferred first).

Make sure to check [accepts](https://www.npmjs.com/package/accepts) package docs too.

**Returns:** `string`[]

___
<a id="updatebody"></a>

###  updateBody

▸ **updateBody**(body: *`any`*): `void`

Update the request body with new data object. The `all` property will be re-computed by merging the query string and request body.

**Parameters:**

| Name | Type |
| ------ | ------ |
| body | `any` |

**Returns:** `void`

___
<a id="updateqs"></a>

###  updateQs

▸ **updateQs**(data: *`any`*): `void`

Update the query string with the new data object. The `all` property will be re-computed by merging the query and the request body.

**Parameters:**

| Name | Type |
| ------ | ------ |
| data | `any` |

**Returns:** `void`

___
<a id="updaterawbody"></a>

###  updateRawBody

▸ **updateRawBody**(rawBody: *`string`*): `void`

Update the request raw body. Bodyparser sets this when unable to parse the request body or when request is multipart/form-data.

**Parameters:**

| Name | Type |
| ------ | ------ |
| rawBody | `string` |

**Returns:** `void`

___
<a id="url"></a>

###  url

▸ **url**(includeQueryString?: *`undefined` \| `false` \| `true`*): `string`

Returns the request relative URL.

*__example__*:
 ```js
request.url()

// include query string
request.url(true)
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` includeQueryString | `undefined` \| `false` \| `true` |

**Returns:** `string`

___
<a id="getgetter"></a>

### `<Static>` getGetter

▸ **getGetter**(name: *`string`*): `MacroableFn` \| `undefined`

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |

**Returns:** `MacroableFn` \| `undefined`

___
<a id="getmacro"></a>

### `<Static>` getMacro

▸ **getMacro**(name: *`string`*): `MacroableFn` \| `undefined`

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |

**Returns:** `MacroableFn` \| `undefined`

___
<a id="getter"></a>

### `<Static>` getter

▸ **getter**(name: *`string`*, callback: *`MacroableFn`*, singleton?: *`undefined` \| `false` \| `true`*): `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |
| callback | `MacroableFn` |
| `Optional` singleton | `undefined` \| `false` \| `true` |

**Returns:** `void`

___
<a id="hasgetter"></a>

### `<Static>` hasGetter

▸ **hasGetter**(name: *`string`*): `boolean`

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |

**Returns:** `boolean`

___
<a id="hasmacro"></a>

### `<Static>` hasMacro

▸ **hasMacro**(name: *`string`*): `boolean`

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |

**Returns:** `boolean`

___
<a id="hydrate"></a>

### `<Static>` hydrate

▸ **hydrate**(): `void`

**Returns:** `void`

___
<a id="macro"></a>

### `<Static>` macro

▸ **macro**(name: *`string`*, callback: *`MacroableFn`*): `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |
| callback | `MacroableFn` |

**Returns:** `void`

___

