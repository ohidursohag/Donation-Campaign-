const getStoredDonationData = () => {
   const storedData = JSON.parse(localStorage.getItem('DonationData'));

   if (storedData) {
      return storedData
   } 
   return []
}

const SaveDonationData = (id) => {
   const StoredDonationData = getStoredDonationData();
   console.log(StoredDonationData);
   StoredDonationData.push(id);
   localStorage.setItem('DonationData', JSON.stringify(StoredDonationData))
}
export { SaveDonationData, getStoredDonationData }