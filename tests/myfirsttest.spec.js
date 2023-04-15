import { test, expect, chromium } from '@playwright/test';

test.only('Verify the tooltip using the title attribute', async({page}) =>{

    await page.goto("http://autopract.com/selenium/tooltip/")

    // 1. Hover the mouse over the age input box
    await page.locator('input#age').hover()

    //2.  Move the mouse
    await page.mouse.move(0,0)

    // 3. Extract the value of the title attribute
    const titleTxt = await page.locator('input#age').getAttribute('title')

    //verify title
    expect(titleTxt).toBe('We ask for your age only for testing.')

})

test('Verify the tooltip using the tooltip box', async({page}) =>{

    await page.goto("http://autopract.com/selenium/tooltip/")

    // 1. Hover the mouse over the age input box
    await page.locator('input#age').hover()

    // 2. Locate the tooltip div and extract the text content of the tooltip div
    const tooltipTxt = await page.locator('div.ui-tooltip-content').textContent()

    // 3. Verify the content of the tooltip against the expected value
    expect(tooltipTxt).toBe('We ask for your age only for testing.')
})


test('Post Request', async({request}) =>{

    const response = await request.post("https://reqres.in/api/users", {
        data: {
            "name": "morpheus",
            "job": "leader"
        }
    })

    expect(response.status()).toBe(201)

    console.log(await response.json())

})


test('Get Request', async({request}) =>{
    const response = await request.get("https://reqres.in/api/users33/2")
    expect(response.status()).toBe(200)
    console.log(await response.json())
})


 test('Verify Placeholder text', async({page}) =>{
    await page.goto("https://www.programsbuzz.com")

    // Click on search icon to open the search box
    await page.locator('i.fa-search').click()

    // get the placeholder text  -  Enter the terms you wish to search for
    const placeholderText = await page.locator('input#edit-keys').getAttribute('placeholder')

    // verify the placeholder text
    expect(placeholderText).toEqual('Enter the terms you wish to search for')
  
 })

 test('list of elements', async({page}) =>{
    
    await page.goto('http://autopract.com/selenium/list.html')

    // nth method, first, last method
    await expect(page.locator('ul.nav-bar>li').first()).toHaveText('Install')  
    
    //last
    await expect(page.locator('ul.nav-bar>li').last()).toHaveText('Night') 

    //2nd
    await expect(page.locator('ul.nav-bar>li').nth(1)).toHaveText('Dream') 


    // Using toHaveText(), verify text of the list of elements

    await expect(page.locator('ul.nav-bar>li')).toHaveText(['Install','Dream','Night'])

    // toEqual()

    const expectedList = ['Install','Dream','Night'];
    expect(await page.locator('ul.nav-bar>li').allTextContents()).toEqual(expectedList)


   // Verify Text with Space
   await expect(page.locator('.heading2')).toHaveText("Heading with Spaces")


    // Inner Text
    await expect(page.locator('ul.nav-bar')).toHaveText(/Night/,{useInnerText:true})
    
    // To verify text ignoring case
    await expect(page.locator('.heading1')).toHaveText("nested list example",{ignoreCase:true})



    // Verify Partial Text
    // toHaveText()
    await expect(page.locator('.heading1')).toHaveText(/List Example/)  
    
    //toContainText()
    await expect(page.locator('.heading1')).toContainText('List Example')  

    
    // Verify the text of an element

    // Using toEqual()
    expect(await page.locator('.heading1').textContent()).toEqual("Nested List Example")

    // Using toHaveText()
    await expect(page.locator('.heading1')).toHaveText("Nested List Example")







})








    // console.log(await page.locator('div#slide-7-layer-1').textContent());

// Print Text - Enhance your Expertise to Elevate your Professional Standing
// console.log(await page.locator('div#slide-7-layer-1').textContent())

// Print Text - Enhance your Expertise to Elevate your Professional Standing
// console.log(await page.textContent('div#slide-7-layer-1'));

// Returns Text - Tutorials
// console.log(await page.locator('ul.we-mega-menu-ul>li>a').first().textContent());

// console.log(await page.textContent('ul.we-mega-menu-ul>li>a'));
// console.log(await page.textContent("ul.we-mega-menu-ul>li>a>>nth=-1",{strict:true}));
// console.log(await page.locator('ul.we-mega-menu-ul>li>a').nth(1).textContent());
// console.log(await page.locator('ul.we-mega-menu-ul>li>a').allTextContents());
// const mylist = await page.locator('ul.we-mega-menu-ul>li>a').allTextContents();

