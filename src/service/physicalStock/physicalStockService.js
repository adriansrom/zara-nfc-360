export default async function getPhysicalStock({ storeId, reference, sectionName }) {
  try {
    const res = await fetch(`https://www.zara.com/es/es/store-stock?physicalStoreIds=${storeId}&references=${reference}&sectionName=${sectionName}`,
    {
      method: 'GET',
      headers: new Headers({
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
      }),
    })
    debugger
    return res.json();
  } catch (error) {
    console.error(error);
  }
}