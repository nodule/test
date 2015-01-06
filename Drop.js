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
        fn: function __IN__(data, x, source, state, input, output) {
          var ret = function() {

            // nop

          }.call(this);;
          return {
            state: state,
            return: ret
          };
        }
      }
    }
  },
  state: {}
}