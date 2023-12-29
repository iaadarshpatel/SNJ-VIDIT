let URL = "https://script.google.com/macros/s/AKfycbzfxizWnDRaU2QX-5-D4WzvK1veEoWPRUb73xRliVjNgutcjW3ijxDRyWL6InXBm2wc/exec?action=getUsers"

fetch(URL)
  .then(response => response.json())
  .then(products => {
    // products is an array of product objects

    // Iterate over the products and generate HTML for each
    const productHTML = products.map(product => generateProductHTML(product));

    // Assuming you have an element with the id 'product-container' where you want to display the products
    const productContainer = document.getElementsByClassName('products-container')[0];

    
    // Set the innerHTML of the container with the generated HTML
    productContainer.innerHTML = productHTML.join('');
  })
  .catch(error => console.error('Error fetching product data:', error));


function generateProductHTML(product) {
  return `
    <div class="col-lg-4">
      <div class="services-2 d-flex">
        <div class="mt-3 mr-3 d-flex justify-content-center align-items-start">
          <div class="image-box">
            <!-- Placeholder image for each product -->
            <img src="${product.img}" alt="${product.product_name}">
          </div>
        </div>
        <div class="text pt-2">
          <h3>${product.product_name}</h3>
          <p>${product.product_desc}<br><small>${product.product_small_desc}</small></p>
        </div>
      </div>
    </div>
  `;
}


let PanchkarmaAyurved = "https://script.google.com/macros/s/AKfycbyALuprSfDSdy4uK5nbgOOY_2EhHg_j6Obm_6qqYqEzCXCha_yJXNPem2hKrr-NfMq4/exec?action=getUsers"

fetch(PanchkarmaAyurved)
  .then(response => response.json())
  .then(PanchkarmaAyurvedproducts => {
    // products is an array of product objects

    // Iterate over the products and generate HTML for each
    const productHTML = PanchkarmaAyurvedproducts.map(PanchkarmaAyurvedproduct => generateProductHTML(PanchkarmaAyurvedproduct));

    // Assuming you have an element with the id 'product-container' where you want to display the products
    const productContainer = document.getElementsByClassName('PanchkarmaAyurvedproduct-container')[0];

    
    // Set the innerHTML of the container with the generated HTML
    productContainer.innerHTML = productHTML.join('');
  })
  .catch(error => console.error('Error fetching product data:', error));


function generateProductHTML(PanchkarmaAyurvedproduct) {
  return `
    <div class="col-lg-4">
      <div class="services-2 d-flex">
        <div class="mt-3 mr-3 d-flex justify-content-center align-items-start">
          <div class="image-box">
            <!-- Placeholder image for each product -->
            <img src="${PanchkarmaAyurvedproduct.img}" alt="${PanchkarmaAyurvedproduct.product_name}">
          </div>
        </div>
        <div class="text pt-2">
          <h3>${PanchkarmaAyurvedproduct.product_name}</h3>
          <p>${PanchkarmaAyurvedproduct.product_desc}<br><small>${PanchkarmaAyurvedproduct.product_small_desc}</small></p>
        </div>
      </div>
    </div>
  `;
}



let Naturopathy = "https://script.google.com/macros/s/AKfycbwyJNfUEritUmoFdj5liehJEgHbmesR-KU9RNVyNS1Y5fIPMzK1pu24J7uhrppvJouI/exec?action=getUsers"

fetch(Naturopathy)
  .then(response => response.json())
  .then(Naturopathyproducts => {
    // products is an array of product objects

    // Iterate over the products and generate HTML for each
    const productHTML = Naturopathyproducts.map(Naturopathyproduct => generateProductHTML(Naturopathyproduct));

    // Assuming you have an element with the id 'product-container' where you want to display the products
    const productContainer = document.getElementsByClassName('Naturopathyproduct-container')[0];

    
    // Set the innerHTML of the container with the generated HTML
    productContainer.innerHTML = productHTML.join('');
  })
  .catch(error => console.error('Error fetching product data:', error));


function generateProductHTML(Naturopathyproduct) {
  return `
    <div class="col-lg-4">
      <div class="services-2 d-flex">
        <div class="mt-3 mr-3 d-flex justify-content-center align-items-start">
          <div class="image-box">
            <!-- Placeholder image for each product -->
            <img src="${Naturopathyproduct.img}" alt="${Naturopathyproduct.product_name}">
          </div>
        </div>
        <div class="text pt-2">
          <h3>${Naturopathyproduct.product_name}</h3>
          <p>${Naturopathyproduct.product_desc}<br><small>${Naturopathyproduct.product_small_desc}</small></p>
        </div>
      </div>
    </div>
  `;
}



let Physiotherapy = "https://script.google.com/macros/s/AKfycbywyZoKSpuAXlQr9WhuygeNwbsO6WQq0L3tWX01r5TFiOWoSc6T4-aKraXGrf3GUqJs/exec?action=getUsers"