// for (let i = 0; i < mylist.length;i++)
// {
//     if(mylist[i].trim()==='About Us')
//     {
//         console.log("element found in list")    
//         break;       
//     }     
// }

    // await expect(page.locator('div#slide-7-layer-1')).toHaveText("Enhance your Expertise to Elevate your Professional Standing");

    // expect(await page.textContent('div#slide-7-layer-1')).toContain("Enhance your Expertise to Elevate your Professional Standing");
     
    // Print number of elements
    // console.log(await page.locator('ul.menu>li').count())

    // Verify number of elements
    // await expect(page.locator('ul.menu>li')).toHaveCount(4);

    // Print Text of Elements
    // console.log(await page.locator('ul.menu>li').allTextContents());

    //Verify Text of Elements
    // const allText = ['Item 1','Item 2','Item 3','Item 4'];
    // await expect(page.locator('ul.menu>li')).toHaveText(allText);

    //Nth Element in list
    // console.log(await page.locator('ul.menu>li').first().textContent());
    // console.log(await page.locator('ul.menu>li').last().textContent());
    // console.log(await page.locator('ul.menu>li').nth(1).textContent());

    
 

 test('Get Current URL', async({page}) =>{

    await page.goto('https://www.programsbuzz.com')

    await page.locator("li.we-mega-menu-li a[href='/about-us-programsbuzz']").click()

    console.log(page.url())

 })

 test('Handle Browser Windows Popup using popup event', async({page})=>{
    
    
    await page.goto("https://www.programsbuzz.com")

    // await page.locator('a.open-button').click()
    // console.log(await page.locator('div.popup-content').textContent())

    // const [myPopup] = await Promise.all([
    //     page.waitForEvent('popup'),
    //     // This action triggers the new popup
    //     page.locator("a[target='popup']").click() 
    //   ])
      
    //   // Wait for Popup to Load
    //   await myPopup.waitForLoadState();          
      
    //   // title of popup using new page instance 
    //   console.log(await myPopup.title());
      
    //   // title of existing page
    //   console.log(await page.title());
})

 test('Hover Element', async ({page})=> {
    // visit auto pract website
    await page.goto("http://autopract.com")

    // close popup
    await page.locator("button.close").click()

    // Mouse hover on image or section
    await page.locator("app-product-box-one").first().hover()

    // Click on cart icon
    await page.locator("app-product-box-one i.ti-shopping-cart").first().click()
})

 test('Negating Assertions', async ({page})=> 
{
    let a = 10;
    let b = "Hello";

    expect(a).not.toEqual(11);
    expect(b).not.toEqual("Hello1");

    await page.goto("http://autopract.com/selenium/form6/")

    // send button is not enabled
    await expect(page.locator("#mybutton")).toBeDisabled()
    // checkbox is not checked
    await expect(page.locator("#mycheckbox")).not.toBeChecked() 

    // read guidelines is not visible
    await expect(page.locator("#mylink")).toBeHidden()
    // Click on checkbox
    await page.locator("#mycheckbox").click()

    // Send Button button is not disabled
    await expect(page.locator("#mybutton")).toBeEnabled()

    // read guidelines is not hidden
    await expect(page.locator("#mylink")).toBeVisible()

    // Label Not Contain Text - Checkbox is not selected
    await expect(page.locator("#mylabel")).not.toContainText("Checkbox is not selected")
    
    await page.mouse.dbl

    // Send Button Not to Have Attribute Disabled
    await expect(page.locator("#mybutton")).not.toHaveAttribute("disabled","disabled")




    
})


test('Shadow DOM', async ({page})=> 
{
    await page.goto("http://autopract.com/selenium/focus1/")
    await page.locator("input[type='text']1233").type("123")
})

test('Non-Input File Upload', async ({page})=> 
{
    await page.goto("http://autopract.com/selenium/upload2/");

    const [fileChooser] = await Promise.all([

        // wait for Event - filechooser
        page.waitForEvent('filechooser'),

        //click on select files link
        await page.locator("a#pickfiles").click(),
    ])

    await fileChooser.setFiles(['tests/G.png','tests/image.jpg'])


    // click on upload files link
    await page.locator("a#uploadfiles").click()


    
});

