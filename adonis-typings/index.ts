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
  import { IncomingMessage, ServerResponse } from 'http'
  import { MacroableConstructorContract } from 'macroable'
  import {
    RequestContract as BaseContract,
    RequestConfigContract as BaseConfig,
  } from '@poppinss/request/contracts'

  export interface RequestContract extends BaseContract {}
  export interface RequestConstructorContract extends MacroableConstructorContract {}

  type RequestConfigContract = Pick<BaseConfig, Exclude<keyof BaseConfig, 'secret'>>
  export { RequestConfigContract }

  const Request: RequestConstructorContract
  export default Request
}
