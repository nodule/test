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
        fn: function __IN__(data, source, state, input, $, output) {
          var r = function() {
            output({
              out: $.clone('in')
            });
          }.call(this);
          return {
            state: state,
            return: r
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