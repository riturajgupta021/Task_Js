document.addEventListener("DOMContentLoaded", function () {
    class Animal {
        constructor(name, size, location, image) {
            this.name = name;
            this.size = size;
            this.location = location;
            this.image = image || 'https://via.placeholder.com/50';
        }
    }

    class AnimalTable {
        constructor(tableId, sortableFields) {
            this.animals = [];
            this.tableId = tableId;
            this.sortableFields = sortableFields;
        }

        addAnimal(animal) {
            if (this.animals.some(a => a.name === animal.name)) {
                alert("Duplicate animal entry is not allowed.");
                return;
            }
            if (!animal.size) {
                alert("Size is required. Please enter a valid size. In ft");
                return;
            }
            this.animals.push(animal);
            this.renderTable();
        }

        deleteAnimal(name) {
            this.animals = this.animals.filter(animal => animal.name !== name);
            this.renderTable();
        }

        renderTable() {
            const table = document.getElementById(this.tableId);
            table.querySelector('tbody').innerHTML = '';
            this.animals.forEach(animal => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${animal.name}</td>
                    <td>${animal.size}</td>
                    <td>${animal.location}</td>
                    <td><img src="${animal.image}" width="50" alt="${animal.name}"></td>
                    <td>                 
                        <button onclick="${this.tableId}.deleteAnimal('${animal.name}')">Delete</button>
                    </td>
                `;
                table.querySelector('tbody').appendChild(row);
            });
        }
    }

    const bigCats = [
        { name: 'Lion', size: '10 ft', location: 'Africa', image: 'https://imgs.search.brave.com/f7dlZxMuXI_T0RXIlOlt9hOzgH_6CmQ7LDKYOhsI0jE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvQUIy/Njk2My9waG90by9s/aW9uLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1RUzd5bEFX/dktFMHB5a2F6UUFf/WDFQT05qOUpubkxG/eGhnUlN5WFRVUkVR/PQ' },
        { name: 'Tiger', size: '8 ft', location: 'Asia', image: 'https://imgs.search.brave.com/v1dhqz11QH27xugmKSa6-HXxV0tnYEQBi4vJyscuJ8o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTM2/MjUzMDI0NC9waG90/by90aWdlci1ydW4t/YW5kLWF0dGFjay5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/WG1lTWpVeWtyY3Qy/ZHUtejJnZmlPZk85/OVMxUXlqMGpoSDBX/M2t6dTFwcz0' }
    ];

    const dogs = [
        { name: 'Bulldog', size: '2 ft', location: 'UK', image: 'https://imgs.search.brave.com/E7rMFGxFouGE9A7PBQ_u2MGA5-qvWUlItnS_wYRR4Nw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAzLzgzLzcyLzg0/LzM2MF9GXzM4Mzcy/ODQyMV9TQ243VXF3/Y0x1RFB6YW8zZE1M/QVUzc0xDQ1FxYm1T/dC5qcGc' },
        { name: 'Beagle', size: '2 ft', location: 'USA', image: 'https://imgs.search.brave.com/tptpJJ56EUsw6Dh0tS23MdVi75ipBGsda3vseZDT9sE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTE5/MDExMzM1L3Bob3Rv/L2JlYWdsZS1wdXBw/eS5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9R0xCRnJZRFY5/a0lFaC12MlBIcHZa/ODRZNmFqczU4VXhr/WFZEVmNrMmczUT0' }
    ];

    const bigFish = [
        { name: 'Shark', size: '15 ft', location: 'Ocean', image: 'https://imgs.search.brave.com/Dpq2AXlaIyyohoub50SwpGntwYffdRTnp4AyD6mZZ6I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA0LzM2LzIxLzAz/LzM2MF9GXzQzNjIx/MDM0OV9MZEhZRjM5/d29tN3J4aDVPODhX/eVdoSTl6d04xcGtM/MS5qcGc' },
        { name: 'Whale', size: '12 tf', location: 'Ocean', image: 'https://imgs.search.brave.com/FgZMgBJJIQ3o5By4LVGGbOJ2NQy232J9bre29xvY5bE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDk3/MTgxNDMwL3Bob3Rv/L3doYWxlLWluLWhh/bGYtYWlyLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1VM29Q/OFJqMVZoUll4V2Y3/bFB0cHJHeUNfNGcy/ZTMxN3lyMFpHczRl/ZEhNPQ' }
    ];

    window.bigCatsTable = new AnimalTable('bigCatsTable', ['name', 'size', 'location']);
    bigCats.forEach(cat => bigCatsTable.addAnimal(new Animal(cat.name, cat.size, cat.location, cat.image)));
    window.dogsTable = new AnimalTable('dogsTable', ['name', 'location']);
    dogs.forEach(dog => dogsTable.addAnimal(new Animal(dog.name, dog.size, dog.location, dog.image)));
    window.bigFishTable = new AnimalTable('bigFishTable', ['size']);
    bigFish.forEach(fish => bigFishTable.addAnimal(new Animal(fish.name, fish.size, fish.location, fish.image)));

    bigCatsTable.renderTable();
    dogsTable.renderTable();
    bigFishTable.renderTable();

    document.getElementById('bigCatsForm').addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('bigCatsName').value;
        const size = document.getElementById('bigCatsSize').value;
        const location = document.getElementById('bigCatsLocation').value;
        const image = document.getElementById('bigCatsImage').value;
        bigCatsTable.addAnimal(new Animal(name, size, location, image));
    });

    document.getElementById('dogsForm').addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('dogsName').value;
        const size = document.getElementById('dogsSize').value;
        const location = document.getElementById('dogsLocation').value;
        const image = document.getElementById('dogsImage').value;
        dogsTable.addAnimal(new Animal(name, size, location, image));
    });

    document.getElementById('bigFishForm').addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('bigFishName').value;
        const size = document.getElementById('bigFishSize').value;
        const location = document.getElementById('bigFishLocation').value;
        const image = document.getElementById('bigFishImage').value;
        bigFishTable.addAnimal(new Animal(name, size, location, image));
    });
});