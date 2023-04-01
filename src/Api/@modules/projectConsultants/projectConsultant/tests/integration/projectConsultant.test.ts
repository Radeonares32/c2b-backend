import { describe, it, beforeEach } from '@jest/globals'
import request from 'supertest'


import { server } from '../../../../../../server'
import { config } from '../../../../../../core/config/config'


config.Dotenv()

beforeEach(async () => {
    jest.useFakeTimers()
    jest.useRealTimers()
})

const testImagePath = process.cwd() + '/src/Api/public/projectConsultant/test.jpg'
describe('Project Consultant Api Testing...', () => {
    it('Get All Project Consultant Context', () => {
        request(server)
            .get('/api/project-consultant/project')
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err) => {
                if (err) throw err

            })
            .expect('Content-Type', /json/)
            .expect(200)
    })
    it("Get Find Project Consultant Context", () => {
        request(server)
            .get('/api/project-consultant/project/id')
            .expect('Content-Type', /json/)
            .expect(200)
            .field('id', "63dae2f8017773c036c0f8b6")
            .end((err) => {
                if (err) throw err

            })
    })
    it('Post Project Consultant', () => {
        request(server)
            .post('/api/project-consultant/project/create')
            .set('x-access-token', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlhdCI6MTY3NTAyOTk3OSwiZXhwIjoxNjc1MDMzNTc5fQ.FKaEtrqBonbg63I3UA87rBer7mAFGyqpV8S5xN1lPcg")
            .field('title', 'test')
            .field('subTitle', 'test')
            .field('text', 'test')
            .field('category', '63e68068c5c98dd6a9487498')
            .attach('image',testImagePath)
            .on('error', (err) => {
                throw err
            })
            .expect('Content-Type', /json/)
            .expect(200)

    })
    it('Put Project Consultant', () => {
        request(server)
            .put('/api/project-consultant/project/update')
            .set('x-access-token', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlhdCI6MTY3NTAyOTk3OSwiZXhwIjoxNjc1MDMzNTc5fQ.FKaEtrqBonbg63I3UA87rBer7mAFGyqpV8S5xN1lPcg")
            .field('id', '63dae2f8017773c036c0f8b6')
            .field('title', 'test')
            .field('subTitle', 'test')
            .field('text', 'test')
            .field('category', '63e68068c5c98dd6a9487498')
            .attach('image',testImagePath)
            .on('error', (err) => {
                throw err
            })
            .expect('Content-Type', /json/)
            .expect(200)
    })
    it('Delete Project Consultant Us', () => {
        request(server)
            .delete('/api/project-consultant/project/delete')
            .set('x-access-token', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlhdCI6MTY3NTAyOTk3OSwiZXhwIjoxNjc1MDMzNTc5fQ.FKaEtrqBonbg63I3UA87rBer7mAFGyqpV8S5xN1lPcg")
            .field('id', '63dae2f8017773c036c0f8b6')
            .on('error', (err) => {
                throw err
            })
            .expect('Content-Type', /json/)
            .expect(200)
    })

})