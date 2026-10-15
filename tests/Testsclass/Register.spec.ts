import { test, expect } from '../Fixtures/Fixtuers';
import{CommonMethods} from '../Commonmethods/Commonmethods';
import{ registers} from '../pages/register';



test.describe("registor into the Site",()=>{

    test('registor with valid data',async({register,create,page})=>{
     await register('https://automationexercise.com/');
   
        // await page.goto('https://automationexercise.com/');
   // register('https://automationexercise.com/');
   await create('vamshi','vamshi+1@gmail.com');
    const regidterform=new registers(page);
    const commonMethods: CommonMethods = new CommonMethods(page);
    commonMethods.clickaction(await regidterform.gender);
    // await regidterform.gender.click();
    commonMethods.selectoptions(await regidterform.date,'value','2');
    commonMethods.selectoptions(await regidterform.month,'visibleText','April');
    commonMethods.selectoptions(await regidterform.year,'index','3');
    //
     //await regidterform.date.selectOption({value:'2'});
     //await regidterform.month.selectOption({label:"April"});
     //await regidterform.year.selectOption({index:3});

   await page.pause();
       })
})
