module.exports = {
  name: "Repeat",
  ns: "test",
  description: "Repeat",
  phrases: {
    active: "Repeating"
  },
  ports: {
    input: {
      "in": {
        title: "Input",
        type: "any",
        fn: function __IN__(data, x, source, state, input, output) {
          var ret = function() {

            output({
              out: data
            });

          }.call(this);;
          return {
            state: state,
            return: ret
          };
        }
      }
    },
    output: {
      out: {
        title: "Out",
        type: "any"
      }
    }
  },
  state: {}
}