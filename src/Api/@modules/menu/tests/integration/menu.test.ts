import { describe, it, beforeEach } from '@jest/globals'
import request from 'supertest'


import { server } from '../../../../../server'
import { config } from '../../../../../core/config/config'


config.Dotenv()

beforeEach(async () => {
    jest.useFakeTimers()
    jest.useRealTimers()
})

describe('Menu Us Api Testing...', () => {
    it('Get All Menu Context', () => {
        request(server)
            .get('/api/menu')
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err) => {
                if (err) throw err

            })
            .expect('Content-Type', /json/)
            .expect(200)
    })
    it("Get Find Menu Context", () => {
        request(server)
            .get('/api/menu/id')
            .expect('Content-Type', /json/)
            .expect(200)
            .field('id', "63ceec115aac9633f2f9baa9")
            .end((err) => {
                if (err) throw err

            })
    })
    it('Post Menu Us', () => {
        request(server)
            .post('/api/menu')
            .set('x-access-token', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlhdCI6MTY3NTAyOTk3OSwiZXhwIjoxNjc1MDMzNTc5fQ.FKaEtrqBonbg63I3UA87rBer7mAFGyqpV8S5xN1lPcg")
            .field('name', 'test-name')
            .field('type', 'test-type')
            .field('status', true)
            .on('error', (err) => {
                throw err
            })
            .expect('Content-Type', /json/)
            .expect(200)

    })
    it('Put Menu Us', () => {
        request(server)
            .put('/api/menu')
            .set('x-access-token', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlhdCI6MTY3NTAyOTk3OSwiZXhwIjoxNjc1MDMzNTc5fQ.FKaEtrqBonbg63I3UA87rBer7mAFGyqpV8S5xN1lPcg")
            .field('name', 'test-name')
            .field('type', 'test-type')
            .field('status', true)
            .field('id', '63cb39b164e93b6768a4a230')
            .on('error', (err) => {
                throw err
            })
            .expect('Content-Type', /json/)
            .expect(200)
    })
    it('Delete Menu Us', () => {
        request(server)
            .delete('/api/menu')
            .set('x-access-token', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlhdCI6MTY3NTAyOTk3OSwiZXhwIjoxNjc1MDMzNTc5fQ.FKaEtrqBonbg63I3UA87rBer7mAFGyqpV8S5xN1lPcg")
            .field('id', '63ceec115aac9633f2f9baa9')
            .on('error', (err) => {
                throw err
            })
            .expect('Content-Type', /json/)
            .expect(200)
    })

})