test('Multiple File Upload', async ({page})=> 
{
    await page.goto("http://autopract.com/selenium/upload1/")

    await page.locator("input[type='file']")
    .setInputFiles(['tests/G.png','tests/image.jpg'])
    
    await page.locator("button[type='submit']").click()
});


test('Buffer File Upload', async ({page})=> 
{
    await page.goto("http://autopract.com/")

    await page.locator("button.close").click()

    await page.locator("input[type='file']")
    .setInputFiles({
        name: 'file.csv',
        mimeType: 'text/csv',
        buffer: Buffer.from('this,is,test')
    })
    
    await page.locator('button.btn-success').click()
});

test('Single File Upload', async ({page})=> 
{
    await page.goto("http://autopract.com/")

    await page.locator("button.close").click()

    // await page.setInputFiles("input[type='file']",'')
    await page.locator("input[type='file']")
    .setInputFiles('tests/G.png')
    
    await page.locator('button.btn-success').click()
});

test('Text Content', async ({page})=>{
    await page.goto('https://www.programsbuzz.com')
    
    // //Using locator method
    // console.log(await page.locator("div#slide-7-layer-1").textContent());

    // // Using Page Fixture
    // console.log(await page.textContent("div#slide-7-layer-1"));

    

    // Get first element text from the list
    // console.log(await page.locator("ul.we-mega-menu-ul>li>a").first().textContent());

    // Get first element text from the list using page fixture
    // can not use nth(), first(), last()
    // xpath, css, nth selector
    // console.log(await page.textContent("ul.we-mega-menu-ul>li>a>>nth=0", {strict: true}));

    // console.log(await page.textContent("ul.we-mega-menu-ul>li>a").first())
    // console.log(await page.textContent("ul.we-mega-menu-ul>li>a").last())
    // console.log(await page.textContent("ul.we-mega-menu-ul>li>a").nth(1))
    
    //get last element text from the list
    // console.log(await page.locator("ul.we-mega-menu-ul>li>a").last().textContent())
    // console.log(await page.textContent("ul.we-mega-menu-ul>li>a>>nth=-1", {strict: true}));

    //get nth element text from the list
    // console.log(await page.locator("ul.we-mega-menu-ul>li>a").nth(1).textContent())
    // console.log(await page.textContent("ul.we-mega-menu-ul>li>a>>nth=1", {strict: true}));

    // allTextContents() - array of strings
    // const mylist = await page.locator('ul.we-mega-menu-ul>li>a');

    // for(let i=0; i < mylist.length; i++)
    // {
    //     if(mylist[i].trim()==='MCQ')
    //     {
    //         console.log("we found the element")
    //         break;
    //     }
    // }


    
})  
test('auto drop', async ({page})=>{
    
    await page.goto('https://www.amazon.in/')
    
    const searchValue = "dell laptop";
    const expectedValue = "dell laptop bag";

    // Type in search box
    await page.locator("#twotabsearchtextbox").type(searchValue, {delay:100})

    // locator for suggested value
    const options = page.locator("div.autocomplete-results-container div.s-suggestion-container")

    //count suggested values
    const optionsCount = await options.count()

    // iterate through each value

    for(let i=0; i < optionsCount; i++)
    {
        // get text of nth value
        const text = await options.nth(i).textContent()

        //if text matches the expected value
        if(text === expectedValue)
        {
            await options.nth(i).click()
            break;
        }
    }
})

test('first and last', async ({page}) =>{
    await page.goto("https://www.programsbuzz.com")
    //first and last    
    // await page.locator("div.region-footer-bottom-second ul.menu>li").first().click();
    // await page.locator("div.region-footer-bottom-second ul.menu>li").last().click();
    // nth method
    // await page.locator("div.region-footer-bottom-second ul.menu>li").nth(0).click();
    // await page.locator("div.region-footer-bottom-second ul.menu>li").nth(-1).click();

    //nth selector with CSS
    // await page.locator("div.region-footer-bottom-second ul.menu>li>>nth=0").click();
    // await page.locator("div.region-footer-bottom-second ul.menu>li>>nth=-1").click();

    //nth selector with XPath
    // await page.locator("//div[contains(@class,'region-footer-bottom-second')]//ul[@class='menu']/li>>nth=0").click();
    // await page.locator("//div[contains(@class,'region-footer-bottom-second')]//ul[@class='menu']/li>>nth=-1").click();

    // first last element using css selector
    // await page.locator("div.region-footer-bottom-second ul.menu>li:first-of-type").click();
    // await page.locator("div.region-footer-bottom-second ul.menu>li:last-of-type").click();

    // xpath selector 
    await page.locator("(//div[contains(@class,'region-footer-bottom-second')]//ul[@class='menu']/li)[1]").click();
    await page.locator("(//div[contains(@class,'region-footer-bottom-second')]//ul[@class='menu']/li)[last()]").click();



    
})


