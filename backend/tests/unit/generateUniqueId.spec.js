const generateUniqueId = require('../../src/utils/generateUniquiId')

describe("Generate Unique ID", ()=>{
    it('should generaten an unique ID', () =>{
        const id = generateUniqueId();

        expect(id).toHaveLength(8);
    })
    
})