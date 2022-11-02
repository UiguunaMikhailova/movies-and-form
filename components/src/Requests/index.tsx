import { errorMessage } from 'Constants';

async function getData(url: string) {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (err) {
    alert(errorMessage); // The MovieDB does not work in Russia, please connect to VPN
    console.log(errorMessage);
  }
}

export { getData };
