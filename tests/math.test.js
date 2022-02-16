const {calculateTip,fahrnToCelcius,celciusToFahr} =  require('../src/math')

test('this should  be calculated',()=>{
    const total = calculateTip(10 , .3)
    expect(total).toBe(13)
//   if(tot(al !==  13){
//       throw new Error('Total should be 13. Got '+ total)
//   }
})
test('should calculate with default  value',()=>{
    const total = calculateTip(10)
    expect(total).toBe(12.5)
})
test('should convert 32 F to 0 C',()=>{
      const celcius = fahrnToCelcius(32)
      expect(celcius).toBe(0)
})

test('should convert 0 C to 32 F ',()=>{
    const fahrneit = celciusToFahr(0)
    expect(fahrneit ).toBe(32)
})
