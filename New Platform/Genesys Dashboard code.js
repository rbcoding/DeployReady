//Call genesys API and display results
export default async function () {
  const url = "https://status.mypurecloud.com/api/v2/components.json";
  const response = await fetch(url);
  const result = await response.json();
  return result.components;
}