import { describe, it, beforeEach } from '@jest/globals'
import request from 'supertest'


import { server } from '../../../../../../server'
import { config } from '../../../../../../core/config/config'


config.Dotenv()

beforeEach(async () => {
    jest.useFakeTimers()
    jest.useRealTimers()
})

describe('Admin  Api Testing...', () => {
    it('Get All Admin Context', () => {
        request(server)
            .get('/api/users/admin')
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err) => {
                if (err) throw err

            })
            .expect('Content-Type', /json/)
            .expect(200)
    })
    it("Get Find Admin Context", () => {
        request(server)
            .get('/api/users/admin/id')
            .expect('Content-Type', /json/)
            .expect(200)
            .field('id', "63d3da5da41a6464b7ac3c88")
            .end((err) => {
                if (err) throw err

            })
    })
    it('Post admin', () => {
        request(server)
            .post('/api/users/admin/create')
            .field('email', 'admin@gmail.com')
            .field('password', '123')
            .field('passwordRepeat', '123')
            .on('error', (err) => {
                throw err
            })
            .expect('Content-Type', /json/)
            .expect(200)

    })
    it('Put Admin', () => {
        request(server)
            .post('/api/users/admin/update')
            .field('id', '63d1a12c4fd5c96f6932a7ed')
            .field('email', 'admin@gmail.com')
            .field('oldPassword', '123')
            .field('newPassword', '1234')
            .field('hash', "$2b$08$/N35BTHtNH3el5qMdCJe/.kt1CxbRcrqlA1xsr259K8gqIV//JOzi")
            .on('error', (err) => {
                throw err
            })
            .expect('Content-Type', /json/)
            .expect(200)
    })
    it('Delete Admin', () => {
        request(server)
            .delete('/api/users/admin/delete')
            .field('id', '63d198dcd331c9d15e1129a8')
            .on('error', (err) => {
                throw err
            })
            .expect('Content-Type', /json/)
            .expect(200)
    })
    it('Sign Admin', () => {
        request(server)
            .post('/api/users/admin/sign')
            .field('email', 'admin@gmail.com')
            .field('password', "123")
            .on('error', (err) => {
                throw err
            })
            .expect('Content-Type', /json/)
            .expect(200)
    })
    it('Logout Admin', () => {
        request(server)
            .post('/api/users/admin/logout')
            .set('x-access-token','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlhdCI6MTY3NTAyOTk3OSwiZXhwIjoxNjc1MDMzNTc5fQ.FKaEtrqBonbg63I3UA87rBer7mAFGyqpV8S5xN1lPcg')
            .on('error', (err) => {
                throw err
            })
            .expect('Content-Type', /json/)
            .expect(200)
    })

})