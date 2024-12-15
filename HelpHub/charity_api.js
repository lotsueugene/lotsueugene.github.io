async function fetchCharityData(searchTerm) {
    const url = `https://charityapi.p.rapidapi.com/organizations/search/${searchTerm}`;
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '2ad623c584mshace20a3ef17da99p113dc9jsn6f22fd01dd2d',
        'x-rapidapi-host': 'charityapi.p.rapidapi.com'
      }
    };
  
    const timeout = 5000; 
    
    
    const timeoutPromise = new Promise((_, reject) => 
      setTimeout(() => reject('Request timed out. Please try again later.'), timeout)
    );
  
    try {
      
      const response = await Promise.race([fetch(url, options), timeoutPromise]);
      
      
      if (!response.ok) {
        throw new Error(`API responded with status: ${response.status}`);
      }
  

      const result = await response.json();
      

      if (!result || !result.data || result.data.length === 0) {
        throw new Error('No results found for your search term.');
      }
  
      console.log(result);
  

      const organizations = result.data; 
  

      const charityDetails = document.getElementById('charity-details');
      

      charityDetails.innerHTML = '';
  

      organizations.forEach(org => {
        charityDetails.innerHTML += `
          <div class="organization-card">
            <h2 class="org-name">${org.name}</h2>
            <p class="org-mission"><strong>Mission:</strong> ${org.ico}</p>
            <p class="org-city-state"><strong>Location:</strong> ${org.city}, ${org.state}</p>
            <p class="org-address"><strong>Street:</strong> ${org.street}</p>
            <p class="org-zip"><strong>ZIP:</strong> ${org.zip}</p>
            <p class="org-revenue"><strong>Revenue:</strong> $${org.revenue_amt}</p>
            <p class="org-tax-period"><strong>Tax Period:</strong> ${org.tax_period}</p>
          </div>
        `;
      });
  
    } catch (error) {
      console.error('Error fetching charity data:', error);
  

      const charityDetails = document.getElementById('charity-details');
      charityDetails.innerHTML = `
        <div class="error-message">
          <h2>Oops! Something went wrong.</h2>
          <p>${error}</p>
          <p>Please try again later or check your search term.</p>
        </div>
      `;
    }
  }
  

  document.getElementById('search-button').addEventListener('click', () => {
    const searchTerm = document.getElementById('search-input').value.trim().toLowerCase();
    
    if (searchTerm) {
      fetchCharityData(searchTerm); 
      alert("Please enter a search term.");
    }
  });
  