import { describe, it, beforeEach } from '@jest/globals'
import request from 'supertest'


import { server } from '../../../../../server'
import { config } from '../../../../../core/config/config'


config.Dotenv()

beforeEach(async () => {
    jest.useFakeTimers()
    jest.useRealTimers()
})

const testImagePath = process.cwd() + '/src/Api/public/announcement/test.jpg'

describe('Announcement Us Api Testing...', () => {
    it('Get All Announcement Context', () => {
        request(server)
            .get('/api/announcement')
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err) => {
                if (err) throw err

            })
            .expect('Content-Type', /json/)
            .expect(200)
    })
    it("Get Find Announcement Context", () => {
        request(server)
            .get('/api/announcement/id')
            .expect('Content-Type', /json/)
            .expect(200)
            .field('id', "63ceec115aac9633f2f9baa9")
            .end((err) => {
                if (err) throw err

            })
    })
    it('Post Announcement Us', () => {
        request(server)
            .post('/api/announcement')
            .set('x-access-token',"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlhdCI6MTY3NTAyOTk3OSwiZXhwIjoxNjc1MDMzNTc5fQ.FKaEtrqBonbg63I3UA87rBer7mAFGyqpV8S5xN1lPcg")
            .field('title', 'test')
            .attach('image', testImagePath)
            .on('error', (err) => {
                throw err
            })
            .expect('Content-Type', /json/)
            .expect(200)

    })
    it('Put Announcement Us', () => {
        request(server)
            .put('/api/announcement')
            .set('x-access-token',"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlhdCI6MTY3NTAyOTk3OSwiZXhwIjoxNjc1MDMzNTc5fQ.FKaEtrqBonbg63I3UA87rBer7mAFGyqpV8S5xN1lPcg")
            .field('title', 'test')
            .field('id', '63cb39b164e93b6768a4a230')
            .attach('image', testImagePath)
            .on('error', (err) => {
                throw err
            })
            .expect('Content-Type', /json/)
            .expect(200)
    })
    it('Delete Announcement Us', () => {
        request(server)
            .delete('/api/announcement')
            .set('x-access-token',"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlhdCI6MTY3NTAyOTk3OSwiZXhwIjoxNjc1MDMzNTc5fQ.FKaEtrqBonbg63I3UA87rBer7mAFGyqpV8S5xN1lPcg")
            .field('id', '63ceec115aac9633f2f9baa9')
            .on('error', (err) => {
                throw err
            })
            .expect('Content-Type', /json/)
            .expect(200)
    })

})