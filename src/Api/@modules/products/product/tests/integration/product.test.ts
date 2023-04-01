import { describe, it, beforeEach } from '@jest/globals'
import request from 'supertest'


import { server } from '../../../../../../server'
import { config } from '../../../../../../core/config/config'


config.Dotenv()

beforeEach(async () => {
    jest.useFakeTimers()
    jest.useRealTimers()
})

const testImagePath = process.cwd() + '/src/Api/public/products/test.jpg'
describe('Product Us Api Testing...', () => {
    it('Get All Product Context', () => {
        request(server)
            .get('/api/products/product/')
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err) => {
                if (err) throw err

            })
            .expect('Content-Type', /json/)
            .expect(200)
    })
    it("Get Find Product Context", () => {
        request(server)
            .get('/api/products/product/id')
            .expect('Content-Type', /json/)
            .expect(200)
            .field('id', "63dc625056e0b5aee328ace6")
            .end((err) => {
                if (err) throw err

            })
    })
    it('Post Product Us', () => {
        request(server)
            .post('/api/products/product/create')
            .set('x-access-token', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlhdCI6MTY3NTAyOTk3OSwiZXhwIjoxNjc1MDMzNTc5fQ.FKaEtrqBonbg63I3UA87rBer7mAFGyqpV8S5xN1lPcg")
            .field('name', 'test')
            .field('cargoTitle', 'title')
            .field('description', 'description')
            .field('quantity', 6)
            .field('price', 300)
            .field('discount', 100)
            .field('property', 'ozellik')
            .field('category', '63dae2f8017773c036c0f8b6')
            .field('type', 'renk')
            .field('context', 'beyaz')
            .attach('image', testImagePath)
            .attach('cargo', testImagePath)
            .on('error', (err) => {
                throw err
            })
            .expect('Content-Type', /json/)
            .expect(200)

    })
    it('Put Product Us', () => {
        request(server)
            .post('/api/products/product/update')
            .set('x-access-token', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlhdCI6MTY3NTAyOTk3OSwiZXhwIjoxNjc1MDMzNTc5fQ.FKaEtrqBonbg63I3UA87rBer7mAFGyqpV8S5xN1lPcg")
            .field('id', '63dc6168c25efc98bb0f7926')
            .field('name', 'test')
            .field('cargoTitle', 'title')
            .field('description', 'description')
            .field('quantity', 6)
            .field('price', 300)
            .field('discount', 100)
            .field('property', 'ozellik')
            .field('category', '63dae2f8017773c036c0f8b6')
            .field('type', 'renk')
            .field('context', 'beyaz')
            .attach('image', testImagePath)
            .attach('cargo', testImagePath)
            .on('error', (err) => {
                throw err
            })
            .expect('Content-Type', /json/)
            .expect(200)

    })
    it('Delete Product Us', () => {
        request(server)
            .delete('/api/products/product/delete')
            .set('x-access-token', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlhdCI6MTY3NTAyOTk3OSwiZXhwIjoxNjc1MDMzNTc5fQ.FKaEtrqBonbg63I3UA87rBer7mAFGyqpV8S5xN1lPcg")
            .field('id', '63dc6168c25efc98bb0f7926')
            .on('error', (err) => {
                throw err
            })
            .expect('Content-Type', /json/)
            .expect(200)
    })

})