fetch(Physiotherapy)
  .then(response => response.json())
  .then(Physiotherapyproducts => {
    // products is an array of product objects

    // Iterate over the products and generate HTML for each
    const productHTML = Physiotherapyproducts.map(Physiotherapyproduct => generateProductHTML(Physiotherapyproduct));

    // Assuming you have an element with the id 'product-container' where you want to display the products
    const productContainer = document.getElementsByClassName('Physiotherapyproduct-container')[0];

    
    // Set the innerHTML of the container with the generated HTML
    productContainer.innerHTML = productHTML.join('');
  })
  .catch(error => console.error('Error fetching product data:', error));


function generateProductHTML(Physiotherapyproduct) {
  return `
    <div class="col-lg-4">
      <div class="services-2 d-flex">
        <div class="mt-3 mr-3 d-flex justify-content-center align-items-start">
          <div class="image-box">
            <!-- Placeholder image for each product -->
            <img src="${Physiotherapyproduct.img}" alt="${Physiotherapyproduct.product_name}">
          </div>
        </div>
        <div class="text pt-2">
          <h3>${Physiotherapyproduct.product_name}</h3>
          <p>${Physiotherapyproduct.product_desc}<br><small>${Physiotherapyproduct.product_small_desc}</small></p>
        </div>
      </div>
    </div>
  `;
}


let HospitalFurniture = "https://script.google.com/macros/s/AKfycbzAeQX8Vh5TkapFxz7yqnb4-il4emuSeCin8ep0E0soclaaour4MDQWyZFKPslXZyQp/exec?action=getUsers"

fetch(HospitalFurniture)
  .then(response => response.json())
  .then(HospitalFurnitureproducts => {
    // products is an array of product objects

    // Iterate over the products and generate HTML for each
    const productHTML = HospitalFurnitureproducts.map(HospitalFurnitureproduct => generateProductHTML(HospitalFurnitureproduct));

    // Assuming you have an element with the id 'product-container' where you want to display the products
    const productContainer = document.getElementsByClassName('HospitalFurnitureproduct-container')[0];

    
    // Set the innerHTML of the container with the generated HTML
    productContainer.innerHTML = productHTML.join('');
  })
  .catch(error => console.error('Error fetching product data:', error));


function generateProductHTML(HospitalFurnitureproduct) {
  return `
    <div class="col-lg-4">
      <div class="services-2 d-flex">
        <div class="mt-3 mr-3 d-flex justify-content-center align-items-start">
          <div class="image-box">
            <!-- Placeholder image for each product -->
            <img src="${HospitalFurnitureproduct.img}" alt="${HospitalFurnitureproduct.product_name}">
          </div>
        </div>
        <div class="text pt-2">
          <h3>${HospitalFurnitureproduct.product_name}</h3>
          <p>${HospitalFurnitureproduct.product_desc}<br><small>${HospitalFurnitureproduct.product_small_desc}</small></p>
        </div>
      </div>
    </div>
  `;
}


let HospitalHolloware = "https://script.google.com/macros/s/AKfycbyc7djW1sMeU3w35PKPoRrTx8sV4WR2yuZjw_-1BUtHmj2OOE9xjgD5x21DemKskaqt/exec?action=getUsers"

fetch(HospitalHolloware)
  .then(response => response.json())
  .then(HospitalHollowareproducts => {
    // products is an array of product objects

    // Iterate over the products and generate HTML for each
    const productHTML = HospitalHollowareproducts.map(HospitalHollowareproduct => generateProductHTML(HospitalHollowareproduct));

    // Assuming you have an element with the id 'product-container' where you want to display the products
    const productContainer = document.getElementsByClassName('HospitalHollowareproduct-container')[0];

    
    // Set the innerHTML of the container with the generated HTML
    productContainer.innerHTML = productHTML.join('');
  })
  .catch(error => console.error('Error fetching product data:', error));


function generateProductHTML(HospitalHollowareproduct) {
  return `
    <div class="col-lg-4">
      <div class="services-2 d-flex">
        <div class="mt-3 mr-3 d-flex justify-content-center align-items-start">
          <div class="image-box">
            <!-- Placeholder image for each product -->
            <img src="${HospitalHollowareproduct.img}" alt="${HospitalHollowareproduct.product_name}">
          </div>
        </div>
        <div class="text pt-2">
          <h3>${HospitalHollowareproduct.product_name}</h3>
          <p>${HospitalHollowareproduct.product_desc}<br><small>${HospitalHollowareproduct.product_small_desc}</small></p>
        </div>
      </div>
    </div>
  `;
}




let DiagnosticTestingEquipments = "https://script.google.com/macros/s/AKfycbxxZd9cf2RAy1tM0ZjLDZ5g08zpS7nCgs8blA1Gcf6bwjO2f-03dw4hABC_IxQskvEb/exec?action=getUsers"

