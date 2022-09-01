// * membuat initialState
const initialState = {
  counter: 0,
};

// * membuat "reducer" // Reducer
const counter = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { counter: state.counter + 1 };
    case "DECREMENT":
      return { counter: state.counter - 1 };

    default:
      return state;
  }
};

// * Panggil function "createStore" // createStore()
var store = Redux.createStore(counter);

// * Buat function Render
var el = document.getElementById("counter");
const render = () => {
  el.innerHTML = store.getState().counter.toString();
};

// * Panggil Render dan daftarkan ke function "Subscribe" // subscribe()
render(); // * tampilan angka inisiasi
store.subscribe(render);

// * Implementasi dispatch pada tag-tag HTML
var incEl = document.getElementById("increment");
var decEl = document.getElementById("decrement");

incEl.addEventListener("click", () => {
  store.dispatch({ type: "INCREMENT" });
});
decEl.addEventListener("click", () => {
  store.dispatch({ type: "DECREMENT" });
});
