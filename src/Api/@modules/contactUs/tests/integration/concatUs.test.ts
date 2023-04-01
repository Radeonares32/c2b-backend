import { describe, it, beforeEach } from '@jest/globals'
import request from 'supertest'


import { server } from '../../../../../server'
import { config } from '../../../../../core/config/config'


config.Dotenv()

beforeEach(async () => {
    jest.useFakeTimers()
    jest.useRealTimers()
})

describe('Concat Us Api Testing...', () => {
    it('Get All Concat Us Context', () => {
        request(server)
            .get('/api/concat-us')
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err) => {
                if (err) throw err

            })
            .expect('Content-Type', /json/)
            .expect(200)
    })
    it("Get Find Concat Us Context", () => {
        request(server)
            .get('/api/concat-us/id')
            .expect('Content-Type', /json/)
            .expect(200)
            .field('id', "63ceec115aac9633f2f9baa9")
            .end((err) => {
                if (err) throw err

            })
    })
    it('Post Concat Us', () => {
        request(server)
            .post('/api/concat-us')
            .set('x-access-token', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlhdCI6MTY3NTAyOTk3OSwiZXhwIjoxNjc1MDMzNTc5fQ.FKaEtrqBonbg63I3UA87rBer7mAFGyqpV8S5xN1lPcg")
            .field('address', 'test-address')
            .field('email', 'test-email')
            .field('phone', "+905455522332")
            .field('instagram', "inst")
            .field('facebook', "facebook")
            .field('linkedin', "linkedin")
            .field('mapLink', "google maps")
            .on('error', (err) => {
                throw err
            })
            .expect('Content-Type', /json/)
            .expect(200)

    })
    it('Put Concat Us', () => {
        request(server)
            .put('/api/concat-us')
            .set('x-access-token', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlhdCI6MTY3NTAyOTk3OSwiZXhwIjoxNjc1MDMzNTc5fQ.FKaEtrqBonbg63I3UA87rBer7mAFGyqpV8S5xN1lPcg")
            .field('address', 'test-address')
            .field('email', 'test-email')
            .field('phone', "+905455522332")
            .field('instagram', "inst")
            .field('facebook', "facebook")
            .field('linkedin', "linkedin")
            .field('mapLink', "google maps")
            .field('id', '63cb39b164e93b6768a4a230')
            .on('error', (err) => {
                throw err
            })
            .expect('Content-Type', /json/)
            .expect(200)
    })
    it('Delete Concat Us', () => {
        request(server)
            .delete('/api/concat-us')
            .set('x-access-token', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlhdCI6MTY3NTAyOTk3OSwiZXhwIjoxNjc1MDMzNTc5fQ.FKaEtrqBonbg63I3UA87rBer7mAFGyqpV8S5xN1lPcg")
            .field('id', '63ceec115aac9633f2f9baa9')
            .on('error', (err) => {
                throw err
            })
            .expect('Content-Type', /json/)
            .expect(200)
    })

})