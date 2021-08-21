
module.exports = {
    friendlyName: "Update category sort order",
   
    description: "",
   
    inputs: {
      data_array: {
        required: true,
        type: "ref",
      },
    },
   
    exits: {},
   
    fn: async function (inputs, exits) {
      var dataSet = inputs.data_array;
   
      for (var i = 0; i <= dataSet.length - 1; i++) {
        await ItemCategories.update({
          id: dataSet[i].id,
        }).set({
          sort_order: i,
        });
      }
   
      return exits.success({
        status: true,
      });
    },
  };