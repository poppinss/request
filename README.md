<img src="https://res.cloudinary.com/adonisjs/image/upload/q_100/v1557762307/poppinss_iftxlt.jpg" max-width="600px">

# Request
[![circleci-image]][circleci-url] [![npm-image]][npm-url] ![](https://img.shields.io/badge/Typescript-294E80.svg?style=for-the-badge&logo=typescript)

Wrapper over Node.js [req](https://nodejs.org/dist/latest/docs/api/http.html#http_class_http_incomingmessage) object to standardize and ease the process of reading data from HTTP requests.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Table of contents

- [Features](#features)
- [Usage](#usage)
- [Config](#config)
- [Typescript support](#typescript-support)
- [API](#api)
- [AdonisJs usage](#adonisjs-usage)
- [Change log](#change-log)
- [Contributing](#contributing)
- [Authors & License](#authors--license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Features
1. Support for reading plain and signed cookies (only when signed via [@poppinss/response](https://github.com/poppinss/response))
2. Handy methods for content negotiation.
3. Handles inconsistencies between certain headers like `referer` and `referrer`.
4. Reliably reads `ip address` of proxied requests.
5. Assigns distributed unique `x-request-id` to each request.

## Usage
Install the package from npm as follows:

```sh
npm i @poppinss/request

# yarn
yarn add @poppinss/request
```

and then use it as follows

```ts
import { Request, RequestConfigContract } from '@poppinss/request'
import { createServer } from 'http'

const config: RequestConfigContract = {
  allowMethodSpoofing: false,
  subdomainOffset: 2,
  trustProxy: require('proxy-addr').compile('loopback'),
}

createServer((req, res) => {
  const request = new Request(req, res, config)
  res.end(`${request.id()} ${request.url()}`)
})
```

## Config

<table>
  <tr>
    <td colspan="2"><code>{</code></td>
  </tr>
  <tr>
    <td valign="top"><code>"allowMethodSpoofing": false</code></td>
    <td>
      <p>
      Since, standard HTML forms doesn't allow all HTTP verbs like <code>PUT</code>, <code>DELETE</code> and so on. The <code>allowMethodSpoofing</code> allows defining the HTTP method as a query string <code>_method</code>.
      </p>
      <p>
       When <code>allowMethodSpoofing = true</code> and current request method is POST, then <code>request.method()</code> will give preference to the query string <code>_method</code> property, over the original request method.
      </p>
    </td>
  </tr>
  <tr>
    <td valign="top"><code>"subdomainOffset": 2</code></td>
    <td>
      <p>
      Offset indicates the number of values to remove from the end of the URL seperated by <code>.</code>.
      </p>
      <p>
      For example: For URL <code>indicative.adonisjs.com</code>, the <code>request.subdomains()</code> method will return an array with <code>['indicative']</code>.
      </p>
    </td>
  </tr>
  <tr>
    <td valign="top"><code>"trustProxy"</code></td>
    <td>
      <p>
      A method that allows you to selectively trust the proxy servers. Make sure to read <a href="https://www.npmjs.com/package/proxy-addr#proxyaddrcompileval">proxy-addr docs</a>.
      </p>
    </td>
  </tr>
  <tr>
    <td valign="top"><code>"getIp"</code></td>
    <td>
      <p>
      Optionally define a method to determine the user Ip adress. The method is helpful, when you want to rely on a different property to find the user ip address.
      </p>
      <p>
      For example: Nginx set <code>x-real-ip</code> header when used a proxy server.
      In that case you can define your own <code>getIp</code> method for same.
      </p>
      <div class="highlight highlight-source-js"><pre><code>getIp (request) {
  // I am using nginx as a proxy server and want to trust 'x-real-ip'
  return request.header('x-real-ip')
}</code></pre></div>
    </td>
  </tr>
  <tr>
    <td valign="top"><code>"secret"</code></td>
    <td>
      <p>
      <strong>Optional</strong> Define a secret to unsign and read cookies. Make sure you have used the same secret to sign the cookie via <a href="https://github.com/poppinss/response">@poppinss/response</a> package.
      </p>
    </td>
  </tr>
  <tr>
    <td colspan="2"><code>}</code></td>
  </tr>
</table>

## Typescript support
The module is written in Typescript and exports following classes, types and interfaces.

```ts
import { Request, RequestContract, RequestConfigContract} from '@poppinss/request'
```

**RequestContract** is the interface that `Request` class adheres too. Since, you cannot extend concrete implementations in Typescript, you may need the interface to have a lossely typed flow.

```ts
Request.macro('cartValue', function () {
  return Number(this.cookie('cart')) || 0
})
```

then, you need to add `cartValue` to the interface

```ts
import { RequestContract as BaseContract } from '@poppinss/request'

interface RequestContract extends BaseContract {
  cartValue (): number
}

const request = new Request(req, res, config) as unknown as RequestContract
```

## API
Following are the autogenerated files via Typedoc

## AdonisJs usage
AdonisJs leverages the IoC container for resolving dependencies, which means you cannot import modules from the filesystem directly and must always rely on the resolution logic of the container.

Now since the IOC container computes the output value at runtime, it's impossible for Typescript to provide intellisense for same. To encouter this problem, we export `an ambient module` that you can use for typehinting as follows.

```ts
import { Request } from '@ioc:Adonis/Src/Request'
const request = new Request(req, res, config)
```

* [API](docs/README.md)

## Change log
The change log can be found in the [CHANGELOG.md](CHANGELOG.md) file.

## Contributing

Everyone is welcome to contribute. Please go through the following guides, before getting started.

1. [Contributing](https://adonisjs.com/contributing)
2. [Code of conduct](https://adonisjs.com/code-of-conduct)


## Authors & License
[Harminder virk](https://github.com/thetutlage) and [contributors](https://github.com/poppinss/request/graphs/contributors).

MIT License, see the included [MIT](LICENSE.md) file.

[circleci-image]: https://img.shields.io/circleci/project/github/poppinss/request/master.svg?style=for-the-badge&logo=appveyor
[circleci-url]: https://circleci.com/gh/poppinss/request "circleci"

[npm-image]: https://img.shields.io/npm/v/@poppinss/request.svg?style=for-the-badge&logo=npm
[npm-url]: https://npmjs.org/package/@poppinss/request "npm"