test('click on + button', async ({page}) =>{
    await page.goto("http://localhost:4200/pages/tables/smart-table")

    await page
        .locator("table tr")
        .locator("th")
        .filter({has: page.locator("i.nb-plus")})
        .click()
})

test('multiple filters', async ({page}) =>{
    await page.goto("http://localhost:4200/pages/tables/smart-table")

    await page
        .locator("table tr")
        .filter({has: page.locator("th")})
        .filter({has: page.locator("i.nb-plus")})
        .click()
})

test('filter by text', async ({page}) =>{
    await page.goto("https://www.programsbuzz.com")

    await page
        .locator("ul.we-mega-menu-ul>li")
        .filter({hasText:"Ask Doubt"})
        .click()
})

test('filter by locator', async ({page}) =>{
    await page.goto("https://www.programsbuzz.com")

    await page
        .locator("ul.we-mega-menu-ul>li")
        .filter({has:page.locator("a[href='/ask-doubt']")})
        .click()
}) 


test('angular dropdown', async ({page}) =>{
    await page.goto('https://www.akveo.com/ngx-admin/themes')
    await page.locator("img[alt='Material Light Theme']").click()
  
    await page.locator('div.header-container>nb-select>button').click()
    const dropdownValue = page.locator('ul.option-list').locator('nb-option');
    
    const color = "^Corporate$";

    for (const el of await dropdownValue.elementHandles()) {
        // if(await el.textContent()==color)
        // {
        //     // To click or select
        //     await el.click();
        //     // to print in console
            console.log(await el.textContent());
            // break;
        // }    
    }
    
})


test('country dropdown', async ({page}) =>{
  await page.goto('http://autopract.com/selenium/dropdown4/')

  await page.locator('button.dropdown-toggle').click()

  let count = 1;

  const dropdownValue = page.locator('ul.dropdown-menu').locator('li');

//   for (const el of await dropdownValue.elementHandles()) 
//     {
//         console.log(await el.textContent())
//         // on macOS
//         await page.keyboard.press('ArrowDown');
//         console.log(count++)
//     }

let i = 0;
while(true)
{   
    try{
        console.log(await expect(page.locator('ul.dropdown-menu').locator('li').nth(i)).toBeTruthy())
        if(!await expect(page.locator('ul.dropdown-menu').locator('li').nth(i)).toHaveCount(1))
        {
            console.log(i)
            i++;    
            console.log(await page.locator('ul.dropdown-menu').locator('li').nth(i).textContent())
            await page.keyboard.press('ArrowDown');
        }
    }
    catch(error)
    {
        break;
    }      
   
}

// const elements = await this.page.$$('ul.dropdown-menu>li')

// elements.forEach(async value => {
//   console.log(value)
//   await this.page.click('ul > li > i.red', { strict: false, clickCount: 1 },)
//   await value.click();
// })



//   const country = "^India$";
//   await page
//         .locator('ul.dropdown-menu')
//         .locator('li')
//         .filter({hasText:RegExp(country)})
//         .click();
})



test('dynamic dropdown', async ({page}) =>{
    await page.goto('https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo');
    await page.click('#country+span');
    await page.locator('ul#select2-country-results')
        .locator("li",{hasText: "India"}).click();    
})    

test('Test 1', async ({page})=>{
    await page.goto('https://www.programsbuzz.com/user/login')

    await page.locator('#edit-name').fill('myusername')
    await page.locator('#edit-pass').fill('mypassword')
    await page.locator('input#edit-submit').last().click() 
})

