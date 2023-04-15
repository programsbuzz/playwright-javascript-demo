const {test, expect, chromium} = require('@playwright/test');

test('Test 1', async({page})=>{  
    console.log("Test 1 Executed");
})

test('Test 2', async({page})=>{
    console.log("Test 2 Executed");
    test.skip()
})

test('Test 3', async({page})=>{  
    console.log("Test 3 Executed");
})

