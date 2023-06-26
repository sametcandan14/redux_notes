const initialState = {
  category: [],
  sayi: 0,
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    //ekleme aksiyonu dispatch edildiği anda çalışır.
    case "ADD_CATEGORY":
      console.log("ekleme çalıştı");
    case "DELETE_CATEGORY":
      console.log("silme çalıştı");
    default:
      return state;
  }
};

export default categoryReducer;
