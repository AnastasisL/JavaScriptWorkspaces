let html = '';

for ( let i = 0; i < pet.length; i++) {
  let pets = pet[i].name;
  html += `
    <h2>${pets.name}</h2>
    <h3>${pets.type}  | ${pets.bread}</h3>
    <p>Age: ${pets.age}</p>
    <img src="${pets.photo}" alt="${pets.breed}">
    `;
};

document.querySelector('main').insertAdjacentHTML('beforeend', html);