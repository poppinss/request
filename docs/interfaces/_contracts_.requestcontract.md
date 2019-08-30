**[@poppinss/request](../README.md)**

[Globals](../README.md) › ["contracts"](../modules/_contracts_.md) › [RequestContract](_contracts_.requestcontract.md)

# Interface: RequestContract

## Hierarchy

* **RequestContract**

## Implemented by

* [Request](../classes/_request_.request.md)

## Index

### Properties

* [parsedUrl](_contracts_.requestcontract.md#parsedurl)
* [request](_contracts_.requestcontract.md#request)
* [response](_contracts_.requestcontract.md#response)

### Methods

* [accepts](_contracts_.requestcontract.md#accepts)
* [ajax](_contracts_.requestcontract.md#ajax)
* [all](_contracts_.requestcontract.md#all)
* [charset](_contracts_.requestcontract.md#charset)
* [charsets](_contracts_.requestcontract.md#charsets)
* [completeUrl](_contracts_.requestcontract.md#completeurl)
* [cookie](_contracts_.requestcontract.md#cookie)
* [cookies](_contracts_.requestcontract.md#cookies)
* [encoding](_contracts_.requestcontract.md#encoding)
* [encodings](_contracts_.requestcontract.md#encodings)
* [except](_contracts_.requestcontract.md#except)
* [fresh](_contracts_.requestcontract.md#fresh)
* [get](_contracts_.requestcontract.md#get)
* [hasBody](_contracts_.requestcontract.md#hasbody)
* [header](_contracts_.requestcontract.md#header)
* [headers](_contracts_.requestcontract.md#headers)
* [hostname](_contracts_.requestcontract.md#hostname)
* [id](_contracts_.requestcontract.md#id)
* [input](_contracts_.requestcontract.md#input)
* [intended](_contracts_.requestcontract.md#intended)
* [ip](_contracts_.requestcontract.md#ip)
* [ips](_contracts_.requestcontract.md#ips)
* [is](_contracts_.requestcontract.md#is)
* [language](_contracts_.requestcontract.md#language)
* [languages](_contracts_.requestcontract.md#languages)
* [method](_contracts_.requestcontract.md#method)
* [only](_contracts_.requestcontract.md#only)
* [original](_contracts_.requestcontract.md#original)
* [pjax](_contracts_.requestcontract.md#pjax)
* [plainCookie](_contracts_.requestcontract.md#plaincookie)
* [plainCookies](_contracts_.requestcontract.md#plaincookies)
* [post](_contracts_.requestcontract.md#post)
* [protocol](_contracts_.requestcontract.md#protocol)
* [raw](_contracts_.requestcontract.md#raw)
* [secure](_contracts_.requestcontract.md#secure)
* [setInitialBody](_contracts_.requestcontract.md#setinitialbody)
* [stale](_contracts_.requestcontract.md#stale)
* [subdomains](_contracts_.requestcontract.md#subdomains)
* [types](_contracts_.requestcontract.md#types)
* [updateBody](_contracts_.requestcontract.md#updatebody)
* [updateQs](_contracts_.requestcontract.md#updateqs)
* [updateRawBody](_contracts_.requestcontract.md#updaterawbody)
* [url](_contracts_.requestcontract.md#url)

## Properties

###  parsedUrl

• **parsedUrl**: *UrlWithStringQuery*

___

###  request

• **request**: *IncomingMessage*

___

###  response

• **response**: *ServerResponse*

## Methods

###  accepts

▸ **accepts**(`types`: string[]): *string | null*

**Parameters:**

Name | Type |
------ | ------ |
`types` | string[] |

**Returns:** *string | null*

___

###  ajax

▸ **ajax**(): *boolean*

**Returns:** *boolean*

___

###  all

▸ **all**(): *object*

**Returns:** *object*

* \[ **key**: *string*\]: any

___

###  charset

▸ **charset**(`charsets`: string[]): *string | null*

**Parameters:**

Name | Type |
------ | ------ |
`charsets` | string[] |

**Returns:** *string | null*

___

###  charsets

▸ **charsets**(): *string[]*

**Returns:** *string[]*

___

###  completeUrl

▸ **completeUrl**(`includeQueryString?`: undefined | false | true): *string*

**Parameters:**

Name | Type |
------ | ------ |
`includeQueryString?` | undefined \| false \| true |

**Returns:** *string*

___

###  cookie

▸ **cookie**(`key`: string, `defaultValue?`: any): *any*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`defaultValue?` | any |

**Returns:** *any*

___

###  cookies

▸ **cookies**(): *object*

**Returns:** *object*

* \[ **key**: *string*\]: any

___

###  encoding

▸ **encoding**(`encodings`: string[]): *string | null*

**Parameters:**

Name | Type |
------ | ------ |
`encodings` | string[] |

**Returns:** *string | null*

___

###  encodings

▸ **encodings**(): *string[]*

**Returns:** *string[]*

___

###  except

▸ **except**(`keys`: string[]): *object*

**Parameters:**

Name | Type |
------ | ------ |
`keys` | string[] |

**Returns:** *object*

* \[ **key**: *string*\]: any

___

###  fresh

▸ **fresh**(): *boolean*

**Returns:** *boolean*

___

###  get

▸ **get**(): *object*

**Returns:** *object*

* \[ **key**: *string*\]: any

___

###  hasBody

▸ **hasBody**(): *boolean*

**Returns:** *boolean*

___

###  header

▸ **header**(`key`: string, `defaultValue?`: any): *string | undefined*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`defaultValue?` | any |

**Returns:** *string | undefined*

___

###  headers

▸ **headers**(): *IncomingHttpHeaders*

**Returns:** *IncomingHttpHeaders*

___

###  hostname

▸ **hostname**(): *string | null*

**Returns:** *string | null*

___

###  id

▸ **id**(): *string | undefined*

**Returns:** *string | undefined*

___

###  input

▸ **input**(`key`: string, `defaultValue?`: any): *any*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`defaultValue?` | any |

**Returns:** *any*

___

###  intended

▸ **intended**(): *string*

**Returns:** *string*

___

###  ip

▸ **ip**(): *string*

**Returns:** *string*

___

###  ips

▸ **ips**(): *string[]*

**Returns:** *string[]*

___

###  is

▸ **is**(`types`: string[]): *string | null*

**Parameters:**

Name | Type |
------ | ------ |
`types` | string[] |

**Returns:** *string | null*

___

###  language

▸ **language**(`languages`: string[]): *string | null*

**Parameters:**

Name | Type |
------ | ------ |
`languages` | string[] |

**Returns:** *string | null*

___

###  languages

▸ **languages**(): *string[]*

**Returns:** *string[]*

___

###  method

▸ **method**(): *string*

**Returns:** *string*

___

###  only

▸ **only**<**T**, **U**>(`keys`: T[]): *U*

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

**Returns:** *object*

* \[ **key**: *string*\]: any

___

###  pjax

▸ **pjax**(): *boolean*

**Returns:** *boolean*

___

###  plainCookie

▸ **plainCookie**(`key`: string, `defaultValue?`: any): *any*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`defaultValue?` | any |

**Returns:** *any*

___

###  plainCookies

▸ **plainCookies**(): *object*

**Returns:** *object*

* \[ **key**: *string*\]: any

___

###  post

▸ **post**(): *object*

**Returns:** *object*

* \[ **key**: *string*\]: any

___

###  protocol

▸ **protocol**(): *string*

**Returns:** *string*

___

###  raw

▸ **raw**(): *string | null*

**Returns:** *string | null*

___

###  secure

▸ **secure**(): *boolean*

**Returns:** *boolean*

___

###  setInitialBody

▸ **setInitialBody**(`body`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`body` | any |

**Returns:** *void*

___

###  stale

▸ **stale**(): *boolean*

**Returns:** *boolean*

___

###  subdomains

▸ **subdomains**(): *string[]*

**Returns:** *string[]*

___

###  types

▸ **types**(): *string[]*

**Returns:** *string[]*

___

###  updateBody

▸ **updateBody**(`body`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`body` | any |

**Returns:** *void*

___

###  updateQs

▸ **updateQs**(`data`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`data` | any |

**Returns:** *void*

___

###  updateRawBody

▸ **updateRawBody**(`body`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`body` | string |

**Returns:** *void*

___

###  url

▸ **url**(`includeQueryString?`: undefined | false | true): *string*

**Parameters:**

Name | Type |
------ | ------ |
`includeQueryString?` | undefined \| false \| true |

**Returns:** *string*