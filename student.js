
const student = document.querySelector('.sta');

students.map(data => {

student.innerHTML +=`
<div class="staud">
<img src="${data.photo}" alt="">
<h3>Roll : ${data.roll}</h3>
<h5>Class : ${data.class}</h5>
<p>Nmae : ${data.name}</p>
<strong>Gender : ${data.Gender}</strong>
<span>Location : ${data.Location}</span>
<span>BloodGroup : ${data.bloodGroup}</span>

</div>
`;

});