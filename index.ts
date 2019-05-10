/**
 * @poppinss/request
 *
 * (c) Harminder Virk <virk@adonisjs.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { MacroableConstructorContract } from 'macroable'
import { IncomingMessage, ServerResponse } from 'http'
import { RequestContract } from '@ioc:Adonis/Src/Request'
import { Request, RequestConfig } from './src/Request'

export interface RequestConstructorContract extends MacroableConstructorContract {
  new (request: IncomingMessage, response: ServerResponse, config: Partial<RequestConfig>): RequestContract
}

export { Request, RequestConfig }
