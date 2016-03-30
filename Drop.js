module.exports = {
  name: "Drop",
  ns: "test",
  description: "Drop",
  phrases: {
    active: "Dropping"
  },
  ports: {
    input: {
      "in": {
        title: "Input",
        type: "any",
        fn: function __IN__(data, source, state, input, $, output) {
          var r = function() {
            // nop
          }.call(this);
          return {
            state: state,
            return: r
          };
        }
      }
    }
  },
  state: {}
}