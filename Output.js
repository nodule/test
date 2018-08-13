module.exports = {
  name: "Output",
  ns: "test",
  description: "Output",
  phrases: {
    active: "Output"
  },
  ports: {
    input: {
      "in": {
        title: "Input",
        type: "any",
        fn: function __IN__(data, source, state, input, $, output) {
          var r = function() {
            console.log($.in)
          }.call(this);
          return {
            state: state,
            return: r
          };
        }
      }
    }
  },
  state: {},
  on: {}
}