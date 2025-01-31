# Animal Tables

This project displays three tables of animals (Big Cats, Dogs, and Big Fish) with features like sorting, adding, deleting, and editing animals. Each table has specific sorting capabilities and unique styles for displaying animal names.

## Features

- **Big Cats Table**
  - Sortable by Name, Size, and Location
  - Displays animal names in regular text
  - Hover effect on images to enlarge and show a border

- **Dogs Table**
  - Sortable by Name and Location
  - Displays animal names in bold text
  - Hover effect on images to enlarge and show a border

- **Big Fish Table**
  - Sortable by Size
  - Displays animal names in bold, italic, and blue text
  - Hover effect on images to enlarge and show a border

## JSON Data

The data for each table is provided in JSON format within the `script.js` file:

- **Big Cats**
  ```json
  [
      { "name": "Lion", "size": "Large", "location": "Africa", "image": "lion.jpg" },
      { "name": "Tiger", "size": "Large", "location": "Asia", "image": "tiger.jpg" }
  ]

  - **Big dog**
  ```json
  [
    { "name": "Bulldog", "size": "Medium", "location": "UK", "image": "bulldog.jpg" },
    { "name": "Beagle", "size": "Small", "location": "USA", "image": "beagle.jpg" }
  ] 
    - **Big fish**
  ```json

  [
    { "name": "Shark", "size": "Large", "location": "Ocean", "image": "shark.jpg" },
    { "name": "Whale", "size": "Large", "location": "Ocean", "image": "whale.jpg" }
    ]