test('Test 2', async ({ }, testInfo) => {

    const browser = await chromium.launch({});
    const context = await browser.newContext({
        recordVideo:{
            dir: 'video/',
            size: {width: 640, height: 480}
        }
    })

    const page = await context.newPage()
    const path = await page.video().path()
    console.log(path)

    await page.goto("https://www.programsbuzz.com/"); 
    await page.locator("img[alt='Home14343']").click();

    // const num = Math.floor(Math.random() * 11)
    // console.log(num)

    //first run - 0
    // first retry - 1


    // if(testInfo.retry)
    //     console.log("Test has been retried")




    // await expect(num).toBeGreaterThan(5);

    // 

    // // await page.screenshot({path:'screenshots/screen.png', fullPage: true})
    // await page.locator("img[alt='Home1']").screenshot({path:'screenshots/screen'+Date.now()+'.png'})
  
//   const buffer = await page.screenshot();
//   console.log(buffer.toString('base64'));

});

//title of the test
test('verify page URL', async ({page})=>{
    await page.goto('https://www.programsbuzz.com')

    await page.locator('text=Blog').click()
   
    //exact match
    // await expect(page).toHaveURL('https://www.programsbuzz.com/blog')

    //partial match
    // await expect(page).toHaveURL(/\/blog/)
    
    //regex interface
    await expect(page).toHaveURL(new RegExp('/blog$'))





  })

test('verify page title', async ({page})=>{
    await page.goto('https://www.programsbuzz.com')
    await expect(page).toHaveTitle('Online Technical Courses');
    await expect(page).toHaveTitle(/Online/);
    
  
  })

test('Label Selector', async({page})=>{
    await page.goto('https://www.programsbuzz.com/user/register')
    
    // await page.locator('text=Username').fill('Hello')
    // console.log(await page.locator('text=Username').inputValue())
    // await page.locator('text=Username').selectText()
    // await page.locator('text=Profile Picture').setInputFiles('tests/image.jpg')
    // await page.locator('text=Interest').selectOption('Data Science')
    console.log(await page.locator('text=Interest').textContent())

})

test('custom expect message', async({page})=>{
    // expect without custom message
    await page.goto('https://www.programsbuzz.com/')
    // await expect(page, 'Verify Title of the Page').toHaveTitle('Online Technical Courses123');
  
    const locator = page.locator('ul.we-mega-menu-ul>li').nth(-1);
    
    await expect.soft(page, "Verify Page Title").toHaveTitle('Online Technical Courses123');
    await expect.soft(locator, 'verify data element type attribute value').toHaveAttribute('data-element-type','we-mega-menu-li');
  

})

test('debug using inspector 2', async({page})=>{
    await page.goto('https://www.programsbuzz.com/')
    // await page.locator("//button/i[contains(@class,'fa-search')]").click()
    // await page.locator("xpath=//button/i[contains(@class,'fa-search')]").click()
    // await page.locator('/html//button/i[contains(@class,"fa-search")]').click()
    await page.locator("(//button/i[contains(@class,'fa-search')])[1]").click()


})

test('debug using inspector', async({page})=>{
    await page.goto('https://www.programsbuzz.com/user/login')
    
    await page.locator('#edit-name1234').fill('myusername')
    await page.locator('#edit-pass').fill('mypassword')
    await page.locator('input#edit-submit').last().click()
})


test('soft assertions', async({page})=>{
    await page.goto('https://www.programsbuzz.com/')
    const locator = page.locator('ul.we-mega-menu-ul>li').nth(-1);
    
    await expect.soft(page).toHaveTitle('Online Technical Courses123');
    await expect.soft(locator).toHaveAttribute('data-element-type','we-mega-menu-li');
    expect(test.info().errors).toHaveLength(0)
    await expect.soft(locator).toHaveClass('we-mega-menu-li')
})


test('text match', async({page})=>{
   
    await page.goto('http://autopract.com/selenium/textmatch/')
    // await page.pause()

    // 1. Default Matching
    // case-insenstive and searches for substring
    // await page.locator('text=log').first().click()
    // await page.locator('text=log').nth(1).click()
    // await page.locator('text=log').last().click()

    // 2. Exact Matching
    // await page.locator('text="Log In"').click()
    // await page.locator("text='Log In'").click()
    // await page.locator('text="log in"').click()
    // await page.locator("text='log in'").click()

    // tags
    // await page.locator('text=Login').click()
    // await page.locator('text="Log"').click()

    // input button
    // await page.locator('text="Click Me"').click()

    //link
    await page.locator('text=ProgramsBuzz Link').click()

    //  await page.locator('"Log In"').click()
    // await page.locator("'Log In'").click()
    // await page.locator('"log in"').click()
    // await page.locator("'log in'").click()

    // await page.locator('text=/Log\\s*in/i').click()
  
})

