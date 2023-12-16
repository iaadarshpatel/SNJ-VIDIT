const customers = [
  {
    id: 1,
    name: "National Health Mission, Dehradun"
  },
  {
    id: 2,
    name: "Office of the District Magistrate: East Delhi"
  },
  {
    id: 3,
    name: "Mela Adhikari Kumbh, Haridwar"
  },
  {
    id: 4,
    name: "Northern Railway Jagadhari"
  },
  {
    id: 5,
    name: "Revenue Department Delhi"
  },
  {
    id: 6,
    name: "Chief Medical Officer, Bageshwar"
  },
  {
    id: 7,
    name: "Chief Medical Officer, Almora"
  },
  {
    id: 8,
    name: "District Election Officer of Various District of Uttar Pradesh"
  },
  {
    id: 9,
    name: "Lieutenant Governor Secretariat Jammu and Kashmir"
  },
  {
    id: 10,
    name: "Shri Amarnath ji Shrine Board, Jammu"
  },
  {
    id: 11,
    name: "Bureau of Indian Standard Ghaziabad"
  },
  {
    id: 12,
    name: "Chief Medical Officer Tehri"
  },
  {
    id: 13,
    name: "Chief Medical Officer Haridwar"
  },
  {
    id: 14,
    name: "District Election Officer Uttarkashi"
  },
  {
    id: 15,
    name: "HomeGuards and Nagrik Suraksha Office, Dehradun"
  },
  {
    id: 16,
    name: "Chief Medical Officer Udham Singh Nagar"
  }
];

// Iterate over the products and generate HTML for each
const productHTML = customers.map(customer => generateProductHTML(customer));

// Assuming you have an element with the id 'product-container' where you want to display the products
const productContainer = document.getElementsByClassName('certificates_container')[0];


// Set the innerHTML of the container with the generated HTML
productContainer.innerHTML = productHTML.join('');

// Function to generate organization HTML
function generateProductHTML(organization) {
  return `
    <div class="col-md-6 staff col-lg-3 ftco-animate swiper-slide">
      <div class="text pt-1">
        <h3>${organization.name}</h3>
      </div>
    </div>
  `;
}



const certificates = [
  {
    id: 1,
    name: "ISO 13485:2016"
  },
  {
    id: 2,
    name: "ISO 13485:2016"
  },
  {
    id: 3,
    name: "CE Certified"
  },
  {
    id: 4,
    name: "ISO 10377: 2013"
  },
  {
    id: 5,
    name: "ISO 14001: 2015"
  },
  {
    id: 6,
    name: "ISO 45001: 2018"
  },
  {
    id: 7,
    name: "ISA / IEC 27001: 2013"
  },
  {
    id: 8,
    name: "Certificate of Green Guard"
  },
  {
    id: 9,
    name: "Certificate of WHO-GMP"
  },
  {
    id: 10,
    name: "FSSAI Food Licence"
  },
  {
    id: 11,
    name: "Drug License"
  },
  {
    id: 12,
    name: "Level 1"
  }
];

// Assuming this is your container
const swiperContainerCertificates = document.querySelector('.swiper-container-certificates');

// Use the map method to generate HTML for each certificate
const certificateHTML = certificates.map(certificate => generateCertificateHTML(certificate));

// Set the innerHTML of the container with the generated HTML
swiperContainerCertificates.innerHTML = certificateHTML.join('');

// Function to generate certificate HTML
function generateCertificateHTML(certificate) {
  return `
    <div class="col-md-6 staff col-lg-3 ftco-animate swiper-slide">
      <div class="text pt-1">
        <h3>${certificate.name}</h3>
      </div>
    </div>
  `;
}

