/*
* @poppinss/request
*
* (c) Harminder Virk <virk@adonisjs.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

declare module '@ioc:Adonis/Src/Request' {
  import { UrlWithStringQuery } from 'url'
  import { IncomingHttpHeaders, IncomingMessage, ServerResponse } from 'http'

  interface RequestContract {
    parsedUrl: UrlWithStringQuery
    request: IncomingMessage
    response: ServerResponse
    id (): string,
    setInitialBody (body: any): void
    updateBody (body: any): void
    updateRawBody (body: string): void
    updateQs (data: any): void
    get (): { [key: string]: any }
    post (): { [key: string]: any }
    original (): { [key: string]: any }
    all (): { [key: string]: any }
    raw (): string | null
    input (key: string, defaultValue?: any): any
    except (keys: string[]): { [key: string]: any }
    only<T extends string, U = { [K in T]: any }> (keys: T[]): U
    method (): string
    intended (): string
    headers (): IncomingHttpHeaders
    header (key: string, defaultValue?: any): string | undefined
    ip (): string
    ips (): string[]
    protocol (): string
    secure (): boolean
    subdomains (): string[]
    hostname (): string | null
    ajax (): boolean
    pjax (): boolean
    url (includeQueryString?: boolean): string
    completeUrl (includeQueryString?: boolean): string
    is (types: string[]): string | null
    accepts (types: string[]): string | null
    types (): string[]
    language (languages: string[]): string | null
    languages (): string[]
    encoding (encodings: string[]): string | null
    encodings (): string[]
    charset (charsets: string[]): string | null
    charsets (): string[]
    hasBody (): boolean
    fresh (): boolean
    stale (): boolean
    cookies (): { [key: string]: any }
    plainCookies (): { [key: string]: any }
    cookie (key: string, defaultValue?: any): any
    plainCookie (key: string, defaultValue?: any): any
  }

  const Request: RequestContract
}
