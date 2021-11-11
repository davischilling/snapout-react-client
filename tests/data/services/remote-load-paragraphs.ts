import { RemoteLoadParagraphs, RemoteLoadParagraphList } from '@/data/services'
import { HttpStatusCode } from '@/data/contracts/http'
import { UnexpectedError, AccessDeniedError } from '@/data/errors'
import { HttpClientSpy } from '@/tests/data/mocks'
import { mockParagraphModelList } from '@/tests/domain/mocks'

import faker from 'faker'

type SutTypes = {
  sut: RemoteLoadParagraphs
  httpClientSpy: HttpClientSpy<RemoteLoadParagraphList.Response>
}

const makeSut = (url = faker.internet.url()): SutTypes => {
  const httpClientSpy = new HttpClientSpy<RemoteLoadParagraphList.Response>()
  const sut = new RemoteLoadParagraphs(url, httpClientSpy)
  return {
    sut,
    httpClientSpy
  }
}

describe('RemoteLoadParagraphs', () => {
  test('Should call HttpClient with correct URL and Method', async () => {
    const url = faker.internet.url()
    const { sut, httpClientSpy } = makeSut(url)

    await sut.loadAll()

    expect(httpClientSpy.url).toBe(url)
    expect(httpClientSpy.method).toBe('get')
  })

  test('Should throw AccessDeniedError if HttpClient returns 403', async () => {
    const { sut, httpClientSpy } = makeSut()
    httpClientSpy.response = {
      statusCode: HttpStatusCode.forbidden
    }

    const promise = sut.loadAll()

    await expect(promise).rejects.toThrow(new AccessDeniedError())
  })

  test('Should throw UnexpectedError if HttpClient returns 404', async () => {
    const { sut, httpClientSpy } = makeSut()
    httpClientSpy.response = {
      statusCode: HttpStatusCode.notFound
    }

    const promise = sut.loadAll()

    await expect(promise).rejects.toThrow(new UnexpectedError())
  })

  test('Should throw UnexpectedError if HttpClient returns 500', async () => {
    const { sut, httpClientSpy } = makeSut()
    httpClientSpy.response = {
      statusCode: HttpStatusCode.serverError
    }

    const promise = sut.loadAll()

    await expect(promise).rejects.toThrow(new UnexpectedError())
  })

  test('Should return a list of ParagraphModel if HttpClient returns 200', async () => {
    const { sut, httpClientSpy } = makeSut()
    const httpResult = mockParagraphModelList()
    httpClientSpy.response = {
      statusCode: HttpStatusCode.ok,
      body: {
        items: httpResult.length,
        data: httpResult
      }
    }

    const Paragraph = await sut.loadAll()

    expect(Paragraph).toEqual([httpResult])
  })
})