fetch(DiagnosticTestingEquipments)
  .then(response => response.json())
  .then(DiagnosticTestingEquipmentsproducts => {
    // products is an array of product objects

    // Iterate over the products and generate HTML for each
    const productHTML = DiagnosticTestingEquipmentsproducts.map(DiagnosticTestingEquipmentsproduct => generateProductHTML(DiagnosticTestingEquipmentsproduct));

    // Assuming you have an element with the id 'product-container' where you want to display the products
    const productContainer = document.getElementsByClassName('DiagnosticTestingEquipmentsproduct-container')[0];

    
    // Set the innerHTML of the container with the generated HTML
    productContainer.innerHTML = productHTML.join('');
  })
  .catch(error => console.error('Error fetching product data:', error));


function generateProductHTML(DiagnosticTestingEquipmentsproduct) {
  return `
    <div class="col-lg-4">
      <div class="services-2 d-flex">
        <div class="mt-3 mr-3 d-flex justify-content-center align-items-start">
          <div class="image-box">
            <!-- Placeholder image for each product -->
            <img src="${DiagnosticTestingEquipmentsproduct.img}" alt="${DiagnosticTestingEquipmentsproduct.product_name}">
          </div>
        </div>
        <div class="text pt-2">
          <h3>${DiagnosticTestingEquipmentsproduct.product_name}</h3>
          <p>${DiagnosticTestingEquipmentsproduct.product_desc}<br><small>${DiagnosticTestingEquipmentsproduct.product_small_desc}</small></p>
        </div>
      </div>
    </div>
  `;
}



let FitnessEquipments = "https://script.google.com/macros/s/AKfycbwsz7cRzc9VAqxkxPVy1vecScc3QC9QB9VnidR1YA39osvSqm8j0n91GgFAH0w-xONn/exec?action=getUsers"

fetch(FitnessEquipments)
  .then(response => response.json())
  .then(FitnessEquipmentsproducts => {
    // products is an array of product objects

    // Iterate over the products and generate HTML for each
    const productHTML = FitnessEquipmentsproducts.map(FitnessEquipmentsproduct => generateProductHTML(FitnessEquipmentsproduct));

    // Assuming you have an element with the id 'product-container' where you want to display the products
    const productContainer = document.getElementsByClassName('FitnessEquipmentsproduct-container')[0];

    
    // Set the innerHTML of the container with the generated HTML
    productContainer.innerHTML = productHTML.join('');
  })
  .catch(error => console.error('Error fetching product data:', error));


function generateProductHTML(FitnessEquipmentsproduct) {
  return `
    <div class="col-lg-4">
      <div class="services-2 d-flex">
        <div class="mt-3 mr-3 d-flex justify-content-center align-items-start">
          <div class="image-box">
            <!-- Placeholder image for each product -->
            <img src="${FitnessEquipmentsproduct.img}" alt="${FitnessEquipmentsproduct.product_name}">
          </div>
        </div>
        <div class="text pt-2">
          <h3>${FitnessEquipmentsproduct.product_name}</h3>
          <p>${FitnessEquipmentsproduct.product_desc}<br><small>${FitnessEquipmentsproduct.product_small_desc}</small></p>
        </div>
      </div>
    </div>
  `;
}


let HospitalScrubs = "https://script.google.com/macros/s/AKfycbyfWoGLlr_fYKKaut9BAnMwKhN9CB8cvRzJknC6uEl5aAM4n_uLVS4GJYY7InsMzqB8/exec?action=getUsers"

fetch(HospitalScrubs)
  .then(response => response.json())
  .then(HospitalScrubsproducts => {
    // products is an array of product objects

    // Iterate over the products and generate HTML for each
    const productHTML = HospitalScrubsproducts.map(HospitalScrubsproduct => generateProductHTML(HospitalScrubsproduct));

    // Assuming you have an element with the id 'product-container' where you want to display the products
    const productContainer = document.getElementsByClassName('HospitalScrubsproduct-container')[0];

    
    // Set the innerHTML of the container with the generated HTML
    productContainer.innerHTML = productHTML.join('');
  })
  .catch(error => console.error('Error fetching product data:', error));


function generateProductHTML(HospitalScrubsproduct) {
  return `
    <div class="col-lg-4">
      <div class="services-2 d-flex">
        <div class="mt-3 mr-3 d-flex justify-content-center align-items-start">
          <div class="image-box">
            <!-- Placeholder image for each product -->
            <img src="${HospitalScrubsproduct.img}" alt="${HospitalScrubsproduct.product_name}">
          </div>
        </div>
        <div class="text pt-2">
          <h3>${HospitalScrubsproduct.product_name}</h3>
          <p>${HospitalScrubsproduct.product_desc}<br><small>${HospitalScrubsproduct.product_small_desc}</small></p>
        </div>
      </div>
    </div>
  `;
}


function animation(){
  alert("Coming Soon")
}


