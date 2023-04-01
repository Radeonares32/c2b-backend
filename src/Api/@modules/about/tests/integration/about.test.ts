import { describe, it, beforeEach } from '@jest/globals'
import request from 'supertest'


import { server } from '../../../../../server'
import { config } from '../../../../../core/config/config'


config.Dotenv()

beforeEach(async () => {
    jest.useFakeTimers()
    jest.useRealTimers()
})

const testImagePath = process.cwd() + '/src/Api/public/about/test.jpg'
const IconImagePath = process.cwd() + '/src/Api/public/about/icon.jpg'

describe('About Us Api Testing...', () => {
    it('Get All About Context', () => {
        request(server)
            .get('/api/about-us')
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err) => {
                if (err) throw err

            })
            .expect('Content-Type', /json/)
            .expect(200)
    })
    it("Get Find About Context", () => {
        request(server)
            .get('/api/about-us/id')
            .expect('Content-Type', /json/)
            .expect(200)
            .field('id', "63cb39b164e93b6768a4a230")
            .end((err) => {
                if (err) throw err

            })
    })
    it('Post About Us', () => {
        request(server)
            .post('/api/about-us')
            .set('x-access-token',"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlhdCI6MTY3NTAyOTk3OSwiZXhwIjoxNjc1MDMzNTc5fQ.FKaEtrqBonbg63I3UA87rBer7mAFGyqpV8S5xN1lPcg")
            .field('html', 'a667d593f9e148d5667d0731747d3644c2e2391021b86bdb9d84b1706480403dae3b41de32db13f9e245311d0e458f59325be4eb5d5da72e229857469e043d836ef4cded9e561ff3d798029e15d1290480852ae867be30d4c557c02f00e871e38e276a23bac80647c8ed0288b642ff351371fad83e31f2e63f1be6724ee1039639437da6376fceb9a244be367ce7b5')
            .field('title', 'test')
            .field('description', 'description')
            .field('text', 'text')
            .field('context', 'context')
            .attach('image', testImagePath)
            .attach('icon', IconImagePath)
            .on('error', (err) => {
                throw err
            })
            .expect('Content-Type', /json/)
            .expect(200)

    })
    it('Put About Us', () => {
        request(server)
            .put('/api/about-us')
            .set('x-access-token',"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlhdCI6MTY3NTAyOTk3OSwiZXhwIjoxNjc1MDMzNTc5fQ.FKaEtrqBonbg63I3UA87rBer7mAFGyqpV8S5xN1lPcg")
            .field('html', 'a667d593f9e148d5667d0731747d3644c2e2391021b86bdb9d84b1706480403dae3b41de32db13f9e245311d0e458f59325be4eb5d5da72e229857469e043d836ef4cded9e561ff3d798029e15d1290480852ae867be30d4c557c02f00e871e38e276a23bac80647c8ed0288b642ff351371fad83e31f2e63f1be6724ee1039639437da6376fceb9a244be367ce7b5')
            .field('title', 'test')
            .field('id', '63cb39b164e93b6768a4a230')
            .field('description', 'description')
            .field('text', 'text')
            .field('context', 'context')
            .attach('image', testImagePath)
            .attach('icon', IconImagePath)
            .on('error', (err) => {
                throw err
            })
            .expect('Content-Type', /json/)
            .expect(200)
    })
    it('Delete About Us', () => {
        request(server)
            .delete('/api/about-us')
            .set('x-access-token',"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlhdCI6MTY3NTAyOTk3OSwiZXhwIjoxNjc1MDMzNTc5fQ.FKaEtrqBonbg63I3UA87rBer7mAFGyqpV8S5xN1lPcg")
            .field('id', '63c9947cd0e4d88f091f656f')
            .on('error', (err) => {
                throw err
            })
            .expect('Content-Type', /json/)
            .expect(200)
    })

})