test('verify multiple tabs', async({context})=>{
    const page = await context.newPage();
    await page.goto('https://www.programsbuzz.com/')

    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        page.locator('text=By iVagus Services Pvt. Ltd.').click()
    ])


    console.log(await newPage.title())
    console.log(await page.title())


})
test("verify class", async({page})=>{
    await page.goto('https://www.programsbuzz.com/')
  
    const locator = page.locator("ul.we-mega-menu-ul>li").nth(-1)
    locator.click()

    await expect(locator).toHaveClass('we-mega-menu-li active active-trail')
    await expect(locator).toHaveClass(/active active-trail/)

    const itemList = page.locator('ul.we-mega-menu-ul>li')
    await expect(itemList).toHaveClass([/dropdown-menu/,/dropdown-menu/,/dropdown-menu/,/dropdown-menu/,/active active-trail/])

  })

test("verify attribute", async({page})=>{
  await page.goto('https://www.programsbuzz.com/')

  const locator = page.locator('ul.we-mega-menu-ul>li').nth(-1);
  await expect(locator).toHaveAttribute('data-element-type','we-mega-menu-li');
  await expect(locator).toHaveAttribute('data-element-type',/we-mega/);
  await expect(locator).toHaveAttribute('data-class','');
})

test('checkbox', async({page})=>{
    await page.goto('http://autopract.com/selenium/form5/')
    await page.pause()

//    await page.check("input[value='IN']")

    // expect(await page.locator("input[value='US']").isChecked()).toBeTruthy();
    // await expect(page.locator("input[value='US']")).toBeChecked();

    expect(await page.locator("input[value='US']").isChecked()).toBeFalsy();


})


test('Dropdown Value 2', async({page})=>{
    await page.goto('http://autopract.com/selenium/dropdown2/')

    await page.locator('button.multiselect').click()
    // await page.pause()

    await page.locator('ul.multiselect-container').selectOption({label:'HTML'});
    // await page.locator('.custom-select').selectOption({index:2})
 
    page.pause()
 })

test('Dropdown Value', async({page})=>{
   await page.goto('http://autopract.com/selenium/dropdown1/')

//    await page.locator('.custom-select').selectOption('item2')
//    await page.locator('.custom-select').selectOption({label:'Table Tennis'})
   await page.locator('.custom-select').selectOption({index:2})

   
   await page.pause()
})

test('list nth element', async({page})=>{
    await page.goto('https://www.programsbuzz.com/ask-doubt')
    await page.locator("//div[@class='block-content']/ul/li").nth(0).click()
    // await page.locator("//div[@class='block-content']/ul/li").nth(-1).click()
})

test('verify alert', async({page}) =>{
    await page.goto('http://autopract.com/selenium/alert5/')

    page.on('dialog', async(dialog)=>{
        expect(dialog.type()).toContain('alert')
        expect(dialog.message()).toContain('This is an Alert Box.')
        await dialog.accept()
    })

    await page.click('#alert-button')
    await expect(page.locator('#msg')).toHaveText('You clicked on Ok button.')
}) 

test('verify prompt dialog', async({page}) =>{
    await page.goto('http://autopract.com/selenium/alert5/')

    page.on('dialog', async(dialog)=>{
        expect(dialog.type()).toContain('prompt')
        expect(dialog.message()).toContain('Please enter any number')
        expect(dialog.defaultValue()).toContain('10')
        await dialog.dismiss()
    })

    await page.click('#prompt-button')
    await expect(page.locator('#msg')).toHaveText('You have entered number: null')
})

test('verify Confirmation with Cancel button', async({page}) =>{
    await page.goto('http://autopract.com/selenium/alert5/')

    page.on('dialog', async(dialog)=>{
        expect(dialog.type()).toContain('confirm')
        expect(dialog.message()).toContain('Do you want to save changes?')
        await dialog.dismiss()
    })

    await page.click('#confirm-button')
    await expect(page.locator('#msg')).toHaveText('Save Canceled!')
}) 

test('Test Title', async({page}) => {
   await page.goto('https://www.programsbuzz.com/user/login')
//    await page.locator('#edit-name').type('myusername')
//    await page.locator("//input[@id='edit-pass']").type('mypassword')
   await page.locator('input.form-text').type('hello')
   await page.locator('random').click()
});

