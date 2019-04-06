document.querySelector('#da').addEventListener('submit', submittt);
document.querySelector('#siteshow').style.display = '';
function submittt(e) {
    e.preventDefault();

    var subject = document.querySelector('#data1').value;
    var mass = document.querySelector('#data2').value;
    var name = document.querySelector('#data3').value;
    var gender_m = document.querySelector('#data4_1').value;
    var gender_f = document.querySelector('#data4_2').value;
    var phone = document.querySelector('#data5').value;
    var email = document.querySelector('#data6').value;

    var site = {
        subject: subject,
        mass: mass,
        name: name,
        gender_m: gender_m,
        gender_f: gender_f,
        phone: phone,
        email: email
    }

    if (localStorage.getItem('sitee') === null) {
        var sitee = [];
        sitee.push(site);
        localStorage.setItem('sitee', JSON.stringify(sitee));
    } else {
        var sitee = JSON.parse(localStorage.getItem('sitee'));
        sitee.push(site);
        localStorage.setItem('sitee', JSON.stringify(sitee));
    }

    document.querySelector('#data1').value = '';
    document.querySelector('#data2').value = '';
    document.querySelector('#data3').value = '';
    document.querySelector('#data4_1').value = '';
    document.querySelector('#data4_2').value = '';
    document.querySelector('#data5').value = '';
    document.querySelector('#data6').value = '';

    show();

    }
    
    function show() {
        var sitee = JSON.parse(localStorage.getItem('sitee'));

        var siteshow = document.querySelector('#siteshow');

        for (var i = 0; i < sitee.length; i++) {
            var subject = sitee[i].subject;
            var mass = sitee[i].mass;
            var name = sitee[i].name;
            var gender_m = sitee[i].gender_m;
            var gender_f = sitee[i].gender_f;
            var phone = sitee[i].phone;
            var email = sitee[i].email;

            var str = `<tr id='s${i}'>`;
            str += `<div>${name}</div>`
                + `<div><h5>${subject}</h5></div>`
                + `<div><h5>${mass}</h5></div>`
                + `<div><h5>${name}</h5></div>`;

                if(gender_f !== '' || gender_f !== undefined){
                    str += `<div><h5>${gender_f}</h5></div>`;
                }else{
                    str += `<div><h5>${gender_m}</h5></div>`;
                }

                str += `<div><h5>${phone}</h5></div>`
                + `<div><h5>${email}</h5></div>`
                + ` <a onclick="del('s${i}')" href="#">Delete</a>`
                + `</div></div></div><br><br>`;
        }
        str += `</tr>`

        siteshow.innerHTML += str;
    } 

    function del(w) {
        siteshow.innerHTML = '';
      }