[@poppinss/request](../README.md) > [@poppinss/request](../modules/_poppinss_request.md) > [RequestContract](../interfaces/_poppinss_request.requestcontract.md)

# Interface: RequestContract

## Hierarchy

**RequestContract**

## Implemented by

* [Request](../classes/_poppinss_request.request.md)

## Index

### Properties

* [parsedUrl](_poppinss_request.requestcontract.md#parsedurl)
* [request](_poppinss_request.requestcontract.md#request)
* [response](_poppinss_request.requestcontract.md#response)

### Methods

* [accepts](_poppinss_request.requestcontract.md#accepts)
* [ajax](_poppinss_request.requestcontract.md#ajax)
* [all](_poppinss_request.requestcontract.md#all)
* [charset](_poppinss_request.requestcontract.md#charset)
* [charsets](_poppinss_request.requestcontract.md#charsets)
* [completeUrl](_poppinss_request.requestcontract.md#completeurl)
* [cookie](_poppinss_request.requestcontract.md#cookie)
* [cookies](_poppinss_request.requestcontract.md#cookies)
* [encoding](_poppinss_request.requestcontract.md#encoding)
* [encodings](_poppinss_request.requestcontract.md#encodings)
* [except](_poppinss_request.requestcontract.md#except)
* [fresh](_poppinss_request.requestcontract.md#fresh)
* [get](_poppinss_request.requestcontract.md#get)
* [hasBody](_poppinss_request.requestcontract.md#hasbody)
* [header](_poppinss_request.requestcontract.md#header)
* [headers](_poppinss_request.requestcontract.md#headers)
* [hostname](_poppinss_request.requestcontract.md#hostname)
* [id](_poppinss_request.requestcontract.md#id)
* [input](_poppinss_request.requestcontract.md#input)
* [intended](_poppinss_request.requestcontract.md#intended)
* [ip](_poppinss_request.requestcontract.md#ip)
* [ips](_poppinss_request.requestcontract.md#ips)
* [is](_poppinss_request.requestcontract.md#is)
* [language](_poppinss_request.requestcontract.md#language)
* [languages](_poppinss_request.requestcontract.md#languages)
* [method](_poppinss_request.requestcontract.md#method)
* [only](_poppinss_request.requestcontract.md#only)
* [original](_poppinss_request.requestcontract.md#original)
* [pjax](_poppinss_request.requestcontract.md#pjax)
* [plainCookie](_poppinss_request.requestcontract.md#plaincookie)
* [plainCookies](_poppinss_request.requestcontract.md#plaincookies)
* [post](_poppinss_request.requestcontract.md#post)
* [protocol](_poppinss_request.requestcontract.md#protocol)
* [raw](_poppinss_request.requestcontract.md#raw)
* [secure](_poppinss_request.requestcontract.md#secure)
* [setInitialBody](_poppinss_request.requestcontract.md#setinitialbody)
* [stale](_poppinss_request.requestcontract.md#stale)
* [subdomains](_poppinss_request.requestcontract.md#subdomains)
* [types](_poppinss_request.requestcontract.md#types)
* [updateBody](_poppinss_request.requestcontract.md#updatebody)
* [updateQs](_poppinss_request.requestcontract.md#updateqs)
* [updateRawBody](_poppinss_request.requestcontract.md#updaterawbody)
* [url](_poppinss_request.requestcontract.md#url)

---

## Properties

<a id="parsedurl"></a>

###  parsedUrl

**● parsedUrl**: *`UrlWithStringQuery`*

___
<a id="request"></a>

###  request

**● request**: *`IncomingMessage`*

___
<a id="response"></a>

###  response

**● response**: *`ServerResponse`*

___

## Methods

<a id="accepts"></a>

###  accepts

▸ **accepts**(types: *`string`[]*): `string` \| `null`

**Parameters:**

| Name | Type |
| ------ | ------ |
| types | `string`[] |

**Returns:** `string` \| `null`

___
<a id="ajax"></a>

###  ajax

▸ **ajax**(): `boolean`

**Returns:** `boolean`

___
<a id="all"></a>

###  all

▸ **all**(): `object`

**Returns:** `object`

___
<a id="charset"></a>

###  charset

▸ **charset**(charsets: *`string`[]*): `string` \| `null`

**Parameters:**

| Name | Type |
| ------ | ------ |
| charsets | `string`[] |

**Returns:** `string` \| `null`

___
<a id="charsets"></a>

###  charsets

▸ **charsets**(): `string`[]

**Returns:** `string`[]

___
<a id="completeurl"></a>

###  completeUrl

▸ **completeUrl**(includeQueryString?: *`undefined` \| `false` \| `true`*): `string`

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` includeQueryString | `undefined` \| `false` \| `true` |

**Returns:** `string`

___
<a id="cookie"></a>

###  cookie

▸ **cookie**(key: *`string`*, defaultValue?: *`any`*): `any`

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `string` |
| `Optional` defaultValue | `any` |

**Returns:** `any`

___
<a id="cookies"></a>

###  cookies

▸ **cookies**(): `object`

**Returns:** `object`

___
<a id="encoding"></a>

###  encoding

▸ **encoding**(encodings: *`string`[]*): `string` \| `null`

**Parameters:**

| Name | Type |
| ------ | ------ |
| encodings | `string`[] |

**Returns:** `string` \| `null`

___
<a id="encodings"></a>

###  encodings

▸ **encodings**(): `string`[]

**Returns:** `string`[]

___
<a id="except"></a>

###  except

▸ **except**(keys: *`string`[]*): `object`

**Parameters:**

| Name | Type |
| ------ | ------ |
| keys | `string`[] |

**Returns:** `object`

___
<a id="fresh"></a>

###  fresh

▸ **fresh**(): `boolean`

**Returns:** `boolean`

___
<a id="get"></a>

###  get

▸ **get**(): `object`

**Returns:** `object`

___
<a id="hasbody"></a>

###  hasBody

▸ **hasBody**(): `boolean`

**Returns:** `boolean`

___
<a id="header"></a>

###  header

▸ **header**(key: *`string`*, defaultValue?: *`any`*): `string` \| `undefined`

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

**Returns:** `IncomingHttpHeaders`

___
<a id="hostname"></a>

###  hostname

▸ **hostname**(): `string` \| `null`

**Returns:** `string` \| `null`

___
<a id="id"></a>

###  id

▸ **id**(): `string`

**Returns:** `string`

___
<a id="input"></a>

###  input

▸ **input**(key: *`string`*, defaultValue?: *`any`*): `any`

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

**Returns:** `string`

___
<a id="ip"></a>

###  ip

▸ **ip**(): `string`

**Returns:** `string`

___
<a id="ips"></a>

###  ips

▸ **ips**(): `string`[]

**Returns:** `string`[]

___
<a id="is"></a>

###  is

▸ **is**(types: *`string`[]*): `string` \| `null`

**Parameters:**

| Name | Type |
| ------ | ------ |
| types | `string`[] |

**Returns:** `string` \| `null`

___
<a id="language"></a>

###  language

▸ **language**(languages: *`string`[]*): `string` \| `null`

**Parameters:**

| Name | Type |
| ------ | ------ |
| languages | `string`[] |

**Returns:** `string` \| `null`

___
<a id="languages"></a>

###  languages

▸ **languages**(): `string`[]

**Returns:** `string`[]

___
<a id="method"></a>

###  method

▸ **method**(): `string`

**Returns:** `string`

___
<a id="only"></a>

###  only

▸ **only**<`T`,`U`>(keys: *`T`[]*): `U`

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

**Returns:** `object`

___
<a id="pjax"></a>

###  pjax

▸ **pjax**(): `boolean`

**Returns:** `boolean`

___
<a id="plaincookie"></a>

###  plainCookie

▸ **plainCookie**(key: *`string`*, defaultValue?: *`any`*): `any`

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `string` |
| `Optional` defaultValue | `any` |

**Returns:** `any`

___
<a id="plaincookies"></a>

###  plainCookies

▸ **plainCookies**(): `object`

**Returns:** `object`

___
<a id="post"></a>

###  post

▸ **post**(): `object`

**Returns:** `object`

___
<a id="protocol"></a>

###  protocol

▸ **protocol**(): `string`

**Returns:** `string`

___
<a id="raw"></a>

###  raw

▸ **raw**(): `string` \| `null`

**Returns:** `string` \| `null`

___
<a id="secure"></a>

###  secure

▸ **secure**(): `boolean`

**Returns:** `boolean`

___
<a id="setinitialbody"></a>

###  setInitialBody

▸ **setInitialBody**(body: *`any`*): `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| body | `any` |

**Returns:** `void`

___
<a id="stale"></a>

###  stale

▸ **stale**(): `boolean`

**Returns:** `boolean`

___
<a id="subdomains"></a>

###  subdomains

▸ **subdomains**(): `string`[]

**Returns:** `string`[]

___
<a id="types"></a>

###  types

▸ **types**(): `string`[]

**Returns:** `string`[]

___
<a id="updatebody"></a>

###  updateBody

▸ **updateBody**(body: *`any`*): `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| body | `any` |

**Returns:** `void`

___
<a id="updateqs"></a>

###  updateQs

▸ **updateQs**(data: *`any`*): `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| data | `any` |

**Returns:** `void`

___
<a id="updaterawbody"></a>

###  updateRawBody

▸ **updateRawBody**(body: *`string`*): `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| body | `string` |

**Returns:** `void`

___
<a id="url"></a>

###  url

▸ **url**(includeQueryString?: *`undefined` \| `false` \| `true`*): `string`

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` includeQueryString | `undefined` \| `false` \| `true` |

**Returns:** `string`

___

