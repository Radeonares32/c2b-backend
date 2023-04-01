import { describe, it, beforeEach } from '@jest/globals'
import request from 'supertest'


import { server } from '../../../../../../server'
import { config } from '../../../../../../core/config/config'


config.Dotenv()

beforeEach(async () => {
    jest.useFakeTimers()
    jest.useRealTimers()
})


describe('Category Api Testing...', () => {
    it('Get All Category Context', () => {
        request(server)
            .get('/api/project-consultant/category')
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err) => {
                if (err) throw err

            })
            .expect('Content-Type', /json/)
            .expect(200)
    })
    it("Get Find Category Context", () => {
        request(server)
            .get('/api/project-consultant/category/id')
            .expect('Content-Type', /json/)
            .expect(200)
            .field('id', "63dae2f8017773c036c0f8b6")
            .end((err) => {
                if (err) throw err

            })
    })
    it('Post Category', () => {
        request(server)
            .post('/api/project-consultant/category/create')
            .set('x-access-token', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlhdCI6MTY3NTAyOTk3OSwiZXhwIjoxNjc1MDMzNTc5fQ.FKaEtrqBonbg63I3UA87rBer7mAFGyqpV8S5xN1lPcg")
            .field('title', 'test')
            .on('error', (err) => {
                throw err
            })
            .expect('Content-Type', /json/)
            .expect(200)

    })
    it('Put Category', () => {
        request(server)
            .put('/api/project-consultant/category/update')
            .set('x-access-token', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlhdCI6MTY3NTAyOTk3OSwiZXhwIjoxNjc1MDMzNTc5fQ.FKaEtrqBonbg63I3UA87rBer7mAFGyqpV8S5xN1lPcg")
            .field('title', 'test')
            .field('id', '63dae2f8017773c036c0f8b6')
            .on('error', (err) => {
                throw err
            })
            .expect('Content-Type', /json/)
            .expect(200)
    })
    it('Delete Category Us', () => {
        request(server)
            .delete('/api/project-consultant/category/delete')
            .set('x-access-token', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlhdCI6MTY3NTAyOTk3OSwiZXhwIjoxNjc1MDMzNTc5fQ.FKaEtrqBonbg63I3UA87rBer7mAFGyqpV8S5xN1lPcg")
            .field('id', '63dae2f8017773c036c0f8b6')
            .on('error', (err) => {
                throw err
            })
            .expect('Content-Type', /json/)
            .expect(200)
    })

})