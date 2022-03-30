
const team = document.querySelector('.team');



deves.map(data => {

  team.innerHTML +=`
  <div class="team-item">
      <img src="${data.photo}" alt="">
      <h2>${data.name}</h2>
      <span>${data.skill}</span>
      <p>${data.age}</p>
      <p>Lorem ipsum dolor.</p>
      <p>${data.location}</p>

      <button>Read More</button>
      
  </div>      
  `

});

const teamp = document.querySelectorAll('.team-item button');

teamp[0].style.color  = 'red';
teamp[1].style.color  = 'red';
teamp[2].style.color  = 'red';
teamp[3].style.color  = 'red';
teamp[4].style.color  = 'red';
teamp[5].style.color  = 'red';
teamp[6].style.color  = 'red';
teamp[0].style.backgrounColor  = 'black';


console.log(teamp);


const tabody = document.querySelector('.data table tbody');

phonebook.map((data , index ) => {
   tabody.innerHTML += `
   <tr>
   <td>${index+1}</td>
   <td>${data.name}</td>
   <td>${data.phone}</td>
   <td>${data.skill}</td>
   <td>${data.phone}</td>
   <td>${data.location}</td>
   <td><img src="${data.photo}" alt=""></td>
  </tr>
   `;
});




