import { InternalServerError } from '../errors/internal-server-error'
import { MissingParamError } from '../errors/missing-parar-error'
import { badRequest, internalServerError } from '../helpers/http-helper'
import { HttpRequest, HttpResponse } from '../protocols/http'

export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    const requiredFields = ['name', 'email']

    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field))
      }
    }

    return internalServerError(new InternalServerError())
  }
}
