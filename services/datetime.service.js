// services/datetime.service.js

export const getJanken = async (query) => {
  try {
    const hand = ["year", "month", "date", "today"];
    const myIndex = hand.indexOf(query.myhand);
    if (myIndex === -1) return { message: "Invalid input..." };
    // const comIndex = Math.floor(Math.random() * 3)
    var date_obj = new Date();
    var year = date_obj.getFullYear();
    var month = date_obj.getMonth() + 1;
    var date = date_obj.getDate();
    const today = year + '/' + month + '/' + date; 

    const resultSheet = [year, month, date, today];
    return {
      your_input: query.myhand,
      // comHand: hand[comIndex],
      result: resultSheet[myIndex],
    };
  } catch (e) {
    throw Error("Error while getting Janken");
  }
};