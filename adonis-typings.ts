/*
* @poppinss/request
*
* (c) Harminder Virk <virk@adonisjs.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

/// <reference path="./src/contracts.ts" />

declare module '@ioc:Adonis/Src/Request' {
  import { MacroableConstructorContract } from 'macroable'
  import { RequestContract as BaseContract, RequestConfigContract } from '@poppinss/request/contracts'
  import { IncomingMessage, ServerResponse } from 'http'

  interface RequestContract extends BaseContract {}
  interface RequestConstructorContract extends MacroableConstructorContract {
    new (
      request: IncomingMessage,
      response: ServerResponse,
      config: RequestConfigContract,
    ): RequestContract
  }

  const Request: RequestConstructorContract
  export default Request
}
