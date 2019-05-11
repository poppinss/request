/*
* @poppinss/request
*
* (c) Harminder Virk <virk@adonisjs.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

declare module '@ioc:Adonis/Src/Request' {
  /// <reference path="./src/contracts.ts" />
  import { RequestConstructorContract, RequestContract as BaseContract } from '@poppinss/request/contracts'

  interface RequestContract extends BaseContract {}
  const Request: RequestConstructorContract
}
