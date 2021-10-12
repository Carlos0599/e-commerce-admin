import Dummy from "./../DummyData/Dummy";

export const getNewsLetter = async () => {
  await timeout(5000);
  return Dummy.newsletter;
};

// ------------- Sample Delay in Database ------------- //
function timeout(delay) {
  return new Promise((res) => setTimeout(res, delay));
}
