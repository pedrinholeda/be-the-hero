const request = require('supertest');
const app = require('../../src/app')
const connection = require('../../src/database/connection')

describe('ONG', () => {

    beforeEach(async()=>{
        await connection.migrate.rollback()
        await connection.migrate.latest()
    })

    afterAll(async ()=>{
        await connection.destroy()
    })

    it('should be able to create a new ONG', async ()=>{
        const response = await request(app)
        
            .post('/ongs')
            .send({
            name:"Ong da Loli do vovo",
            email:"Loli@gmail.com",
            whatsapp:"6199751621",
            city:"Cancun",
            uf:"DF"
        })

        expect(response.body).toHaveProperty('id')
        expect(response.body.id).toHaveLength(8)
    })
})