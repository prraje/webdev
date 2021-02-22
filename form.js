const { deprecate } = require("util");

document.addEventListener('DOMContentLoaded', ()=> {
    console.log("OKAY Dom is working");

});
const submitBtn = document.querySelector('#Submit')
submitBtn.onclick = function(){

    const nameInp = document.querySelector('#input-who-btn');
    let name = nameInp.value;
    nameInp.value = "";
    const dept = document.querySelector('#input-department-btn');
    let dept = rollInp.value;
    dept.value = "";
    const email = document.querySelector('#input-email-btn');
    let email = emailInp.value;
    emailInp.value = "";
    const branchInp = document.querySelector('#input-no-btn');
    let con_no = noInp.value;
    noInp.value = "";
    console.log(name+dept+email+con_no);
    var tempUrl = 'http://localhost:3000/insert/'+name+'/'+dept+'/'+email+'/'+con_no;
    console.log(tempUrl);
        fetch(tempUrl,{
      method:'POST'
    });
}
