/*
* @poppinss/request
*
* (c) Harminder Virk <virk@adonisjs.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

/// <reference path="../src/contracts.ts" />

declare module '@ioc:Adonis/Src/Request' {
  import { MacroableConstructorContract } from 'macroable'
  import { RequestContract as BaseContract, RequestConfigContract } from '@poppinss/request/contracts'
  import { IncomingMessage, ServerResponse } from 'http'

  export interface RequestContract extends BaseContract {}
  export interface RequestConstructorContract extends MacroableConstructorContract {}

  const Request: RequestConstructorContract
  export default Request
}
