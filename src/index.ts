
async function init(url: string): Promise<void> {
  try {
    const response = await fetch(url);
    const data = await response.json();
    localStorage.setItem('abc', JSON.stringify(data));
    console.log('Data downloaded and saved successfully.');
  } catch (error:any) {
    console.error('Data download failed:', error.message);
  }
}

function readData(): any {
  try {
    const jsonData = localStorage.getItem('abc');
    const data = JSON.parse(jsonData || '');
    return data;
  } catch (error:any) {
    console.error('Error reading data:', error.message);
    return null;
  }
}

async function getData(url: string): Promise<any> {
  const data = readData();
  if (!data) {
    await init(url);
    return readData();
  }
  return data;
}

export default {
  init,
  readData,
  getData,
};